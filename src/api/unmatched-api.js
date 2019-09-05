import { fetch } from '@/utils/request'
import site from '@@/js/config'
// 列表
export const getUnmatchedList = (data) => fetch(site.base + 'mismatchIntent/page', {
    type: 'post',
    data
});
// 删除
export const deleteUnmatchedItem = (data) => fetch(site.base + 'mismatchIntent/delete', {
    type: 'post',
    data
});
// 导出
export const exportUnmatchedList = (data) => fetch(site.base + 'mismatchIntent/export', {
    type: 'post',
    data
});