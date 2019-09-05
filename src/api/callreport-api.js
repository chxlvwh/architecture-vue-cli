import { fetch } from '@/utils/request'
import site from '@@/js/config'

// 获取呼叫报表
export const getCallReportList = (data) => fetch(site.base + 'callSituation/getCallReportList', {
    type: 'post',
    data
});

// 获取统计报表
export const getCallIntentStatisticsStatement = (data) => fetch(site.base + 'callIntent/getCallIntentStatisticsStatement', {
    type: 'post',
    data
});

// 导出
export const exportCallReportList = (data) => fetch(site.base + 'callSituation/exportCallReportList', {
    type: 'post',
    data
});