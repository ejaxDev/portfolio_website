import numpy as np
import pandas as pd
import xgboost as xg
from sklearn.metrics import mean_squared_error, r2_score

# Prepare data
df_sorted = df_train.sort_values(['Date']).reset_index(drop=True)

# Remove inf/-inf values from features
df_sorted = df_sorted.replace([np.inf, -np.inf], np.nan).dropna(subset=['rush_yards_1ma'])

PLAYER_FEATURES = [
    # Rush yards
    "rush_yards_1ma",
    "rush_yards_3ma",
    "rush_yards_5ma",
    "rush_yards_10ma",
    "rush_yards_delta_3_5",
    "rush_yards_delta_5_10",

    # Rush attempts
    "rush_attempts_1ma",
    "rush_attempts_3ma",
    "rush_attempts_5ma",
    "rush_attempts_10ma",
    "rush_attempts_delta_3_5",
    "rush_attempts_delta_5_10",

    # Efficiency (YPC)
    "ypc_1ma",
    "ypc_3ma",
    "ypc_5ma",
    "ypc_10ma",
    "ypc_delta_3_5",
    "ypc_delta_5_10",

    # Success rate
    "success_rate_1ma",
    "success_rate_3ma",
    "success_rate_5ma",
    "success_rate_10ma",
    "success_rate_delta_3_5",

    # Volatility
    "rush_yards_vol_5",
    "ypc_vol_5",

    # Extremes
    "min_rush_yards_3ma",
    "min_rush_yards_5ma",
    "max_rush_yards_3ma",
    "max_rush_yards_5ma",
]
OTHER_RB_FEATURES = [
    "others_rush_yards_1ma",
    "others_rush_yards_3ma",
    "others_rush_yards_5ma",
    "others_rush_yards_10ma",

    "others_rush_attempts_1ma",
    "others_rush_attempts_3ma",
    "others_rush_attempts_5ma",
    "others_rush_attempts_10ma",

    "others_ypc_1ma",
    "others_ypc_3ma",
    "others_ypc_5ma",
    "others_ypc_10ma",
]
TEAM_CONTEXT_FEATURES = [
    "pct_of_carries_1ma",
    "pct_of_carries_3ma",
    "pct_of_carries_5ma",
    "Team_total_carries_3ma",
    "Team_total_carries_5ma",
]

FEATURE_COLS = (
    PLAYER_FEATURES
    + OTHER_RB_FEATURES
    + TEAM_CONTEXT_FEATURES
)

# Build week list and cut on an exact boundary

X = df_sorted[FEATURE_COLS]
y = df_sorted['rush_yards']

boundary_date = df_sorted['Date'].iloc[int(len(df_sorted)*0.8)]
train_mask = df_sorted['Date'] <= boundary_date
test_mask  = df_sorted['Date'] >  boundary_date



X_train, X_test = X[train_mask], X[test_mask]
y_train, y_test = y[train_mask], y[test_mask]

# Define model
xgb_r = xg.XGBRegressor(
    objective='reg:squarederror',
    n_estimators=200,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=123
)

# Fit model
xgb_r.fit(X_train, y_train)

# Predict
pred = xgb_r.predict(X_test)

# Evaluate
rmse = np.sqrt(mean_squared_error(y_test, pred))
r2 = r2_score(y_test, pred)

print(f"RMSE: {rmse:.3f}")
print(f"R²: {r2:.3f}")

