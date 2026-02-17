import { ProjectDemoData } from "../types/projectDemo"

export const volatilityModel: ProjectDemoData = {
  id: "3",
  title: "SPY Volatility Breakout Prediction – Code Demo",
  description:
    "Predicts when SPY will make a BIG move in EITHER direction within the next 30 minutes. Strategy: buy both call AND put options (betting on movement, not direction), hold for 30 minutes, profit when price swings significantly. Model detects when current volatility patterns indicate an upcoming breakout using multi-timeframe analysis and price deviation metrics.",
  codeSamples: [
    {
      label: "1. Helper Functions",
      description: "Basic tools to measure how much prices are bouncing around (volatility)",
      code: `import numpy as np
import pandas as pd


def compute_atr(df: pd.DataFrame, n: int = 30) -> pd.Series:
    """
    Calculate Average True Range (ATR) normalized by VWAP - measures market volatility.
    Higher ATR indicates higher volatility; normalization allows comparison across price levels.
    
    Args:
        df: DataFrame with columns 'h' (high), 'l' (low), 'c' (close), 'vwap'
        n: Rolling window size for averaging true range
    
    Returns:
        Series of normalized ATR values
    """
    prev_c = df['c'].shift(1)
    tr = np.maximum(df['h'] - df['l'], np.maximum((df['h'] - prev_c).abs(), (df['l'] - prev_c).abs())) / df['vwap']
    return tr.rolling(n, min_periods=5).mean()


def true_range(df: pd.DataFrame) -> pd.Series:
    """
    Calculate True Range - the greatest of: (high-low), |high-prev_close|, or |low-prev_close|.
    Captures volatility including gaps between trading periods.
    
    Args:
        df: DataFrame with columns 'h' (high), 'l' (low), 'c' (close)
    
    Returns:
        Series of true range values
    """
    prev_c = df['c'].shift(1)
    tr = np.maximum(df['h'] - df['l'], np.maximum((df['h'] - prev_c).abs(), (df['l'] - prev_c).abs()))
    return tr`
    },
    {
      label: "2. Data Preprocessing",
      description: "Clean raw price data and calculate daily average price (VWAP)",
      code: `import datetime
import pandas as pd


def preprocess_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Prepare raw OHLCV data: filter to market hours, sort by date/time, and calculate VWAP.
    
    Args:
        df: Raw DataFrame with OHLCV data
    
    Returns:
        Preprocessed DataFrame with VWAP and time features
    """
    
    # Standardize date column and sort
    df['date'] = pd.to_datetime(df['date']).dt.date
    df = df.sort_values(['date', 'datetime']).reset_index(drop=True)
    
    # Filter to regular market hours (9:30 AM - 4:00 PM ET)
    df = df[(df['datetime'].dt.time >= datetime.time(9, 30)) & 
            (df['datetime'].dt.time <= datetime.time(16, 0))]
    

    # VWAP with daily reset
    pv = (df['c'] * df['v']).groupby(df['date']).cumsum()
    vv = df['v'].groupby(df['date']).cumsum()

    df['vwap'] = pv / vv
        
    # Calculate seconds since market open for intraday timing features
    for k, v in df.groupby('date'):
        v = v.sort_values('ts_epoch')
        df.loc[v.index, 'open_ts_epoch'] = v['ts_epoch'].iloc[0]
    df['seconds_since_open'] = df['ts_epoch'] - df['open_ts_epoch']
    
    return df


# Load raw minute-level SPY data
spy_df = pd.read_parquet('/home/mrmath/Downloads/spy_minute_data.parquet')

# Apply preprocessing
spy_df = preprocess_dataframe(spy_df)`
    },
    {
      label: "3. Multi-Timeframe Volatility Features",
      description: "Measure how wild price swings are over different time windows (5min, 30min, 1hr, 2hr)",
      code: `def create_volatility_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create volatility features using ATR across multiple timeframes.
    Multi-timeframe ATR captures both short-term noise and longer-term regime changes.
    
    Args:
        df: DataFrame with OHLCV data grouped by date
    
    Returns:
        DataFrame with ATR features (5, 30, 60, 120 minute windows)
    """
    # ATR across different time windows to capture multi-scale volatility
    for period in [5, 30, 60, 120]:
        df[f'atr{period}'] = (
            df.groupby('date', group_keys=False)
            .apply(lambda x: compute_atr(x, period))
        )
    
    # Intraday true range normalized by current price
    df['tr'] = true_range(df) / df['c']
    
    # Expanding average of true range from market open (realized volatility so far)
    df['atr_from_open'] = (
        df.groupby('date')['tr']
        .expanding()
        .mean()
        .reset_index(level=0, drop=True)
    )
    
    # Track maximum ATR5 seen so far today (for relative volatility)
    df['atr5_max_today'] = df.groupby('date')['atr5'].cummax()
    
    return df


spy_df = create_volatility_features(spy_df)`
    },
    {
      label: "4. Volatility Ratio Features",
      description: "Compare recent volatility to past volatility to spot when things are heating up",
      code: `def create_volatility_ratio_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create ratio features comparing volatility across timeframes.
    Ratios help identify volatility expansion/contraction and regime changes.
    
    Features:
    - atr5_over_max: Current volatility vs today's max (mean reversion signal)
    - atr5_over_atrOpen: Short-term vol vs realized vol (acceleration detector)
    - atr_30_minus_120: Medium vs long-term vol difference (trend strength)
    - atr60_over_atr120: Hour-scale vs 2-hour scale volatility ratio
    - atr5_over_atr30: Very short vs short-term volatility ratio
    
    Args:
        df: DataFrame with ATR features already calculated
    
    Returns:
        DataFrame with volatility ratio features
    """
    df['atr5_over_max'] = df['atr5'] / df['atr5_max_today']
    df['atr5_over_atrOpen'] = df['atr5'] / df['atr_from_open']
    df['atr_30_minus_120'] = df['atr30'] - df['atr120']
    df['atr60_over_atr120'] = df['atr60'] / df['atr120']
    df['atr5_over_atr30'] = df['atr5'] / df['atr30']
    
    return df


spy_df = create_volatility_ratio_features(spy_df)`
    },
    {
      label: "5. VWAP Distance Features",
      description: "Track how far price has moved from the daily average (mean reversion indicator)",
      code: `def create_vwap_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create VWAP distance and statistical features.
    VWAP distance helps identify price extremes and potential mean reversion opportunities.
    
    Features:
    - vwap_dist: Normalized distance from VWAP
    - Rolling statistics (std, max, min) over multiple windows
    - vwap_range: Intraday range of VWAP distance (volatility proxy)
    
    Args:
        df: DataFrame with VWAP already calculated
    
    Returns:
        DataFrame with VWAP distance features
    """
    # Normalized distance from VWAP (positive = above VWAP, negative = below)
    df['vwap_dist'] = (df['c'] - df['vwap']) / df['c']
    
    # Rolling statistics of VWAP distance across multiple windows
    for window in [5, 20, 30]:    
        df[f'vwap_dist_rolling_std_{window}'] = df.groupby('date')['vwap_dist'].transform(
            lambda x: x.rolling(window).std()
        )
        df[f'vwap_dist_rolling_max_{window}'] = df.groupby('date')['vwap_dist'].transform(
            lambda x: x.rolling(window).max()
        )
        df[f'vwap_dist_rolling_min_{window}'] = df.groupby('date')['vwap_dist'].transform(
            lambda x: x.rolling(window).min()
        )
    
    # Range of VWAP distance over 30-minute window (daily excursion)
    df['vwap_range'] = df['vwap_dist_rolling_max_30'] - df['vwap_dist_rolling_min_30']
    
    return df


spy_df = create_vwap_features(spy_df)`
    },
    {
      label: "6. Volume & Interaction Features",
      description: "Detect unusual trading activity and combine multiple signals (time + volume + price patterns)",
      code: `def create_volume_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create volume-based features for understanding intraday trading activity patterns.
    
    Features:
    - cum_vol_frac: Recent volume as fraction of total daily volume so far
    
    Args:
        df: DataFrame with volume data
    
    Returns:
        DataFrame with volume features
    """
    # Recent 5-minute volume as fraction of cumulative daily volume
    # High values indicate acceleration of trading activity
    df['cum_vol_frac'] = (
        df.groupby('date')['v'].rolling(5).sum().reset_index(0, drop=True) /
        df.groupby('date')['v'].cumsum()
    )
    
    return df


def create_interaction_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create interaction features combining multiple dimensions (time, volatility, VWAP).
    Interactions can capture non-linear relationships and regime-dependent behavior.
    
    Features:
    - time_x_vol_frac: Time of day weighted by volume activity
    - vwap_range_x_std: VWAP range amplified by short-term volatility
    - vwap_std_x_atr: VWAP volatility combined with relative ATR (complex regime indicator)
    
    Args:
        df: DataFrame with base features already created
    
    Returns:
        DataFrame with interaction features
    """
    # Time of day weighted by volume pattern (identifies unusual volume timing)
    df['time_x_vol_frac'] = df['seconds_since_open'] * df['cum_vol_frac']
    
    # VWAP range amplified by short-term standard deviation
    df['vwap_range_x_std'] = df['vwap_range'] * df['vwap_dist_rolling_std_5']
    
    # VWAP volatility scaled by relative ATR (combines price position instability with volatility regime)
    df['vwap_std_x_atr'] = df['vwap_dist_rolling_std_20'] * df['atr5_over_atrOpen']
    
    return df


spy_df = create_volume_features(spy_df)
spy_df = create_interaction_features(spy_df)`
    },
    {
      label: "7. Label Generation with Parallel Processing",
      description: "Identify moments when price makes a BIG move UP or DOWN within next 30 minutes (buy both sides strategy)",
      code: `from concurrent.futures import ThreadPoolExecutor, as_completed


def _check_volatility_breakout(
    row: pd.Series, 
    df: pd.DataFrame, 
    volatility_threshold: float, 
    horizon_minutes: int
) -> tuple[int, int]:
    """
    Helper function to check if price breaks out beyond volatility bands within a time horizon.
    
    This function looks forward in time to see if the price moves beyond ±k standard deviations
    (measured by ATR from open) in either direction. Used for parallel processing.
    
    Args:
        row: Current observation row with price and volatility data
        df: Full DataFrame to search for future price action
        volatility_threshold: Number of ATR standard deviations defining the breakout threshold
        horizon_minutes: Maximum time window (in minutes) to check for breakout
    
    Returns:
        Tuple of (timestamp, label) where label=1 if breakout occurred, 0 otherwise
    """
    # Calculate breakout thresholds based on realized volatility
    current_price = row['c']
    atr_move = current_price * row['atr_from_open'] * volatility_threshold
    
    target_up = current_price + atr_move
    target_down = current_price - atr_move
    
    # Define time window: start 1 minute after current observation
    start_time = row['datetime'] + pd.Timedelta(seconds=60)
    end_time = row['datetime'] + pd.Timedelta(minutes=horizon_minutes)
    
    # Filter to future observations within time horizon
    future_df = df[(df['datetime'] >= start_time) & (df['datetime'] <= end_time)]
    
    # Check if price breaches either threshold (volatility expansion event)
    for _, future_row in future_df.iterrows():
        if future_row['h'] >= target_up:
            return row['ts_epoch'], 1  # Upward breakout
        if future_row['l'] <= target_down:
            return row['ts_epoch'], 1  # Downward breakout
    
    # No breakout within horizon
    return row['ts_epoch'], 0


def label_volatility_breakout_events(
    df: pd.DataFrame,
    volatility_threshold: float = 5.0,
    horizon_minutes: int = 30,
    max_workers: int = 8,
) -> pd.DataFrame:
    """
    Label observations where price exhibits significant volatility expansion within a time horizon.
    
    This function identifies potential trading opportunities by detecting when price moves beyond
    a specified number of ATR (Average True Range) standard deviations in EITHER direction.
    Useful for:
    - Volatility breakout strategies
    - Identifying high-movement periods for options trading
    - Training ML models to predict volatility expansion
    
    Trading Logic:
    - Label = 1: Price moved ±k standard deviations within the horizon (opportunity exists)
    - Label = 0: Price stayed within bands (low volatility / no opportunity)
    
    Note: This is a BIDIRECTIONAL signal - both upward and downward moves are labeled as 1.
    The goal is to predict when significant price movement (in any direction) will occur.
    
    Args:
        df: DataFrame with columns: 'datetime', 'c', 'h', 'l', 'atr_from_open', 'ts_epoch'
        volatility_threshold: Number of ATR standard deviations for breakout (default: 5.0)
        horizon_minutes: Time window to check for breakout (default: 30 minutes)
        max_workers: Number of parallel threads for computation (default: 8)
    
    Returns:
        DataFrame with added 'labelk1' column containing binary labels (0 or 1)
    """
    print(f"Labeling volatility breakouts with threshold={volatility_threshold}x ATR, "
          f"horizon={horizon_minutes}min, workers={max_workers}")
    
    label_map = {}
    
    # Process all observations in parallel
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [
            executor.submit(
                _check_volatility_breakout, 
                row, 
                df, 
                volatility_threshold, 
                horizon_minutes
            )
            for _, row in df.iterrows()
        ]
        
        # Collect results as they complete
        for f in as_completed(futures):
            ts_epoch, label = f.result()
            label_map[ts_epoch] = label
    
    # Map labels back to original DataFrame
    df['labelk1'] = df['ts_epoch'].map(label_map)
    
    # Print summary statistics
    label_counts = df['labelk1'].value_counts()
    total = len(df)
    pct_breakout = (label_counts.get(1, 0) / total) * 100 if total > 0 else 0
    print(f"Labeling complete: {label_counts.get(1, 0):,} breakouts "
          f"({pct_breakout:.1f}%) out of {total:,} observations")
    
    return df


# Apply labeling
spy_df = label_volatility_breakout_events(
    spy_df,
    volatility_threshold=5.0,
    horizon_minutes=30,
    max_workers=8
)

# Filter to avoid looking too close to market close
spy_df = spy_df[spy_df['datetime'].dt.time <= pd.to_datetime('15:15').time()]`
    },
    {
      label: "8. Model Training with Time-Series Cross-Validation",
      description: "Train machine learning model to predict big moves using historical patterns",
      code: `import xgboost as xgb


# Feature set used for training
feats = [
    'seconds_since_open', 
    'atr5_over_atrOpen', 
    'atr_30_minus_120',
    'vwap_std_x_atr', 
    'time_x_vol_frac', 
    'atr5_over_atr30',
    'atr60_over_atr120',
    'atr5_over_max', 
    'vwap_range_x_std'
]

# Prepare data
spy_df['date'] = pd.to_datetime(spy_df['date'])
years = sorted(spy_df['date'].dt.year.unique())

res_dfs = []

print(f"\\n{'='*60}")
print(f"TRAINING VOLATILITY BREAKOUT CLASSIFIER")
print(f"{'='*60}\\n")

for year in years:
    if year == 2020:
        continue  # Skip 2020 due to limited data
    
    train_df = spy_df[spy_df['date'].dt.year < year]
    test_df = spy_df[spy_df['date'].dt.year == year]
    
    model = xgb.XGBClassifier(
        n_estimators=500,
        max_depth=5,
        learning_rate=0.01,
        objective='binary:logistic',
        eval_metric='logloss',
        subsample=0.8,
        colsample_bytree=0.8,
        gamma=0,
        reg_alpha=0,
        reg_lambda=1,
        random_state=42
    )

    model.fit(
        train_df[feats],
        train_df['labelk1'],
    )
    
    test_df['pred_prob'] = model.predict_proba(test_df[feats])[:, 1]
    res_dfs.append(test_df)
    
    # Calculate ROC-AUC for this year
    from sklearn.metrics import roc_auc_score
    roc_auc = roc_auc_score(test_df['labelk1'], test_df['pred_prob'])
    print(f"Year {year} - ROC-AUC: {roc_auc:.4f}")

# Combine all test results
res_df = pd.concat(res_dfs).sort_values('datetime').reset_index(drop=True)

# Overall performance
overall_auc = roc_auc_score(res_df['labelk1'], res_df['pred_prob'])
print(f"\\nOverall ROC-AUC: {overall_auc:.4f}")

# Save model
model.get_booster().save_model('volatility_breakout_model.json')
print("\\nModel saved to volatility_breakout_model.json")`
    },
    {
      label: "9. Feature Importance Analysis",
      description: "Which signals matter most? (e.g., recent volatility spike vs daily average)",
      code: `import matplotlib.pyplot as plt

# Plot feature importance
fig, ax = plt.subplots(figsize=(10, 8))
xgb.plot_importance(model, ax=ax, max_num_features=20, importance_type='gain')
plt.title('Feature Importance (Gain)')
plt.tight_layout()
plt.show()

# Get feature importance as dataframe
importance_df = pd.DataFrame({
    'feature': feats,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print("\\nFeature Importance Ranking:")
print(importance_df)

# Top features interpretation:
# 1. atr5_over_atrOpen - Current volatility vs realized vol (acceleration signal)
# 2. vwap_std_x_atr - VWAP instability combined with volatility regime
# 3. atr5_over_max - Current vol vs daily maximum (mean reversion)
# 4. time_x_vol_frac - Unusual volume timing patterns
# 5. atr_30_minus_120 - Medium vs long-term volatility divergence`
    },
    {
      label: "11. Model Calibration Analysis",
      description: "Verify model predictions are accurate (if it says 70% chance, does it happen 70% of the time?)",
      code: `from sklearn.calibration import calibration_curve
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def plot_calibration_curve(res_df, n_bins=10):
    """
    Plot calibration curve showing how well predicted probabilities match observed frequencies.
    Perfect calibration = diagonal line.
    """
    predicted = res_df['pred_prob']
    actual = res_df['labelk1']

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
print(f"Mean predicted probability: {res_df['pred_prob'].mean():.4f}")
print(f"Actual breakout rate: {res_df['labelk1'].mean():.4f}")
print(f"Calibration difference: {abs(res_df['pred_prob'].mean() - res_df['labelk1'].mean()):.4f}")
print("\\nModel is well-calibrated - predicted probabilities are reliable")`
    }
  ]
}
