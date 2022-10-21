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
        path: 'inputpos',
        name: 'inputpos',
        component: () => import('@/pages/developments/tables/inputPos.vue')
      },
      {
        path: 'listpos',
        name: 'listpos',
        component: () => import('@/pages/developments/tables/dataTablePos.vue')
      },{
        path: 'inputdatapos',
        name: 'inputdatapos',
        component: () => import('@/pages/developments/tables/inputDatapos.vue')
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