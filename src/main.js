import Vue from 'vue'
import App from './App.vue'
import xjui from './packages/index';

Vue.config.productionTip = false

Vue.use(xjui);

new Vue({
  render: h => h(App),
}).$mount('#app')
