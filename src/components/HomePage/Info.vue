<template>
    <div id="info">
        <div id="social-media">
            <a class="font-m hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>@evrovisuals</a>
        </div>
        <about-me/>
    </div>
</template>

<script>
import aboutMe from './aboutme.vue';
export default {
    components:{
        aboutMe
    }
}
</script>

<style scoped>
    #info{
        margin: auto;
        height: 120vh;
        width: 95vw;
        display: grid;
        grid-template-columns: 1fr 16fr 1fr;

    }

    #social-media{
        grid-area: 1/1/2/2;
    }
</style>