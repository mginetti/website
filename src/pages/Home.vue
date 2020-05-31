<template>
  <div class="website container">
    <home-title></home-title>
    <home-about-me id="about"></home-about-me>
    <home-knowledge id="knowledge"></home-knowledge>
    <home-contact id="contact"></home-contact>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    HomeTitle: () => import("../components/HomeTitle"),
    HomeAboutMe: () => import("../components/HomeAboutMe"),
    HomeKnowledge: () => import("../components/HomeKnowledge"),
    HomeContact: () => import("../components/HomeContact")
  }
};
</script>

<style lang="scss">
@import "../assets/variables";
</style>