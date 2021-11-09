<template>
<div id="photo-page">
    <div id="Header">
        <router-link to="/">
            <img class="logo" src="../../assets/images/logo.png" alt="">
        </router-link>
    </div>
    <div id="content">
        <div id="title">
            <h1 class="font-l text-align-left">Photography</h1>
        </div>
        <div id="social-media">
            <a class="font-s hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
            <a class="font-s hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
            <a class="font-s hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
            <a class="font-s hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
            <a class="font-s hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
        </div>
        <div id="photos">
            <div class="double">
                <img @click="imgClick" src="../../assets/images/photos-1.jpg" alt="">
                <img @click="imgClick" src="../../assets/images/photos-2.jpg" alt="">
            </div>
            <div class="double">
                <img @click="imgClick" src="../../assets/images/photos-3.jpg" alt="">
                <img @click="imgClick" src="../../assets/images/photos-4.jpg" alt="">
            </div>
            <div class="single">
                <img @click="imgClick" src="../../assets/images/photos-landscape-1.jpg" alt="">
            </div>
            <div class="double">
                <img @click="imgClick" src="../../assets/images/photos-5.jpg" alt="">
                <img @click="imgClick" src="../../assets/images/photos-6.jpg" alt="">
            </div>
            <div class="single">
                <img @click="imgClick" src="../../assets/images/photos-landscape-2.jpg" alt="">
            </div>
            <div class="double">
                <img @click="imgClick" src="../../assets/images/photos-7.jpg" alt="">
                <img @click="imgClick" src="../../assets/images/photos-8.jpg" alt="">
            </div>
            <div class="single">
                <img @click="imgClick" src="../../assets/images/photos-landscape-3.jpg" alt="">
            </div>
            <div class="double">
                <img @click="imgClick" src="../../assets/images/photos-9.jpg" alt="">
                <img @click="imgClick" src="../../assets/images/photos-10.jpg" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import imageModal from './Photo-modal.vue'
export default {
    methods : {
        imgClick(e){
            let imageSource = e.path[0].src
            let landscape = imageSource.indexOf("landscape") !== -1
            let properties = landscape ? {width: '85%', adaptive: true} : { height: '85%', adaptive: true}
            this.$modal.show(
                imageModal,
                {
                    src: imageSource,
                },
                properties
            )
        }
    }
}
</script>

<style>
    #Header{
        margin-top: 3vh;
    }

    #photo-page{
        width: 100vw;
        height: 100vh;
    }

    #content{
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        grid-template-rows: 1fr auto;
        row-gap: 1em;
    }

    #title{
        grid-area: 1/2/2/3;
    }

    #title > h1{
        margin: auto;
        max-width: 70vw;
    }

    #photos{
        margin: 1vh auto 5vh auto;
        max-width: 70vw;
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    #social-media{
        grid-area: 2/1/3/2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }

    .logo{
        max-height: 7vh;
    }

    .double{
        display: flex;
        justify-content: space-between;
        gap: 1vw;
    }

    .double > img{
        max-width: calc(70vw/2);
        cursor: pointer;
    }

    .single > img{
        max-width: 71vw;
        cursor: pointer;
    }

    .vm--modal{
        width: 85vw !important;
        height: auto !important;
        /* height: auto !important; */
        margin: auto;
    }

    @media screen and (min-width: 950px) {
        .logo{
            max-height: 10vh;
        }
    }
</style>