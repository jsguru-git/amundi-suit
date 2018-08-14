<template>
    <aside id="contact" class="d-none d-sm-block">
        <i class="fas fa-question"></i>
        <img :src="imagePath(imageName)" alt="">
        <div class="text">
            <span>Your platform contact</span>
            <ul>
                <li><i class="far fa-user"></i> {{ username }}</li>
                <li><i class="fas fa-phone-volume"></i>{{ phone }}</li>
                <li><i class="far fa-envelope"></i>{{ email }}</li>
            </ul>
        </div>
    </aside>
</template>

<script>
    import ImageMixin from '../../mixins/image';

    export default {
        name: 'platformContact',
        props: ['imageName', 'username', 'phone', 'email'],
        mixins: [ImageMixin],
    }
</script>