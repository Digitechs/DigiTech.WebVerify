import { IRoute } from 'umi';

export const routes: IRoute[] = [
  // {
  //   path: '/login',
  //   exact: true,
  //   wrappers: ['@/layouts/UserLayout'],
  //   component: '@/pages/user/login',
  // },
  // {
  //   path: '/logout',
  //   exact: true,
  //   component: 'user/logout',
  // },
  // {
  //   path: '/reset-password',
  //   wrappers: ['@/layouts/UserLayout'],
  //   exact: true,
  //   component: 'user/resetPassword',
  // },
  {
    path: '/VerifyEcard',
    exact: true,
    component: '@/pages/VerifyEcard/list',
  },
  {
    path: '/VerifyDigiTouch',
    exact: true,
    component: '@/pages/VerifyEcard/list',
  },
  {
    path: '/VerifyBKGolf',
    exact: true,
    component: '@/pages/VerifyBKGolf/list',
  },
  {
    path: '/VerifyCLBManager',
    exact: true,
    component: '@/pages/VerifyCLBManager/list',
  },
  {
    path: '/VerifyDigiGroup',
    exact: true,
    component: '@/pages/VerifyDigiGroup/list',
  },
  {
    path: '/VerifyMiniGame',
    exact: true,
    component: '@/pages/VerifyMiniGame/list',
  },
  {
    path: '/VerifyEco/verify',
    exact: true,
    component: '@/pages/VerifyEco/list',
  },
  {
    path: '/VerifyEco/reset-password',
    exact: true,
    component: '@/pages/VerifyEco/list',
  },
  {
    path: '/VerifyDigiGroupSaaS',
    exact: true,
    component: '@/pages/VerifyDigiGroupSaaS/list',
  },
  {
    path: '/VerifyDigiGroupSaaSClient',
    exact: true,
    component: '@/pages/VerifyDigiGroupSaaSClient/list',
  },
  {
    path: '/VerifyDigiWork/verify',
    exact: true,
    component: '@/pages/VerifyDigiWork/list',
  },
  {
    path: '/VerifyDigiWork/reset-password',
    exact: true,
    component: '@/pages/VerifyDigiWork/list',
  },
  {
    path: '/VerifyIman/verify',
    exact: true,
    component: '@/pages/VerifyIman/list',
  },
  {
    path: '/VerifyIman/reset-password',
    exact: true,
    component: '@/pages/VerifyIman/list',
  },
  {
    path: '/VerifyVSKT',
    exact: true,
    component: '@/pages/VerifyVSKT/list',
  },
  // {
  //   path: '/',
  //   component: '@/layouts/BasicLayout',
  //   exact: false,
  //   wrappers: ['@/layouts/SecurityLayout'],
  //   routes: [
  //     {
  //       path: '/',
  //       redirect: '/dashboard',
  //     },
  //     {
  //       path: '/dashboard',
  //       name: 'dashboard',
  //       exact: true,
  //       icon: 'DashboardOutlined',
  //       component: '@/pages/dashboard',
  //     },
  //     {
  //       path: '/allOperator',
  //       name: 'operator',
  //       exact: false,
  //       icon: 'UserOutlined',
  //       routes: [
  //         {
  //           exact: true,
  //           path: '/allOperator/',
  //           component: '@/pages/allOperator/list',
  //           access: 'canUpdateOperator',   // access de phan quyen, setting trong access.ts
  //         },
  //       ]
  //     },
  //     {
  //       path: '/allAccount',
  //       name: 'account',
  //       exact: false,
  //       icon: 'UserOutlined',
  //       routes: [
  //         {
  //           exact: true,
  //           path: '/allAccount/',
  //           component: '@/pages/allAccount/list',
  //           access: 'canReadAccount',   // access de phan quyen, setting trong access.ts
  //         },
  //         {
  //           exact: true,
  //           path: '/allAccount/:id',
  //           component: '@/pages/allAccount/[id]',
  //         },
  //       ]
  //     },
  //     {
  //       path: '/settingPage',
  //       name: 'settingPage',
  //       exact: false,
  //       icon: 'SettingOutlined',
  //       routes: [
  //         {
  //           exact: true,
  //           path: '/settingPage/',
  //           component: '@/pages/settingPage/list',
  //           access: 'canReadAccount',   // access de phan quyen, setting trong access.ts
  //         },
  //         {
  //           exact: true,
  //           path: '/settingPage/:id',
  //           component: '@/pages/settingPage/[id]',
  //         },
  //       ]
  //     },
  //   ],
  // },
  {
    component: '404',
  },
];
