<template>
    <div class="business-portrait">
        <div class="business-portrait-header">
            <span>业务画像</span>
            <Select v-model="timeRange" style="width:178px" @on-change="changeRange">
                <Option v-for="item in timeRangeList" :value="item.id" :key="item.id">{{ item.value }}</Option>
            </Select>
        </div>
        <div id="business-portrait"></div>
    </div>
</template>

<script>
import { callIntentStatisticsPortrait } from "../../api/homepage-api";
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
            // 业务的颜色库
            colors: ["rgba(74, 141, 241, 0.8)","rgba(24, 190, 107, 0.8)","rgba(255, 191, 0, 0.8)","rgba(192, 198, 204, 1)"],
            // xPosition: [-734.4221,-30.14833,-241.25936,141.89249],
            // yPosition: [-75.53079,-544.2716,458.57562,147.57906],
            options: {
                "nodes": [
                    // {
                    //     "color": "rgba(74, 141, 241, 0.8)",
                    //     "label": "话费查询",
                    //     "attributes": {},
                    //     "y": -734.4221,
                    //     "x": -75.53079,
                    //     "id": "underscore",
                    //     "size": 100.0,
                    //     "hoverAnimation": true,
                    // }, 
                    // {
                    //     "color": "rgba(24, 190, 107, 0.8)",
                    //     "label": "密码服务",
                    //     "attributes": {},
                    //     "y": -30.14833,
                    //     "x": -544.2716,
                    //     "id": "express",
                    //     "size": 90.608772,
                    //     "hoverAnimation": true
                    // }, 
                    // {
                    //     "color": "rgba(255, 191, 0, 0.8)",
                    //     "label": "故障保修",
                    //     "attributes": {},
                    //     "y": -241.25936,
                    //     "x": 458.57562,
                    //     "id": "async",
                    //     "size": 73.161194,
                    //     "hoverAnimation": true
                    // }, 
                    // {
                    //     "color": "rgba(192, 198, 204, 1)",
                    //     "label": "其他查询",
                    //     "attributes": {},
                    //     "y": 141.89249,
                    //     "x": 147.57906,
                    //     "id": "request",
                    //     "size": 64.54965,
                    //     "hoverAnimation": true
                    // }
                ],
                "otherNodes":[
                    {
                        "color": "rgba(24, 190, 107, 0.8)",
                        "attributes": {},
                        // "label": "mongoose",
                        "y": 378.15536,
                        "x": 450.2018,
                        "id": "fixed-mongoose",
                        "size": 20.81118,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(255, 191, 0, 0.8)",
                        "attributes": {},
                        // "label": "cheerio",
                        "y": -404.62427,
                        "x": -438.03128,
                        "id": "fixed-cheerio",
                        "size": 25.163814,
                        "hoverAnimation": false
                    }, {
                        "color": "rgba(192, 198, 204, 1)",
                        "attributes": {},
                        // "label": "lodash",
                        "y": -580.16626,
                        "x": 718.30771,
                        "id": "fixed-lodash",
                        "size": 18.935852,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(255, 191, 0, 0.8)",
                        "attributes": {},
                        // "label": "mkdirp",
                        "y": -624.0287,
                        "x": 417.77667,
                        "id": "fixed-mkdirp",
                        "size": 23.713282,
                        "hoverAnimation": false
                    }, {
                        "color": "rgba(255, 191, 0, 0.8)",
                        "attributes": {},
                        // "label": "mkdirp1",
                        "y": -324.0287,
                        "x": 117.77667,
                        "id": "fixed-mkdirp1",
                        "size": 19.713282,
                        "hoverAnimation": false
                    }, {
                        "color": "rgba(83, 148, 255, 1)",
                        "attributes": {},
                        // "label": "connect",
                        "y": 394.88266,
                        "x": -733.4234,
                        "id": "fixed-connect",
                        "size": 19.574871,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(74, 141, 241, 0.8)",
                        "attributes": {},
                        // "label": "redis",
                        "y": -300.938953,
                        "x": -95.56586,
                        "id": "fixed-redis",
                        "size": 21.475237,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(74, 141, 241, 0.6)",
                        "attributes": {},
                        // "label": "1",
                        "y": -100.938953,
                        "x": -100.56586,
                        "id": "fixed-1",
                        "size": 30.475237,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(24, 190, 107, 0.6)",
                        "attributes": {},
                        // "label": "7",
                        "y": -100.938953,
                        "x": 100.56586,
                        "id": "fixed-7",
                        "size": 10.475237,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(255, 191, 0, 0.8)",
                        "attributes": {},
                        // "label": "6",
                        "y": 100.938953,
                        "x": -200.56586,
                        "id": "fixed-6",
                        "size": 15.475237,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(255, 191, 0, 0.2)",
                        "attributes": {},
                        // "label": "2",
                        "y": 300.938953,
                        "x": 700.56586,
                        "id": "fixed-2",
                        "size": 20.475237,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(255, 191, 0, 0.6)",
                        "attributes": {},
                        // "label": "4",
                        "y": 100.938953,
                        "x": 600.56586,
                        "id": "fixed-4",
                        "size": 10.475237,
                        "hoverAnimation": false
                    },
                    {
                        "color": "rgba(192, 198, 204, 0.8)",
                        "attributes": {},
                        // "label": "5",
                        "y": -600.938953,
                        "x": -500.56586,
                        "id": "fixed-5",
                        "size": 20.475237,
                        "hoverAnimation": false
                    },
                ]
            },
            
        }
    },
    computed: {
		menuType() { //根据左边菜单栏是否折叠重新渲染图表
			return this.$store.getters.collpageSiderType;
        },
        posOption() {
            return {
                series: {
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 100
                    },
                    draggable : true,
                    data: this.options.nodes.concat(this.options.otherNodes).map(function (node) {
                        return {
                            // x: node.x,
                            // y: node.y,
                            id: node.id,
                            name: node.label,
                            symbolSize: node.size,
                            itemStyle: {
                                normal: {
                                    color: node.color
                                }
                            },
                            label: {
                                show: true,
                                fontSize: 13,
                                textBorderColor: 'transparent'
                            },
                            hoverAnimation: node.hoverAnimation
                        };
                    })
                }
            }
        }
	},
    watch: {
        menuType:function(newVal,oldVal){
            let businessPortrait = document.querySelector('#business-portrait');
            setTimeout(() => {
                let myChart = echarts.init(businessPortrait);
                myChart.resize();
				myChart.setOption(this.posOption);
            }, 200);
		},
        'sceneId':function (newVal) {
            this.getData()
        },
    },
    methods: {
        resize() {
            let businessPortrait = document.querySelector('#business-portrait');
            this.$nextTick(()=> {
                let myChart = echarts.init(businessPortrait);
                myChart.resize();
                myChart.setOption(this.posOption, true);
            })
        },
        getData() {
            callIntentStatisticsPortrait({
                datePeriod: this.timeRange,
                sceneId: this.sceneId
            }).then(res => {
                this.options.nodes = [];
                let count = 0, percent = [];
                res.data.forEach(item => {
                    count += item.count;
                });
                if (count != 0) {
                    res.data.forEach((item, index) => {
                        // 在正确的百分比下+50，来保证比其他点的半径大
                        percent.push(Number((item.count/count*100).toFixed(2)) + 50);
                        this.options.nodes.push({
                            "color": `${this.colors[index%4]}`,
                            "label": `${item.intentName}`,
                            "id": `${index}`,
                            // "y": `${this.xPosition[index%4]}`,
                            // "x": `${this.yPosition[index%4]}`,
                            "size": `${percent[index]}`,
                            "hoverAnimation": true,
                        })
                    });
                } else if(count == 0 && res.data.length !== 0) {
                    res.data.forEach((item, index) => {
                        // 在正确的百分比下+50，来保证比其他点的半径大
                        percent.push(50);
                        this.options.nodes.push({
                            "color": `${this.colors[index%4]}`,
                            "label": `${item.intentName}`,
                            // "y": `${this.xPosition[index%4]}`,
                            // "x": `${this.yPosition[index%4]}`,
                            "id": `${index}`,
                            "size": `${percent[index]}`,
                            "hoverAnimation": true,
                        })
                    });
                }
                
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

<style lang="less">
.business-portrait {
    background: #fff;
    width: calc(~"(100% - 15px) * 0.38");
    height: 419px;
    padding: 25px;
    float: right;
    .business-portrait-header {
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
    #business-portrait {
        width: 100%;
        height: 360px;
    }
}
</style>

