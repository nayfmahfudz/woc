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
        path: 'inputposDA',
        name: 'inputposDA',
        component: () => import('@/pages/developments/tables/inputPosDA.vue')
      },
      {
        path: 'listposDA',
        name: 'listposDA',
        component: () => import('@/pages/developments/tables/dataTablePosDA.vue')
      },
      {
        path: 'listposKL',
        name: 'listposKL',
        component: () => import('@/pages/developments/tables/dataTablePosKL.vue')
      },
      {
        path: 'listposKA',
        name: 'listposKA',
        component: () => import('@/pages/developments/tables/dataTablePosKA.vue')
      },
      {
        path: 'liveDataCH',
        name: 'liveDataCH',
        component: () => import('@/pages/developments/tables/liveDataCH.vue')
      },
      {
        path: 'liveDataAwlr',
        name: 'liveDataAwlr',
        component: () => import('@/pages/developments/tables/liveDataAwlr.vue')
      },
      {
        path: 'listpos',
        name: 'listpos',
        component: () => import('@/pages/developments/tables/dataTablePos.vue')
      },
      {
        path: 'inputdatapos',
        name: 'inputdatapos',
        component: () => import('@/pages/developments/tables/inputDatapos.vue')
      },
      {
        path: 'inputdataposDA',
        name: 'inputdataposDA',
        component: () => import('@/pages/developments/tables/inputDataposDA.vue')
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