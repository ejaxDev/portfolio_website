// Central registry for all project demos
import { ProjectDemoData } from "../types/projectDemo"
import { rushYardProject } from "./rush_yard"
import { volatilityModel } from "./volatility_model"
import { portfolioWebsite } from "./portfolio_website"
import { optionProfitModel } from "./option_profit_model"

export const projectRegistry: Record<string, ProjectDemoData> = {
  '1': rushYardProject,
  '2': optionProfitModel,
  '3': volatilityModel,
  '4': portfolioWebsite,
}

// Export individual projects for direct imports if needed
export {
  rushYardProject,
  volatilityModel,
  portfolioWebsite,
  optionProfitModel,
}
