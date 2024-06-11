import { defineConfig } from 'umi';
import { routes } from './config/route';
import defaultSettings from './config/defaultSettings';

export default defineConfig({
  title: 'DigiVerify',
  hash: true,
  history: { type: 'hash' },
  locale: {
    antd: true,
    default: 'vi-VN',
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    hmr: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  analytics: {
    ga: 'UX_ANSNSN',
  },
  antd: {},
  ignoreMomentLocale: true,
  targets: {
    ie: 9,
  },
  pwa: false,
  theme: {
    '@primary-color': defaultSettings.primaryColor,
    '@font-size-base': '14px',
    '@link-color': defaultSettings.primaryColor,
    // '@layout-sider-background': '#121212',
    // 'layout-body-background': '#f0f2f5',
  },
  routes,
  define: {
    'process.env.API_VERIFY_ECARD_PROD': process.env.API_VERIFY_ECARD_PROD || false,
    'process.env.API_VERIFY_BKGOLF_PROD': process.env.API_VERIFY_BKGOLF_PROD || false,
    'process.env.API_VERIFY_CLB_MANAGER_PROD': process.env.API_VERIFY_CLB_MANAGER_PROD || false,
    'process.env.API_VERIFY_DIGI_GROUP_PROD': process.env.API_VERIFY_DIGI_GROUP_PROD || false,
    'process.env.API_VERIFY_MINI_GAME_PROD': process.env.API_VERIFY_MINI_GAME_PROD || false,
    'process.env.API_VERIFY_AUTH_SERVICE_PROD': process.env.API_VERIFY_AUTH_SERVICE_PROD || false,
    'process.env.API_VERIFY_DIGI_GROUP_SAAS_PROD': process.env.API_VERIFY_DIGI_GROUP_SAAS_PROD || false,
    'process.env.API_VERIFY_DIGI_WORK_PROD': process.env.API_VERIFY_DIGI_WORK_PROD || false,
    'process.env.API_VERIFY_IMAN_PROD': process.env.API_VERIFY_IMAN_PROD || false,
    'process.env.API_VERIFY_VSKT_PROD': process.env.API_VERIFY_VSKT_PROD || false,

    'process.env.API_VERIFY_VSKT_STAGING': process.env.API_VERIFY_VSKT_STAGING || false,

    'process.env.API_VERIFY_ECARD_DEV': process.env.API_VERIFY_ECARD_DEV || false,
    'process.env.API_VERIFY_BKGOLF_DEV': process.env.API_VERIFY_BKGOLF_DEV || false,
    'process.env.API_VERIFY_CLB_MANAGER_DEV': process.env.API_VERIFY_CLB_MANAGER_DEV || false,
    'process.env.API_VERIFY_DIGI_GROUP_DEV': process.env.API_VERIFY_DIGI_GROUP_DEV || false,
    'process.env.API_VERIFY_MINI_GAME_DEV': process.env.API_VERIFY_MINI_GAME_DEV || false,
    'process.env.API_VERIFY_AUTH_SERVICE_DEV': process.env.API_VERIFY_AUTH_SERVICE_DEV || false,
    'process.env.API_VERIFY_DIGI_GROUP_SAAS_DEV': process.env.API_VERIFY_DIGI_GROUP_SAAS_DEV || false,
    'process.env.API_VERIFY_DIGI_WORK_DEV': process.env.API_VERIFY_DIGI_WORK_DEV || false,
    'process.env.API_VERIFY_IMAN_DEV': process.env.API_VERIFY_IMAN_DEV || false,
    'process.env.API_VERIFY_VSKT_DEV': process.env.API_VERIFY_VSKT_DEV || false,
  },
  favicon: '/faviconEcard.ico',
  // favicon1: '/faviconEcard.ico',
});