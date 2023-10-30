export const API_ROOT = process.env.SERVER_URI;

export const TIMEOUT = 150000;

export const API = {
  CHAIN_LIST: '/chain-list',
  COMMIT_CHART: '/commit-chart',
  DEVELOPER_INFO: '/developer-info',
  RANKING: '/ranking',
  CATEGORIES: '/categories',
  CHAIN_ID: '/chain/:prefix',
  SUMMARY_INFOR: '/summary-info',
  DEVELOPER_CHART: '/developer-chart',
  CHAIN_DEVELOPER: '/chain-developer/:id',
  CHAIN_REPOSITORY: '/chain-repository/:id',
  PERFORMANCE: '/performance/:id',
  SETTING: '/setting'
};
