// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'//get post 等方法插件
import VueRouter from 'vue-router'//路由
import Monitor from './views/Monitor'
import Index from './views/Index'
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
//配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:Index},
    {path:"/monitor",component:Monitor}
  ],
  mode:"history"
});
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
});
