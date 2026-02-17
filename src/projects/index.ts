// Central registry for all project demos
import { ProjectDemoData } from "../types/projectDemo"
import { rushYardProject } from "./rush_yard"
import { tradingFramework } from "./trading_framework"
import { volatilityModel } from "./volatility_model"
import { portfolioWebsite } from "./portfolio_website"
import { optionProfitModel } from "./option_profit_model"

export const projectRegistry: Record<string, ProjectDemoData> = {
  '1': rushYardProject,
  '2': tradingFramework,
  '3': volatilityModel,
  '4': portfolioWebsite,
  '5': optionProfitModel,
}

// Export individual projects for direct imports if needed
export {
  rushYardProject,
  tradingFramework,
  volatilityModel,
  portfolioWebsite,
  optionProfitModel,
}
