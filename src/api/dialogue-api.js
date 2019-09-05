import {
    fetch
} from '@/utils/request'
import site from '@@/js/config'

// 获取场景
export const getSceneList = (data) => fetch(site.base + 'scene/getSceneList', {
    type: 'get',
    data
});
// 上线
export const onLine = (data) => fetch(site.base + 'scene/onLine', {
    type: 'post',
    data
});
// 下线
export const offLine = (data) => fetch(site.base + 'scene/offLine', {
    type: 'post',
    data
});
// 更改场景名称
export const updateSceneName = (data) => fetch(site.base + 'scene/updateSceneName', {
    type: 'post',
    data
});
// 删除场景
export const deleteScene = (data) => fetch(site.base + 'scene/deleteScene', {
    type: 'post',
    data
});
// 添加场景
export const addScene = (data) => fetch(site.base + 'scene/addScene', {
    type: 'post',
    timeout: 600000,
    data
});
// 复制场景
export const copyScene = (data) => fetch(site.base + 'scene/copyScene', {
    type: 'post',
    data
});
