import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home';
import AdvisoryPlatform from '../views/platforms/AdvisoryPlatform';
import Features from '../views/Features';
import Dashboard from '../views/dashboard/Dashboard';
import MyAccount from '../views/user/MyAccount';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/platform/advisory', component: AdvisoryPlatform },
        { path: '/platform', redirect: '/platform/advisory' },
        { path: '/features/:platform/:slug?', component: Features },
        { path: '/features', redirect: '/features/all' },
        { path: '/dashboard', component: Dashboard},
        { path: '/myAccount', component: MyAccount},
        { path: '*', redirect: '/' }
    ],
    mode: 'history',
});