<template lang="html">
    <div class="homepage">
        <div class="home-header">
            <span>更新时间：{{now}}</span>
            <Select v-model="sceneId" style="width:200px" @on-change="changeScene">
                <Option v-for="item in sceneList" :value="item.id" :key="item.id">{{ item.sceneName }}</Option>
            </Select>
        </div>
        <TodayData @getUpdateTime="handlerGetUpdateTime" :sceneId="sceneId"/>
        <BusinessPosition :sceneId="sceneId" />
        <BusinessPortrait :sceneId="sceneId" />
    </div>
</template>

<script>
import TodayData from "./todayData.vue"
import BusinessPosition from "./businessPositon.vue"
import BusinessPortrait from "./businessPortrait.vue"
import { getPublishedScene } from "../../api/homepage-api";
import date from "date-and-time";

export default {
    components: {
        TodayData,
        BusinessPosition,
        BusinessPortrait
    },
    computed: {
        now() {
            return date.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
        }
    },
    data() {
        return {
            updateTime: '',
            sceneId: undefined,
            sceneList: [
                {
                    createTime: 1553064492000,
                    customerCode: "ynt",
                    id: 5,
                    publishStatus: 4,
                    sceneName: "圆通测试1",
                    updateTime: 1557219745000
                }
            ]
        }
    },
    methods: {
        handlerGetUpdateTime(val) {
            this.updateTime = val;
        },
        changeScene() {
            // console.log(this.sceneId);
        }
    },
    created() {
        getPublishedScene().then((res)=> {
            this.sceneList = res.data;
            this.sceneId = res.data[0]&&res.data[0].id;
        })
    }
}
</script>

<style lang="less">
.homepage {
    background:#F4F6F8!important;
    padding: 0!important;
    .home-header {
        margin-bottom: 20px;
        >span {
            font-size: 13px;
            line-height:1;
            color:rgba(169,174,181,1);
        }
        .ivu-tooltip-rel {
            font-size: 13px;
            color:rgba(169,174,181,1);
            .ivu-icon {
                vertical-align: baseline;
            }
        }
        .ivu-select {
            float: right;
            margin-top: -6px;
        }
    }
}
</style>
