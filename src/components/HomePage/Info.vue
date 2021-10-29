<template>
    <div id="info">
        <div id="social-media">
            <a class="font-m hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
        </div>
        <div id="content">
            <about-me/>
            <photoVideo/>
        </div>
    </div>
</template>

<script>
import aboutMe from './aboutme.vue';
import photoVideo from './photovideo.vue';
export default {
    components:{
        aboutMe,
        photoVideo
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

    #content{
        grid-area: 1/2/2/3;
        display: flex;
        flex-direction: column;
        gap: 10vh;
        align-items: center;
    }

    #social-media{
        grid-area: 1/1/2/2;
    }

    @media screen and (min-width: 650px) {  
        #content{
            max-width: 75%;
            margin: 0 auto;
            justify-content: space-evenly;
        }
    }

    @media screen and (min-width: 950px) {
    
    }
    
</style>