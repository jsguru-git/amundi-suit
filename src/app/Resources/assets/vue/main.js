import 'es6-promise/auto'
import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store/index';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store,
}).$mount('#app');