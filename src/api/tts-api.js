import { fetch } from '@/utils/request'
import site from '@@/js/config'

//获取列表
export const ttsList = (params) => fetch(site.base + 'tts/ttsList', {
    type: 'get',
    params
});
//应用tts
export const applyNewTts = (data) => fetch(site.base + 'tts/applyNewTts', {
    type: 'post',
    data,
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
});