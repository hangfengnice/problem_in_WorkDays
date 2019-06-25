<template>
  <div>
    <h1 class="page-header">dashborad</h1>
    <DashBorad></DashBorad>
    <h2 class="sub-header">section title</h2>
    <HomeList></HomeList>
  </div>
</template>

<script>
import DashBorad from "./DashBorad.vue";
import HomeList from "./HomeList.vue";

export default {
  components: {
    DashBorad,
    HomeList
  },
  creaded() {}
};
</script>

<style>
</style>
