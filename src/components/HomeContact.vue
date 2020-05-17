<template>
  <div class="contact container--main">
    <div class="contact--title">
      <h2>Contact me</h2>
    </div>
    <div class="contact--contacts">
      <div class="link">
        <img src="/img/icons/hand-right.png" alt />
        <a href="#" class="text-primary">Github</a>
        <img src="/img/icons/hand-left.png" alt />
      </div>
      <div class="link">
        <img src="/img/icons/hand-right.png" alt />
        <a href="#" class="text-primary">Linkedin</a>
        <img src="/img/icons/hand-left.png" alt />
      </div>
      <div class="link">
        <img src="/img/icons/hand-right.png" alt />
        <a href="#" class="text-primary">Github</a>
        <img src="/img/icons/hand-left.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContact"
};
</script>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &--title {
    padding-bottom: 60px;
    h2 {
      font-size: 50px;
    }
  }
  &--contacts {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    .link {
      display: flex;
      align-items: center;
      font-size: 25px;
      padding-bottom: 30px;
      a {
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        text-decoration: none;
      }
    }
  }
}
</style>