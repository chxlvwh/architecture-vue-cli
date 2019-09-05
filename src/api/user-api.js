import { fetch } from '@/utils/request'
import site from '@@/js/config'

export const getUserInfo = (data) => fetch(site.base + 'user/getUserInfo', {
    type: 'get',
    data
});