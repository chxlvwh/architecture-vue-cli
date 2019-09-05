import { fetch } from '@/utils/request'
import site from '@@/js/config'


export const getPublicKey = (data) => fetch(site.base + 'login/getPublicKey', {
    type: 'get',
    data
});

export const doLogin = (data) => fetch(site.base + 'login/doLogin', {
    type: 'post',
    data
});

export const verifyCodeImg = (data) => fetch(site.base + 'login/verifyCodeImg', {
    type: 'post',
    data
});