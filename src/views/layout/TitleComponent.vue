<template>
    <div class="title-component-container">
        <div class="user-wrap">
            <Poptip class="task-list" v-model="taskListShow" :class="{ listNull: listData.length<=0}" >
                <div class="icon-title">
                    <i class="iconfont icon-renwuliebiao"></i>任务列表<i class="running-task"  v-show="runningTask>0">{{runningTask}}</i>
                </div>
                <div class="list-content" slot="content">
                    <span class="list-title">任务列表<i>（默认保留近一周记录）</i></span>
                    <Table class="popTable" v-show='listData.length>0' stripe :columns="listCol" :data="listData" height='300'></Table>
                    <div class="task-list-null" v-show='listData.length<=0'>
                        <div>
                            <img src="../../assets/images/task-list.png">
                            <span>暂无数据</span>
                        </div>
                    </div>
                </div>
            </Poptip>
            <a class="shouce" target="_blank" href="https://shimo.im/docs/lvxS59Xga4gL6err">
                <Icon color="#2d8cf0" :size="18" type="ios-book-outline" />
                产品手册
            </a>
            <img src="../../assets/images/default.png">
            <Poptip trigger="hover" title="" class="user-folder" v-model="folderShow">
                {{ userName }}
                <Icon type="md-arrow-dropdown" />
                <div slot="content" class="user-wrap-content">
                    <p class="login-out" @click="handleLoginOut">退出</p>
                </div>
            </Poptip>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getTaskList } from "@/api/homepage-api.js";
    import site from '@@/js/config'
    export default {
        name: "titleComponent",
        data() {
            return {
                folderShow:false,
                taskListShow: false,
                listData:[],
                runningTask:0,
                listCol:[//actionType:任务类型. 1 导入,2 导出; exportUrl:导出文件路径； 导入失败文件路径;exportUrlExists:导入已存在文件路径
                    {
                        title: '任务名称',
                        key: 'taskName',
                        ellipsis: true,
                        width:120,
                        render: (h, params) =>{
                            return h('Tooltip', {
                                props: {
                                    placement: 'top-start',
                                    content: params.row.taskName,
                                    transfer: true,
                                },
                                style: {
                                    width: '100%',
                                },
                                class: 'toolTip_div',
                            },params.row.taskName);
                            on: {
                                click: (e) => {
                                    e.stopPropagation();
                                    // console.log();
                                }
                            }
                        }
                    },
                    {
                        title: '状态',//state   任务状态。1: 进行中;  2:成功; 3:失败
                        key: 'state',
                        width:70,
                        render:  (h, params)=> {
                            const state = params.row.state;
                            const stateObj = {
                                1: {
                                    txt: '进行中',
                                    color: 'color:#19BE6B'
                                },
                                2: {
                                    txt: '完成',
                                    color: 'color:#57626D'
                                },
                                3: {
                                    txt: '失败',
                                    color: 'color:#FF5E5B'
                                },
                            }
                            return <span style={stateObj[state].color}>{stateObj[state].txt}</span>
                        }
                    },
                    {
                        title: '执行状况',
                        ellipsis: true,
                        width:360,
                        render: (h, params) =>{
                            if(params.row.state==1){
                                return <Progress style={{'vertical-align': 'top'}} stroke-width={8} percent={95} status='active' hideInfo={true} />
                            }
                            else if(params.row.state==2 && params.row.actionType==1){//导出完成
                                let fileNameArr=params.row.exportUrl.split("/");
                                let filName=fileNameArr[fileNameArr.length-1];
                                let html=`下载：<a style='text-decoration: underline;' href=${site.audioPathUrl+params.row.exportUrl}>${filName}</a>`;
                                let toolContent=	`下载：${filName}`
                                return (
                                    <Tooltip className='toolTip_div' style={{'width': '100%'}} placement='top-start' content={toolContent} transfer={true}>
                                        <div style={{'width': '100%', 'overflow': 'hidden', 'textOverflow': 'ellipsis'}}>
                                            下载：报表
                                            <a style='text-decoration: underline;' href={site.audioPathUrl+params.row.exportUrl}>{filName}</a>
                                        </div>
                                    </Tooltip>
                                )
                            }
                            else if(params.row.state==2 && params.row.actionType!=1){//应用成功
                                return (
                                    <Tooltip className='toolTip_div' style={{'width': '100%'}} placement='top-start' content={params.row.message} transfer={true}>
                                        <div style={{'width': '100%', 'overflow': 'hidden', 'textOverflow': 'ellipsis'}}>
                                            <span>{params.row.message}</span>
                                        </div>
                                    </Tooltip>
                                )
                            }
                            else if(params.row.state==3 && params.row.actionType==1){//导出失败
                                return (
                                    <Tooltip className='toolTip_div' style={{'width': '100%'}} placement='top-start' content={params.row.message} transfer={true}>
                                        <div style={{'width': '100%', 'overflow': 'hidden', 'textOverflow': 'ellipsis'}}>
                                            <span>请重新尝试导出</span>
                                        </div>
                                    </Tooltip>
                                )
                            }
                            else if(params.row.state==3 && params.row.actionType!=1){//应用失败
                                return (
                                    <Tooltip className='toolTip_div' style={{'width': '100%'}} placement='top-start' content={params.row.message} transfer={true}>
                                        <div style={{'width': '100%', 'overflow': 'hidden', 'textOverflow': 'ellipsis'}}>
                                            <span>失败原因：{params.row.message}</span>
                                        </div>
                                    </Tooltip>
                                )
                            }
                        }
                    },
                    {
                        title: '操作时间',
                        key: 'createTime',
                        minWidth:100,
                    },
                ],
            }
        },
        computed: {
            ...mapGetters([
                'userName',
                'name',
                'changeAuth',
            ]),
            importAndExObj(){//导入导出长连接返回得信息
                return this.$store.getters.getImportAndExObj;
            },
            useStatus(){//导入导出长连接返回得信息
                return this.$store.getters.getUseStatus;
            },
            tagOfChange() {
                return this.$store.getters.getTagOfChange;
            }
        },
        watch: {
            useStatus: function (res) {
                if(res){
                    this.websocketDailog(res);
                }
            },
            taskListShow: function (val) {
                if (val) {
                    this.getTaskList();
                }
            },
            tagOfChange: function (val) {
                this.getTaskList();
            },
            // $route: function (val) {
            //     document.querySelector('.abcd').click();
            // }
        },
        methods: {
            handleLoginOut(){
                // 清除登录状态
                sessionStorage.removeItem('userToken');
                this.$store.dispatch('userToken', null);
                this.$router.push({
                    path:'/login'
                });
                // 清除长连接
                this.websocketApi.closeConnect();
                this.$Notice.destroy();
            },
            websocketDailog(data){
                const state = {
                    2: {
                        icon: 'icon-zhengchang',
                        color: '#19BE6B'
                    },
                    3: {
                        icon: 'icon-yichang-copy',
                        color: '#FF5E5B'
                    }
                }
                this.$Notice.config({
                    top: 75,
                    duration: 5,
                })
                this.$Notice.open({
                    render() {
                        return (
                            <div class="self-notice">
                                <i class={'iconfont '+ state[data.state].icon} style={'color:'+state[data.state].color + ";font-size: 26px;vertical-align: top; margin-right: 16px;"}></i>
                                <div style="display: inline-block; width: 260px;">
                                    <h6 style="font-size: 16px;line-height:21px;margin-bottom: 14px;">{data.title}</h6>
                                    <p style="color:rgba(87,98,109,1);line-height:22px;margin-bottom: 12px;">{data.message}</p>
                                </div>
                            </div>
                        )
                    }
                })
                this.getTaskList();
            },
            getTaskList() {
                const table = document.querySelector('.popTable .ivu-table-body')
                getTaskList().then(res=> {
                    this.listData = res.data;
                    this.runningTask = this.listData.filter(item => item.state === 1).length;
                    table.scrollTo(0,0);
                })
            }
        },
        mounted() {
            this.websocketApi.initWebSocket();//登录成功建立长链接
            this.getTaskList();
        }
    }
