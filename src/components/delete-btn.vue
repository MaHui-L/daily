<template>
    <div class="right" @click = "deleteClick">X &nbsp; {{id}}</div>
</template>

<script>
    export default {
        name: "delete-btn",
        props:{
            id:{
                type: Number
            }
        },
        methods: {
            deleteClick() {
                this.$emit('delete',this.id)
            }
        },
    }
</script>

<style scoped>
    .right{
        width: 25px;
        float: right;
    }
</style>