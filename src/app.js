/**
 * 描述: 入口页面
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/21
 * 创建时间: 14:26
 */
import Vue from "vue";
import router from "./router";                  // 导入路由配置对象

// 创建和挂载根实例
const app = new Vue({router}).$mount('#app');
