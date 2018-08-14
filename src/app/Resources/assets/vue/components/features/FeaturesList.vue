<template>
    <div class="content">
        <ul>
            <li v-for="feature in features" v-if="display">
                <router-link :to="'/features/' + platform + '/' + feature.slug" @click.native="setCurrentFeature(feature.slug)" active-class="active"><b>{{ feature.title }}</b>{{ feature.subtitle }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'featuresList',
        props: ['display', 'platform'],
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
