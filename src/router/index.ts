import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/HomeView.vue'),
      beforeEnter: authGuard,
    },
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

export default router;
