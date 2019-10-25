<template>
    <div>
        <el-table :data="student">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <!--<el-table-column prop="sex" label="性别"></el-table-column>-->
            <!--<el-table-column prop="age" label="年龄"></el-table-column>-->
            <!--<el-table-column  label="班级"></el-table-column>-->
            <!--<el-table-column prop="num" label="学号"></el-table-column>-->
            <!--<el-table-column prop="tell" label="联系方式"></el-table-column>-->
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger"
                            @click="studentDelete(scope.$index, scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import student from '../../data/teacher'
    export default {
        name: "query",
        data(){
            return{
                student:[]
            }
        },
        methods:{
            getStudent(){
                let students = JSON.parse(localStorage.getItem('form'));
                student.push(students);
                this.student = student;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            studentDelete(index, id) {
                console.log(index, id);
                this.student = this .student.filter(ele =>ele.id!=id)

            }
        },
        //声明周期函数
        mounted() {
            console.log(this.getStudent());
        }
    }
</script>

<style scoped>

</style>