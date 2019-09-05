<template>
    <div class="login-container" @keyup.enter="handleSubmit('formValidate')">
        <a href="https://cn.vuejs.org/" target="_blank">
            <img src="../../assets/images/logo.png" alt="">
        </a>
        <div class="login-main">
            <img src="http://placeimg.com/450/450" alt="">
            <div class="login-inputs">
                <h5>项目名称</h5>
                <Form ref="formValidate" class="loginForm" :model="loginData" :rules="ruleValidate" :label-width="0">
                    <FormItem prop="username">
                        <Input
                        style="height:46px"
                        prefix="md-person"
                        v-model="loginData.username"
                        :maxlength="50"
                        placeholder="用户名" />
                    </FormItem>
                    <FormItem prop="password">
                        <Input
                            prefix="md-lock"
                            v-model="loginData.password"
                            type="password"
                            :maxlength="16"
                            placeholder="密码" />
                    </FormItem>
                    <FormItem class='ident-wrap' v-if="identifyFlag"
                            v-click-outside.capture="onClickOutside"
                            v-click-outside:mousedown.capture="onClickOutside">
                        <img
                            :class="{active:codeActive}"
                            class="code-img"
                            ref='codeImg'
                            id='codeimgid'
                            @click="selectCode($event)"
                            :src="codeUrl" />
                        <Icon v-show='codeActive'
                            @click="codeRefresh"
                            class="code-refresh"
                            size="28"
                            type="ios-refresh-circle" />
                        <div class="code-right" :class="{active:codeStatus === '1'}">
                            <Icon type="md-checkmark" />
                            验证成功
                        </div>
                        <div class="code-error" :class="{active:codeStatus === '2'}">
                            <Icon type="md-close" />
                            验证失败，请重试
                        </div>
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            :loading="loading"
                            @click="handleSubmit('formValidate')">
                            <template v-if="!loading">立即登录</template>
                            <template v-else>登录中...</template>
                        </Button>
                    </FormItem>
                    <!-- <router-link to="/forget">忘记密码</router-link> -->
                </Form>
            </div>
        </div>
    </div>

</template>

