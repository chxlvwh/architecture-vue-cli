import { fetch } from '@/utils/request'
import site from '@@/js/config'

export const getRecordLog = (data) => fetch(site.base + 'callLog/getCallLogList', {
    type: 'post',
    data
});
export const getRecordLogDetail = (data) => fetch(site.base + 'callLog/getCallLogDetail', {
    type: 'post',
    data
});
export const exportCallRecord = (data) => fetch(site.base + 'callLog/exportCallRecord', {
    type: 'post',
    data
});
