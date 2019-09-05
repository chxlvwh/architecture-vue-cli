// Created by xining at 2019/03/20.
import Router from 'vue-router'
import store from '@/vuex/store'
import routes from './routes'
import { addHandler } from "../utils/add-handler";

// 断网检测
var NetWorkStatus = window.navigator.onLine;

const router = new Router({
    // mode: 'history',
    base: '/',
    routes
})

addHandler(window, "online", function () {
    NetWorkStatus = true;
    setTimeout(() => { // 加上定时器的目的是为了刚刚连接上网络时，vue-router.min.js还没有加载出来的，导致页面无法显示的问题
        window.location.reload();
    }, 2000)
});

addHandler(window, "offline", function () {
    NetWorkStatus = false;
    window.location.reload();
})

router.beforeEach((to, from, next) => {
    if (NetWorkStatus) {
        if (!store.state.user.userInfo && to.matched.some(r => r.meta.required)) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
            //特殊处理，用于对话管理二级菜单要显示对应
            if(to.fullPath.split('/').length == 4 && to.fullPath.split('/')[2] == 'dialogueManage') {
                setTimeout(()=> {
                    document.getElementsByClassName('ivu-breadcrumb-item-link')[1].innerText = localStorage.getItem('sceneName');
                },100);
            }
        }
    } else {
        Vue.prototype.$Message.error('网络异常，请检查网络连接是否成功！');
    }
});

export default router
