<template>
    <div>
        <el-form :model="form" :rules="rules" ref="form" prop="username">
            <el-form-item label="用户名" prop="username" >
                <el-input placeholder="Username" v-model="form.username" clearable >
                    <i slot="prefix" class="el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input type="password" placeholder="Password" v-model="form.password" clearable show-password>
                    <i slot="prefix" class="el-icon-lock"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-radio-group v-model="form.role"  >
                    <el-radio :label="item" v-for="(item,index) in roles" :key="index"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import admin from '../data/admin';
    import students from '../data/students';
    import teacher from '../data/teacher';
    export default {
        name: "login",
        data:function () {
            return {
                form:{
                    username:'',
                    password:'',
                   role:''
                },
                roles:['students','teacher','admin'],
                rules: {
                    username: [
                        {required: true, message: '用户名', trigger: 'blur'},
                        {min: 2, max: 12, message: '长度在 2 到 12个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码', trigger: 'blur'},
                        {min: 5, max: 12, message: '长度在 5 到 12个字符', trigger: 'blur'}
                    ],
                    role: [
                        { required: true, message: '请选择角色', trigger: 'change' }
                    ],
                },
            };
        },

        methods: {
            submitForm(formName) {
                //this的指向
                //1.箭头函数  2.this存到临时变量  3.函数定义是使用bind绑定this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let role = this.form.role;
                        console.log(role);
                        let model = null;
                        if(role == 'admin'){
                            model = admin;
                        }else if (role == 'students'){
                            model = students;
                        } else {
                            model = teacher;
                        }
                        console.log(model)
                        let flag = model.filter(ele=>ele.username==this.form.username&&ele.password==this.form.password)
                        console.log(flag);
                        if(flag.length){
                            localStorage.user = JSON.stringify(flag[0]);
                            if (role == 'students'){
                                this.$router.push('/student')
                            } else {
                                this.$router.push('/amain');
                            }
                        }else {
                            this.$message.warning('用户名密码不匹配')
                        }
                        // location.replace('main');
                        // console.log(this);
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
<style>
    /*body{*/
        /*background-image: url("../../public/img/bz2.jpeg");*/
        /*background-size: cover;*/
    /*}*/
</style>

<style scoped>

    form{
        width: 300px;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>