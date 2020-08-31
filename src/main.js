import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import left from './components/left.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    components: {
        left: left
    }

}).$mount('#app')