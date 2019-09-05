
const hostname = location.hostname.split('.')[0];
//内部测试的环境
const localURIArray = ['10', '127', 'localhost'];

const value = (location.hostname.split('.')[3] == '126' || location.hostname.split('.')[3] == '133' || location.hostname.split('.')[3] == '224') ? location.hostname.split('.')[3] : '126';

// 通话记录里面的音频地址
const audioPathUrl = localURIArray.includes(hostname) ? `http://192.168.88.126/` : `http://${location.host}/`;
// 合成或上传的音频地址
const listenAudioPath = localURIArray.includes(hostname) ? `http://192.168.88.126/` : `http://${location.host}/`;
// 模板地址
const templatePath = localURIArray.includes(hostname) ? `http://192.168.88.126/ivr-gluster/upload_template/` : `http://${location.host}/ivr-gluster/upload_template/`;
const host = localURIArray.includes(hostname) ? '/api/' : '/ivr-cms/';

// 导出通话记录地址
const filePathUrl = localURIArray.includes(hostname) ? `http://192.168.88.126/` : `http://${location.host}/`;

const outPlanUrl = localURIArray.includes(hostname) ? 'http://localhost:8081/' : '/outplan/'

const siteConfig = {
    base: host,
    audioPathUrl, //上传语音地址
    listenAudioPath, //试听语音地址
    filePathUrl, //后台调用地址
    outPlanUrl,
    templatePath
};

export default siteConfig