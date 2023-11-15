import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
/* eslint-disable */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Racket",
    name: "RacketView",

    component: () => import("../views/RacketView.vue"),
  },
  {
    path: "/Shuttlecock",
    name: "ShuttlecockView",

    component: () => import("../views/ShuttlecockView.vue"),
  },
  {
    path: "/addProduct",
    name: "AddproductView",

    component: () => import("../views/AddProduct.vue"),
  },
  {
    path: "/deleteProduct",
    name: "DeleteproductView",

    component: () => import("../views/DeleteProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
