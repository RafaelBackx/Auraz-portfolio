<template>
    <div id="photo">
        <div id="header">
            <div id="title">
                <h1 class="title-primary font-l">Photo</h1>
                <h3> <router-link to="/photos" class="title-secondary font-l"> See all</router-link></h3>
            </div>
        </div>
        <div id="social-media">
            <a class="font-m hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>evrovisuals</a>
        </div>
        <div id="side-nav">
            <ul>
                <li><a class="font-m hover" href="#video">01</a></li>
                <li><a class="font-m hover active" href="#photo">02</a></li>
                <li><a class="font-m hover" href="#contact">03</a></li>
            </ul>
        </div>

        <div id="photos">
            <div class="photo-container">
                <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="photo-container">
                <img src="../../assets/images/2.jpg" alt="">
            </div>
            <div class="photo-container">
                <img src="../../assets/images/3.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #photo{
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

    #social-media{
        margin: auto;
        grid-area: 2/1/3/2;
    }

    #side-nav{
        grid-area: 2/3/3/4;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    #photos{
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.2em;
    }

    .photo-container{
        flex-basis: 33%;
        display: flex;
        justify-content: center;
    }

    .photo-container > img{
        max-height: 30vh;
    }

    @media screen and (min-width: 650px) {
        #photos{
            flex-direction: row;
            padding: 0;
        }
        .photo-container{
            justify-content: flex-start;
        }

        .photo-container > img{
            max-height: 25vw;
        }
    }
</style>