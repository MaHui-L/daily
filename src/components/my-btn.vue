<template>
    <button :class="[type]" @click="countclick">{{uppermsg}}&nbsp;&nbsp;{{type}}&nbsp;&nbsp;{{title}}&nbsp;&nbsp;{{num}}</button>
</template>

<script>
    export default {
        name: "my-btn",
        // props:['type','title'],
        props:{
            type:{
                default:'hs'
            },
            title:{
                default: '这是一个默认的'
            },
            num:{
                required:true,
                type: Number  //验证必须为数字
            }
        },
        data:function () {
            return {
                count:1,
                msg:'my-btn'
            }
        },
        methods:{
            countclick(){
                // this.count++;
                this.$emit('mh')//父子组件通信
            },

        },
        computed:{
            uppermsg(){
                return this.msg.charAt(0).toLocaleUpperCase()+this.msg.substring(1);
            }
        }
    }
</script>

<style scoped>
    .dodgerblue{
        margin-left: 10px;
        border-radius: 5px;
        /*width: 100px;*/
        height: 40px;
        font-size: 15px;
        background-color:dodgerblue;
        border: none;
    }
    .red{
        margin-left: 10px;
        border-radius: 5px;
        /*width: 100px;*/
        height: 40px;
        font-size: 15px;
        background-color:red;
        border: none;
    }
    .hs{
        margin-left: 10px;
        border-radius: 5px;
        /*width: 100px;*/
        height: 40px;
        font-size: 15px;
        background-color:#d5d5d5;
        border: none;
    }
    .pink{
        margin-left: 10px;
        border-radius: 5px;
        /*width: 100px;*/
        height: 40px;
        font-size: 15px;
        background-color:pink;
        border: none;
    }
</style>