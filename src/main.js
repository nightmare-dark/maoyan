import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem'
import './assets/css/global.styl'
import { homeFilter } from './filters/index';
import MinUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import Fw from './freamwork'
Vue.use(Fw)
Vue.use(MinUI)



for (var key in homeFilter) {
    Vue.filter(key, homeFilter[key])
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')