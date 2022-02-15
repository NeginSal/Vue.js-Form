import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import CreateForms from "../views/CreateForms.vue";
import FormDetails from "../views/forms/FormDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forms/:id",
    name: "FormDetails",
    component: FormDetails,
  },
  {
    path: "/create",
    name: "CreateForms",
    component: CreateForms,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
