<template>
  <div class='home-container'>
        <IntroLayout />
        <menu-layout>
            <header-layout>
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </header-layout>
        </menu-layout>
  </div>
</template>

<script>
    import HeaderLayout from './layout/HeaderComponent.vue'
    import MenuLayout from './layout/MenuComponent.vue'
    import IntroLayout from './layout/IntroComponent.vue'
    export default {
        name: "home",
        data() {
            return {
                isCollapsed: false
            }
        },
        components: {
            HeaderLayout,
            MenuLayout,
            IntroLayout
        },
    }
</script>


<style lang="less">
    .home-container{
        height: 100%;
        background: #ebedf0;
        position: relative;
        overflow: auto;
        .ivu-layout {
            .ivu-layout {
                overflow-x: auto;
                background:rgba(235,238,242,1);
            }
        }
        .ivu-layout-sider{
             background: #272e4b;
        }
        .ivu-menu-dark{
          background-color: transparent;
        }
        .home-logo{
            width: 100%;
            height: 55px;
            line-height: 55px;
            background-color: rgba(74, 141, 241, 1);
            text-align: center;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
        }
        .ivu-layout-sider-collapsed{
            .home-logo{
                span{
                    display: none;
                }
                background: rgba(74, 141, 241, 1) url("../assets/images/slogo.png") no-repeat center center;
            }
        }
    }
</style>
