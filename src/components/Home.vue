<template>
    <div id="home">
        <div id="header">
            <ul>
                <li><a class="font-xl" href="#video">Video</a></li>
                <li><a class="font-xl" href="contact">Contact</a></li>
                <li><a class="font-xl" href="photo">Photo</a></li>
            </ul>
        </div> 
        <div id="content">
            <div id="social-media">
                <font-awesome-icon :icon="['fa', 'font-awesome']" />
                <p>@evrovisuals</p>
            </div>
            <div id="side-nav">
                <ul>
                    <li><a href="#video">01</a></li>
                    <li><a href="#photo">02</a></li>
                    <li><a href="#contact">03</a></li>
                </ul>
            </div>
            <!-- camera layout -->
            <div id="top-left" class="camera-anchor">
                <p class="mb-50 name font-l">Evro Visuals</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #home{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    #header{
        width: 100%;
    }

    #header > ul{
        padding: 10px;
        margin: auto;
        display: flex;
        width: 50%;
        justify-content: space-between;
    }

    #header > ul > li > a:hover{
        color: #D2A307;
        border-bottom: 4px solid #D2A307;
        transition: 150ms;
    }

    #content{
        flex-grow: 1;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 4fr 8fr 4fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;
    }

    #social-media{
        margin: auto;
        grid-area: 2/1/3/2;
    }

    #social-media > p {
        transform: rotate(180deg);
        writing-mode: vertical-lr;
        padding: 10px;
    }

    #side-nav{
        padding: 10px;
        margin: auto;
        grid-area: 2/5/3/6;
    }

    #top-left{
        grid-area: 1/2/2/3;
    }
</style>