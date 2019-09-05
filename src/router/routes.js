//统一规范 组件名单词首字母大写
const Home = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/home');
const HomePage = () =>
    import ( /* webpackChunkName: "group-home" */ '@/views/demo/index');

const Login = () =>
    import ( /* webpackChunkName: "group-login" */ '@/views/login/login');

const Auth = () =>
    import ( /* webpackChunkName: "group-Auth" */ '@/views/login/auth');

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/homepage',
        children: [{
                path: 'homepage',
                name: 'home/homepage',
                component: HomePage,
                meta: {
                    required: true,
                    title: [{
                        mainMenu: '首页--此处在路由中设置'
                    }]
                }
            },
        ]
    }
];

export default routes;