</script>

<style lang="less">
    .title-component-container{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        height: 55px;
        line-height: 55px;
        &.hide {display: none;}
        .user-wrap{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right: 30px;
            color: #57626D;
            .task-list{
                margin-right: 45px;
                .ivu-poptip-rel {
                    cursor: pointer;
                }
				.icon-title{
					cursor: pointer;
					position: relative;
					height: 100%;
    				display: block;
					.running-task{
						position: absolute;
						top: 10px;
						left: 3px;
						display: block;
						padding: 0px 6px;
						height: 16px;
						line-height: 16px;
						border-radius: 24px;
						font-style: normal;
						background-color: #f00;
						color: #fff;
						text-align: center;
						font-size: 10px;
					}
				}
				.sucess-info{
					span{
						display:inline-block;
						width: 83px;
					}
				}
				.list-title{
					color:#293547;
                    display: inline-block;
                    font-size: 16px;
					padding:16px 18px;
					i{
						font-size: 13px;
						font-style: normal;
						color: #A9AEB5;
					}
				}
				.list-content{
					.ivu-table-wrapper{
						border:0;
					}
				}
				.icon-renwuliebiao{
					color:#2d8cf0;
					font-size: 18px;
					vertical-align: middle;
				}
				.ivu-poptip-popper{
					top:40px !important;
					width: 744px !important;
					font-size: 14px;
				}
				.ivu-poptip-body{
					padding:0 0 26px;
					.ivu-table{
						td{border:0;}
						th{border:0;}
						&:before{
							background-color:#FFF;
						}
						.ivu-table-cell{
							padding-left: 15px !important;
							padding-right:0px !important;
						}
					}
				}
				.ivu-progress-inner{
					background-color: transparent;
				}
				.task-list-null{
					height: 300px;
					.list-title{
						background: #F5F5F6 100%;
    					width: 100%;
					}
					div{
						text-align: center;
						padding-top: 55px;
						span{
							display: block;
							padding-top: 20px;
							font-size: 18px;
							color: #3F4A5A;
						}
					}
				}
            }
            .shouce {
                margin-right: 45px;
                color: #57626D;
            }
            >img{
                height: 30px;
                width: auto;
                margin-right: 15px;
            }
            .user-folder{
                .ivu-poptip-popper{
                    top:40px !important;
                    font-size: 13px;
                }
                .title-user-name{
                    border-bottom: 1px solid #dddee1;
                    padding-top: 5px;
                    padding-bottom: 15px;
                    font-weight: bold;
                    color: #000000;
                    font-size: 14px;
                    margin-bottom: 10px;
                    word-break: break-all;
                    white-space: normal;
                }
                .title-exchange{
                    margin-top: -6px;
                    line-height: 40px;
                    color: #4A8DF1;
                    cursor: pointer;
                    &.icon-exchange:before{
                        margin-right: 5px;
                    }
                }
                .login-out{
                    cursor: pointer;
                }
                .user-wrap-content{
                    padding: 0 15px;
                    text-align: center;
                }
            }
            .ivu-icon{
                font-size: 22px;
                color: #888;
            }
        }
    }
</style>
