<template>
  <div class="knowledge container--main">
    <div class="knowledge--knowledge">
      <h2 class="title">Knowledge:</h2>
      <div class="between">
        <p class="text-primary">JS</p>
        <p class="text-primary">VueJS</p>
      </div>
      <p class="text-primary">NodeJS</p>
      <div class="between">
        <p class="text-primary">Sass</p>
        <p class="text-primary">Git</p>
      </div>
    </div>
    <div class="knowledge--interests">
      <h2 class="title">Interests:</h2>
      <p class="text-primary">Python</p>
      <p class="right text-primary">Cyber Security</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeKnowledge"
};
</script>

<style lang="scss">
.knowledge {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &--knowledge,
  &--interests {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    .title {
      font-size: 3.1rem;
    }
    .between {
      display: flex;
      justify-content: space-between;
    }
    p {
      padding: 15px 25px;
      font-size: 2em;
      font-weight: 600;
    }
  }
  &--knowledge {
    padding-bottom: 60px;
    p {
      text-align: center;
    }
  }
  &--interests {
    .right {
      text-align: right;
    }
  }
}

@media only screen and (min-width: 40em) {
  .knowledge {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5%;
    &--knowledge,
    &--interests {
      max-width: 35%;
      .title {
        padding-bottom: 15px;
      }
    }
  }
}
</style>
