<template lang="html">
    <div class="business-position">
        <div class="business-position-header">
            <span>业务情况</span>
            <Select v-model="timeRange" style="width:178px" @on-change="changeRange">
                <Option v-for="item in timeRangeList" :value="item.id" :key="item.id">{{ item.value }}</Option>
            </Select>
        </div>
        <div id="business-position"></div>
    </div>
</template>

<script>
import { callIntentStatistics } from "../../api/homepage-api";
export default {
    props: ['sceneId'],
    data() {
        return {
            timeRange: 1,
            timeRangeList: [
                {
                    id: 1,
                    value: '近24小时'
                },
                {
                    id: 2,
                    value: '近7天'
                },
                {
                    id: 3,
                    value: '近30天'
                },
            ],
            colorList: ["rgba(74,141,241","rgba(25,190,107","rgba(255,191,0","rgba(146,150,153"],
            posOption: {
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(221,222,225,0.5)'
                        }
                    },
                    textStyle: {
                        color: 'rgba(87,98,109,1)'
                    },
                    formatter: function (name) {
                        return `<p>${name[0].axisValue}</p>` + name.map(item=>item.marker+item.seriesName+'：'+item.value+'k').join('<br />');
                    },
                    extraCssText: 'background:rgba(255,255,255,1);padding: 15px;border-radius:4px;box-shadow:0px 3px 6px rgba(221,222,225,1);'
                },
                legend: {
                    // 后台返回的数据
                    data:['暂无业务'],
                    bottom: 27,
                },
                grid: {
                    top: '14',
                    left: '10',
                    right: '20',
                    bottom: '72',
                    containLabel: true
                },
                xAxis : {
                    type : 'category',
                    // boundaryGap : ['20%','20%'],
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(144,148,153,1)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    // 后台返回的数据
                    data : [0,0,0,0,0,0,0]
                },
                yAxis :{
                    type : 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(144,148,153,1)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(221,222,225,0.5)'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} k'
                    }
                },
                series : [
                    {
                        name:'暂无业务',
                        type:'line',
                        itemStyle: {
                            color: 'rgba(74,141,241,1)'
                        },
                        lineStyle: {
                            color: 'rgba(74,141,241,0.6)'
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 0.8,
                                colorStops: [{
                                    offset: 0, color: 'rgba(74,141,241,0.3)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(74,141,241,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        // 后台返回的数据
                        data:[0,0,0,0,0,0,0]
                    },
                    // {
                    //     name:'转人工',
                    //     type:'line',
                    //     itemStyle: {
                    //         color: 'rgba(25,190,107,1)'
                    //     },
                    //     lineStyle: {
                    //         color: 'rgba(25,190,107,0.6)'
                    //     },
                    //     areaStyle: {
                    //         color: {
                    //             type: 'linear',
                    //             x: 0,
                    //             y: 0,
                    //             x2: 0,
                    //             y2: 0.8,
                    //             colorStops: [{
                    //                 offset: 0, color: 'rgba(24,190,107,0.4)' // 0% 处的颜色
                    //             }, {
                    //                 offset: 1, color: 'rgba(24,190,107,0)' // 100% 处的颜色
                    //             }],
                    //             global: false // 缺省为 false
                    //         }
                    //     },
                    //     data:[]
                    // },
                    // {
                    //     name:'查件',
                    //     type:'line',
                    //     itemStyle: {
                    //         color: 'rgba(255,191,0,1)'
                    //     },
                    //     lineStyle: {
                    //         color: 'rgba(255,191,0,0.6)'
                    //     },
                    //     areaStyle: {
                    //         color: {
                    //             type: 'linear',
                    //             x: 0,
                    //             y: 0,
                    //             x2: 0,
                    //             y2: 0.8,
                    //             colorStops: [{
                    //                 offset: 0, color: 'rgba(255,191,0,0.4)' // 0% 处的颜色
                    //             }, {
                    //                 offset: 1, color: 'rgba(255,191,0,0)' // 100% 处的颜色
                    //             }],
                    //             global: false // 缺省为 false
                    //         }
                    //     },
                    //     data:[]
                    // },
                    // {
                    //     name:'投诉',
                    //     type:'line',
                    //     itemStyle: {
                    //         color: 'rgba(146,150,153,1)'
                    //     },
                    //     lineStyle: {
                    //         color: 'rgba(146,150,153,0.6)'
                    //     },
                    //     areaStyle: {
                    //         color: {
                    //             type: 'linear',
                    //             x: 0,
                    //             y: 0,
                    //             x2: 0,
                    //             y2: 0.8,
                    //             colorStops: [{
                    //                 offset: 0, color: 'rgba(146,150,153,0.4)' // 0% 处的颜色
                    //             }, {
                    //                 offset: 1, color: 'rgba(146,150,153,0)' // 100% 处的颜色
                    //             }],
                    //             global: false // 缺省为 false
                    //         }
                    //     },
                    //     data:[]
                    // },
                ]
    		}
        }
    },
    computed: {
		menuType() {//根据左边菜单栏是否折叠重新渲染图表
			return this.$store.getters.collpageSiderType;
		},
	},
    watch: {
        menuType:function(newVal,oldVal){
            let businessPositon = document.querySelector('#business-position');
            setTimeout(() => {
                let myChart = echarts.init(businessPositon);
				myChart.resize();
				myChart.setOption(this.posOption);
            }, 200);
        },
        'sceneId':function (newVal) {
            this.getData()
        }
    },
    methods: {
        resize() {
            let businessPositon = document.querySelector('#business-position');
            this.$nextTick(()=> {
                let myChart = echarts.init(businessPositon);
                myChart.resize();
                console.log(this.posOption);
                myChart.setOption(this.posOption);
            })
        },
        getData() {
            callIntentStatistics({
                datePeriod: this.timeRange,
                sceneId: this.sceneId
            }).then(res => {
                this.posOption.series = [];
                this.posOption.xAxis.data = res.data.xaxisList;

                let list = JSON.parse(JSON.stringify(res.data.ylist))
                let legend = JSON.parse(JSON.stringify(res.data.legendList))
                this.posOption.legend.data = legend;
                if (list.length === 0) {
                    list.push({data: []});
                    for (let i = 0; i < res.data.xaxisList.length; i++) {
                        list[0].data[i] = 0;
                    }
                    list[0].name = '暂无业务';
                    this.posOption.legend.data = ['暂无业务']
                }
                list.forEach((sery, index) => {
                    this.posOption.series.push(
                        {
                            name:`${sery.name}`,
                            type:'line',
                            itemStyle: {
                                color: `${this.colorList[index]},1)`
                            },
                            lineStyle: {
                                color: `${this.colorList[index]},0.6)`
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 0.8,
                                    colorStops: [{
                                        offset: 0, color: `${this.colorList[index]},0.4)` // 0% 处的颜色
                                    }, {
                                        offset: 1, color: `${this.colorList[index]},0)` // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            data: sery.data.map(item=>item/1000) || 0
                        }
                    )
                });
                this.resize();
            })
        },
        changeRange() {
            this.getData();
        }
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy() {
        window.removeEventListener('resize',  this.resize)
    }
}
</script>

<style lang="less" scoped>

.business-position {
    background: #fff;
    width: calc(~"(100% - 15px) * 0.62");
    height: 419px;
    padding: 25px;
    float: left;
    overflow: hidden;
    .business-position-header {
        height: 32px; 
        span {
            font-size:16px;
            line-height:13px;
            color:rgba(41,53,71,1);
        }
        .ivu-select {
            float: right;
            margin-top: -6px;
        }
    }
    #business-position {
        // width: calc(~"100% + 20px");
        height: 100%;
        // margin-left: -20px;
    }
}
</style>
