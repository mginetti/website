<template>
  <div class="container">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Navigation: () => import("./components/Navigation")
  }
};
</script>

<style>
</style>
