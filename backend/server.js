import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Alpaca API configuration
const ALPACA_API_KEY = process.env.ALPACA_API_KEY;
const ALPACA_SECRET_KEY = process.env.ALPACA_SECRET_KEY;
const ALPACA_BASE_URL = process.env.ALPACA_BASE_URL || 'https://paper-api.alpaca.markets';

// Helper function to make Alpaca API calls
async function alpacaRequest(endpoint) {
  const url = `${ALPACA_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'APCA-API-KEY-ID': ALPACA_API_KEY,
      'APCA-API-SECRET-KEY': ALPACA_SECRET_KEY,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Alpaca API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Get account information
app.get('/api/account', async (req, res) => {
  try {
    const account = await alpacaRequest('/v2/account');
    res.json(account);
  } catch (error) {
    console.error('Error fetching account:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get portfolio history
// NOTE: Alpaca API limitation - current day returns cannot be plotted as no EOD data exists yet
// The portfolio history data from Alpaca does not include intraday data for the current day.
// This means:
// - Charts (profit_loss) show historical data only, NOT including current day
// - Returns at top of page use real-time account data (current Portfolio Value - last_equity) which DOES include current day
// - When user clicks "1D", the chart will show limited/no data since current day data isn't available
app.get('/api/portfolio-history', async (req, res) => {
  try {
    const { period = '1M', timeframe = '1D' } = req.query;
    const history = await alpacaRequest(`/v2/account/portfolio/history?period=${period}&timeframe=${timeframe}`);
    
    // Calculate profit_loss and profit_loss_pct as current - start for each point
    if (history.equity && history.equity.length > 0) {
      const startEquity = history.equity[0];
      const currentEquity = history.equity[history.equity.length - 1];
      
      
      // Recalculate profit_loss arrays based on start value
      history.profit_loss = history.equity.map(value => value - startEquity);
      history.profit_loss_pct = history.equity.map(value => 
        startEquity > 0 ? ((value - startEquity) / startEquity) * 100 : 0
      );
      
    }
    
    res.json(history);
  } catch (error) {
    console.error('Error fetching portfolio history:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get positions
app.get('/api/positions', async (req, res) => {
  try {
    const positions = await alpacaRequest('/v2/positions');
    res.json(positions);
  } catch (error) {
    console.error('Error fetching positions:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get orders
app.get('/api/orders', async (req, res) => {
  try {
    const { status = 'all', limit = 50 } = req.query;
    const orders = await alpacaRequest(`/v2/orders?status=${status}&limit=${limit}`);
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
