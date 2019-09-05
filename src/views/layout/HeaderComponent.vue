<template>
    <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
            <div class="head-left">
                <Icon @click.native="menuCollapse" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                <Breadcrumb>
                <!-- {{breadList}} -->
                    <BreadcrumbItem :key="index" v-for="(item,index) in breadList" :to="item.path">{{ item.mainMenu }}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <TitleLayout />
        </Header>
        <Content class="content-container">
            <slot></slot>
        </Content>
    </Layout>
</template>

<script>
    import TitleLayout from './TitleComponent.vue'
    import { mapState,mapGetters,mapActions } from 'vuex'
    export default {
        name: "headerComponent",
        data() {
            return {}
        },
        components: {
            TitleLayout
        },
        methods: {
            ...mapActions([
               'menuCollapse'
            ])
        },
        computed: {
            ...mapState({
                isCollapsed:state => state.title.isCollapsed
            }),
            ...mapGetters([
                'breadList'
            ]),
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
        },
        created() {
        }
    }
</script>

<style lang="less">
    .layout-header-bar {
        min-width: 1100px;
        position: relative;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .content-container{
        padding: 20px 20px 0;
        background: #F4F6F8;
        
        overflow: auto;
        display: flex;
        flex-flow: column nowrap;
        min-width: 1100px;
        & > div {
            flex: 1;
            background: #fff;
            height: auto;
            padding: 20px 30px;
        }
    }
</style>
