const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Guest.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue')
  },
  { 
    path: '/admin', 
    component: () =>import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'homeAdmin',
        alias: 'homeAdmin',
        name: 'homeAdmin',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'guest',
        name: 'guest',
        component: () => import('@/pages/Guest.vue')
      },
      {
        path: 'dev/getting-started',
        name: 'dev-getting-started',
        component: () => import('@/pages/developments/GettingStarted.vue')
      },
      {
        path: 'permohonan',
        name: 'permohonan',
        component: () => import('@/pages/developments/Form/index.vue')
      },
      {
        path: 'permohonan/:id',
        component: () => import('@/pages/developments/Form/index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/developments/tables/Index.vue')
      },
      {
        path: 'listIzin',
        name: 'listIzin',
        component: () => import('@/pages/developments/tables/tablesIzin.vue')
      },{
        path: 'listStatus',
        name: 'listStatus',
        component: () => import('@/pages/developments/tables/tablesStatus.vue')
      },
      {
        path: 'formstatus/:id',
        component: () => import('@/pages/developments/Form/status.vue')
      },
      {
        path: 'formstatus',
        name: 'formstatus',
        component: () => import('@/pages/developments/Form/status.vue')
      },
      {
        path: 'formIzin/:id',
        component: () => import('@/pages/developments/Form/izin.vue')
      },
      {
        path: 'formIzin',
        name: 'formIzin',
        component: () => import('@/pages/developments/Form/izin.vue')
      }
      
    ]
  },
  
]
export default routes