<template>
    <aside id="modalVideo">
        <i class="close"><i class="far fa-times-circle"></i></i>
        <iframe width="560" height="315" :src="videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </aside>
</template>

<script>
    export default {
        name: 'platformVideo',
        props: ['videoSrc'],
    }
</script>