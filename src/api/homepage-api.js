import { fetch } from '@/utils/request'
import site from '@@/js/config'

export const callIntentStatistics = (data) => fetch(site.base + 'callIntent/callIntentStatistics', {
    type: 'post',
    data
});

export const callSituationStatistics = (data) => fetch(site.base + 'callSituation/callSituationStatistics', {
    type: 'post',
    data
});

export const callIntentStatisticsPortrait = (data) => fetch(site.base + 'callIntent/callIntentStatisticsPortrait', {
    type: 'post',
    data
});

export const getPublishedScene = (data) => fetch(site.base + 'scene/getPublishedScene', {
    type: 'post',
    data
});
// 获取task列表
export const getTaskList = (data) => fetch(site.base + 'task/list', {
    type: 'get'
});