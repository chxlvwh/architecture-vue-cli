<template>
    <Layout>
        <Sider hide-trigger collapsible :collapsed-width="60" v-model="isCollapsed">
            <div class="home-logo"><span>项目名称</span></div>
            <Menu
                :active-name="activeName"
                :open-names="opennames"
                theme="dark"
                width="100%"
                :class="menuitemClasses"
                ref="side_menu"
                @on-select="menuSelect"
                @on-open-change="openChange"
                accordion>
                <template v-for="(item,index) in menuList">
                    <template v-if="!isCollapsed">
                        <Submenu :key="index" :name="item.name" v-if="item.children.length">
                            <template slot="title">
                                <Icon :type="item.icon" />
                                <span>{{item.title}}</span>
                            </template>
                            <MenuItem :name="cell.name" :key="cellIndex" v-for="(cell,cellIndex) in item.children">{{cell.title}}</MenuItem>
                        </Submenu>
                        <MenuItem :key="index" :name="item.name" v-else>
                            <Icon :type="item.icon" />
                            <span>{{item.title}}</span>
                        </MenuItem>
                    </template>
                    <template v-else>
                        <Dropdown transfer placement="right-start" :key="index" transfer-class-name="dropdown-transfer-out">
                            <div class="ivu-menu-submenu-title" style="width: 60px;" :class="dropdownMenuShow(item.name,item.children)  ? 'ivu-menu-item-selected' : ''" @click="menuRightClick(item)">
                                <i class="iconfont icon-waihu" style="margin-right: 8px;" v-if="item.icon == 'main'"></i>
                                <i class="iconfont icon-caiwu" v-else-if="item.icon == 'recharge'"></i>
                                <Icon :type="item.icon" style="font-size: 17px;" v-else/>
                            </div>
                            <DropdownMenu style="width: 120px;" slot="list" class="shrink-dropdownmenu">
                                <template>
                                    <a @click="menuRightClick(item)" class="ivu-dropdown-item-title">{{item.title}}</a>
                                </template>
                                <template v-if="item.children.length">
                                    <template v-for="(child, i) in item.children">
                                        <DropdownItem :name="child.name" :key="i" :class="activeName == child.name ? 'selected-active' : ''" @click.native="sencondRightClick(item,child)"><span>{{ child.title }}</span></DropdownItem>
                                    </template>
                                </template>
                            </DropdownMenu>
                        </Dropdown>
                    </template>
                </template>
            </Menu>
        </Sider>
        <slot></slot>
    </Layout>
</template>

