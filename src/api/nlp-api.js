import {
    fetch
} from '@/utils/request'
import site from '@@/js/config'

// 获取业务流程知识库
export const getPredictorVersionListAPI = (params) => fetch(site.base + 'predictor/getPredictorVersionList', {
    type: 'get',
    params
});
//预测器版本应用
export const applyPredictorVersionAPI = (data) => fetch(site.base + 'predictor/applyPredictorVersion', {
    type: 'post',
    data
});