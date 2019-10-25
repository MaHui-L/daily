<template>
    <div>
        <el-container style="height: 100%" direction="vertical">
            <el-aside width="200px">
                <el-col :span="12">
                    <!--<h5>自定义颜色</h5>-->
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b" :router="true">
                        <el-submenu index="3" >
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span slot="title">日报管理</span>
                            </template>
                            <el-menu-item index="/student/write">填写日报</el-menu-item>
                            <el-menu-item index="/student/query">查看日报</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-aside>
            <el-container>
                <el-header>
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    </el-menu>
                </el-header>
                <div style="position: absolute;right: 200px;top: 0;color: azure;line-height: 60px">{{user.username}}</div>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "student",
        data() {
            return{
                user:null,
            };
        },
        methods: {
            getUsername(){
                this.user=JSON.parse(localStorage.getItem('user'))
            }
        },
        beforeMount() {
            this.getUsername();
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        width: 100%;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 200px;

    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        position: fixed;
        left: 200px;
        top: 61px;
        right: 0;
        bottom: 61px;
        width: 100%;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-header {
        position: fixed;
        left: 200px;
        top: 0;
        right: 0;
        padding: 0;
    }

    .el-footer {
        position: fixed;
        left: 200px;
        bottom: 0;
        right: 0;
        box-sizing: border-box;

    }

    .el-col-12 {
        width: 100%;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    a{
        color: #d5d5d5;
    }
    .router-link-exact-active{
        color: #4094fe;
    }
</style>