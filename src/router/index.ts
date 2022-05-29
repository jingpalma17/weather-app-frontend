import { createRouter, createWebHistory, RouterView } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import { authGuard } from "@auth0/auth0-vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: RouterView,
      children: [
        {
          path: "/dashboard",
          name: "home",
          component: () => import('@/views/HomeView.vue'),
        },
      ],
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
