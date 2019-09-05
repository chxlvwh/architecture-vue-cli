import store from '@/vuex/store'
let websock = null;
let globalCallback = null;
// 本地环境
const localArray = ['10', '127', 'localhost'];
// dev，uat，qa，线上环境等非其他机房环境
const innerArray = ['126', '129', '133', '134'];
const hostname = location.hostname.split('.')[0];
const hostname1 = location.hostname.split('.')[3] || [];
// 是否本地环境
let isLocal = localArray.includes(hostname);
// 是否为其他机房环境
let isInner = innerArray.includes(hostname1)

let host;
if (isLocal) {
    host = '192.168.88.133:8077';
} else if (isInner) {
    host = location.host + ':8077';
} else {
    host = location.host
}

function initWebSocket() {
    let protocol = "";
    protocol = location.protocol == "https:" ? "wss://" : "ws://";

    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
            
        if (!websock || websock && websock.readyState !== websock.OPEN) {
            websock = new WebSocket(protocol + host + '/ivr-cms/webSocket/' + JSON.parse(sessionStorage.getItem('userInfo')).customerCode);
        }
    } else {
        alert('当前浏览器不支持websocket')
    }
    websock.onmessage = function (e) {
        websocketonmessage(e)
    }
    websock.onclose = function (e) {
        console.log("断开了");
        console.log(!(location.hash.match(/login|apply|auth|forget/g)) && JSON.parse(sessionStorage.getItem('userToken')));
        if (!(location.hash.match(/login|apply|auth|forget/g)) && JSON.parse(sessionStorage.getItem('userToken'))) {
            initWebSocket();
        }
    }
    websock.onopen = function () {
        console.log('连接成功');
    }
    // 连接发生错误的回调方法
    websock.onerror = function (err) {
        console.log('WebSocket连接发生错误')
    }
}
// 实际调用的方法
function sendSock(agentData, callback) {
    globalCallback = callback;
    if (websock.readyState === websock.OPEN) {
        // 若是ws开启状态
        websocketsend(agentData)
    } else if (websock.readyState === websock.CONNECTING) {
        // 若是 正在开启状态，则等待1s后重新调用
        setTimeout(function () {
            sendSock(agentData, callback)
        }, 1000)
    } else {
        // 若未开启 ，则等待1s后重新调用
        setTimeout(function () {
            sendSock(agentData, callback)
        }, 1000)
    }
}
// 数据接收
function websocketonmessage(e) {
    // globalCallback(JSON.parse(e.data))
    store.dispatch('changeAudios', JSON.parse(e.data))
    // store.dispatch('changeImportAndExObj', JSON.parse(e.data));
}

// 数据发送
function websocketsend(agentData) {
    websock.send(JSON.stringify(agentData))
}

function closeConnect() {
    websock && websock.close();
}

export {
    initWebSocket,
    sendSock,
    closeConnect
}
