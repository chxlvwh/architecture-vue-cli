//user.js
export const USER_TOKEN = 'USER_TOKEN'
export const USER_INFO = 'USER_INFO'

//title.js
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const SHOW_TOAST = 'SHOW_TOAST'
export const HIDE_TOAST = 'HIDE_TOAST';
export const MENU_COLLAPSE = 'MENU_COLLAPSE'
export const MENU_LIST = 'MENU_LIST'

//call.js
export const SET_LAYOUTINFO = 'SET_LAYOUTINFO'
export const SET_LAYOUTTOPINFO = 'SET_LAYOUTTOPINFO'
export const SET_PAGELIST = 'SET_PAGELIST'
export const SET_CURRENTINDEX = 'SET_CURRENTINDEX'
export const SET_CURRENTPAGE = 'SET_CURRENTPAGE'

//visualization.js
export const NODE_TYPE = 'NODE_TYPE'
export const SELECTED_NODE = 'SELECTED_NODE'
//visualization common 接口分支列表 语义接口分支
export const FENZHIINTERFACE_LIST = 'FENZHIINTERFACE_LIST'
export const BIANLIANGINTERFACE_LIST = 'BIANLIANGINTERFACE_LIST'

export const YUYI_LIST = 'YUYI_LIST'
export const CHILD_YUYI_LIST = 'CHILD_YUYI_LIST'
//画布中右侧正在请求接口关闭会导致数据库信息和画布不一致，需要做个校验
export const CHANGE_RESPONSE = 'CHANGE_RESPONSE'

//话术配置子表单验证
export const SPEECH_LIST = 'SPEECH_LIST'

//websocket 
// 导入导出
export const IMPORT_EXPORT_OBJ = 'IMPORT_EXPORT_OBJ'
// 应用录音状态
export const USE_STATUS = 'USE_STATUS'
export const TAG_OF_CHANGE = 'TAG_OF_CHANGE'