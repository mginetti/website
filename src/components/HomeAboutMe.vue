<template>
  <div class="container--main about-me">
    <div class="about-me--job">
      <span>Junior</span>
      <br />
      <span class="text-primary">Web-Developer</span>
    </div>
    <div class="about-me--location">
      <span class="text-primary">Italy</span>
      <span>, Verona</span>
    </div>
    <div class="about-me--education">
      <span class="text-primary">Education:</span>
      <br />
      <div class="list">
        <p>
          - ITIS G. Marvoni
          <small>(VR)</small>
        </p>
        <p>- ITS LAST - UX</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAboutMe"
};
</script>

<style lang="scss">
.about-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 40em) {
    justify-content: center;
  }
  @media only screen and (min-width: 40em) {
    align-items: center;
  }
  &--job,
  &--location,
  &--education {
    font-size: 2.5rem;
    padding-bottom: 60px;
  }
  &--location {
    text-align: right;
  }
  &--education {
    .list {
      font-size: 1.5rem;
      text-align: right;
    }
  }
}
</style>