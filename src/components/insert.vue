<template>
    <div>
        <h1>插入</h1>
        <form>
            <div class="top">
                <input type="text" v-model="content">
                <button @click="insertClick">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "insert",
        data: function () {
            return {
                content:'',
                id:{
                    type: Number,
                }
            }
        },
        methods: {
            insertClick() {
                this.$emit('insert',this.content)
            }
        },
    }
</script>

<style scoped>
    .top {
        height: 50px;
    }

    .top > input {
        border-radius: 5px;
        width: 200px;
        height: 30px;
        font-size: 15px;
        border: 1px solid aquamarine;
    }

    .top > button {
        margin-left: 10px;
        border-radius: 5px;
        width: 50px;
        height: 30px;
        font-size: 15px;
        background-color: aquamarine;
        border: none;
    }
</style>