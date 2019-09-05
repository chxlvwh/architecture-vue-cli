import { fetch } from '@/utils/request'
import site from '@@/js/config'

export const getCallRecordById = (data) => fetch(site.base + 'callRecord/getCallRecordById.do', {
    type: 'post',
    data
});

export const insertFollowRecord = (data) => fetch(site.base + 'callCenter/insertFollowRecord', {
    data
});

export const followRecordList = (data) => fetch(site.base + 'callCenter/getFollowRecordByWorkOrderId', {
    data
});

export const updateRemarks = (data) => fetch(site.base + 'workOrder/updateRemarks', {
    data
});

export const updateIntentionLevel = (data) => fetch(site.base + 'workOrder/updateIntentionLevel', {
    data
});

export const updateTag = (data) => fetch(site.base + 'workOrder/updateTag', {
    data
});

export const updateFocus = (data) => fetch(site.base + 'workOrder/updateFocus', {
    data
});

export const getCallLogList = (data) => fetch(site.base + 'call/getManualCallLogList', {
    data
});