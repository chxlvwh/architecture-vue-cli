import { fetch } from '@/utils/request'
import site from '@@/js/config'

//开始节点
export const startDetailApi = (data) => fetch(site.base + 'node/getNodeDetail', {
    type: 'post',
    data
});
//交互节点
export const interDetailAPi = (data) => fetch(site.base + 'node/getInteractiveNode', {
    type: 'post',
    data
});
//子流程节点
export const subProcessDetailAPI = (data) => fetch(site.base + 'node/getSubFlowNode', {
    type: 'post',
    data
});
//录入节点
export const inputDetailAPI = (data) => fetch(site.base + 'node/getEntryNode', {
    type: 'post',
    data
});
//转人工节点
export const laborDetailAPI = (data) => fetch(site.base + 'node/getCustomerServiceNodeInfo', {
    type: 'post',
    data
});
//结束节点
export const endDetailAPI = (data) => fetch(site.base + 'node/getEndNode', {
    type: 'post',
    data
});


//common
//关联接口 所有对应的接口名称列表
export const getCommonApiListAPI = (data) => fetch(site.base + 'commonApi/getCommonApiList', {
    type: 'post',
    data
});
//获取接口返回的结果
export const getResultValueAPI = (data) => fetch(site.base + 'commonApi/getResultValue', {
    type: 'post',
    data
});
//删除子节点
export const deleteChildNodeAPI = (data) => fetch(site.base + 'node/deleteChildNode', {
    type: 'post',
    data
});
//修改节点标题
export const updateTitleAPI = (data) => fetch(site.base + 'node/updateTitle', {
    type: 'post',
    data
});



//业务流程
//新增
export const addFlowAPI = (data) => fetch(site.base + 'flow/add', {
    type: 'post',
    data
});
//重命名
export const updateFlowAPI = (data) => fetch(site.base + 'flow/update', {
    type: 'post',
    data
});
//获取语义列表
export const listFlowAPI = (params) => fetch(site.base + 'flow/list', {
    type: 'get',
    params
});

//删除当前业务流程
export const deleteFlowAPI = (data) => fetch(site.base + 'flow/delete', {
    type: 'post',
    data
});




//交互节点
//话术配置
export const updateNodeDynamicAudioAPI = (data) => fetch(site.base + 'node/updateNodeDynamicAudio', {
    type: 'post',
    data
});
//更新节点是否等待回复
export const updateIsCollectParamAPI = (data) => fetch(site.base + 'node/updateIsCollectParam', {
    type: 'post',
    data
});
//更新是否有分支
export const updateHaveBranchAPI = (data) => fetch(site.base + 'node/updateHaveBranch', {
    type: 'post',
    data
});
//点击加号获取分支详情内容
export const getBranchDetailByNodeIdAPI = (data) => fetch(site.base + 'node/getBranchDetailByNodeId', {
    type: 'post',
    data
});
//添加子节点
export const addChildNodeAPI = (data) => fetch(site.base + 'node/addChildNode', {
    type: 'post',
    data
});

//子流程节点
//编辑子流程绑定流程
export const nodeBindSubIntentAPI = (data) => fetch(site.base + 'node/nodeBindSubIntent', {
    type: 'post',
    data
});

//获取子流程语义列表
export const childNodeListFlowAPI = (params) => fetch(site.base + 'flow/nodeChildFlowList', {
    type: 'get',
    params
});

//更新收参接口
export const updateInteractiveApiIdAPI = (data) => fetch(site.base + 'node/updateInteractiveApiId', {
    type: 'post',
    data
});
//更新节点ASR模型
export const updateNodeModelAPI = (data) => fetch(site.base + 'node/updateNodeModel', {
    type: 'post',
    data
});
//更新归化类型
export const updateNormalizeTypeAPI = (data) => fetch(site.base + 'node/updateNormalizeType', {
    type: 'post',
    data
});
//更新清参数列表
export const updateCleanedParamsAPI = (data) => fetch(site.base + 'node/updateCleanedParams', {
    type: 'post',
    data
});


//更新短信模板
export const updateSmSTemplateAPI = (data) => fetch(site.base + 'node/updateSmSTemplate', {
    type: 'post',
    data
});








//高级设置
//更新交互方式
export const updateInputTypeAPI = (data) => fetch(site.base + 'node/updateInputType', {
    type: 'post',
    data
});
//修改打断方式
export const updateBreakWayAPI = (data) => fetch(site.base + 'node/updateBreakWay', {
    type: 'post',
    data
});
//词槽里面的参数列表
export const dmParamListAPI = (params) => fetch(site.base + 'param/list', {
    type: 'get',
    params
});
// export const dmParamListAPI = (params) => fetch(site.base + 'dm-param/list', {
//     type: 'get',
//     params
// });

//添加词槽
export const addSlotsAPI = (data) => fetch(site.base + 'node/addSlots', {
    type: 'post',
    data
});
//查看词槽
export const getSlotsAPI = (data) => fetch(site.base + 'node/getSlots', {
    type: 'post',
    data
});
//编辑词槽
export const updateSlotsAPI = (data) => fetch(site.base + 'node/updateSlots', {
    type: 'post',
    data
});
//删除词槽
export const deleteSlotsAPI = (data) => fetch(site.base + 'node/deleteSlots', {
    type: 'post',
    data
});



//录入节点
//编辑节点绑定接口
export const nodeBindInterfaceAPI = (data) => fetch(site.base + 'node/nodeBindInterface', {
    type: 'post',
    data
});

//转人工节点
//获取人工坐席列表
export const getAgentListAPI = (data) => fetch(site.base + 'node/getAgentList', {
    type: 'post',
    data
});
//编辑节点绑定转人工坐席
export const nodeBindAgentAPI = (data) => fetch(site.base + 'node/nodeBindAgent', {
    type: 'post',
    data
});

//结束节点
//更改结束节点挂机设置
export const updateEndNodeOnHookAPI = (data) => fetch(site.base + 'node/updateEndNodeOnHook', {
    type: 'post',
    data
});
//更改结束节点话术配置
export const updateEndNodeAudioAPI = (data) => fetch(site.base + 'node/updateEndNodeAudio', {
    type: 'post',
    data
});
//关闭结束节点话术配置
export const closeEndNodeAudioAPI = (data) => fetch(site.base + 'node/closeEndNodeAudio', {
    type: 'post',
    data
});


//音频相关
//上传音频
export const uploadAudioAPI = `${site.base}audio/uploadAudio`;
//合成音频
export const compositeSpeechAPI = (data) => fetch(site.base + 'audio/compositeSpeech', {
    type: 'post',
    data
});



