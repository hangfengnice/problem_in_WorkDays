<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <div class="container-fluid">
      <div class="row">
        <AppAside></AppAside>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/common/Navbar.vue'
import AppAside from './components/common/Aside.vue'


export default {
 components: {
    AppNavbar,
   AppAside
 }
}
</script>

<style scoped>

</style>
