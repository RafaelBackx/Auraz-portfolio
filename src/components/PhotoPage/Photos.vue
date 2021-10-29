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
                <img src="../../assets/images/photos-1.jpg" alt="">
                <img src="../../assets/images/photos-2.jpg" alt="">
            </div>
            <div class="single">
                <img src="../../assets/images/photos-landscape-1.jpg" alt="">
            </div>
            <div class="single">
                <img src="../../assets/images/photos-landscape-2.jpg" alt="">
            </div>
            <div class="double">
                <img src="../../assets/images/photos-3.jpg" alt="">
                <img src="../../assets/images/photos-4.jpg" alt="">
            </div>
            <div class="double">
                <img src="../../assets/images/photos-5.jpg" alt="">
                <img src="../../assets/images/photos-6.jpg" alt="">
            </div>
            <div class="single">
                <img src="../../assets/images/photos-landscape-3.jpg" alt="">
            </div>
            <div class="double">
                <img src="../../assets/images/photos-7.jpg" alt="">
                <img src="../../assets/images/photos-8.jpg" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
    }

    .single > img{
        max-width: 70vw;
    }

    @media screen and (min-width: 650px) {

    }

    @media screen and (min-width: 950px) {
        .logo{
            max-height: 10vh;
        }
    }
</style>