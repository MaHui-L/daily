<template>
    <li class="list-group-item" :class="'list-group-item-'+classname" >
        <input type="checkbox" v-model="status" @click="lichange">
        {{content}}{{status}}{{id}}
        <!--<div class="right" @click = "deleteList(item.id)">X</div>-->
        <de-lete @delete="lidelete" :id="id"></de-lete>
    </li>
</template>

<script>
    import DeLete from'../components/delete-btn';
    export default {
        name: "my-li",
        props:{
            content:{
                required:true,
                type:String,
            },
            status:{
                default:true,
                type: Boolean
            },
            id:{
                type: Number
            },
        },
        methods:{
            lidelete(id){
                this.$emit('listdelete',id);
            },
            lichange(id){
                this.$emit('listchange',id);
            }
        },
        computed:{
            classname(){
                return this.status?'danger':'success';
            }
        },
        components:{
            DeLete,
        },
    }
</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);
    li {
        border-bottom: 1px solid #d5d5d5;
        line-height: 50px;
    }
</style>