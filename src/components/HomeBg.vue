<template>
    <div class="home-bg">
        <div v-for="n in squareNumber" :key="n" :ref="`square-${n}`" class="home-bg--square"></div>
    </div>
</template>

<script>
const SQUARE_NUMBER = 10
export default {
    name: 'HomeBg',
    data() {
        return {
            squareNumber: SQUARE_NUMBER
        }
    },
    mounted() {
        this.fetchPosition()
    },
    methods: {
        fetchPosition() {
            console.log(this.$refs)
            for (let index = 1; index <= SQUARE_NUMBER; index++) {
                this.$refs[`square-${index}`][0].style.top = `${this.randomNumber()}px`
                this.$refs[`square-${index}`][0].style.left = `${this.randomNumber()}px`
                this.$refs[`square-${index}`][0].style.transform = `rotate(${this.randomNumber()}deg)`
                this.$refs[`square-${index}`][0].style.height = `${this.setSize()}px`
                this.$refs[`square-${index}`][0].style.width = this.$refs[`square-${index}`][0].style.height
            }
        },
        randomNumber() {
            return Math.floor(Math.random() * window.innerHeight)
        },
        setSize() {
            let toReturn = this.randomNumber(),
                height = window.innerHeight,
                width = window.innerWidth 
            if (toReturn > height / 3.5) {
                return toReturn  / 3.5                
            }
            if (toReturn > width / 3.5) {
                return toReturn/3.5                
            }
            return toReturn
        }
    }
}
</script>

<style lang="scss">
@import "../assets/variables";

    .home-bg {
        position: fixed;
        z-index: -1;
        left: 0;
        right: 0;
        top: 0;
        height: 100%;

        &--square {
            position: absolute;
            border: 2px solid $primary;
            opacity: 0.6;
        }
    }
</style>