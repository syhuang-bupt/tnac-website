// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
// babel-plugin-import 会帮助你加载 JS 和 CSS, 按需加载即可
import { Cascader, Table, Rate, Slider, Comment, Tabs, Empty, Pagination, Transfer } from 'ant-design-vue'
// 解决Chrome51版本以后，Chrome增加了新的事件捕获机制－Passive Event Listeners问题
import 'default-passive-events'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style

// 全局引入echarts组件用于绘制图表
import echarts from 'echarts'

// 全局引入v-distpicker用于省市选择
import VDistpicker from 'v-distpicker'

Vue.prototype.$echarts = echarts

Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

// Vue.forceUpdate()

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
Vue.component(Cascader.name, Cascader)
Vue.component(Table.name, Table)
Vue.component(Rate.name, Rate)
Vue.component(Slider.name, Slider)
Vue.component(Comment.name, Comment)
Vue.component(Tabs.name, Tabs)
Vue.component(Empty.name, Empty)
Vue.component(Pagination.name, Pagination)
Vue.component(Transfer.name, Transfer)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
