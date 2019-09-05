import { fetch } from '@/utils/request'
import site from '@@/js/config'

//获取用户信息
export const fetchCustomInfo = (data) => fetch(site.base + 'user/getUserInfo', {
    type:'get',
    data
});

//修改用户名
export const updateUserName = (data) => fetch(site.base + '/user/updateRealName', {
    type:'post',
    data
});

//修改密码
export const updatePassword = (data) => fetch(site.base + '/user/updatePassword', {
    type:'post',
    data
});

//获取企业信息
export const getUserCompanyInfo = (data) => fetch(site.base + '/user/getUserCompanyInfo', {
    type:'post',
    data
});