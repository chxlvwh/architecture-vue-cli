<template>
    <div class="today-data">
        <div class="today-data-left">
            <p>今日</p>
            <p>昨日</p>
        </div>
        <ul>
            <li>
                <div>总呼入数</div>
                <p>{{todayData.totalCount}}</p>
                <span>{{yesterdayData.totalCount}}</span>
            </li>
            <li>
                <div>转人工数</div>
                <p>{{todayData.artificialCount}}</p>
                <span>{{yesterdayData.artificialCount}}</span>
            </li>
            <li>
                <div>机器人接待数</div>
                <p>{{todayData.aicount}}</p>
                <span>{{yesterdayData.aicount}}</span>
            </li>
            <li>
                <div>用户满意度统计</div>
                <p>{{todayData.satisfaction}}</p>
                <span>{{yesterdayData.satisfaction}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { callSituationStatistics } from "../../api/homepage-api";
export default {
    props: ['sceneId'],
    data() {
        return {
            todayData: {},
            yesterdayData: {}
        }
    },
    watch: {
        'sceneId':function (newVal) {
            this.getTodayData()
        },
    },
    methods: {
        getTodayData() {
            callSituationStatistics({
                customerCode: JSON.parse(sessionStorage.getItem('userInfo')).customerCode,
                sceneId: this.sceneId
            }).then((res)=> {
                this.todayData = res.data.today;
                this.yesterdayData = res.data.yesterday;
                this.$emit('getUpdateTime', res.data.today.updateTime);
            })
        }
    }
}
</script>

<style lang="less">
.today-data {
    height: 184px;
    background-color: #ffffff;
    margin-bottom: 15px;
    padding: 0 6%;
    position: relative;
    .today-data-left {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding: 86px 0 0 23px;
        p {
            line-height: 17px;
            font-size:13px;
            color:rgba(41,53,71,1);
        }
        p:nth-child(1) {
            margin-bottom: 29px;
        }
    }
    ul {
        display: flex;
        justify-content: space-around;
        li {
            text-align: center;
            padding-top: 35px;
            div {
                line-height: 17px;
                font-size:13px;
                color:rgba(169,174,181,1);
                margin-bottom: 22px;
            }
            p {
                height:37px;
                font-size:28px;
                font-weight:bold;
                color:rgba(74,141,241,1);
                line-height: 37px;
                margin-bottom: 20px;
            }
            span {
                font-size:14px;
                color:rgba(87,98,109,1);
                line-height: 19px;
            }
        }
    }
}
</style>
