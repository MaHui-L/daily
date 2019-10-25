<template>
    <div class="panel" :class="'panel-'+scene">
        <ul class="list-group">
            <my-li v-for="item in lists" :key="item.id" :content="item.content" :status="item.status"
            :id="item.id" @listdelete="listdelete" @listchange="listchange">
                {{item.content}}
            </my-li>
        </ul>
    </div>
</template>

<script>

    import MyLi from'../components/my-li';
    export default {
        name: "my-list",
        props:{
            lists:{
                required:true,
                type:Array,
                // default:function () {
                //     return [];
                // },
            },
            scene:{
                type: String,
                default:'danger',
            }
        },
        methods:{
            listdelete(id){
                this.$emit('indexdelete',id);
            },
            listchange(id){
                this.$emit('indexchange',id);
            }
        },
    components:{
        MyLi
    },
    }
</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);
    .panel {
        width: 500px;
        height: auto;
        border: 2px solid pink;
    }

    ul {
        list-style: none;
    }

</style>