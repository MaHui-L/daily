<template>
    <div class="box">
        <h1>Index</h1>
        <!--<div class="top">-->
        <!--<input type="text" v-model="content">-->
        <!--<button @click="insertList">添加</button>-->
        <!--</div>-->
        <in-sert @insert="insertList"></in-sert>
        <my-list :lists="todolist"  @indexdelete="indexdelete" @indexchange="indexchange">

        </my-list>
    </div>
</template>

<script>
    import InSert from '../components/insert';
    import MyList from '../components/my-list';

    export default {
        name: "index",
        data: function () {
            return {
                todolist: [
                    {id: 1, content: '论文开题报告', status: false},
                    {id: 2, content: '简历，下周一', status: false},
                    {id: 3, content: '协同开发计划，下周一', status: false},
                    {id: 4, content: '下周评审，下周六', status: false},
                    {id: 5, content: '过程化开发项目', status: true},
                ],
                // content:'',
            }
        },
        methods: {
            insertList(value,) {
                let obj = {};
                obj.id = this.todolist[this.todolist.length - 1] + 1;
                // obj.content=this.content;
                obj.content = value;
                obj.status = false;
                this.todolist.push(obj)
            },
            indexdelete(id) {
                let index = this.todolist.findIndex(ele => ele.id == id);
                this.todolist.splice(index, 1)
            },
            indexchange() {
                localStorage.todolist = JSON.stringify(this.todolist);
            },



        },
        watch: {
            // todolist(){
            //     this.saveList();
            // },
            //深度监听，改变本地数据
            todolist: {
                handler: function () {
                    this.indexchange();
                },
                deep: true
            },
            content() {
                // console.log(newv,oldv);
            }
        },
        components: {
            InSert, MyList
        },
    }
</script>

<style scoped>
    .box {
        width: 800px;
        margin: 0 auto;
    }


</style>