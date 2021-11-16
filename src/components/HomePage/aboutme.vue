<template>
    <div id="about-me">
        <div>
            <h1 class="font-xxl">Let's work!</h1>
            <br>
            <p>
                I'm a kid that has a passion for filmmaking and delivering the absolute best quality content that i can.
            </p>
            <br>
            <p>
                That's why it's an honor to be chosen for a project by you.
                Trusting me to capture your story on camera.
            </p>
            <br>
            <p>
                Don't hesitate and contact me through my mail adres: <a href="mailto:evrovisuals@outlook.com"><span class="attention">evrovisuals@outlook.com</span></a> or give me a call/text: <a href="callto:+32489030891"> <span class="attention">+32 489 03 08 91 </span></a>for any questions or project ideas
                I'm also very active on instagram: <a href="https://www.instagram.com/evrovisuals/" target="_blank"><span class="attention">@evrovisuals</span></a>
            </p>
        </div>
        <img class="img" src="../../assets/images/about_me.jpeg" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .attention{
        color: #D2A307;
    }

    .img{
        margin-top: 1em;
        max-width: 35vw;
    }

    @media screen and (min-width: 650px) {  
    
    }

    @media screen and (min-width: 950px) {
        #about-me{
            display: flex;
            justify-content: center;
            align-items:center;
            gap: 10vw;
        }

        .img{
            max-height: 50vh;
        }

        #about-me > div > p{
            text-align: left;
            font-size: large;
        }

        #about-me > div > h1{
            text-align: left;
            font-size: xxx-large;
        }
    
    }
</style>