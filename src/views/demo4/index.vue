<template lang="html">
    <div class="homepage">
        <div class="home-header">
            
        </div>
    </div>
</template>

<script>
import date from "date-and-time";

export default {
    computed: {
        now() {
            return date.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
        }
    },
    data() {
        return {
        }
    },
    methods: {
    },
    created() {
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
