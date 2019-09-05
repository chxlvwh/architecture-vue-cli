<template>
    <div class="intro-component-container">
        <div class="intro-masker"></div>
        <div class="intro-menu"></div>
    </div>
</template>

<script>
    export default {
        name: "IntroComponent",
        data() {
            return {}
        },
        components: {},
        methods: {},
        computed: {},
        created() {
        }
    }
</script>

<style lang="less">
    .intro-component-container{
        position: relative;
        display: none;
        .intro-masker{
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: fixed;
            opacity: .5;
            z-index: 999999;
            background-color: #000;
            transition: all 0.3s ease-out;
        }
        .intro-menu{
            position: absolute;
            width: 738px;
            height: 30px;
            top: 149px;
            left: 591px;
            z-index: 9999998;
            background-color: rgba(255,255,255,.9);
            border: 1px solid rgba(0,0,0,.5);
            border-radius: 4px;
            box-shadow: 0 2px 15px rgba(0,0,0,.4);
        }
    }
</style>