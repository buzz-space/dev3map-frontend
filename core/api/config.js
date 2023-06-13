export const API_ROOT = process.env.SERVER_URI;

export const TIMEOUT = 15000;

export const API = {
  POST: {
    HEADLINES: '/blog/posts',
    FILTER: '/blog/posts/filters',
    DETAIL: '/blog/post/:slug',
    AUTHOR: '/blog/author/:name',
    COMMENT: {
      GET: {
        PUBLIC: '/blog/post/comments/public',
        AUTH: '/blog/post/comments',
      },
      POST: {
        AUTH: '/blog/post/comment',
        PUBLIC: '/blog/post/comment/public'
      },
      UPDATE: '/blog/post/comment',
      DELETE: '/blog/post/comment',
      REPORT: '/blog/post/comment/report',
    },
    LIKE: {
      GET: '/blog/post/like',
      POST: '/blog/post/like',
    },
    BUZZ: {
      GET: "/buzz/posts",
      DETAIL: "/buzz/post/:slug",
    }
  },
  CATEGORY: {
    FILTER: '/blog/categories/filters',
  },
  AUTH: {
    LOGIN: {
      EMAIL: '/visitor/login',
      SOCIAL: '/visitor/login-social',
    },
    LOGOUT: '/visitor/logout',
    REGISTER: '/visitor/register',
    PASSWORD: {
      FORGOT: '/visitor/forgot-password',
      OTP: '/visitor/verify-otp',
      RESET: '/visitor/reset-password',
    },
  },
  GLOSSARY: {
    SEARCH: '/glossary/search',
    FEATURES: '/glossary/features',
  },
  NFT: {
    TRENDING: '/nft/trending',
    LEADERBOARD: '/nft/leaderboard',
    SEARCH: '/nft/search',
    STATS: '/nft/stats',
    NEWEST: '/nft/newest',
    SORTING: '/nft/sorting',
  },
  BANNER: '/banner',
};
