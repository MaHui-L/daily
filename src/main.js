import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts';

//引入组件
import index from "./views/index"
// import write from "./views/write"
import login from "./views/login"
import amain from "./views/amain"
import vcharts from "./views/vcharts"
import student from "./views/student"

import studentAdd from "./views/student/add"
import studentQuery from "./views/student/query"
import studentEdit from "./views/student/edit"

import teacherAdd from "./views/teacher/add"
import teacherQuery from "./views/teacher/query"

import write from "./views/daily/write"
import query from "./views/daily/query"


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VCharts);
//
let router = new VueRouter({
    // mode:"history",
    routes:[
      {path:'/',component:index},
      {path:'/write',component:write},
        {path:'/login',component:login,meta:{title:'登录'}},
        {path:'/amain',component:amain,meta:{title:'管理界面'},
            children:[
                {path:'studentadd',component:studentAdd,meta:{title:'学生添加'}},
                {path:'studentquery',component:studentQuery,meta:{title:'学生查看'}},
                {path:'studentedit/:id',component:studentEdit,name:'studentEdit',meta:{title:'学生编辑'}},
                {path:'teacherAdd',component:teacherAdd,meta:{title:'老师添加'}},
                {path:'teacherQuery',component:teacherQuery,meta:{title:'老师查看'}},
                {path:'vcharts',component:vcharts,meta:{title:'日报可视化'}},
            ]},
        {path:'/student',component:student,name:'student',meta:{title:'日报查看'},
        children: [
            {path:'write',component:write,name:'studentwrite',meta:{title:'学生填写日报'}},
            {path:'query',component:query,name:'studentquery',meta:{title:'学生查看日报'}},
        ]
        },


    ]
});

//导航守卫
/**
 * 当组件在进行切换时设置文档的标题
 * 1.什么时候组件在进行切换（怎样监听）
 * 2.要知道当前组件对应的标题是什么
 * 3.怎样去设置标题
 */
router.beforeEach((to, from, next) => {
    let title = to.meta.title || '日报管理系统';
    document.title = title;
    next();
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
