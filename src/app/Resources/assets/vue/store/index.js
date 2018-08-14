import Vue from 'vue';
import Vuex from 'vuex';
import FeaturesModule from './features';

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
       features: FeaturesModule,
   }
});