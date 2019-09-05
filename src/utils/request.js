
import axios from 'axios'
import store from '@/vuex/store'
import { stringify } from 'qs'
import { Message } from "iview";
import router from "../router";

// 实例化请求
const service = axios.create({
    baseURL: '',
    timeout: 30000
})

// http request 拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers.token = store.getters.token;
        }
        return config;
    },
    err => {
        console.log(err); // debug
        return Promise.reject(err);
    });

// http response 拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            Message.error(error.data.msg || '接口有误，请稍后再操作');
        }
        return Promise.reject(error.response)
    }
);

// 封装请求
export function fetch(url, options) {
    let opt = options || {}
    return new Promise((resolve, reject) => {
        service({
            method: opt.type || 'post',
            url: url,
            params: opt.params || {},
            // 判断是否有自定义头部，以对参数进行序列化。不定义头部，默认对参数序列化为查询字符串。

            data: (opt.headers && opt.headers['Content-Type'].indexOf('x-www-form-urlencoded') > 0 ? stringify(opt.data) : opt.data) || {},
            responseType: opt.dataType || 'json',
            // 设置默认请求头
            headers: opt.headers || {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            //设置超时时间
            timeout: opt.timeout || 30000
        }).then(response => {
            if (response.data.status === 1000) {
                resolve(response.data)
            } else {
                switch (response.data.status) {

                    // 账号登录过期
                    case 2004:
                        sessionStorage.setItem('loginout_number', parseInt(sessionStorage.getItem('loginout_number')) + 1);
                        let number = parseInt(sessionStorage.getItem('loginout_number'));
                        if (number == 1) {
                            Message.error({
                                content: response.data && response.data.msg || '系统错误,请尝试重新登录',
                                onClose: () => {
                                    if (router.currentRoute.path.indexOf('login') == -1) {
                                        router.replace({
                                            path: '/login',
                                            query: {
                                                redirect: router.currentRoute.path
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        break;
                    default:
                        Message.error(response.data && response.data.msg || '接口有误，请稍后再操作');
                        reject(response.data);
                }
            }
        }).catch(error => {
            reject(error)
        })
    })
}

