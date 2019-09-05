<template>
    <div class="title-component-container">
        <div class="user-wrap">
            <img src="../../assets/images/head.jpg">
            <Poptip trigger="hover" title="" class="user-folder" v-model="folderShow">
                {{ userName }}
                <Icon type="md-arrow-dropdown" />
                <div slot="content" class="user-wrap-content">
                    <p class="login-out" @click="handleLoginOut">退出</p>
                </div>
            </Poptip>
        </div>
    </div>
</template>

<script>
    export default {
        name: "titleComponent",
        data() {
            return {
                folderShow:false,
            }
        },
        computed: {
            userName() {
                return this.$store.getters.userName
            },
        },
        methods: {
            handleLoginOut(){
                // 清除登录状态
                sessionStorage.removeItem('userToken');
                this.$store.dispatch('userToken', null);
                this.$router.push({
                    path:'/login'
                });
                // 清除长连接
                this.websocketApi.closeConnect();
                this.$Notice.destroy();
            },
        },
        mounted() {
            this.websocketApi.initWebSocket();//登录成功建立长链接
        }
    }
</script>

<style lang="less">
.title-component-container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    height: 55px;
    line-height: 55px;
    &.hide {display: none;}
    .user-wrap{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right: 30px;
        color: #57626D;
        >img{
            height: 30px;
            width: auto;
            margin-right: 15px;
            border-radius: 50%;
        }
        .user-folder{
            .login-out{
                cursor: pointer;
            }
            .user-wrap-content{
                padding: 0 15px;
                text-align: center;
            }
        }
        .ivu-icon{
            font-size: 22px;
            color: #888;
        }
    }
}
</style>
