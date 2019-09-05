//统一规范 组件名单词首字母大写
const Home = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/home');
const Demo = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo/index');
const Demo1 = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo1/index');
const Demo2 = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo2/index');
const Demo3 = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo3/index');
const Demo4 = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo4/index');
const Demo5 = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo5-1/index');

const Login = () =>
    import ( /* webpackChunkName: "group-login" */ '@/views/login/login');

const Auth = () =>
    import ( /* webpackChunkName: "group-Auth" */ '@/views/login/auth');

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/demo',
        children: [
            {
                path: 'demo',
                name: 'home/demo',
                component: Demo,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: 'demo--此处在路由中设置'
                    }]
                }
            },
            {
                path: 'demo1',
                name: 'home/demo1',
                component: Demo1,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: 'demo1--此处在路由中设置'
                    }]
                }
            },
            {
                path: 'demo2',
                name: 'home/demo2',
                component: Demo2,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: 'demo2--此处在路由中设置'
                    }]
                }
            },
            {
                path: 'demo3',
                name: 'home/demo3',
                component: Demo3,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: 'demo3--此处在路由中设置'
                    }]
                }
            },
            {
                path: 'demo4',
                name: 'home/demo4',
                component: Demo4,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: 'demo4--此处在路由中设置'
                    }]
                }
            },
            {
                path: 'demo5-1',
                name: 'home/demo5-1',
                component: Demo5,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: 'demo5-1--此处在路由中设置'
                    }]
                }
            },
        ]
    },
    {
        path: '/',
        redirect: {
            path: '/home',
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        redirect: '/home',
    },
];

export default routes;