import {
    fetch
} from '@/utils/request'
import site from '@@/js/config'

// 获取业务流程知识库
export const getBusinessList = (data) => fetch(site.base + 'scene/getBusinessList', {
    type: 'post',
    data
});
// 获取所有意图列表
export const getIntentSemanticList = (data) => fetch(site.base + 'scene/getIntentSemanticList', {
    type: 'post',
    data
});
// 添加意图列表
export const addAssociatedIntentList = (data) => fetch(site.base + 'scene/addAssociatedIntentList', {
    type: 'post',
    data
});
// 获取关联意图列表
export const getAssociatedIntentList = (data) => fetch(site.base + 'scene/getAssociatedIntentList', {
    type: 'post',
    data
});
// 删除关联意图列表
export const deleteAssociatedIntentList = (data) => fetch(site.base + 'scene/deleteAssociatedIntentList', {
    type: 'post',
    data
});


//参数管理
//获取接口参数列表 这个是总的三个列表的数据
export const getApiParamListAPI = (params) => fetch(site.base + 'apiParam/getApiParamList', {
    type: 'get',
    params
});
//获取参数列表 这个是单独查询一个列表
export const paramListAPI = (data) => fetch(site.base + 'param/paramList', {
    type: 'post',
    data
});
//获取参数详情
export const getParamInfoAPI = (params) => fetch(site.base + 'param/getParamInfo', {
    type: 'get',
    params
});
//添加参数
export const addParamAPI = (data) => fetch(site.base + 'param/addParam', {
    type: 'post',
    data
});
//修改编辑参数
export const editParamAPI = (data) => fetch(site.base + 'param/editParam', {
    type: 'post',
    data
});


//接口管理
//通用设置-接口列表
export const commonApiListAPI = (data) => fetch(site.base + 'commonApi/commonApiList', {
    type: 'post',
    data
});
//接口
//添加接口
export const addCommonApiAPI = (data) => fetch(site.base + 'commonApi/addCommonApi', {
    type: 'post',
    data
});
//编辑接口
export const updateCommonApiAPI = (data) => fetch(site.base + 'commonApi/updateCommonApi', {
    type: 'post',
    data
});
//查看接口详情
export const getCommonApiByIdAPI = (params) => fetch(site.base + 'commonApi/getCommonApiById', {
    type: 'get',
    params
});
//添加接口参数
export const addParamInfoAPI = (data) => fetch(site.base + 'apiParam/addParamInfo', {
    type: 'post',
    data
});
//查看接口参数
export const getApiParamInfoAPI = (data) => fetch(site.base + 'apiParam/getParamInfo', {
    type: 'post',
    data
});
//编辑接口参数
export const updateParamInfoAPI = (data) => fetch(site.base + 'apiParam/updateParamInfo', {
    type: 'post',
    data
});
//删除接口参数
export const deleteParamInfoAPI = (data) => fetch(site.base + 'apiParam/deleteParamInfo', {
    type: 'post',
    data
});
export const xmlLocalUpload = site.base + 'xml/uploadXmlTemplate';