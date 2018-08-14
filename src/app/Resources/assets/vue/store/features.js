import _ from 'lodash';
import FeaturesAPI from '../api/features';

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        allFeatures: [],
        academyPlatformFeatures: [],
        informationPlatformFeatures: [],
        advisoryPlatformFeatures: [],
        currentFeature: null,
    },
    getters: {
        isLoading (state) {
            return state.isLoading;
        },
        currentFeature (state) {
            return state.currentFeature;
        },
        feature (state) {
            return (slug) => {
                return _.find(state.allFeatures, (feature) => { return feature.slug === slug; });
            }
        },
        features (state) {
            return (platform) => {
                switch (platform) {
                    case 'all':
                        return state.allFeatures;
                    case 'academy':
                        return state.academyPlatformFeatures;
                    case 'information':
                        return state.informationPlatformFeatures;
                    case 'advisory':
                        return state.advisoryPlatformFeatures;
                    default:
                        return [];
                }
            }
        },
    },
    mutations: {
        ['FEATURES_FETCHING'](state) {
            state.isLoading = true;
        },
        ['FEATURES_FETCHED'](state, payload) {
            state.isLoading = false;
            state.error = null;
            state.allFeatures = _.uniqBy([payload['academy'], payload['information'], payload['advisory']], 'slug')[0];
            state.academyPlatformFeatures = payload['academy'];
            state.informationPlatformFeatures = payload['information'];
            state.advisoryPlatformFeatures = payload['advisory'];
            state.currentFeature = null;
        },
        ['FEATURES_FETCHING_ERROR'](state, payload) {
            state.isLoading = false;
            state.error = payload;
        },
        ['SET_CURRENT_FEATURE'](state, payload) {
            state.currentFeature = _.find(state.allFeatures, (feature) => { return feature.slug === payload; });
        },
    },
    actions: {
        fetchFeatures ({commit}) {
            commit('FEATURES_FETCHING');
            return FeaturesAPI.features()
                .then(res => commit('FEATURES_FETCHED', res.data))
                .catch(err => commit('FEATURES_FETCHING_ERROR', err));
        },
        setCurrentFeature ({commit}, slug) {
            commit('SET_CURRENT_FEATURE', slug);
        },
    },
};