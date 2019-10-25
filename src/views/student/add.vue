<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/amain' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加学生</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="username">
                <el-input prefix-icon="" v-model="form.username" placeholder="Username" clearable>
                    <i slot="prefix" class="el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="姓别">
                <el-radio label="男" v-model="form.sex"></el-radio>
                <el-radio label="女" v-model="form.sex"></el-radio>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input prefix-icon="" v-model="form.age" placeholder="年龄" clearable>
                    <i slot="prefix" class="el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-select  v-model="form.classes" placeholder="请选择">
                  <el-option v-for="item in classes" :key="item.cid" :label="item.cname" :value="item.cname">

                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学号" prop="num">
                <el-input prefix-icon="" v-model="form.num" placeholder="学号" clearable>
                    <i slot="prefix" class="el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="tell" prop="tell">
                <el-input prefix-icon="" v-model="form.tell" placeholder="tell">
                    <i slot="prefix" class="el-icon-postcard"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input prefix-icon="" v-model="form.password" placeholder="密码" clearable show-password>
                    <i slot="prefix" class="el-icon-lock"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">提交</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                rules: {
                    username: [
                        {required: true, message: '用户名', trigger: 'blur'},
                        {min: 2, max: 12, message: '长度在 2 到 12个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12个字符', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    age: [
                        {required: true, message: '年龄',trigger: 'blur'},
                        {message: '年龄必须为数字值',trigger: 'blur'},
                        { min: 1, max: 3, message: '长度在 1 到 3 个字符', trigger: 'blur' }
                    ],
                    tell: [
                        {required: true, message: '用户名', trigger: 'blur'},
                        {min: 10, max: 11, message: '长度必须为11个', trigger: 'blur'}
                    ],
                },
                form: {
                    id: '',
                    username: '',
                    sex: '',
                    age: '',
                    classes: '',
                    num: '',
                    tell: '',
                    password: ''
                },
                classes: [
                    {cid: '1', cname: 'WUIF1907-2'},
                    {cid: '2', cname: 'WUIF1907-1'},
                    {cid: '3', cname: 'WUIF1908'}
                ]
            }

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.form.id = Date.now();
                        localStorage.form = JSON.stringify(this.form);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
.el-form{
    width: 500px;
}
</style>