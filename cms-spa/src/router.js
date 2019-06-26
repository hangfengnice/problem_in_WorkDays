import VueRouter from "vue-router";
import Vue from 'vue'
import Home from './components/home/Home.vue'
import Register from './components/user/Register.vue'
import Login from './components/user/Login.vue'


Vue.use(VueRouter)

const router = new VueRouter({

   routes: [
    {path: "/home", component: Home},
    {path: "/register", component: Register},
    {path: "/login", component: Login}
  
  ]
});

export default router;
