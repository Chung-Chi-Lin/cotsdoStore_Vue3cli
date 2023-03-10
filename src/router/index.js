import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // User
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/UserHome.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/UserListProducts.vue'),
  },
  {
    path: '/product/:productId',
    component: () => import('../views/UserDetailProduct.vue'),
  },
  {
    path: '/location',
    component: () => import('../views/UserLocation.vue'),
  },
  {
    path: '/adopt',
    component: () => import('../views/UserAdoptPage.vue'),
  },
  // checkoutCart
  {
    path: '/user',
    component: () => import('../views/UserCheckout.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/UserOrder.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckOrder.vue'),
      },
    ],
  },
  // background
  {
    path: '/dashboard',
    component: () => import('../views/BackgroundBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/BackgroundProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/BackgroundOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/BackgroundCoupons.vue'),
      },
    ],
  },
  // login
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'layout',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