<script>
    import { directive as clickOutside } from 'v-click-outside-x';
    import { getPublicKey, doLogin, verifyCodeImg } from "../../api/auth-api";
    import { getUserInfo } from "../../api/user-api";
    import { JSEncrypt } from "jsencrypt";
    import base from "../../../public/js/config";
    const md5 = require('js-md5');
    export default {
        name: "login",
        directives: { clickOutside },
        data() {
            return {
                identifyFlag:false,
                codeActive:false,
                codeUrl:'',
                codeStatus: '0', // 0 不显示，1显示成功，2显示失败
                loginData: {
                    username: '',
                    password: '',
                    code: []
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '邮箱地址不规范', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { pattern:/^[\S]{6,16}$/, message: '请输入6到16位字符密码', trigger: 'blur' }
                    ]
                },
                loading: false,
                publicKey: ''
            }
        },
        components: {},
        methods: {
            handleSubmit(name) {
                // 下面一行是占位，防止eslint报错
                name;md5;getPublicKey;doLogin;getUserInfo;
                /**项目中删掉下面高亮，放开注释 */
                this.$store.dispatch('userInfo', {
                    customerCode: "chxlvwh",
                    id: 2,
                    phone: "",
                    realName: "chx",
                    username: this.loginData.username
                });
                if(!this.$route.query.redirect){
                    this.$router.push('/home');
                } else {
                    this.$router.push({ path: this.$route.query.redirect });
                }
                /** 实际项目中放开
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let _data = {};
                        //设置登录按钮点击之后 要退出的次数是0
                        sessionStorage.setItem('loginout_number',0);

                        // 请求公钥
                        getPublicKey().then(res=>{
                            this.publicKey = res.data;

                            // 请求完公钥后进行登录
                            // 参数
                            let params = {
                                userName: this.loginData.username,
                                password: this.encryptStr(md5(this.loginData.password)),
                                publicKey: this.publicKey,
                                code:this.loginData.code
                            }
                            this.loading = true;
                            doLogin(params).then(data =>{
                                this.$store.dispatch('userToken', data&&data.data.token || {});
                                this.loading = false;

                                // 获取个人信息
                                getUserInfo().then(res => {
                                    this.$store.dispatch('userInfo', res&&res.data || {});
                                    if(!this.$route.query.redirect || this.$route.query.redirect.indexOf('login')){
                                        this.$router.push('/home');
                                    }else{
                                        this.$router.push({ path: this.$route.query.redirect});
                                    }
                                })
                            }).catch(err=>{
                                this.loading = false;
                                this.number = 0;
                                this.loginData.code = [];
                                if(err.status == 5010){
                                    this.identifyFlag = true;
                                    this.handleGetCode();
                                }
                            })
                        })
                    }
                })
                */
            },
            encryptStr(password){
                let encrypt = new JSEncrypt();
                encrypt.setPublicKey(this.publicKey);
                let encrypted = encrypt.encrypt(password);
                if(encrypted === false){
                    return password;
                }
                return encrypted;
            },
            //*********************************************************** */
            //验证码模块开始************************************************/
            //*********************************************************** */
            handleGetCode(){
                this.clearMask();
                this.$refs['formValidate'].validateField('username',err => {
                    if(!err){
                        this.number = 0;
                        this.loginData.code = [];
                        this.codeActive = true;
                        let _data = {
                            userName: this.loginData.username
                        }
                        this.$nextTick(()=>{
                            this.codeUrl = base.base + '/login/getVeriCodeImg?userName=' + _data.userName +'&random='+Math.random();
                            this.codeActive = true;
                        })
                    }
                })
            },
            codeRefresh(){
                this.handleGetCode();
            },
            selectCode(e){
                let x = e.pageX,
                    y = e.pageY,
                    _el = this.$refs.codeImg,    //获取图片的原点
                    nodex = this.getNodePosition(_el)[0],//原点x 与原点y
                    nodey = this.getNodePosition(_el)[1],
                    xserver = parseInt(x) - parseInt(nodex),
                    yserver = parseInt(y) - parseInt(nodey);

                    if(yserver > 152){
                    return false;
                    }
                    this.number++;

                    if (this.number == 3) {
                        verifyCodeImg({
                            userName: this.loginData.username,
                            code: this.loginData.code
                        }).then(()=> {
                            this.codeStatus = '1';
                            setTimeout(() => {
                                this.identifyFlag = false;
                                this.codeStatus = '0';
                            }, 500);
                        }).catch(()=> {
                            this.codeStatus = '2';
                            setTimeout(() => {
                                this.codeRefresh();
                                this.codeStatus = '0';
                            }, 500);
                        })
                    }

                this.loginData.code.push(Math.round(xserver*360/340) +'_'+ Math.round(yserver*360/340));

                let imgEle = document.createElement('img');
                imgEle.style.left = (xserver-15) + 'px'; // 指定创建的DIV在文档中距离左侧的位置    图片大小30 左右移动5
                imgEle.style.top = (yserver -15-152 - 40) + 'px'; // 指定创建的DIV在文档中距离顶部的位置
                imgEle.style.border = '1px solid #FF0000'; // 设置边框
                imgEle.style.position = 'absolute'; // 为新创建的DIV指定绝对定位
                imgEle.style.zIndex = 100;
                imgEle.style.width = '30px'; // 指定宽度
                imgEle.style.height = '30px'; // 指定高度
                //oDiv.src = 'select.png';
                imgEle.style.opacity = '0.5'; //透明度
                imgEle.className = 'zhezhao';//加class 点刷新后删除遮罩
                _el.parentNode.appendChild(imgEle);

                //第四次点击后自动提交
                // if (this.number == 3) {
                //     this.cheakOutTree();
                // }

            },
            getNodePosition(node) {
                let top =0,left =0;
                while (node) {
                    if (node.tagName) {
                        top = top + node.offsetTop;
                        left = left + node.offsetLeft;
                        node = node.offsetParent;
                    }
                    else {
                        node = node.parentNode;
                    }
                }
                return [left, top];
            },
            cheakOutTree() {
                this.codeActive = false;
                this.clearMask();
            },
            onClickOutside(){
                this.number = 0;
                this.codeActive = false;
                this.codeUrl='';
                this.clearMask()
            },
            clearMask(){
                let child = document.querySelector('.zhezhao');
                let childs = document.querySelectorAll('.zhezhao');
                for(var i = childs.length - 1; i>=0; i--){
                    child.parentNode.removeChild(childs[i]);
                }
            }
            //***********************************************************/
            //验证码模块结束**********************************************/
            //***********************************************************/
        },
        computed: {},
        created() {
        }
    }
