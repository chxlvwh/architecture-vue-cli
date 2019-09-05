import { USER_TOKEN, USER_INFO } from "../types";

const state = {
    userToken: sessionStorage.getItem('userToken') || null,
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || null
};

const getters = {
    userName: state => state.userInfo && state.userInfo.username || '',
    name: state => state.userInfo && state.userInfo.companyName || '',
    token: state => state.userToken || '',
    // changeAuth: state => state.userInfo&&state.userInfo.change || ''
};

const mutations = {
    [USER_TOKEN](state, token) {
        state.userToken = token;
    },
    [USER_INFO](state, info) {
        state.userInfo = info;
    }
};

const actions = {
    userToken({
        commit
    }, token) {
        sessionStorage.setItem('userToken', token)
        commit(USER_TOKEN, token)
    },
    userInfo({
        commit
    }, data) {
        sessionStorage.setItem('userInfo', JSON.stringify(data));
        commit(USER_INFO, data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}