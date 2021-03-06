const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      authRequired: false
    },
    component: () => import('@/views/home/index')
  },
  {
    path: '/baseinfo',
    name: 'baseinfo',
    meta: {
      title: '个人信息',
      authRequired: false
    },
    component: () => import('@/views/baseinfo/index')
  },
  {
    path: '/submit',
    name: 'submit',
    meta: {
      title: '简历提交',
      authRequired: false
    },
    component: () => import('@/views/submit/index')
  },
  {
    path: '/download',
    name: 'download',
    meta: {
      title: '材料下载',
      authRequired: false
    },
    component: () => import('@/views/download/index')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index')
  }
];

export default routes;
