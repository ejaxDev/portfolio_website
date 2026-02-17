import { ProjectDemoData } from "../types/projectDemo"

export const optionProfitModel: ProjectDemoData = {
  id: "5",
  title: "SPY Options Profit Prediction – Code Demo",
  description:
    "Predicts if buying a SPY option NOW will be profitable by 3:30pm. Strategy: scan all strikes throughout the day, buy when model shows high confidence, sell at 3:30pm. Uses rolling price statistics (5min to 2hr windows) to detect patterns that lead to profitable end-of-day positions.",
  codeSamples: [
    {
      label: "1. Load SPY Minute Data",
      description: "Download 5-minute SPY bars from Polygon API (market hours only)",
      code: `import massive
import pandas as pd
from massive import RESTClient

polygon_api_key = 'YOUR_POLYGON_API_KEY'
client = RESTClient(polygon_api_key)

aggs = []
for a in client.list_aggs(
    "SPY",
    5,
    "minute",
    "2022-05-01",
    "2025-12-31",
    adjusted="true",
    sort="asc",
    limit=50000,
):
    aggs.append(a)

minute_spy_df = pd.DataFrame(aggs)

# Convert to Eastern Time
minute_spy_df['datetime'] = pd.to_datetime(
    minute_spy_df['timestamp'], 
    unit='ms', 
    utc=True
).dt.tz_convert('America/New_York')

# Filter to market hours only (9:30 AM - 4:00 PM ET)
minute_spy_df = minute_spy_df[
    (minute_spy_df['datetime'].dt.time >= pd.to_datetime("09:30").time()) & 
    (minute_spy_df['datetime'].dt.time <= pd.to_datetime("16:00").time())
]

minute_spy_df = minute_spy_df.sort_values('datetime').reset_index(drop=True)
minute_spy_df['date'] = minute_spy_df['datetime'].dt.date`
    },
    {
      label: "2. Calculate Option Strikes to Fetch",
      description: "For each day, find strikes within ±2% of opening price",
      code: `import datetime

def dateStrike2opt(edate, callPut, strike, useSPX=False):
    """
    Convert date, call/put, and strike to option ticker format.
    Example: O:SPY250217C00600000 = SPY call expiring 2/17/25 at $600 strike
    """
    dtd = datetime.datetime.strptime(edate, "%Y-%m-%d")
    blah = "O:SPY"
    if useSPX:
        blah = "O:SPXW"
    option = blah + dtd.strftime("%y%m%d") + callPut + str(strike).zfill(5) + "000"
    return option


# Calculate ±2% strikes for each day
minute_spy_df['open_plus_2_pct'] = minute_spy_df.groupby('date')['open'].transform('first') * 1.02
minute_spy_df['open_minus_2_pct'] = minute_spy_df.groupby('date')['open'].transform('first') * 0.98

# Build dictionary of all options we need to fetch
options_needed = {}
for k, v in minute_spy_df.groupby('date'):
    row = v.iloc[0]
    date = row['datetime'].strftime("%Y-%m-%d")
    edate = row['datetime'].strftime("%Y-%m-%d")
    min_strike = int(row['open_minus_2_pct'])
    max_strike = int(row['open_plus_2_pct']) + 1
    
    # For each strike in range, fetch both call and put
    for strike in range(min_strike, max_strike):
        call_option = dateStrike2opt(edate, "C", strike)
        put_option = dateStrike2opt(edate, "P", strike)
        options_needed[call_option] = date
        options_needed[put_option] = date

print(f"Total options to fetch: {len(options_needed):,}")`
    },
    {
      label: "3. Fetch Option Data in Parallel",
      description: "Download 5-minute bars for all option contracts using multiple threads",
      code: `from concurrent.futures import ThreadPoolExecutor

def process_option(key, value):
    """
    Fetch 5-minute aggregates for a single option on its trading day.
    """
    aggs = []
    for a in client.list_aggs(
        key,
        5,
        "minute",
        value,
        (pd.to_datetime(value) + pd.Timedelta(days=1)).strftime("%Y-%m-%d"),
        adjusted="true",
        sort="asc",
        limit=50000,
    ):
        if key not in options_needed:
            continue
        aggs.append(a)
    return aggs

# Fetch all options in parallel (much faster than sequential)
options = {}
count = 0
with ThreadPoolExecutor() as executor:
    futures = {executor.submit(process_option, key, value): key for key, value in options_needed.items()}
    for future in futures:
        options[futures[future]] = future.result()
        count += 1
        if count % 10 == 0:
            print(f"Processed {count / len(options_needed) * 100:.2f}% options", end="\\r")

print(f"\\nFetched {len(options):,} option contracts")`
    },
    {
      label: "4. Build Option DataFrame",
      description: "Convert raw data to structured DataFrame and join with SPY prices",
      code: `# Collect all data in a list first (faster than concat in loop)
data = []
count = 0
for option, aggs in options.items():
    if not aggs:
        continue
    for agg in aggs:
        data.append({
            'option': option,
            'timestamp': agg.timestamp,
            'open': agg.open,
            'high': agg.high,
            'low': agg.low,
            'close': agg.close,
            'volume': agg.volume
        })
    count += 1
    print(f"Processed option: {option} ({count}/{len(options)})", end="\\r")

# Create DataFrame in one go (much faster)
option_df = pd.DataFrame(data)

# Convert timestamps to Eastern Time
option_df['datetime'] = pd.to_datetime(
    option_df['timestamp'], 
    unit='ms', 
    utc=True
).dt.tz_convert('America/New_York')

# Join with SPY prices to get current underlying price at each timestamp
option_df = option_df.merge(
    minute_spy_df[['datetime', 'close']], 
    left_on='datetime', 
    right_on='datetime', 
    how='left', 
    suffixes=('', '_spy')
)

# Calculate ATM strike (rounded SPY price)
option_df['ATM_strike'] = option_df['close_spy'].fillna(0).astype(int)

# Filter to market hours
option_df = option_df[
    (option_df['datetime'].dt.time >= pd.to_datetime("09:30").time()) & 
    (option_df['datetime'].dt.time <= pd.to_datetime("16:00").time())
]

print(f"\\nTotal option observations: {len(option_df):,}")`
    },
    {
      label: "5. Calculate Moneyness & Basic Features",
      description: "Extract strike price, distance from ATM, and convert to cents",
      code: `import numpy as np

# Extract strike price from option ticker
# Format: O:SPY250217C00600000 -> strike = 600
option_df['strike_price'] = option_df['option'].str.extract(r'(\\d{8})')[0].astype(str).str[2:5].astype(int)

# Distance from ATM (negative = ITM, positive = OTM)
option_df['dist_from_ATM'] = (option_df['strike_price'] - option_df['ATM_strike']) / option_df['ATM_strike']

# Convert to cents for easier feature engineering
option_df['close_in_cents'] = option_df['close'] * 100

# Call = 1, Put = -1 (for side-aware features)
option_df['side'] = option_df['option'].apply(lambda x: 1 if 'C' in x else -1)

print(f"Mean distance from ATM: {option_df['dist_from_ATM'].mean():.4f}")
print(f"Std distance from ATM: {option_df['dist_from_ATM'].std():.4f}")`
    },
    {
      label: "6. Rolling Window Features (Leak-Free)",
      description: "Create rolling statistics over multiple time windows without lookahead bias",
      code: `import numpy as np
import pandas as pd
from concurrent.futures import ProcessPoolExecutor, as_completed
import multiprocessing

# Multiple time windows to capture short-term and long-term patterns
windows = [5, 10, 15, 30, 60, 120]  # minutes
n_workers = max(1, multiprocessing.cpu_count() - 3)

option_df = option_df.sort_values(['option', 'datetime']).copy()


def process_option(args):
    """
    Process a single option contract to create rolling window features.
    All features are calculated WITHOUT lookahead bias (only using past data).
    """
    option, df = args
    df = df.sort_values('datetime').reset_index(drop=True)

    # Cumulative day range (where are we in today's price range?)
    df['cum_min'] = df['close_in_cents'].cummin()
    df['cum_max'] = df['close_in_cents'].cummax()

    df['pos_in_day_range'] = (
        (df['close_in_cents'] - df['cum_min']) /
        (df['cum_max'] - df['cum_min'])
    ).fillna(0)

    # For each time window
    for window in windows:

        # --- PRICE N MINUTES AGO (LEAK-FREE) ---
        target_times = df['datetime'] - pd.Timedelta(minutes=window)
        idx = df['datetime'].searchsorted(target_times, side='right') - 1
        valid_mask = idx >= 0

        past_prices = np.full(len(df), np.nan)
        past_prices[valid_mask] = df.loc[idx[valid_mask], 'close_in_cents'].values

        df[f'close_{window}m_ago'] = past_prices

        # Price change over window
        df[f'price_change_{window}m'] = (
            df['close_in_cents'] - df[f'close_{window}m_ago']
        )

        # --- ROLLING STATISTICS (MIN, MAX, STD) ---
        rolling_min = []
        rolling_max = []
        rolling_std = []

        for i in range(len(df)):
            start_time = df.loc[i, 'datetime'] - pd.Timedelta(minutes=window)

            window_slice = df.loc[
                (df['datetime'] >= start_time) &
                (df['datetime'] <= df.loc[i, 'datetime']),
                'close_in_cents'
            ]

            rolling_min.append(window_slice.min())
            rolling_max.append(window_slice.max())
            rolling_std.append(window_slice.std())

        df[f'rolling_min_{window}m'] = rolling_min
        df[f'rolling_max_{window}m'] = rolling_max
        df[f'rolling_std_{window}m'] = rolling_std

        # Position within rolling range (mean reversion indicator)
        df[f'pos_in_rolling_range_{window}m'] = (
            (df['close_in_cents'] - df[f'rolling_min_{window}m']) /
            (df[f'rolling_max_{window}m'] - df[f'rolling_min_{window}m'])
        ).fillna(0)

        # Directional volatility (signed standard deviation)
        df[f'directional_rolling_std_{window}m'] = (
            df[f'rolling_std_{window}m'] *
            np.sign(df[f'price_change_{window}m'])
        )

    df.drop(columns=['cum_min', 'cum_max'], inplace=True)

    return df


# Process all options in parallel
groups = list(option_df.groupby('option'))

results = []
total = len(groups)

with ProcessPoolExecutor(max_workers=n_workers) as executor:
    futures = {executor.submit(process_option, g): g[0] for g in groups}

    for i, future in enumerate(as_completed(futures)):
        results.append(future.result())
        print(f"Processed {i+1}/{total}", end="\\r")

option_df = pd.concat(results, ignore_index=True)

print("\\nDone ✅ Multithreaded + Leakage Free")`
    },
    {
      label: "7. Create Target Variable",
      description: "Label: will this option be worth MORE at 3:30pm than it is now?",
      code: `import pandas as pd
import numpy as np

target_time = pd.to_datetime("15:30").time()

option_df = option_df.sort_values(['option', 'datetime']).copy()
option_df['date'] = option_df['datetime'].dt.date
option_df['time'] = option_df['datetime'].dt.time


def assign_price_at_target(group):
    """
    For each option/day, find the price at 3:30pm (or closest timestamp).
    """
    # Compute absolute time difference in seconds
    time_diff = (
        pd.to_datetime(group['time'].astype(str)) -
        pd.to_datetime(str(target_time))
    ).abs()

    idx = time_diff.idxmin()
    price = group.loc[idx, 'close_in_cents']

    group['price_at_15_30'] = price
    return group


option_df = (
    option_df
    .groupby(['option', 'date'], group_keys=False)
    .apply(assign_price_at_target)
)

option_df.drop(columns=['time'], inplace=True)

# Create binary target: 1 if price goes UP by 3:30pm, 0 if DOWN
option_df['profit_15_30'] = (option_df['price_at_15_30'] - option_df['close_in_cents'] > 0).astype(int)

# Calculate percentage gain (for analysis)
option_df['pct_gain_15_30'] = (
    (option_df['price_at_15_30'] - option_df['close_in_cents']) / 
    option_df['close_in_cents']
)

# Remove any rows with missing data
option_df = option_df.dropna()

# Only use data BEFORE 3:30pm (can't trade at target time)
option_df = option_df[option_df['datetime'].dt.time <= pd.to_datetime("15:30").time()]

print(f"\\nTarget distribution:")
print(f"Profitable (1): {option_df['profit_15_30'].sum():,} ({option_df['profit_15_30'].mean():.1%})")
print(f"Unprofitable (0): {(1-option_df['profit_15_30']).sum():,} ({(1-option_df['profit_15_30']).mean():.1%})")

print("\\nDone ✅ Target variable created")`
    },
    {
      label: "8. Add Time Features",
      description: "Seconds since market open and until close (time of day matters)",
      code: `# Create market open/close timestamps for each day
option_df['open_datetime'] = (
    option_df['datetime'].dt.normalize() + 
    pd.Timedelta(hours=9, minutes=30)
).dt.tz_convert('America/New_York')

option_df['close_datetime'] = (
    option_df['datetime'].dt.normalize() + 
    pd.Timedelta(hours=16)
).dt.tz_convert('America/New_York')

# Calculate time features
option_df['seconds_since_open'] = (
    option_df['datetime'] - option_df['open_datetime']
).dt.total_seconds()

option_df['seconds_until_close'] = (
    option_df['close_datetime'] - option_df['datetime']
).dt.total_seconds()

# Add year for walk-forward validation
option_df['year'] = option_df['datetime'].dt.year

print(f"Time features added. Data spans {option_df['year'].min()} to {option_df['year'].max()}")`
    },
    {
      label: "9. Train XGBoost with Walk-Forward Validation",
      description: "Train on past years, test on future year (realistic backtesting)",
      code: `import pandas as pd
import numpy as np
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, roc_auc_score


# Define feature columns
train_columns = [
    'dist_from_ATM', 'close_in_cents', 'pos_in_day_range', 
    'close_5m_ago', 'price_change_5m', 'rolling_min_5m', 'rolling_max_5m', 'rolling_std_5m',
    'pos_in_rolling_range_5m', 'directional_rolling_std_5m',
    'close_10m_ago', 'price_change_10m', 'rolling_min_10m', 'rolling_max_10m', 'rolling_std_10m',
    'pos_in_rolling_range_10m', 'directional_rolling_std_10m',
    'close_15m_ago', 'price_change_15m', 'rolling_min_15m', 'rolling_max_15m', 'rolling_std_15m',
    'pos_in_rolling_range_15m', 'directional_rolling_std_15m',
    'close_30m_ago', 'price_change_30m', 'rolling_min_30m', 'rolling_max_30m', 'rolling_std_30m',
    'pos_in_rolling_range_30m', 'directional_rolling_std_30m',
    'close_60m_ago', 'price_change_60m', 'rolling_min_60m', 'rolling_max_60m', 'rolling_std_60m',
    'pos_in_rolling_range_60m', 'directional_rolling_std_60m',
    'close_120m_ago', 'price_change_120m', 'rolling_min_120m', 'rolling_max_120m', 'rolling_std_120m',
    'pos_in_rolling_range_120m', 'directional_rolling_std_120m',
    'seconds_since_open', 'seconds_until_close', 'side'
]


def walk_forward_xgb_classification(
    option_df: pd.DataFrame,
    train_cols: list,
    target_col: str = 'profit_15_30',
    year_col: str = "year"
):
    """
    Walk-forward validation: train on past years, test on next year.
    Simulates real trading where you can only use past data.
    """
    df = option_df.copy()
    df = df.sort_values(year_col)

    xgb_params = {
        "n_estimators": 300,
        "max_depth": 4,
        "learning_rate": 0.05,
        'min_child_weight': 15,
        "subsample": 0.8,
        "colsample_bytree": 0.8,
        "random_state": 42,
        "eval_metric": "logloss"
    }

    years = sorted(df[year_col].unique())
    all_results = []

    print("\\nWALK FORWARD TRAINING\\n" + "="*50)

    for i in range(1, len(years)):
        train_years = years[:i]
        test_year = years[i]

        train_df = df[df[year_col].isin(train_years)]
        test_df = df[df[year_col] == test_year]

        if train_df.empty or test_df.empty:
            continue

        X_train = train_df[train_cols]
        y_train = train_df[target_col]

        X_test = test_df[train_cols]
        y_test = test_df[target_col]

        model = XGBClassifier(**xgb_params)
        model.fit(X_train, y_train)

        preds = model.predict(X_test)
        probs = model.predict_proba(X_test)[:, 1]

        acc = accuracy_score(y_test, preds)
        auc = roc_auc_score(y_test, probs)

        print(f"\\nTrain Years: {train_years}")
        print(f"Test Year: {test_year}")
        print(f"Accuracy: {acc:.4f}")
        print(f"AUC: {auc:.4f}")

        fold_results = test_df.copy()
        fold_results["prediction"] = preds
        fold_results["probability"] = probs
        fold_results["train_years"] = str(train_years)

        all_results.append(fold_results)

    results_df = pd.concat(all_results).sort_index()

    print("\\n" + "="*50)
    print("Overall OOS Performance")
    print("="*50)

    overall_acc = accuracy_score(results_df[target_col], results_df["prediction"])
    overall_auc = roc_auc_score(results_df[target_col], results_df["probability"])

    print(f"Overall Accuracy: {overall_acc:.4f}")
    print(f"Overall AUC: {overall_auc:.4f}")
    print("="*50)

    return results_df


# Run walk-forward validation
res_df = walk_forward_xgb_classification(
    option_df=option_df,
    train_cols=train_columns,
    target_col='profit_15_30',
    year_col='year'
)`
    },
    {
      label: "10. Model Calibration Analysis",
      description: "Verify predictions are accurate (if model says 60% chance, does it happen 60% of time?)",
      code: `import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def plot_calibration_curve(res_df, n_bins=10):
    """
    Plot calibration curve showing how well predicted probabilities match observed frequencies.
    Perfect calibration = diagonal line.
    """
    predicted = res_df['probability']
    actual = res_df['profit_15_30']

    df = pd.DataFrame({
        "predicted": predicted,
        "actual": actual
    })

    # Create equal-width bins
    df["bin"] = pd.cut(df["predicted"], bins=n_bins)

    # Aggregate statistics
    calibration = df.groupby("bin").agg(
        mean_predicted=("predicted", "mean"),
        mean_actual=("actual", "mean"),
        count=("actual", "size")
    ).dropna()

    calibration["bin_center"] = calibration["mean_predicted"]

    # Create figure with 2 subplots
    fig, (ax1, ax2) = plt.subplots(
        2, 1, figsize=(8, 10),
        gridspec_kw={'height_ratios': [3, 1]}
    )

    # Calibration Curve
    ax1.plot(calibration["mean_predicted"],
             calibration["mean_actual"],
             marker='o',
             linewidth=2,
             label="Model Calibration")

    ax1.plot([0, 1], [0, 1],
             linestyle='--',
             label="Perfect Calibration")

    ax1.set_xlabel("Mean Predicted Probability")
    ax1.set_ylabel("Observed Frequency")
    ax1.set_title("Calibration Curve")
    ax1.legend()
    ax1.grid(alpha=0.3)

    # Frequency Bars
    ax2.bar(calibration["bin_center"],
            calibration["count"],
            width=1/n_bins * 0.9)

    ax2.set_xlabel("Predicted Probability")
    ax2.set_ylabel("Count")
    ax2.set_title("Prediction Frequency by Bin")
    ax2.grid(alpha=0.3)

    plt.tight_layout()
    plt.show()

    return calibration


calibration_df = plot_calibration_curve(res_df, n_bins=10)

print(f"\\n{'='*60}")
print(f"CALIBRATION ANALYSIS")
print(f"{'='*60}")
print(f"Mean predicted probability: {res_df['probability'].mean():.4f}")
print(f"Actual win rate: {res_df['profit_15_30'].mean():.4f}")
print(f"Calibration difference: {abs(res_df['probability'].mean() - res_df['profit_15_30'].mean()):.4f}")`
    },
    {
      label: "11. Outlier Detection Strategy",
      description: "Find unusually high probabilities compared to historical distribution for that strike",
      code: `import numpy as np

res_df = res_df.sort_values('datetime').reset_index(drop=True)

# Track historical probabilities for each strike/side combination
option_bin_proba = {}
option_bin_profit = {}
seen_days = {}

for i in range(len(res_df)):

    row = res_df.loc[i]
    
    # Create side-aware moneyness bin
    # Example: call 2% OTM = +2.0, put 2% OTM = -2.0
    side_aware_atm = row['dist_from_ATM'] * row['side']
    bin_key = round(side_aware_atm * 100, 1)
    key = str(bin_key)

    # ========================================
    # CHECK OUTLIER USING ONLY PAST DATA
    # ========================================
    if key in option_bin_proba and len(option_bin_proba[key]) > 20:

        past_mean = option_bin_proba[key].mean()
        past_std  = option_bin_proba[key].std()

        # If current probability is MORE THAN 1 STD above historical mean
        if row['year'] != 2023:
            if row['probability'] > past_mean + past_std:

                print(f"High probability outlier at index {i} | bin {bin_key} | prob {row['probability']:.4f}")

                # Track unique opportunities (only one trade per day per bin)
                if row['date'] not in seen_days:
                    seen_days[row['date']] = {}

                if bin_key not in seen_days[row['date']]:
                    seen_days[row['date']][bin_key] = True

                    if key in option_bin_profit:
                        option_bin_profit[key] = np.append(
                            option_bin_profit[key],
                            row['profit_15_30']
                        )
                    else:
                        option_bin_profit[key] = np.array([row['profit_15_30']])

    # ========================================
    # UPDATE DISTRIBUTION AFTER CHECK
    # ========================================
    if key in option_bin_proba:
        option_bin_proba[key] = np.append(option_bin_proba[key], row['probability'])
    else:
        option_bin_proba[key] = np.array([row['probability']])

    print(i / len(res_df) * 100, end="\\r")

print("\\n\\nOutlier detection complete ✅")

# Calculate win rate for outlier trades
all_outlier_trades = []
for key, profits in option_bin_profit.items():
    all_outlier_trades.extend(profits)

if all_outlier_trades:
    win_rate = np.mean(all_outlier_trades)
    print(f"\\nOutlier Strategy Results:")
    print(f"Total trades: {len(all_outlier_trades)}")
    print(f"Win rate: {win_rate:.2%}")
    print(f"Expected edge: {win_rate - 0.5:.2%} above 50%")`
    }
  ]
}
