<template>
    <div id="videos">
        <div id="header">
            <router-link class="hover font-l" to="/">Home </router-link>
        </div>
        <div id="content">
            <Video :artist="'Jarra X Zaza'" :title="'Bikelife 2'" :url="'https://www.youtube.com/embed/wLWywQnTVBs'"/>
            <Video :artist="'Denna'" :title="'In de ochtend'" :url="'https://www.youtube.com/embed/b0KjO0_ZjPI'" />
        </div>
    </div>    
</template>

<script>
import Video from '../HomePage/video-component/Video.vue'

export default {
    components:{
        Video
    }
}
</script>

<style scoped>
    #videos{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .hover:hover{
        color: #D2A307;
        border-bottom: 4px solid #D2A307;
        transition: 150ms;
    }

    #content{
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    @media screen and (min-width:650px) {
        #content{
            padding: 5vw;
        }
    }
</style>