<template>
    <div id="photo-video">
        <div class="photo-container">
            <router-link to="/photos">
                <img class="img" src="../../assets/images/PhotoHomePage.jpg" alt="">
                <p class="font-l text-overlay">Photography</p>
            </router-link>
        </div>
        <div class="photo-container">
            <a href="https://vimeo.com/evro" target="_blank">
                <img class="img" src="../../assets/images/VideoHomePage.gif" alt="">
                <p class="font-l text-overlay">Videography</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .img{
        max-width: 70vw;
    }
    #photo-video{
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: center;
    }

    .photo-container{
        position: relative;
    }

    .text-overlay{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #D2A307;
        text-shadow: 2px 2px #000000;
    }

    @media screen and (min-width: 650px) {  
        #photo-video{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2vh;
        }

        .img{
            max-height: 20vh;
        }
    }

    @media screen and (min-width: 950px) {
        .img{
            max-height: 25vh;
        }
    }

    @media screen and (min-width: 1400px) {
        .img{
            max-height: 35vh;
        }
    }

    @media screen and (min-width: 1800px) {
        .img{
            max-height: 39vh;
        }
    }
</style>