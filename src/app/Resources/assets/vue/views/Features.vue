<template>
    <section id="features">
        <div class="container">
            <div class="row">
                <div class="col_g col-md-6 col-lg-4">
                    <div class="toStick">
                        <div class="toggle">
                            <router-link to="/features/all" tag="h2" active-class="active">All features</router-link>
                        </div>
                        <div class="toggle">
                            <router-link to="/features/academy" tag="h2" active-class="active">Academy platform <i class="fas fa-angle-down"></i></router-link>
                            <features-list :display="platform === 'academy'" :platform="platform"></features-list>
                        </div>
                        <div class="toggle">
                            <router-link to="/features/information" tag="h2" active-class="active">Information platform <i class="fas fa-angle-down"></i></router-link>
                            <features-list :display="platform === 'information'" :platform="platform"></features-list>
                        </div>
                        <div class="toggle">
                            <router-link to="/features/advisory" tag="h2" active-class="active">Advisory platform <i class="fas fa-angle-down"></i></router-link>
                            <features-list :display="platform === 'advisory'" :platform="platform"></features-list>
                        </div>
                    </div>
                </div>
                <div class="col-1 mx-auto mt-5 mb-5" v-if="isLoading">
                    <spring-spinner
                        :animation-duration="2000"
                        :size="200"
                        :color="'#354d8b'"
                    />
                </div>
                <feature-card-list v-else-if="isPlatform" :platform="platform"></feature-card-list>
                <feature v-else></feature>
            </div>
        </div>
    </section>
</template>

<script>
    import _ from 'lodash';
    import { SpringSpinner } from 'epic-spinners';
    import FeaturesList from '../components/features/FeaturesList';
    import FeatureCardList from '../components/features/FeatureCardList';
    import Feature from '../components/features/Feature';

    export default {
        name: 'features',
        components: { SpringSpinner, FeaturesList, FeatureCardList, Feature },
        created () {
            this.$store.dispatch('features/fetchFeatures').then(() => {
               if (!_.isEmpty(this.$route.params.slug)) {
                   this.$store.dispatch('features/setCurrentFeature', this.$route.params.slug);
               }
            });
        },
        computed: {
            isLoading () {
                return this.$store.getters['features/isLoading'];
            },
            isPlatform() {
                return _.isEmpty(this.$route.params.slug);
            },
            platform () {
                return this.$route.params.platform;
            },
        },
    }
</script>