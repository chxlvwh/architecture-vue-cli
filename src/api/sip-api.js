import {
    fetch
} from '@/utils/request'
import site from '@@/js/config'

// 新增
export const addSipLine = (data) => fetch(site.base + 'sip/addSipLine', {
    type: 'post',
    data
});
// 编辑
export const updateSipLine = (data) => fetch(site.base + 'sip/updateSipLine', {
    type: 'post',
    data
});
// 删除
export const deleteSipLine = (data) => fetch(site.base + 'sip/deleteSipLine', {
    type: 'post',
    data,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});
// 线路列表
export const sipLineList = (data) => fetch(site.base + 'sip/sipLineList', {
    type: 'post',
    data
});
// 变更线路场景
export const updateSipLineScene = (data) => fetch(site.base + 'sip/updateSipLineScene', {
    type: 'post',
    data,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});