import { fetch } from '@/utils/request'
import site from '@@/js/config'

export const getFlowViewByIdAPI = (data) => fetch(site.base + 'flow/getFlowViewById', {
    type: 'post',
    data
});

export const createNodeAPI = (data) => fetch(site.base + 'node/addNode', {
    type: 'post',
    data
});
export const createLinkAPI = (data) => fetch(site.base + 'node/addLink', {
    type: 'post',
    data
});

export const deleteNodeAPI = (data) => fetch(site.base + 'node/deleteNode', {
    type: 'post',
    data
});
export const deleteLinkAPI = (data) => fetch(site.base + 'node/deleteLink', {
    type: 'post',
    data
});
//更新画布节点位置
export const updateNodeLocationAPI = (data) => fetch(site.base + 'node/updateNodeLocation', {
    type: 'post',
    data
});