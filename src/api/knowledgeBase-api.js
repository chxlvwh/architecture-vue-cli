import { fetch } from '@/utils/request'
import site from '@@/js/config'

// 获取通用知识库
export const getCommonKnowledge = (data) => fetch(site.base + 'knowledge/page', {
    type: 'post',
    data
});
// 删除通用知识库
export const delCommonKnowledge = (data) => fetch(site.base + 'knowledge/delete', {
    type: 'post',
    data
});

// 新增通用知识库
export const addCommonKnowledge = (data) => fetch(site.base + 'knowledge/add', {
    type: 'post',
    data
});

// 更新通用知识库
export const updateCommonKnowledge = (data) => fetch(site.base + 'knowledge/update', {
    type: 'post',
    data
});

// 批量上传
export const uploadCommonKnowledge = (data) => fetch(site.base + 'knowledge/upload', {
    type: 'post',
    data
});

// 知识库模板下载地址
export const downloadCommonKnowledge = site.templatePath + '知识库模板.xlsx';

// 获取提示音列表
export const getSystemPromptList = (data) => fetch(site.base + `systemPrompt/getSystemPromptList`, {
    type: 'get',
    params: data
});

// 添加话术
export const addSystemPromptAudio = (data) => fetch(site.base + `systemPrompt/addSystemPromptAudio`, {
    type: 'post',
    data
});

// 删除话术
export const deleteSystemPromptAudio = (data) => fetch(site.base + `systemPrompt/deleteSystemPromptAudio`, {
    type: 'post',
    data
});

// 编辑话术
export const updateSystemPromptAudio = (data) => fetch(site.base + `systemPrompt/updateSystemPromptAudio`, {
    type: 'post',
    data
});

// 更新上线动作
export const updateSystemPromptAction = (data) => fetch(site.base + `systemPrompt/updateSystemPromptAction`, {
    type: 'post',
    data
});

// 更新超时上限、上限次数
export const updateSystemPromptTime = (data) => fetch(site.base + `systemPrompt/updateSystemPromptTime`, {
    type: 'post',
    data
});

// 获取人工坐席可访问时间列表
export const getArtificialSeatConfig = (data) => fetch(site.base + `scene/getArtificialSeatConfig`, {
    type: 'get',
    params: data
});

// 添加人工坐席有效时间配置
export const addArtificialSeatConfig = (data) => fetch(site.base + `scene/addArtificialSeatConfig`, {
    type: 'post',
    data
});

// 编辑人工坐席有效时间配置
export const editArtificialSeatConfig = (data) => fetch(site.base + `scene/editArtificialSeatConfig`, {
    type: 'post',
    data
});

// 删除人工坐席有效时间配置
export const delArtificialSeatConfig = (data) => fetch(site.base + `scene/delArtificialSeatConfig`, {
    type: 'post',
    data
});


