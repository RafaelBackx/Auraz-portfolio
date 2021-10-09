<template>
    <div id="videos">
        <div id="header">
            <div id="title">
                <h1 class="title-primary">Video</h1>
                <h3><a class="title-secondary" href="#video">See all</a></h3>
            </div>
        </div>
        <div id="social-media">
            <a class="font-m hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>@evrovisuals</a>
        </div>
        <div id="side-nav">
            <ul>
                <li><a class="font-m hover active" href="#video">01</a></li>
                <li><a class="font-m hover" href="#photo">02</a></li>
                <li><a class="font-m hover" href="#contact">03</a></li>
            </ul>
        </div>
        <div id="yt-videos">
            <Video :artist="'Jarra X Zaza'" :title="'Bikelife 2'" :url="'https://www.youtube.com/embed/wLWywQnTVBs'"/>
            <Video :artist="'Denna'" :title="'In de ochtend'" :url="'https://www.youtube.com/embed/b0KjO0_ZjPI'" />
            <!-- <Video :artist="'Rick astley'" :title="'Never gonna give you up'" :url="'https://www.youtube.com/embed/dQw4w9WgXcQ'" /> -->
        </div>
    </div>
</template>

<script>
import Video from './Video.vue'
export default {
    components: {
        Video
    }
}
</script>

<style scoped>
    #videos{
        margin:auto;
        width: 95vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 16fr 1fr;
        grid-template-rows: 1fr 15fr;
    }

    #header{
        display: flex;
        justify-content: flex-start;
        grid-area: 1/2/2/3;
    }

    #social-media{
        margin: auto;
        grid-area: 2/1/3/2;
    }

    #social-media > a {
        transform: rotate(180deg);
        writing-mode: vertical-lr;
    }

    #side-nav{
        grid-area: 2/3/3/4;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    #side-nav > ul {
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #yt-videos{
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    #title{
        width: 75%;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        gap: 1em;
    }

    .title-secondary{
        color: #ffffff77;
    }
</style>