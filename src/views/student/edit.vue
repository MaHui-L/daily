<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/amain' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/amain/studentquery' }">查看学生</el-breadcrumb-item>
            <el-breadcrumb-item>编辑学生</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <div class="form" v-if="form">
            <el-form :model="form" ref="form" label-width="80px">
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
                    <el-select v-model="form.classes" placeholder="请选择">
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
                    <el-button type="primary" @click="submitForm('form')">修改</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data: function () {
            return {
                form: null,
                classes: [
                    {cid: '1', cname: 'WUIF1907-2'},
                    {cid: '2', cname: 'WUIF1907-1'},
                    {cid: '3', cname: 'WUIF1908'}
                ],
                id: 0
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
            getStudent() {
                let form = localStorage.getItem('form');
                if (form) {
                    this.form = JSON.parse(form);
                } else {
                    this.$message.error('数据获取失败');
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        beforeMount() {
            this.id = this.$route.params.id;
            this.getStudent();
        }
    }
</script>

<style scoped>
    .el-form {
        width: 500px;
    }
</style>