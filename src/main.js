import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import DataFr from "@/datas/DataFr.js"
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(SuiVue);
Vue.prototype.$langData = DataFr


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