<script>
    import { mapState,mapActions } from 'vuex';
    export default {
        name: "menuComponent",
        data() {
            return {
                activeName:'',
                opennames: []
            }
        },
        components: {},
        methods: {
            ...mapActions([
                'setMenuList'
            ]),
            menuSelect(e){
                this.$router.push({ name: e });
            },
            openChange(e){
                sessionStorage.setItem('opennames',JSON.stringify(e));
            },
            dropdownMenuShow(name,children) {
                let flag = false;
                if(this.activeName == name) {
                    flag = true;
                } else {
                    children.length && children.map((item)=> {
                        if(item.name == this.activeName) {
                            flag = true;
                        }
                    });
                }

                if(flag) {
                    return true;
                } else {
                    return false;
                }
		    },
            //左侧菜单折叠 时候点击dropdown一级菜单
            menuRightClick(item) {
                if(item.children.length) {//如果有二级菜单
                    return false;
                } else {//只有一级菜单
                    this.$router.push({name: item.name});
                }
            },
            //左侧菜单折叠 点击dropdown二级菜单
            sencondRightClick(item,child) {
                this.openChange([item.name]);
                this.opennames = [item.name];

                this.$router.push({name: child.name});
            },
        },
        computed: {
            ...mapState({
                isCollapsed:state => state.title.isCollapsed,
                menuList:state => state.title.menuList
            }),
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        watch: {
            menuList(val) {
                this.$nextTick(()=>{
                    this.$store.dispatch('changeTitle', this.$route.meta.title)
                    this.activeName = this.$route.name;
                });
            },
            $route(to,from){//为了防止后退引起的不标记
                this.$nextTick(()=>{
                    this.$store.dispatch('changeTitle', this.$route.meta.title)
                    this.activeName = this.$route.name;
                });
            },
            isCollapsed() {//解决收缩之后再展开侧边栏没高亮的bug
                this.activeName = this.$route.name;
                this.$nextTick(()=> {
                    this.$refs.side_menu.updateOpened();
                    this.$refs.side_menu.updateActiveName();
			    });
            }

        },
        created() {
            //临时 最后会去请求接口获得
            let menu = [
                {
                    children: [],
                    icon: "ios-home",
                    id: 1,
                    name: "home/demo",
                    parentId: 0,
                    path: "demo",
                    title: "demo",
                    type: 0,
                },
                {
                    children: [],
                    icon: "ios-home",
                    id: 2,
                    name: "home/demo1",
                    parentId: 0,
                    path: "home/demo1",
                    title: "demo1",
                    type: 0,
                },
                {
                    children: [],
                    icon: "ios-home",
                    id: 2,
                    name: "home/demo2",
                    parentId: 0,
                    path: "home/demo2",
                    title: "demo2",
                    type: 1,
                },
                {
                    children: [],
                    icon: "ios-home",
                    id: 2,
                    name: "home/demo3",
                    parentId: 0,
                    path: "home/demo3",
                    title: "demo3",
                    type: 1,
                },
                {
                    children: [],
                    icon: "ios-home",
                    id: 3,
                    name: "home/demo4",
                    parentId: 0,
                    path: "home/demo4",
                    title: "demo4",
                    type: 1,
                },
                {
                    icon: "ios-home",
                    id: 12,
                    name: "home/demo5",
                    parentId: 0,
                    path: "home/demo5",
                    title: "demo5",
                    type: 0,
                    children: [
                        {
                            children: [],
                            id: 15,
                            parentId: 12,
                            path: 'demo5-1',
                            name: 'home/demo5-1',
                            title: 'demo5-1',
                            type: 0,
                        },
                    ]
                }
                
            ]
            
            this.activeName = this.$route.name;
            this.opennames =  sessionStorage.getItem('opennames') ? JSON.parse(sessionStorage.getItem('opennames')) : ['demo5'];
            
            this.setMenuList(menu);
        }
    }
</script>

<style lang="less">

@bg_color: #272E4B;
@hover_bg_color: #1D233E;
@normal_font_color: rgba(255,255,255,0.7);
@hover_font_color: #fff;
@active_font_color: #2d8cf0;
.collapsed-menu {
    width: 60px !important;
    .ivu-dropdown {
        width: 100%;
    }
    .ivu-menu-item-selected {
        color: #2d8cf0 !important;
        background-color: #1D233E;
    }
    
}
// .ivu-menu-vertical .ivu-menu-opened > * > .ivu-menu-submenu-title-icon {
//     -webkit-transform: translateY(-50%) rotate(180deg);
//     transform: translateY(-50%) rotate(180deg);
// }
// .ivu-menu-vertical .ivu-menu-submenu-title-icon {
//     position: absolute;
//     top: 50% !important;
    // transform: translateY(-50%) !important;
// }

//菜单缩起来的样式
.shrink-dropdownmenu {
    background-color:#272E4B;
    .ivu-dropdown-item-title,.ivu-dropdown-item {
        color: @normal_font_color;
        border-right: none;
        background-color: @bg_color;
        font-size: 14px!important;
        height: 50px;
        line-height: 50px;

        i{//因为i是display-block的所以lien-height:55还不够的
            margin-right: 8px;
            vertical-align: middle;
        }
        span {
            vertical-align: middle;
        }
    }
    .ivu-dropdown-item {
        padding: 0 0 0 30px;
        &:hover {
            color: @hover_font_color;
            background-color: @hover_bg_color;

        }
        &:active,&.selected-active{
            color: @active_font_color;
            background: @hover_bg_color;
            position: relative;
            &::before{
                position: absolute;
                left: 0px;
                top: 0px;
                width: 2px;
                height: 100%;
                content: "";
                background: @active_font_color;
            }
        }
    }
    //重置一级菜单名字是白色
    .ivu-dropdown-item-title {
        padding: 0 0 0 20px;
        color: #fff;
        display: inline-block;
        width: 100%;
    }
}
//dropdown body的下边的展示
.ivu-dropdown-transfer {
    margin: 0;
    padding: 0;
    border-radius: 0px;
    max-height: 300px;
}
</style>
