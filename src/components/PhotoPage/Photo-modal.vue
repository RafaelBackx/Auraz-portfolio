<template>
    <div id="modal" @click="hideModal">
        <img :src="src" alt="">
    </div>
</template>

<script>
export default {
    props: [ 'src'],
    methods:{
        hideModal(e){
            let target = e.target
            let image = document.getElementsByTagName("img")[0]
            console.log(image === target)
            if (image !== target){
                this.$emit("close-modal")
            }     
        }
    }
}
</script>

<style scoped>
    #modal{
        position: fixed;
        z-index: 1;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        overflow: auto !important;
        background-color: #55555570;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #modal > img{
        max-width: 75%;
        margin: auto;
        animation: fadeIn 0.6s;
    }

    @media screen and (min-width:900px) {
        #modal>img{
            max-height: 80%;
        }
    }

    @keyframes fadeIn {
        from { opacity: 0}
        to {opacity: 1}
    }
</style>