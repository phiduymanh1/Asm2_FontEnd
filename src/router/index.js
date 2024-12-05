// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "sign-in",
      component: () => import("../pages/sign.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/tcn",
      name: "tcn",
      component: () => import("../pages/trang_ca_nhan.vue"),
      props: true 
    }
  ]
});

export default router;
