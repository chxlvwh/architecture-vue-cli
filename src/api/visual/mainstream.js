import { fetch } from '@/utils/request'
import site from '@@/js/config'


export const getFlowViewByIdAPI = (data) => fetch(site.base + 'flow/getFlowViewById', {
    type: 'post',
    data
});

export const addNodeAPI = (data) => fetch(site.base + 'node/addNode', {
    type: 'post',
    data
});

// export const verifyCodeImg = (data) => fetch(site.base + 'login/verifyCodeImg', {
//     type: 'post',
//     data
// });