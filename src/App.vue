<template>
  <div class="container">
    <home-bg></home-bg>
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HomeBg: () => import("./components/HomeBg"),
    Navigation: () => import("./components/Navigation")
  }
};
</script>
