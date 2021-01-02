import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
router: Router,
render: h => h(App),
}).$mount('#app');