</script>

<style lang="less">
.login-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background:rgba(240,244,247,1);
    >a img {
        margin-top: 35px;
        margin-left: 72px;
    }
    .login-main {
        width: 900px;
        height: 450px;
        margin: 0 auto;
        margin-top: 90px;
        img {
            float: left;
            width: 450px;
        }
        .login-inputs {
            float: left;
            width: 420px;
            height: 450px;
            padding: 60px 40px 0;
            background:rgba(255,255,255,1);
            h5 {
                font-size:24px;
                font-weight:bold;
                line-height:31px;
                color:rgba(41,53,71,1);
                text-align: center;
                margin-bottom: 50px;
            }
            .loginForm {
                .ivu-form-item {
                    margin-bottom: 30px;
                }
                .ivu-form-item:nth-last-of-type(1) {
                    margin-bottom: 24px;
                }
                .ivu-form-item-error{
                    .ivu-input {
                        border: 1px solid #ed3f14;
                    }
                }
                input {
                    width: 340px;
                    height: 46px;
                    padding-left: 45px;
                    font-size:13px;
                }
                .ivu-input-prefix {
                    width: 45px;
                    i {
                        line-height: 46px;
                        color: rgba(191, 191, 191, 1);
                        font-size: 18px;
                    }
                }
                button {
                    box-sizing: border-box;
                    border: 1px solid #f1f4f9;
                    height: 45px;
                    line-height: 41px;
                    width: 100%;
                    padding: 0;
                    background-color: #4a8df1;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: 10px;
                }
                a {
                    display: inline-block;
                    font-size:13px;
                    line-height:17px;
                    color:rgba(144,148,153,1);
                    margin-left: 50%;
                    transform: translateX(-50%);
                }
                .ident-wrap{
                    margin-bottom: 0 !important;
                    position: relative;
                    .code-img{
                        display: none;
                        position: absolute;
                        z-index: 10;
                        bottom: 0;
                        left: 0;
                        height: 192px;
                        width: 340px;
                        // border: 1px solid #f5f5f7;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                        // translate: all
                        transition: all 1s ease-in-out;
                        &.active{
                            display: block;
                        }
                    }
                    .code-refresh{
                        position: absolute;
                        z-index: 11;
                        top:-180px;
                        right: 10px;
                        color: #fff;
                        cursor: pointer;
                        // &::before{
                        //   box-shadow: 0 0 4px #f1f1f1;
                        // }
                    }
                    .code-right {
                        width:340px;
                        height:40px;
                        background:rgba(210,244,239,1);
                        border:1px solid rgba(25,190,107,1);
                        opacity:1;
                        position: absolute;
                        bottom: 0;
                        z-index: 11;
                        text-align: center;
                        font-size:13px;
                        line-height:38px;
                        color:rgba(25,190,107,1);
                        display: none;
                        .ivu-icon {
                            font-size: 20px;
                            vertical-align: text-top;
                        }
                        &.active{
                            display: block;
                        }
                    }
                    .code-error {
                        width:340px;
                        height:40px;
                        background:rgba(252,225,225,1);
                        border:1px solid rgba(255,94,91,1);
                        opacity:1;
                        position: absolute;
                        bottom: 0;
                        z-index: 11;
                        text-align: center;
                        font-size:13px;
                        line-height:38px;
                        color:rgba(255,94,91,1);
                        display: none;
                        .ivu-icon {
                            font-size: 20px;
                            vertical-align: text-top;
                        }
                        &.active{
                            display: block;
                        }
                    }
                    button{
                        box-sizing: border-box;
                        border: 1px solid #dddeee;
                        height: 40px;
                        line-height: 40px;
                        width: 100%;
                        padding: 0;
                        background-color: #F7F9FA;
                        color: #333;
                        font-size: 14px;
                        cursor: pointer;
                        margin-top: 0px;
                    }
                }
            }
        }
    }
}
</style>
