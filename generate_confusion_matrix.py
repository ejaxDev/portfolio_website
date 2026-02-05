import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Confusion matrix data from the XGBoost model
# These are the actual values from the confusion matrix in the notebook
confusion_matrix = np.array([
    [47578, 0, 446591, 0, 29584],      # Heavy Down
    [14536, 0, 594739, 0, 7108],       # Moderate Down  
    [29125, 0, 3407986, 0, 20525],     # Neutral
    [13352, 0, 661052, 0, 11054],      # Moderate Up
    [40979, 0, 428994, 0, 39785]       # Heavy Up
])

# Class labels
labels = ['Heavy Down', 'Moderate Down', 'Neutral', 'Moderate Up', 'Heavy Up']

# Create figure with high DPI for web display
plt.figure(figsize=(12, 10))

# Create heatmap
sns.heatmap(
    confusion_matrix, 
    annot=True, 
    fmt='d', 
    cmap='Blues',
    xticklabels=labels,
    yticklabels=labels,
    cbar_kws={'label': 'Count'},
    annot_kws={'size': 11}
)

# Styling
plt.title('Confusion Matrix - XGBoost Classifier', fontsize=16, fontweight='bold', pad=20)
plt.xlabel('Predicted label', fontsize=13, fontweight='bold')
plt.ylabel('True label', fontsize=13, fontweight='bold')
plt.xticks(rotation=45, ha='right')
plt.yticks(rotation=0)

# Tight layout for better spacing
plt.tight_layout()

# Save with high quality
plt.savefig('/home/mrmath/portfolio_website/public/confusion_matrix_xgboost.png', 
            dpi=150, bbox_inches='tight', facecolor='white')

print("✅ Confusion matrix saved to public/confusion_matrix_xgboost.png")
plt.close()
