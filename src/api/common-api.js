import { fetch } from '@/utils/request'
import site from '@@/js/config'

export const getCityList = (params) => fetch(site.base + 'workOrder/getPhoneLocation', {
    type: 'get',
    params
});

export const getRoleMenu = (params) => fetch(site.base + 'menu/getRoleMenu', {
    type: 'get',
    params
});