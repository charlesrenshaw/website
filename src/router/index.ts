import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "About Us",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/our-people",
      name: "Our People",
      component: () => import("../views/OurPeople.vue"),
    },
    {
      path: "/expertise",
      name: "Our Expertise",
      component: () => import("../views/OurExpertise.vue"),
    },
    {
      path: "/resources",
      name: "Resources",
      component: () => import("../views/Resources.vue"),
    },
    {
      path: "/articles/:slug",
      name: "Article",
      component: () => import("../views/ArticleView.vue"),
    },
  ],
});

export default router;
