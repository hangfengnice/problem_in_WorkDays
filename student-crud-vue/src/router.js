import VueRouter from "vue-router";
import Home from "./components/home/Home.vue";
import Crud from "./components/crud/List.vue";
import CrudNew from "./components/crud/New.vue";
import CrudUpdata from "./components/crud/Updata.vue";

const router = new VueRouter({
  linkActiveClass: "active",

  routes: [
    { path: "/", component: Home },
    { path: "/crud", component: Crud },
    { path: "/crud/new", component: CrudNew },
    { path: "/crud/updata", component: CrudUpdata }
  ]
});

export default router;
