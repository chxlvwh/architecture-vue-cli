import {
    fetch
} from '@/utils/request'
import site from '@@/js/config'

// 获取业务流程知识库
export const getSmsLogListApi = (data) => fetch(site.base + 'shortMessage/getSmsLogList', {
    type: 'post',
    data
});
//短信模板list
export const getMessageListApi = (data) => fetch(site.base + 'shortMessage/getMessageList', {
    type: 'post',
    data
});
//添加短信模板
export const addSMSTemplateApi = (data) => fetch(site.base + 'shortMessage/addSMSTemplate', {
    type: 'post',
    data
});
//根据id 获取模板信息
export const getSmsTemplateByIdAPI = (params) => fetch(site.base + 'shortMessage/getSmsTemplateById', {
    type: 'get',
    params
});
//编辑短信
export const updateSMSTemplateApi = (data) => fetch(site.base + 'shortMessage/updateSMSTemplate', {
    type: 'post',
    data
});
//提交审批
export const submitAuditApi = (data) => fetch(site.base + 'shortMessage/submitAudit', {
    type: 'post',
    data
});
//删除模板
export const deleteSMSTemplateApi = (data) => fetch(site.base + 'shortMessage/deleteSMSTemplate', {
    type: 'post',
    data
});
//获取审核通过可以使用的短信模板
export const getAvailableSmsTemplateAPI = (params) => fetch(site.base + 'shortMessage/getAvailableSmsTemplate', {
    type: 'get',
    params
});