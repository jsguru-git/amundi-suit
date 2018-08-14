<template>
    <div>
        {{ currentFeature.title }}
    </div>
</template>

<script>
    export default {
        name: 'feature',
        computed: {
          currentFeature () {
              return this.$store.getters['features/currentFeature']
          },
        },
    }
</script>