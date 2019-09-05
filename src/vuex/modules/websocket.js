import { IMPORT_EXPORT_OBJ } from './../types'
import { USE_STATUS } from './../types'
import { TAG_OF_CHANGE } from './../types'

const state = {
    importAndExObj: {},
    useStatus: {},
    tagOfChange: true
}
const getters = {
    getImportAndExObj(state) {
        return state.importAndExObj;
    },
    getUseStatus(state) {
        return state.useStatus;
    },
    getTagOfChange(state) {
        return state.tagOfChange;
    }
}
const mutations = {
    [IMPORT_EXPORT_OBJ](state, value) {
        state.importAndExObj = value;
    },
    [USE_STATUS](state, value) {
        state.useStatus = value;
    },
    [TAG_OF_CHANGE](state, value) {
        state.tagOfChange = value;
    }
}
const actions = {
    changeImportAndExObj({ commit }, res) {
        commit(IMPORT_EXPORT_OBJ, res)
    },
    changeAudios({commit}, res) {
        commit(USE_STATUS, res)
    },
    changeTagOfChange({commit}, res) {
        commit(TAG_OF_CHANGE, res)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
