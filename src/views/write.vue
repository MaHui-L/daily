<template>
    <div>
        <h1>Write</h1>
        <div>
            <my-btn type="pink" title="成功" :num="number" @mh="updatenumber"></my-btn>
            <my-btn type="dodgerblue" :num="number" @mh="updatenumber"></my-btn>
            <my-btn :type="info" :num="number" @mh="updatenumber"></my-btn>
            <my-btn :num="number" @mh="updatenumber"></my-btn>
        </div>
    </div>
</template>

<script>
    import MyBtn from'../components/my-btn'
    //注册到当前的组件中去
    export default {
        name: "write",
        data:function(){
            return{
                info:'hs',
                number:10
            }
        },
        methods:{
            updatenumber(){
                this.number++;
            },

        },
        components:{
            MyBtn
        },
    }
</script>

<style scoped>
    /*@import url(d);*/

</style>