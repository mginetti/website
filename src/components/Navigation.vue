<template>
  <div :class="{'active':active}" class="navigation">
    <img v-if="!active" @click="active = true" src="/img/icons/hamburger.png" alt />
    <img v-if="active" @click="active = false" src="/img/icons/close.png" alt />
    <div class="navigation--menu">
      <ul>
        <li @click="active = false">
          <router-link :to="{name: 'home', hash: '#about'}">About me</router-link>
        </li>
        <li @click="active = false">
          <router-link :to="{name: 'home', hash: '#knowledge'}">Knowledge</router-link>
        </li>
        <li @click="active = false">
          <router-link :to="{name: 'home', hash: '#contact'}">Contact me</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      active: false
    };
  },
  watch: {
    active(newValue) {
      document.body.style.overflow = newValue ? "hidden" : "";
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables";
.navigation {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip-path: circle(45px at 90% 5%);
  transition: 0.4s;
  @media only screen and (min-width: 40em) {
    clip-path: circle(45px at 96.5% 5%);
  }
  img {
    height: 35px;
    width: 35px;
    position: absolute;
    top: 25px;
    right: 35px;
  }
  &--menu {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    ul {
      list-style-type: none;
      li,
      a {
        text-decoration: unset;
        color: $white;
        font-size: 35px;
        padding: 15px 25px;
      }
    }
  }
}
.active {
  background: $primary;
  clip-path: circle(100%);
}
</style>