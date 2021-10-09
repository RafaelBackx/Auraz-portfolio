<template>
    <div id="video">
        <div id="video-info" class="p-50">
            <p class="title font-l">{{ title }}</p>
            <p class="artist font-s">{{ artist }}</p>
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
</style>