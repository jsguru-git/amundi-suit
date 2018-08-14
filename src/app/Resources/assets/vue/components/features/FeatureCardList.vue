<template>
    <div class="col_d col-md-6 col-lg-8">
        <div class="row h_parent">
            <div v-for="feature in features" class="col-sm-6 col-md-12 col-lg-6">
                <router-link :to="'/features/' + platform + '/' + feature.slug" @click.native="setCurrentFeature(feature.slug)" tag="div" class="bloc h_child">
                    <span v-if="feature.isMandatory" class="bandeau"></span>
                    <div class="image">
                        <img :src="feature.imageURL" width="200" height="100" alt="">
                    </div>
                    <span class="titre">{{ feature.title }}</span>
                    <p>{{ feature.subtitle }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'featureCardList',
        props: ['platform'],
        computed: {
            features () {
                return this.$store.getters['features/features'](this.$props.platform);
            },
        },
        methods: {
            setCurrentFeature (slug) {
                this.$store.dispatch('features/setCurrentFeature', slug);
            },
        },
    }
</script>