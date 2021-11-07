<template>
    <div id="modal">
        <img :src="src" alt="">
    </div>
</template>

<script>
export default {
    props: [ 'src']
}
</script>

<style scoped>
    #modal > img{
        max-width: 85vw;
    }
</style>