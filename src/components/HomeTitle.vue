<template>
  <div class="container--main title">
    <div class="title--content-title">
      <div class="title--hi">
        <span>HI</span>
      </div>
      <div class="title--title">
        <span>I'm</span>
        <br />
        <span class="text-primary">Matteo</span>
      </div>
    </div>
    <div class="title--image">
      <img src="/img/image.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTitle"
};
</script>

<style lang="scss" >
@import "../assets/variables";

.title {
  @media only screen and(min-width: 40em) {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title {
      &--content-title {
        width: 40%;
      }
      &--hi {
        font-size: 475px;
      }
      &--image {
        width: 40%;
        padding: 24px;
        text-align: center;
        img {
          height: 100%;
          width: auto;
        }
      }
    }
  }
  &--content-title {
    position: relative;
    flex-basis: 50%;
    height: 50%;
    display: flex;
    align-items: center;
  }
  &--hi {
    position: absolute;
    z-index: -1;
    width: 100%;
    font-size: 275px;
    text-align: center;
    color: $grey;
  }
  &--title {
    margin: auto;
    width: fit-content;
    span {
      font-size: 50px;
    }
  }
  &--image {
    height: 50%;
    flex-basis: 50%;
    padding: 44px;
    img {
      width: 100%;
    }
  }
}
</style>