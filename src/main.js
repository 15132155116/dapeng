import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import righttop from "./components/right/righttop.vue"
import live from "./components/right/live.vue"

Vue.component("righttop", righttop)
Vue.component("live", live)

// 引入及配置axios
import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:8000"
Vue.prototype.$http = axios;



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    components: {

    }

}).$mount('#app')