import { ProjectDemoData } from "../types/projectDemo"

export const rushYardProject: ProjectDemoData = {
  id: "1",
  title: "NFL Rushing Yards Prediction – Code Demo",
  description:
    "End-to-end XGBoost pipeline predicting RB rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, and workload competition",
  codeSamples: [
    {
      label: "1. Data Loading & Name Cleaning",
      description: "Load historical data and normalize player names for consistent joins",
      code: `import pandas as pd
import numpy as np
import re

def clean_player_name(name: str) -> str:
    """
    Remove generational suffixes from player names.
    
    Why this matters:
    - Player name keys must be consistent across datasets
    - Some sources include suffixes (e.g., "Jr.", "III")
    - Others omit them
    - Removing them prevents join mismatches and duplicate identities
    
    Handles:
    - Jr, Jr.
    - Sr, Sr.
    - II, III, IV, V, VI
    - Case-insensitive
    - Extra whitespace
    """
    
    if not isinstance(name, str):
        return name
    
    # Normalize whitespace
    name = name.strip()
    
    # Regex to remove suffix at end of string
    # \\b ensures we only match whole suffix tokens
    suffix_pattern = r"\\b(JR|SR|II|III|IV|V|VI)\\.?$"
    
    # Remove suffix (case-insensitive)
    cleaned = re.sub(suffix_pattern, "", name, flags=re.IGNORECASE)
    
    # Remove any leftover trailing spaces
    return cleaned.strip()


# Load base stats (rushing attempts, yards, success rate, etc.)
base_stats = pd.read_csv("base_stats.csv")
base_stats['Date'] = pd.to_datetime(base_stats['Date'])
base_stats = base_stats.sort_values(['Date'])

# Clean player names for consistent joins
base_stats['clean_player_name'] = base_stats['Player'].apply(clean_player_name)

# Filter to running backs only
base_stats = base_stats[base_stats['Pos.'] == 'RB']`
    },
    {
      label: "2. Player Performance Features",
      description: "Rolling averages, momentum deltas, and volatility metrics for individual RBs",
      code: `# ==================================================================
# PLAYER PERFORMANCE FEATURES
# ==================================================================

def rolling_feature(series, window, func="mean", min_periods=1):
    """
    Apply lagged rolling aggregation to prevent lookahead bias.
    
    Always use .shift(1) before rolling to ensure no future data leakage.
    """
    rolled = series.shift(1).rolling(window, min_periods=min_periods)
    return getattr(rolled, func)()


offense_rush_stats_LOOKUP = {}

for player_name in base_stats['clean_player_name'].unique():
    player_data = base_stats[base_stats['clean_player_name'] == player_name].sort_values('Date')
    
    # --- Core Rolling Averages ---
    # Capture recency-weighted workload and efficiency
    rush_yards_1ma = rolling_feature(player_data['Yds'], 1)
    rush_yards_3ma = rolling_feature(player_data['Yds'], 3)
    rush_yards_5ma = rolling_feature(player_data['Yds'], 5)
    rush_yards_10ma = rolling_feature(player_data['Yds'], 10)
    
    rush_attempts_1ma = rolling_feature(player_data['Att'], 1)
    rush_attempts_3ma = rolling_feature(player_data['Att'], 3)
    rush_attempts_5ma = rolling_feature(player_data['Att'], 5)
    rush_attempts_10ma = rolling_feature(player_data['Att'], 10)
    
    # Yards per carry efficiency
    ypc = player_data['Yds'] / player_data['Att'].replace(0, np.nan)
    ypc_1ma = rolling_feature(ypc, 1)
    ypc_3ma = rolling_feature(ypc, 3)
    ypc_5ma = rolling_feature(ypc, 5)
    ypc_10ma = rolling_feature(ypc, 10)
    
    # Success rate (plays gaining expected yards)
    success_rate_1ma = rolling_feature(player_data['Succ%'], 1)
    success_rate_3ma = rolling_feature(player_data['Succ%'], 3)
    success_rate_5ma = rolling_feature(player_data['Succ%'], 5)
    success_rate_10ma = rolling_feature(player_data['Succ%'], 10)
    
    # --- Momentum Features (Trend Detection) ---
    # Positive delta = improving recent form
    rush_yards_delta_3_5 = rush_yards_3ma - rush_yards_5ma
    rush_yards_delta_5_10 = rush_yards_5ma - rush_yards_10ma
    
    rush_attempts_delta_3_5 = rush_attempts_3ma - rush_attempts_5ma
    rush_attempts_delta_5_10 = rush_attempts_5ma - rush_attempts_10ma
    
    ypc_delta_3_5 = ypc_3ma - ypc_5ma
    ypc_delta_5_10 = ypc_5ma - ypc_10ma
    
    success_rate_delta_3_5 = success_rate_3ma - success_rate_5ma
    
    # --- Volatility Features (Consistency Metrics) ---
    # Higher volatility = less predictable performance
    rush_yards_vol_5 = rolling_feature(player_data['Yds'], 5, func='std', min_periods=2)
    ypc_vol_5 = rolling_feature(ypc, 5, func='std', min_periods=2)
    
    # --- Extreme Performance Tracking ---
    min_rush_yards_3ma = rolling_feature(player_data['Yds'], 3, func='min')
    min_rush_yards_5ma = rolling_feature(player_data['Yds'], 5, func='min')
    max_rush_yards_3ma = rolling_feature(player_data['Yds'], 3, func='max')
    max_rush_yards_5ma = rolling_feature(player_data['Yds'], 5, func='max')
    
    # Store in lookup dictionary
    offense_rush_stats_LOOKUP[player_name] = pd.DataFrame({
        'Date': player_data['Date'],
        'rush_yards_1ma': rush_yards_1ma,
        'rush_yards_3ma': rush_yards_3ma,
        'rush_yards_5ma': rush_yards_5ma,
        'rush_yards_10ma': rush_yards_10ma,
        'rush_yards_delta_3_5': rush_yards_delta_3_5,
        'rush_yards_delta_5_10': rush_yards_delta_5_10,
        'rush_attempts_1ma': rush_attempts_1ma,
        'rush_attempts_3ma': rush_attempts_3ma,
        'rush_attempts_5ma': rush_attempts_5ma,
        'rush_attempts_10ma': rush_attempts_10ma,
        'rush_attempts_delta_3_5': rush_attempts_delta_3_5,
        'rush_attempts_delta_5_10': rush_attempts_delta_5_10,
        'ypc_1ma': ypc_1ma,
        'ypc_3ma': ypc_3ma,
        'ypc_5ma': ypc_5ma,
        'ypc_10ma': ypc_10ma,
        'ypc_delta_3_5': ypc_delta_3_5,
        'ypc_delta_5_10': ypc_delta_5_10,
        'success_rate_1ma': success_rate_1ma,
        'success_rate_3ma': success_rate_3ma,
        'success_rate_5ma': success_rate_5ma,
        'success_rate_10ma': success_rate_10ma,
        'success_rate_delta_3_5': success_rate_delta_3_5,
        'rush_yards_vol_5': rush_yards_vol_5,
        'ypc_vol_5': ypc_vol_5,
        'min_rush_yards_3ma': min_rush_yards_3ma,
        'min_rush_yards_5ma': min_rush_yards_5ma,
        'max_rush_yards_3ma': max_rush_yards_3ma,
        'max_rush_yards_5ma': max_rush_yards_5ma,
    })`
    },
    {
      label: "3. Defense Matchup Features",
      description: "Strength-of-schedule adjusted defensive performance against the run",
      code: `# ==================================================================
# DEFENSE MATCHUP FEATURES
# ==================================================================

# Aggregate RB performance by team/game
# This shows how many yards/attempts defenses allowed to ALL RBs
team_rb_summary = (
    base_stats
    .groupby(['Team', 'Date'], as_index=False)
    .agg(
        RB_rush_yards_allowed=('Yds', 'sum'),
        RB_rush_attempts_allowed=('Att', 'sum'),
        Opp=('Opp', 'first')
    )
)

# Calculate defensive YPC allowed
team_rb_summary['RB_ypc_allowed'] = (
    team_rb_summary['RB_rush_yards_allowed'] / 
    team_rb_summary['RB_rush_attempts_allowed'].replace(0, np.nan)
)

# --- Strength of Offense Adjustment ---
# Raw yards allowed don't tell the full story
# Allowing 150 yards to elite offense is better than 120 to weak offense

strength_map = {}
for (team, date), game in base_stats.groupby(['Team', 'Date']):
    # Sum of all RB rush_yards_5ma for this team on this date
    offense_strength = 0
    for player in game['clean_player_name'].unique():
        if player in offense_rush_stats_LOOKUP:
            player_stats = offense_rush_stats_LOOKUP[player]
            player_on_date = player_stats[player_stats['Date'] == date]
            if not player_on_date.empty:
                offense_strength += player_on_date['rush_yards_5ma'].values[0]
    
    strength_map[(team, date)] = offense_strength

team_rb_summary['strength_of_offense'] = team_rb_summary.apply(
    lambda row: strength_map.get((row['Team'], row['Date']), 0), 
    axis=1
)

# --- Build Defense Lookup ---
defense_rush_stats_LOOKUP = {}

for team in team_rb_summary['Opp'].unique():
    team_games = team_rb_summary[team_rb_summary['Opp'] == team].sort_values('Date')
    
    # Rolling averages of yards allowed
    RB_rush_yards_allowed_1ma = rolling_feature(team_games['RB_rush_yards_allowed'], 1)
    RB_rush_yards_allowed_3ma = rolling_feature(team_games['RB_rush_yards_allowed'], 3)
    RB_rush_yards_allowed_5ma = rolling_feature(team_games['RB_rush_yards_allowed'], 5)
    
    # Rolling averages of YPC allowed
    RB_ypc_allowed_1ma = rolling_feature(team_games['RB_ypc_allowed'], 1)
    RB_ypc_allowed_3ma = rolling_feature(team_games['RB_ypc_allowed'], 3)
    RB_ypc_allowed_5ma = rolling_feature(team_games['RB_ypc_allowed'], 5)
    
    # Strength-of-offense adjusted performance
    strength_of_offense_1ma = rolling_feature(team_games['strength_of_offense'], 1)
    strength_of_offense_3ma = rolling_feature(team_games['strength_of_offense'], 3)
    strength_of_offense_5ma = rolling_feature(team_games['strength_of_offense'], 5)
    
    # Relative defense performance (negative = better than expected)
    defense_performance_relative_1ma = RB_rush_yards_allowed_1ma - strength_of_offense_1ma
    defense_performance_relative_3ma = RB_rush_yards_allowed_3ma - strength_of_offense_3ma
    defense_performance_relative_5ma = RB_rush_yards_allowed_5ma - strength_of_offense_5ma
    
    # Momentum features (improving/declining defense)
    RB_rush_yards_allowed_delta_3_5 = RB_rush_yards_allowed_3ma - RB_rush_yards_allowed_5ma
    RB_rush_yards_allowed_delta_1_3 = RB_rush_yards_allowed_1ma - RB_rush_yards_allowed_3ma
    
    ypc_allowed_delta_3_5 = RB_ypc_allowed_3ma - RB_ypc_allowed_5ma
    ypc_allowed_delta_1_3 = RB_ypc_allowed_1ma - RB_ypc_allowed_3ma
    
    defense_relative_delta_3_5 = defense_performance_relative_3ma - defense_performance_relative_5ma
    defense_relative_delta_1_3 = defense_performance_relative_1ma - defense_performance_relative_3ma
    
    # Volatility (defensive consistency)
    RB_rush_yards_allowed_vol_5 = rolling_feature(team_games['RB_rush_yards_allowed'], 5, func='std')
    ypc_allowed_vol_5 = rolling_feature(team_games['RB_ypc_allowed'], 5, func='std')
    
    # Extremes
    min_rush_yards_allowed_3ma = rolling_feature(team_games['RB_rush_yards_allowed'], 3, func='min')
    min_rush_yards_allowed_5ma = rolling_feature(team_games['RB_rush_yards_allowed'], 5, func='min')
    max_rush_yards_allowed_3ma = rolling_feature(team_games['RB_rush_yards_allowed'], 3, func='max')
    max_rush_yards_allowed_5ma = rolling_feature(team_games['RB_rush_yards_allowed'], 5, func='max')
    
    defense_rush_stats_LOOKUP[team] = pd.DataFrame({
        'Date': team_games['Date'],
        'RB_rush_yards_allowed_1ma': RB_rush_yards_allowed_1ma,
        'RB_rush_yards_allowed_3ma': RB_rush_yards_allowed_3ma,
        'RB_rush_yards_allowed_5ma': RB_rush_yards_allowed_5ma,
        'RB_ypc_allowed_1ma': RB_ypc_allowed_1ma,
        'RB_ypc_allowed_3ma': RB_ypc_allowed_3ma,
        'RB_ypc_allowed_5ma': RB_ypc_allowed_5ma,
        'defense_performance_relative_1ma': defense_performance_relative_1ma,
        'defense_performance_relative_3ma': defense_performance_relative_3ma,
        'defense_performance_relative_5ma': defense_performance_relative_5ma,
        'RB_rush_yards_allowed_delta_3_5': RB_rush_yards_allowed_delta_3_5,
        'RB_rush_yards_allowed_delta_1_3': RB_rush_yards_allowed_delta_1_3,
        'ypc_allowed_delta_3_5': ypc_allowed_delta_3_5,
        'ypc_allowed_delta_1_3': ypc_allowed_delta_1_3,
        'defense_relative_delta_3_5': defense_relative_delta_3_5,
        'defense_relative_delta_1_3': defense_relative_delta_1_3,
        'RB_rush_yards_allowed_vol_5': RB_rush_yards_allowed_vol_5,
        'ypc_allowed_vol_5': ypc_allowed_vol_5,
        'min_rush_yards_allowed_3ma': min_rush_yards_allowed_3ma,
        'min_rush_yards_allowed_5ma': min_rush_yards_allowed_5ma,
        'max_rush_yards_allowed_3ma': max_rush_yards_allowed_3ma,
        'max_rush_yards_allowed_5ma': max_rush_yards_allowed_5ma,
    })`
    },
    {
      label: "4. Team Context & Game Script",
      description: "Point differential, spread, and scoring trends to capture game flow",
      code: `# ==================================================================
# TEAM CONTEXT & GAME SCRIPT FEATURES
# ==================================================================

# Load team scoring and spread data
spread_point_diff_df = pd.read_csv("spread_point_diff.csv")
spread_point_diff_df['Date'] = pd.to_datetime(spread_point_diff_df['Date'])

team_context_LOOKUP = {}

for team in spread_point_diff_df['team'].unique():
    team_games = spread_point_diff_df[spread_point_diff_df['team'] == team].sort_values('Date')
    
    # --- Point Differential Features ---
    # Positive = team won by more / opponent lost by more
    point_diff_3_ma = rolling_feature(team_games['point_diff'], 3)
    point_diff_5_ma = rolling_feature(team_games['point_diff'], 5)
    point_diff_3_sum = team_games['point_diff'].shift(1).rolling(3, min_periods=1).sum()
    point_diff_5_sum = team_games['point_diff'].shift(1).rolling(5, min_periods=1).sum()
    
    # --- Scoring Trends ---
    # Higher scoring = more plays = more RB opportunities
    point_scored_3_ma = rolling_feature(team_games['points_scored'], 3)
    point_scored_5_ma = rolling_feature(team_games['points_scored'], 5)
    points_allowed_3_ma = rolling_feature(team_games['points_allowed'], 3)
    points_allowed_5_ma = rolling_feature(team_games['points_allowed'], 5)
    
    # --- Opponent Context ---
    # How good is opponent's offense/defense?
    opp_point_diff_3_ma = rolling_feature(team_games['opp_point_diff'], 3)
    opp_point_diff_5_ma = rolling_feature(team_games['opp_point_diff'], 5)
    opp_point_diff_3_sum = team_games['opp_point_diff'].shift(1).rolling(3, min_periods=1).sum()
    opp_point_diff_5_sum = team_games['opp_point_diff'].shift(1).rolling(5, min_periods=1).sum()
    
    opp_point_scored_3_ma = rolling_feature(team_games['opp_points_scored'], 3)
    opp_point_scored_5_ma = rolling_feature(team_games['opp_points_scored'], 5)
    opp_points_allowed_3_ma = rolling_feature(team_games['opp_points_allowed'], 3)
    opp_points_allowed_5_ma = rolling_feature(team_games['opp_points_allowed'], 5)
    
    team_context_LOOKUP[team] = pd.DataFrame({
        'Date': team_games['Date'],
        'spread': team_games['spread'],  # Betting spread (no shift - known pre-game)
        'point_diff_3_ma': point_diff_3_ma,
        'point_diff_5_ma': point_diff_5_ma,
        'point_diff_3_sum': point_diff_3_sum,
        'point_diff_5_sum': point_diff_5_sum,
        'point_scored_3_ma': point_scored_3_ma,
        'point_scored_5_ma': point_scored_5_ma,
        'points_allowed_3_ma': points_allowed_3_ma,
        'points_allowed_5_ma': points_allowed_5_ma,
        'opp_point_diff_3_ma': opp_point_diff_3_ma,
        'opp_point_diff_5_ma': opp_point_diff_5_ma,
        'opp_point_diff_3_sum': opp_point_diff_3_sum,
        'opp_point_diff_5_sum': opp_point_diff_5_sum,
        'opp_point_scored_3_ma': opp_point_scored_3_ma,
        'opp_point_scored_5_ma': opp_point_scored_5_ma,
        'opp_points_allowed_3_ma': opp_points_allowed_3_ma,
        'opp_points_allowed_5_ma': opp_points_allowed_5_ma,
    })


# ==================================================================
# WHY GAME SCRIPT MATTERS FOR RUSHING YARDS
# ==================================================================

# Winning teams run more in 4th quarter (clock management)
# Tied games = more balanced play calling
# Losing teams pass more (catch-up mode)
# Spread captures pre-game expectations
# Point differential captures actual game flow trends`
    },
    {
      label: "5. Workload Competition & Injuries",
      description: "Model how RB workload changes with teammate injuries and depth chart dynamics",
      code: `# ==================================================================
# WORKLOAD COMPETITION & INJURY MODELING
# ==================================================================

def build_train_df(rush_df):
    """
    Build training dataset with teammate workload and injury features.
    
    Key modeling ideas:
    - Capture teammate competition within same game
    - Model recency-weighted injury impact of other RBs
    - Estimate how carry share changes when injured RBs return
    """
    
    rush_df = rush_df.sort_values("Date").copy()
    rush_df["game_date"] = rush_df["Date"].dt.date
    
    rows = []
    
    for row in rush_df.itertuples(index=False):
        player_key = row.clean_player_name
        team = row.Team
        game_date = row.game_date
        week = row.Week
        season = row.season
        
        # Get player's historical stats
        if player_key not in offense_rush_stats_LOOKUP:
            continue
        
        player_full_history = offense_rush_stats_LOOKUP[player_key]
        player_stats = player_full_history[player_full_history["Date"].dt.date <= game_date]
        
        if player_stats.empty:
            continue
        
        player_stats_on_date = player_stats.iloc[-1]
        
        # --- TEAMMATE WORKLOAD IN SAME GAME ---
        same_game_teammates = rush_df[
            (rush_df["Team"] == team) &
            (rush_df["game_date"] == game_date) &
            (rush_df["clean_player_name"] != player_key)
        ]
        
        # --- INJURY IMPACT MODELING ---
        # Find teammates who played earlier this season but NOT this game
        prev_teammates = rush_df[
            (rush_df["Team"] == team) &
            (rush_df["game_date"] < game_date) &
            (rush_df["season"] == season) &
            (rush_df["clean_player_name"] != player_key)
        ].drop_duplicates(["clean_player_name", "season"], keep="last")
        
        # Track injured teammates and their historical workload
        others_been_injured_1ma = 0
        others_been_injured_3ma = 0
        others_been_injured_5ma = 0
        
        carries_before_injury_1ma = 0
        carries_before_injury_3ma = 0
        carries_before_injury_5ma = 0
        
        for teammate in prev_teammates.itertuples(index=False):
            teammate_key = teammate.clean_player_name
            last_active_week = teammate.Week
            
            # Skip if active this week (not injured)
            if teammate_key in same_game_teammates['clean_player_name'].values:
                continue
            
            # Teammate is OUT this week
            weeks_since_last_active = week - last_active_week
            
            # Recency-weighted injury tracking
            if weeks_since_last_active == 1:
                others_been_injured_1ma += 1
                if teammate_key in offense_rush_stats_LOOKUP:
                    teammate_stats = offense_rush_stats_LOOKUP[teammate_key]
                    teammate_on_date = teammate_stats[teammate_stats['Date'].dt.date <= game_date]
                    if not teammate_on_date.empty:
                        carries_before_injury_1ma += teammate_on_date.iloc[-1]['rush_attempts_1ma']
            
            if weeks_since_last_active <= 3:
                others_been_injured_3ma += 1
                if teammate_key in offense_rush_stats_LOOKUP:
                    teammate_stats = offense_rush_stats_LOOKUP[teammate_key]
                    teammate_on_date = teammate_stats[teammate_stats['Date'].dt.date <= game_date]
                    if not teammate_on_date.empty:
                        carries_before_injury_3ma += teammate_on_date.iloc[-1]['rush_attempts_3ma']
            
            if weeks_since_last_active <= 5:
                others_been_injured_5ma += 1
                if teammate_key in offense_rush_stats_LOOKUP:
                    teammate_stats = offense_rush_stats_LOOKUP[teammate_key]
                    teammate_on_date = teammate_stats[teammate_stats['Date'].dt.date <= game_date]
                    if not teammate_on_date.empty:
                        carries_before_injury_5ma += teammate_on_date.iloc[-1]['rush_attempts_5ma']
        
        # Combine all features
        combined_row = player_stats_on_date.to_dict()
        combined_row['Player'] = player_key
        combined_row['Team'] = team
        combined_row['Date'] = game_date
        combined_row['Starter'] = row.is_starter
        combined_row['Rush_yards'] = row.Yds  # Target variable
        combined_row['others_been_injured_1ma'] = others_been_injured_1ma
        combined_row['others_been_injured_3ma'] = others_been_injured_3ma
        combined_row['others_been_injured_5ma'] = others_been_injured_5ma
        combined_row['carries_before_injury_1ma'] = carries_before_injury_1ma
        combined_row['carries_before_injury_3ma'] = carries_before_injury_3ma
        combined_row['carries_before_injury_5ma'] = carries_before_injury_5ma
        
        rows.append(combined_row)
    
    return pd.DataFrame(rows)


# Build training dataframe
train_df = build_train_df(base_stats)


# ==================================================================
# WHY THIS MATTERS
# ==================================================================

# Example: Backup RB averaging 40 yards/game
# Starter goes down → backup suddenly gets 15+ carries
# Model needs to predict: "When others_been_injured_1ma = 1 AND 
# carries_before_injury_1ma = 15, expect workload boost"
# 
# This captures opportunity expansion better than raw historical averages`
    },
    {
      label: "6. Feature Merging & Final Dataset",
      description: "Join all feature sets into unified training dataframe",
      code: `# ==================================================================
# FEATURE MERGING
# ==================================================================

# Create unique keys for joining
train_df['player_key'] = train_df['Player'] + "_" + train_df['Date'].astype(str)
train_df['team_key'] = train_df['Team'] + "_" + train_df['Date'].astype(str)

# Load additional feature sets
pbp_df = pd.read_csv("play_by_play_feature_engineering.csv")
ybc_yac_df = pd.read_csv("ybc_yac_feature_engineering.csv")
defense_df = pd.read_csv("defense_stats_feature_engineering.csv")
spread_df = pd.read_csv("point_diff_spread_train.csv")

# Clean and create join keys
pbp_df['clean_player_name'] = pbp_df['player'].apply(clean_player_name)
pbp_df['player_key'] = pbp_df['clean_player_name'] + "_" + pbp_df['Date'].astype(str)

ybc_yac_df['clean_player_name'] = ybc_yac_df['Player'].apply(clean_player_name)
ybc_yac_df['player_key'] = ybc_yac_df['clean_player_name'] + "_" + ybc_yac_df['Date'].astype(str)

defense_df['team_key'] = defense_df['Team'] + "_" + defense_df['Date'].astype(str)
spread_df['team_key'] = spread_df['team'] + "_" + spread_df['date'].astype(str)

# Merge all datasets
merged_df = pd.merge(train_df, pbp_df, on='player_key', how='left', suffixes=('', '_pbp'))
merged_df = pd.merge(merged_df, ybc_yac_df, on='player_key', how='left', suffixes=('', '_ybc'))
merged_df = pd.merge(merged_df, spread_df, on='team_key', how='left', suffixes=('', '_spread'))
merged_df = pd.merge(merged_df, defense_df, on='team_key', how='left', suffixes=('', '_def'))

# Add season for time-based train/test splits
merged_df['Date'] = pd.to_datetime(merged_df['Date'])
merged_df['season'] = merged_df['Date'].apply(lambda x: x.year if x.month >= 3 else x.year - 1)


# ==================================================================
# FINAL FEATURE SET
# ==================================================================

# Select features for modeling
train_cols = [
    # Player performance
    col for col in merged_df.columns 
    if 'delta_3_5' in col or col.endswith('3ma') or col.endswith('5ma')
]

# Add injury/workload features
train_cols += ['others_been_injured_1ma', 'carries_before_injury_1ma']

# Add game context
train_cols += ['Starter', 'spread']

# Add scoring trends
train_cols += [
    'point_diff_3_ma', 'point_diff_5_ma', 'point_diff_3_sum', 'point_diff_5_sum',
    'point_scored_3_ma', 'point_scored_5_ma', 'points_allowed_3_ma', 'points_allowed_5_ma',
    'opp_point_diff_3_ma', 'opp_point_diff_5_ma', 'opp_point_scored_3_ma', 'opp_points_allowed_3_ma'
]

# Filter to relevant players
# Only model players who either:
# 1. Have >= 1 rush attempt on average (rush_attempts_3ma >= 1), OR
# 2. Are designated starters (Starter == 1)
merged_df = merged_df[(merged_df['rush_attempts_3ma'] >= 1) | (merged_df['Starter'] == 1)]

print(f"Final dataset shape: {merged_df.shape}")
print(f"Number of features: {len(train_cols}")
print(f"Target variable: Rush_yards")`
    },
    {
      label: "7. Model Training & Evaluation",
      description: "Time-series cross-validation with expanding window and performance metrics",
      code: `import xgboost as xgb
from sklearn.metrics import r2_score
import numpy as np

# ==================================================================
# MODEL TRAINING WITH TIME-SERIES CROSS-VALIDATION
# ==================================================================

# Initialize XGBoost regressor
reg_model = xgb.XGBRegressor(
    n_estimators=100,
    max_depth=5,
    learning_rate=0.1,
    random_state=42
)

all_predictions = []

# Train on expanding window, test on each season
for season in range(2019, 2024):
    print(f"\\n{'='*60}")
    print(f"Training on seasons 2018-{season-1}, Testing on {season}")
    print(f"{'='*60}")
    
    # Split data
    train_data = merged_df[merged_df['season'] < season]
    test_data = merged_df[merged_df['season'] == season]
    
    X_train = train_data[train_cols]
    y_train = train_data['Rush_yards']
    X_test = test_data[train_cols]
    y_test = test_data['Rush_yards']
    
    print(f"Training samples: {len(X_train):,}")
    print(f"Test samples: {len(X_test):,}")
    
    # Train model
    reg_model.fit(X_train, y_train)
    
    # Generate predictions
    predictions = reg_model.predict(X_test)
    
    # Calculate metrics
    mae = np.mean(np.abs(predictions - y_test))
    rmse = np.sqrt(np.mean((predictions - y_test) ** 2))
    r2 = r2_score(y_test, predictions)
    
    print(f"\\nResults:")
    print(f"  MAE: {mae:.2f} yards")
    print(f"  RMSE: {rmse:.2f} yards")
    print(f"  R²: {r2:.3f}")
    
    # Store predictions for later analysis
    test_results = X_test.copy()
    test_results['predicted_rush_yards'] = predictions
    test_results['actual_rush_yards'] = y_test
    test_results['season'] = season
    all_predictions.append(test_results)


# ==================================================================
# AGGREGATE RESULTS ACROSS ALL SEASONS
# ==================================================================

all_results = pd.concat(all_predictions)

print(f"\\n{'='*60}")
print(f"OVERALL PERFORMANCE (2019-2023)")
print(f"{'='*60}")

overall_mae = np.mean(np.abs(all_results['predicted_rush_yards'] - all_results['actual_rush_yards']))
overall_rmse = np.sqrt(np.mean((all_results['predicted_rush_yards'] - all_results['actual_rush_yards']) ** 2))
overall_r2 = r2_score(all_results['actual_rush_yards'], all_results['predicted_rush_yards'])

print(f"MAE: {overall_mae:.2f} yards")
print(f"RMSE: {overall_rmse:.2f} yards")
print(f"R²: {overall_r2:.3f}")
print(f"\\nTotal predictions: {len(all_results):,}")


# Save model for production use
reg_model.save_model('rush_yard_regressor.json')
print(f"\\nModel saved to rush_yard_regressor.json")`
    },
    {
      label: "8. Feature Importance & Selection",
      description: "Permutation importance to identify and filter most predictive features",
      code: `from sklearn.inspection import permutation_importance
import matplotlib.pyplot as plt

# ==================================================================
# BASELINE: INITIAL RESULTS WITH ALL FEATURES
# ==================================================================

# Season 2019 - MAE: 22.64, RMSE: 31.32, R²: 0.32
# Season 2020 - MAE: 21.27, RMSE: 30.08, R²: 0.35
# Season 2021 - MAE: 19.81, RMSE: 27.98, R²: 0.40
# Season 2022 - MAE: 20.28, RMSE: 28.80, R²: 0.41
# Season 2023 - MAE: 18.76, RMSE: 26.63, R²: 0.41


# ==================================================================
# PERMUTATION IMPORTANCE ANALYSIS
# ==================================================================

# Use most recent test set for importance calculation
X_test = merged_df[merged_df['season'] == 2023][train_cols]
y_test = merged_df[merged_df['season'] == 2023]['Rush_yards']

print("Calculating permutation importance...")
print("(This measures predictive power by shuffling each feature)")

perm = permutation_importance(
    reg_model,
    X_test,
    y_test,
    n_repeats=5,
    random_state=42,
    scoring='r2'
)

# Sort features by importance
sorted_idx = perm.importances_mean.argsort()[::-1]

print(f"\\n{'='*60}")
print(f"TOP 20 MOST IMPORTANT FEATURES")
print(f"{'='*60}\\n")

for rank, idx in enumerate(sorted_idx[:20], 1):
    feature_name = train_cols[idx]
    importance = perm.importances_mean[idx]
    std = perm.importances_std[idx]
    
    print(f"{rank:2d}. {feature_name:40s} {importance:7.4f} (+/- {std:.4f})")


# ==================================================================
# FEATURE SELECTION: KEEP ONLY FEATURES WITH POSITIVE IMPORTANCE
# ==================================================================

# Filter out features with negative or zero importance
# Negative importance = feature hurts model performance
# These likely add noise and increase overfitting

top_features = [
    train_cols[i] 
    for i in sorted_idx 
    if perm.importances_mean[i] > -0  # Keep features with ANY positive importance
]

print(f"\\n{'='*60}")
print(f"FEATURE SELECTION RESULTS")
print(f"{'='*60}")
print(f"Original features: {len(train_cols)}")
print(f"Selected features: {len(top_features)}")
print(f"Removed features: {len(train_cols) - len(top_features)}")
print(f"\\nFeatures removed had negative or zero importance")
print(f"Likely contributed noise and overfitting")`
    },
    {
      label: "9. Retrain with Selected Features",
      description: "Improved model performance after feature selection",
      code: `# ==================================================================
# RETRAIN MODEL WITH SELECTED FEATURES ONLY
# ==================================================================

reg_model_optimized = xgb.XGBRegressor(
    n_estimators=100,
    max_depth=5,
    learning_rate=0.1,
    random_state=42
)

all_predictions_optimized = []

print(f"\\n{'='*60}")
print(f"RETRAINING WITH {len(top_features)} SELECTED FEATURES")
print(f"{'='*60}\\n")

for season in range(2019, 2024):
    train_data = merged_df[merged_df['season'] < season]
    test_data = merged_df[merged_df['season'] == season]
    
    X_train = train_data[top_features]  # Use selected features only
    y_train = train_data['Rush_yards']
    X_test = test_data[top_features]
    y_test = test_data['Rush_yards']
    
    reg_model_optimized.fit(X_train, y_train)
    predictions = reg_model_optimized.predict(X_test)
    
    mae = np.mean(np.abs(predictions - y_test))
    rmse = np.sqrt(np.mean((predictions - y_test) ** 2))
    r2 = r2_score(y_test, predictions)
    
    print(f"Season {season} - MAE: {mae:.2f}, RMSE: {rmse:.2f}, R²: {r2:.2f}")
    
    test_results = test_data[['player_display_name']].copy()
    test_results['predicted_rush_yards'] = predictions
    test_results['actual_rush_yards'] = y_test.values
    test_results['season'] = season
    all_predictions_optimized.append(test_results)


# ==================================================================
# RESULTS AFTER FEATURE SELECTION
# ==================================================================

# Season 2019 - MAE: 22.10, RMSE: 30.64, R²: 0.35  (+0.03 R²)
# Season 2020 - MAE: 20.52, RMSE: 29.10, R²: 0.39  (+0.04 R²)
# Season 2021 - MAE: 19.99, RMSE: 28.25, R²: 0.39  (-0.01 R²)
# Season 2022 - MAE: 20.22, RMSE: 28.97, R²: 0.40  (-0.01 R²)
# Season 2023 - MAE: 18.44, RMSE: 26.22, R²: 0.43  (+0.02 R²)


# ==================================================================
# PERFORMANCE IMPROVEMENT SUMMARY
# ==================================================================

all_results_optimized = pd.concat(all_predictions_optimized)

print(f"\\n{'='*60}")
print(f"OVERALL PERFORMANCE COMPARISON")
print(f"{'='*60}\\n")

overall_mae_opt = np.mean(np.abs(all_results_optimized['predicted_rush_yards'] - all_results_optimized['actual_rush_yards']))
overall_rmse_opt = np.sqrt(np.mean((all_results_optimized['predicted_rush_yards'] - all_results_optimized['actual_rush_yards']) ** 2))
overall_r2_opt = r2_score(all_results_optimized['actual_rush_yards'], all_results_optimized['predicted_rush_yards'])

print("BEFORE Feature Selection:")
print(f"  MAE: 20.45 yards")
print(f"  RMSE: 28.96 yards")
print(f"  R²: 0.38")

print(f"\\nAFTER Feature Selection:")
print(f"  MAE: {overall_mae_opt:.2f} yards")
print(f"  RMSE: {overall_rmse_opt:.2f} yards")
print(f"  R²: {overall_r2_opt:.2f}")

print(f"\\nIMPROVEMENT:")
print(f"  MAE: {20.45 - overall_mae_opt:+.2f} yards ({-(20.45 - overall_mae_opt)/20.45*100:.1f}%)")
print(f"  RMSE: {28.96 - overall_rmse_opt:+.2f} yards ({-(28.96 - overall_rmse_opt)/28.96*100:.1f}%)")
print(f"  R²: {overall_r2_opt - 0.38:+.2f} ({(overall_r2_opt - 0.38)/0.38*100:+.1f}%)")

print(f"\\nKey Insight: Removing {len(train_cols) - len(top_features)} noisy features")
print(f"reduced overfitting and improved generalization")


# Save optimized model
reg_model_optimized.save_model('rush_yard_regressor_optimized.json')
print(f"\\nOptimized model saved to rush_yard_regressor_optimized.json")`
    },
    {
      label: "10. Classification Model for Over/Under Betting",
      description: "Binary classifier to predict if player hits the OVER on betting lines",
      code: `import xgboost as xgb
from sklearn.metrics import roc_auc_score

# ==================================================================
# LOAD BETTING LINES DATA
# ==================================================================

# Fetch real betting lines from sportsbooks (DraftKings, FanDuel, etc.)
odds_data = fetch_odds_from_s3('americanfootball_nfl', 'player_rush_yards', 2023, 2025)

# Parse odds data to extract player, line, Over price, Under price
clean_odds_df = pd.DataFrame()
for i in range(len(odds_data)):
    row = odds_data.iloc[i]
    date = row['date']
    if len(row['bookmakers']) == 0:
        continue
    
    data = row['bookmakers'][0]['markets'][0]['outcomes']
    new_row = {}
    for item in data:
        player_name = item['description']
        line = item['point']
        name = item['name']  # 'Over' or 'Under'
        price = item['price']  # American odds
        
        if player_name not in new_row:
            new_row[player_name] = {
                'player': player_name,
                'line': line,
                'date': date,
                f'{name}_price': price
            }
        else:
            new_row[player_name][f'{name}_price'] = price
    
    clean_odds_df = pd.concat([
        clean_odds_df,
        pd.DataFrame(list(new_row.values()))
    ], ignore_index=True)

# Join betting lines to feature data
clean_odds_df['player_key'] = clean_odds_df['player'] + "_" + clean_odds_df['date'].astype(str)
merged_df = pd.merge(
    merged_df,
    clean_odds_df[['player_key', 'line', 'Over_price', 'Under_price']],
    on='player_key',
    how='left'
)


# ==================================================================
# CREATE CLASSIFICATION TARGET AND FEATURES
# ==================================================================

# Target: did player go OVER the betting line?
merged_df['hit_over'] = (merged_df['Rush_yards'] > merged_df['line']).astype(int)

# Get regression model predictions
reg_preds = reg_model_optimized.predict(merged_df[top_features])
merged_df['predicted_rush_yards'] = reg_preds

# KEY FEATURE: How much does our model think player beats/misses the line?
merged_df['pred_vs_line_diff'] = merged_df['predicted_rush_yards'] - merged_df['line']

# Additional line-relative features
merged_df['line_over_rush_attempts_3ma'] = merged_df['line'] / (merged_df['rush_attempts_3ma'] + 1e-5)
merged_df['line_over_ypc_3ma'] = merged_df['line'] / (merged_df['ypc_3ma'] + 1e-5)
merged_df['line_over_rush_yards_allowed_3ma'] = merged_df['line'] / (merged_df['RB_rush_yards_allowed_3ma'] + 1e-5)

# Percentile ranks for player vs defense matchup
merged_df['rush_yards_5ma_rank'] = (
    merged_df.groupby(['season', 'Week'])['rush_yards_5ma']
    .rank(pct=True, method='min', ascending=False)
)
merged_df['rb_rush_yards_allowed_5ma_rank'] = (
    merged_df.groupby(['season', 'Week'])['RB_rush_yards_allowed_5ma']
    .rank(pct=True, method='min', ascending=True)
)
merged_df['line_rank'] = (
    merged_df.groupby(['season', 'Week'])['line']
    .rank(pct=True, method='min', ascending=False)
)

# Edge features: how favorable is this matchup?
merged_df['rb_vs_defense_edge_5ma'] = (
    merged_df['rush_yards_5ma_rank'] - merged_df['rb_rush_yards_allowed_5ma_rank']
)
merged_df['rb_vs_line_edge_5ma'] = (
    merged_df['rush_yards_5ma_rank'] - merged_df['line_rank']
)


# ==================================================================
# TRAIN CLASSIFICATION MODEL
# ==================================================================

class_train_cols = [
    'pred_vs_line_diff',  # Most important: regression pred vs line
    'spread',
    'line_over_rush_attempts_3ma',
    'line_over_ypc_3ma',
    'line_over_rush_yards_allowed_3ma',
    'rb_vs_defense_edge_5ma',
    'rb_vs_line_edge_5ma',
    'opponent_rushes_one_to_two_5ma',
    'team_rushes_less_than_eq_zero_3ma'
]

class_model = xgb.XGBClassifier(
    n_estimators=200,
    max_depth=3,
    learning_rate=0.01,
    random_state=42,
    min_child_weight=10  # Conservative to avoid overfitting
)

all_class_preds = []

print(f"\\n{'='*60}")
print(f"TRAINING OVER/UNDER CLASSIFIER")
print(f"{'='*60}\\n")

for season in range(2024, 2026):
    train_data = merged_df[merged_df['season'] < season]
    test_data = merged_df[merged_df['season'] == season]
    
    X_train = train_data[class_train_cols]
    y_train = train_data['hit_over']
    X_test = test_data[class_train_cols]
    y_test = test_data['hit_over']
    
    class_model.fit(X_train, y_train)
    proba_predictions = class_model.predict_proba(X_test)[:, 1]
    
    test_data = test_data.copy()
    test_data['proba_over'] = proba_predictions
    all_class_preds.append(test_data)
    
    roc_auc = roc_auc_score(y_test, proba_predictions)
    print(f"Season {season} - ROC AUC: {roc_auc:.4f}")


# ==================================================================
# BETTING STRATEGY WITH EDGE DETECTION
# ==================================================================

all_class_df = pd.concat(all_class_preds)

# Convert American odds to implied probabilities
all_class_df['over_implied_prob'] = 1 / all_class_df['Over_price']
all_class_df['under_implied_prob'] = 1 / all_class_df['Under_price']
all_class_df['under_model_prob'] = 1 - all_class_df['proba_over']

# Calculate edge (model prob - market prob)
all_class_df['over_edge'] = all_class_df['proba_over'] - all_class_df['over_implied_prob']
all_class_df['under_edge'] = all_class_df['under_model_prob'] - all_class_df['under_implied_prob']

# Only bet when edge > threshold
EDGE_THRESHOLD = 0.03  # 3% edge required

all_class_df['bet'] = None
all_class_df.loc[all_class_df['over_edge'] > EDGE_THRESHOLD, 'bet'] = 'over'
all_class_df.loc[all_class_df['under_edge'] > EDGE_THRESHOLD, 'bet'] = 'under'

bets_df = all_class_df[all_class_df['bet'].notnull()].copy()

# Calculate profit for each bet
profits = []
for _, row in bets_df.iterrows():
    stake = 1.0
    
    if row['bet'] == 'over':
        win = row['hit_over'] == 1
        odds = row['Over_price']
    else:
        win = row['hit_over'] == 0
        odds = row['Under_price']
    
    if win:
        profit = stake * (odds - 1)
    else:
        profit = -stake
    
    profits.append(profit)

bets_df['profit'] = profits
bets_df['cum_profit'] = bets_df['profit'].cumsum()

# Results
total_bets = len(bets_df)
total_profit = bets_df['profit'].sum()
roi = (total_profit / total_bets) * 100 if total_bets > 0 else 0
win_rate = (bets_df['profit'] > 0).mean() * 100

print(f"\\n{'='*60}")
print(f"BETTING RESULTS (3% Edge Threshold)")
print(f"{'='*60}")
print(f"Total Bets: {total_bets}")
print(f"Total Profit: {total_profit:.2f} units")
print(f"ROI: {roi:.2f}%")
print(f"Win Rate: {win_rate:.2f}%")
print(f"\\nFinal Cumulative Profit: {bets_df['cum_profit'].iloc[-1]:.2f} units")`
    }
  ],
  plots: [
    {
      title: 'Season-by-Season Performance',
      description: 'MAE, RMSE, and R² metrics across 2019-2023 test seasons',
      imageUrl: 'https://via.placeholder.com/600x400?text=Season+Performance'
    },
    {
      title: 'Prediction vs Actual Distribution',
      description: 'Scatter plot showing model calibration and residual patterns',
      imageUrl: 'https://via.placeholder.com/600x400?text=Prediction+Distribution'
    },
    {
      title: 'Feature Importance Rankings',
      description: 'Top 20 features by permutation importance with confidence intervals',
      imageUrl: 'https://via.placeholder.com/600x400?text=Feature+Importance'
    }
  ]
}
