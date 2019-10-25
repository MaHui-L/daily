<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/amain' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>日报可视化</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="6"><div class="grid-content bg-purple">
                <ve-line :data="lineData" :settings="lineSetting"></ve-line>
            </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                <ve-line :data="lineData1" :settings="lineSetting"></ve-line>
            </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "vcharts",
        data(){
            this.lineSetting = {
              labelMap:{
                  'number':'每日提交量',
                  'status':'学习状态',
                  'skill':'技能收获'
                }
            };
            return {
                lineData:{
                    columns:['date','number'],
                    rows:[
                        {date:'10/21',number:10},
                        {date:'10/22',number:30},
                        {date:'10/23',number:41},
                        {date:'10/24',number:29},
                        {date:'10/25',number:18},
                    ]
                },
                lineData1:{
                    columns:['date','status','skill'],
                    rows:[
                        {date:'7/22',status:100,skill:0},
                        {date:'8/22',status:90,skill:20},
                        {date:'9/22',status:41,skill:50},
                        {date:'10/22',status:80,skill:70},
                        {date:'11/22',status:90,skill:80},
                        {date:'12/22',status:70,skill:85},
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>