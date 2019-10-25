<template>
    <div v-if="dailyArr.length">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生日报查看</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="内容">
                <el-input v-model="form.content" placeholder="请输入查找内容"></el-input>
            </el-form-item>
            <el-form-item label="提交日期">
                <el-col :span="11">
                    <el-date-picker type="date"
                                    placeholder="选择日期"
                                    format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd"
                                    v-model="form.ctime"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getDaily">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="dailyArr" style="width: 100%" height="350">
            <el-table-column prop="id" label="ID" width="150">
            </el-table-column>
            <el-table-column prop="ctime" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="names" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="classes" label="所在班级">
            </el-table-column>
            <el-table-column prop="motto" label="座右铭" width="120">
            </el-table-column>
            <el-table-column prop="finish" label="完成情况" width="120">
            </el-table-column>
            <el-table-column prop="content" label="工作内容" width="120">
            </el-table-column>
            <el-table-column prop="problem" label="遇到的问题" width="120">
            </el-table-column>
            <el-table-column prop="feeling" label="心得体会" width="120">
            </el-table-column>
            <el-table-column prop="suggest" label="建议" width="120">
            </el-table-column>
            <el-table-column prop="other" label="其他" width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template>
                    <!--:to="{name:'studentEdit',params:{id:scope.row.id}}"-->
                    <el-button size="mini">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <my-page :total="total" @changepage="getDaily" :pageSize="limit"></my-page>
    </div>
</template>

<script>
    import MyPage from "../../components/my-page";
    import {SUCCESS, FILE, HOSTNAME} from "../../config/base";

    export default {
        name: "query",
        components: {MyPage},
        data() {
            return {
                dailyArr: [],
                user: null,
                total: 0,
                limit: 2,
                form: {
                    content: '',
                    ctime: '',
                    order: 'id',
                    ordertype: 'asc'
                }
            }
        },
        methods: {
            // changePage(i){
            //     console.log(i);
            // },
            getDaily(i = 1) {
                let user = this.user.username;
                // console.log(user);
                let qs = '?names=' + user + '&page=' + i + '&limit=' + this.limit + this.objTransformQStr;
                fetch(HOSTNAME + 'index/index/query' + qs)
                    .then(res => res.json())
                    .then(data => {
                        if (data.code == SUCCESS) {
                            this.dailyArr = data.data;
                            this.total = data.count;
                            this.$message.success(data.msg);
                        } else if (data.code == FILE) {
                            this.$message.error(data.msg);
                        }

                    })
            },
            getUser() {
                this.user = JSON.parse(localStorage.user)
            },
        },
        computed: {
            objTransformQStr() {
                let str = '';
                for (let i in this.form) {
                    let val = this.form[i];
                    if (val != '') {
                        str += '&' + i + '=' + val
                    }
                }
                return str
            }
        },
        beforeMount() {
            this.getUser();
            this.getDaily();
        }
    }
</script>

<style scoped>

</style>