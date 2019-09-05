
import { CHANGE_TITLE,SHOW_TOAST ,HIDE_TOAST ,MENU_COLLAPSE , MENU_LIST} from '../types';

const state = {
    title:'',
    toast:'',
    isCollapsed:false,
    menuList:[]
};

const getters = {
    breadList:state => Object.values(state.title),
    collpageSiderType: state => state.isCollapsed
};

const mutations = {
    [CHANGE_TITLE](state,title){
        state.title = title;
    },
    [SHOW_TOAST](state,toast){
        state.toast = toast;
        state.isCollapsed = true;
    },
    [HIDE_TOAST](state){
        state.isCollapsed = false;
    },
    [MENU_COLLAPSE](state){
        state.isCollapsed=!state.isCollapsed;
    },
    [MENU_LIST](state,title){
        state.menuList = title;
    },
};

const actions = {
    changeTitle({commit},title){
      commit(CHANGE_TITLE,title);
    },
    changeToast({commit},taost){
      commit(SHOW_TOAST,taost);
    },
    hideToast({commit}){
        commit(HIDE_TOAST);
    },
    //菜单伸缩
    menuCollapse({ commit }) {
        commit(MENU_COLLAPSE);
    },
    setMenuList({ commit},data) {
        commit(MENU_LIST,data);
    }
};

export default {
  state,
  getters,
  mutations,
  actions
}
