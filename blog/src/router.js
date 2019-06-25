import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import Crud from './components/crud/List.vue'
import CrudNew from './components/crud/New.vue'

const router = new VueRouter({

  routes: [
   {path: "/", component: Home},
   {path: "/crud", component: Crud},
   {path: '/crud/new', component: CrudNew}

  ]
})

export default router