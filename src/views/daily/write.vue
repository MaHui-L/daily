<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生日报填写</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-form :model="daily" ref="form" :rules="rules">
            <el-form-item label="座右铭" prop="motto">
                <el-input v-model="daily.motto" placeholder="座右铭" minlength="10" maxlength="50" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="完成情况" prop="finish">
                <el-input v-model="daily.finish" placeholder="完成情况"></el-input>
            </el-form-item>
            <el-form-item label="工作内容" prop="content">
                <el-input type="textarea" v-model="daily.content" placeholder="请输入工作内容" ></el-input>
            </el-form-item>
            <el-form-item label="遇到的问题" prop="problem">
                <el-input  v-model="daily.problem" placeholder="遇到的问题" ></el-input>
            </el-form-item>
            <el-form-item label="心得体会" prop="feeling">
                <el-input type="textarea" v-model="daily.feeling" placeholder="心得体会" ></el-input>
            </el-form-item>
            <el-form-item label="建议" prop="suggest">
                <el-input  v-model="daily.suggest" placeholder="建议" ></el-input>
            </el-form-item>
            <el-form-item label="其他" prop="other">
                <el-input v-model="daily.other" placeholder="其他" ></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="submitDaily('form')">提交</el-button>
                <!--<el-button @click="resetForm('form')">重置</el-button>-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "write",
        data(){
            return{
                daily:{
                    names:'',
                    classes:'WUIF1907-2',
                    motto:'',
                    content:'',
                    finish:'',
                    problem:'',
                    feeling:'',
                    suggest:'',
                    other:'',

                },
                rules: {
                    motto: [
                        {required: true, message: '座右铭不能为空', trigger: 'blur'},
                        {min: 2, max: 50, message: '长度在 2 到 50个字符', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '内容不能为空', trigger: 'blur'},
                    ],
                    finish: [
                        {required: true, message: '完成度不能为空', trigger: 'blur'}
                    ],
                    feeling: [
                        {required: true, message: '心得体会不能为空',trigger: 'blur'},
                        { min: 1,  message: '长度不少于100', trigger: 'blur' }
                    ],
                    problem: [
                        {required: true, message: '遇到的问题',trigger: 'blur'}
                    ],
                    suggest: [
                        {required: true, message: '建议',trigger: 'blur'}
                    ],
                    other: [
                        {required: true, message: '其他',trigger: 'blur'},
                    ],
                },
            }
        },
        methods:{
            submitDaily(){
                this.daily.names = JSON.parse(localStorage.user).username;
                fetch('http://www.daily-end.com/index/index/index',{
                    method: 'POST',
                    body:JSON.stringify(this.daily),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                })
                    .then(res=>res.json())
                    .then(data=>{
                        // console.log(data);
                        if(data.code==200){
                            this.$message.success(data.msg);
                            this.$refs.form.resetFields();
                        }else {
                            this.$message.error(data.msg)
                        }
                    })
            },
            // resetForm(formName) {
            //     this.$refs[formName].resetFields();
            // }
        }
    }
</script>

<style scoped>
    .el-form{
        width: 500px;
    }
</style>