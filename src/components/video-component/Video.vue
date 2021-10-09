<template>
    <div id="video">
        <div id="video-info" class="p-50">
            <div class="titles">
                <p class="title font-l">{{ title }}</p>
                <p class="artist font-s">{{ artist }}</p>
            </div>
            <a class="yt-url active" :href="url">
                {{ url }}
            </a>
        </div>
        <div id="yt-video">
            <iframe class="youtube-video" :src="url"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    props: ['artist','title','url']
}
</script>

<style scoped>
    .artist{
        color: #D2A307;
    }

    .youtube-video{
        flex-grow: 1;
    }

    .p-50{
        padding: 0.5em 0;
    }

    .yt-url{
        display: none;
    }

    @media screen and (min-width: 650px) {
        #video {
            display: flex;
            flex-direction: row-reverse;
            gap: 1em;
            flex-grow: 1;
        }

        #yt-video{
            flex-basis: 60%;
            display: flex;
            justify-content: flex-start;
        }

        #video-info{
            flex-basis: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 1em;
        }

        .yt-url{
            display: block;
            font-size: 1.2vw;
        }
    }
</style>