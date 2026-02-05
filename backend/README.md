# Trading Dashboard Setup Guide

This portfolio website includes a trading dashboard that displays real-time data from your Alpaca paper trading account.

## Architecture

The trading dashboard uses a backend API proxy to securely access your Alpaca account:

```
Frontend (React) → Backend Server (Express) → Alpaca API
```

This keeps your API credentials secure on the server side and prevents exposing them in the browser.

## Setup Instructions

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
npm install
```

Create a `.env` file with your Alpaca credentials:
```bash
cp .env.example .env
```

Edit `.env` and add your Alpaca API credentials:
```
ALPACA_API_KEY=your_actual_api_key
ALPACA_SECRET_KEY=your_actual_secret_key
ALPACA_BASE_URL=https://paper-api.alpaca.markets
PORT=3001
```

Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

### 2. Frontend Setup

In the main project directory, create a `.env` file:
```bash
VITE_BACKEND_URL=http://localhost:3001
```

Start the frontend:
```bash
npm run dev
```

Visit `http://localhost:5173/trading` to see your trading dashboard.

## Deployment

### Backend Deployment Options

#### Option 1: Railway (Recommended)
1. Push your code to GitHub
2. Visit [railway.app](https://railway.app)
3. Create a new project from your GitHub repo
4. Set root directory to `/backend`
5. Add environment variables in Railway dashboard
6. Railway will automatically deploy on push

#### Option 2: Heroku
```bash
cd backend
heroku create your-trading-backend
heroku config:set ALPACA_API_KEY=your_key
heroku config:set ALPACA_SECRET_KEY=your_secret
heroku config:set ALPACA_BASE_URL=https://paper-api.alpaca.markets
git push heroku main
```

#### Option 3: DigitalOcean App Platform
1. Create new app from GitHub repo
2. Set build command: `cd backend && npm install`
3. Set run command: `node backend/server.js`
4. Add environment variables in settings

#### Option 4: Self-hosted (VPS)
Deploy to any VPS (DigitalOcean Droplet, AWS EC2, etc.):
```bash
# SSH into your server
git clone your-repo
cd your-repo/backend
npm install
npm install -g pm2

# Create .env file with your credentials
nano .env

# Start with PM2 for auto-restart
pm2 start server.js --name trading-backend
pm2 save
pm2 startup

# Setup nginx reverse proxy (optional)
# Point domain/subdomain to port 3001
```

### Frontend Deployment

Update your frontend `.env` with your deployed backend URL:
```bash
VITE_BACKEND_URL=https://your-backend.railway.app
```

Deploy to Vercel/Netlify:
```bash
# Vercel
vercel --prod

# Or Netlify
netlify deploy --prod
```

Make sure to set `VITE_BACKEND_URL` in your hosting platform's environment variables.

## API Endpoints

The backend provides these endpoints:

- `GET /api/account` - Account information (equity, cash, buying power)
- `GET /api/portfolio-history?period=1M&timeframe=1D` - Portfolio performance over time
- `GET /api/positions` - Current open positions
- `GET /api/orders?status=all&limit=50` - Order history
- `GET /health` - Health check

## Security Notes

- ✅ Never commit `.env` files to git
- ✅ Backend `.env` is already in `.gitignore`
- ✅ Use paper trading credentials for testing
- ✅ Consider IP whitelisting on your backend server
- ✅ Use HTTPS in production
- ✅ Regularly rotate API keys

## Troubleshooting

### CORS Errors
Make sure your backend has CORS enabled (already configured in `server.js`) and the frontend `VITE_BACKEND_URL` matches your backend URL exactly.

### API Connection Failed
1. Check backend server is running: `curl http://localhost:3001/health`
2. Verify Alpaca credentials are correct
3. Check Alpaca API status: [status.alpaca.markets](https://status.alpaca.markets)

### No Data Showing
1. Ensure you have some trading activity in your Alpaca account
2. Check browser console for errors
3. Verify backend logs for API errors

## Going Live with Real Trading

To switch from paper trading to live trading:

1. Get live trading credentials from Alpaca
2. Change `ALPACA_BASE_URL` to `https://api.alpaca.markets`
3. Update API keys to live credentials
4. **⚠️ Be very careful** - this uses real money!

It's recommended to keep paper trading for portfolio display purposes.
