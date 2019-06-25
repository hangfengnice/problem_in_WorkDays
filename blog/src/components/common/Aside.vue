<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to='/'  tag='li'><a href="">home</a></router-link>
    
      <router-link to='/crud' tag='li'><a href="">crud</a></router-link>


    </ul>
 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-sidebar{
  margin-top: 50px;
}
</style>
