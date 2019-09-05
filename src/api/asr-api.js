import { fetch } from '@/utils/request'
import site from '@@/js/config'

//获取列表
export const asrModelList = (params) => fetch(site.base + 'asrModel/asrModelList', {
    type: 'get',
    params
});
//设置默认应用
export const setDefaultApplication = (data) => fetch(site.base + 'asrModel/setDefaultApplication', {
    type: 'post',
    data,
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
});
//替换
export const replaceAsrModel = (data) => fetch(site.base + 'asrModel/replaceAsrModel', {
    type: 'post',
    data
});
//获取未应用模型列表
export const asrModelNoApplicationList = (params) => fetch(site.base + 'asrModel/asrModelNoApplicationList', {
    type: 'get',
    params
});