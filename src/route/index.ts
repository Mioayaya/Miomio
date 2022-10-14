import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/HomeView.vue'),    
  },
  {
    path: '/test',
    component: () => import('../views/test/TestView.vue'),
    // redirect: '/test/test1',
    children: [
      {
        path: '',
        component: () => import('../views/test/c-views/TestOneView.vue')
      },
      {
        path: 'test1',
        component: () => import('../views/test/c-views/TestOneView.vue')
      },
      {
        path: 'test2',
        component: () => import('../views/test/c-views/TestTwoView.vue')
      }
    ],
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
