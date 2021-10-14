<template>
    <div id="home">
        <div id="header">
            <ul>
                <li><a class="font-m" href="#video">Video</a></li>
                <li><a class="font-m" href="#contact">Contact</a></li>
                <li><a class="font-m" href="#photo">Photo</a></li>
            </ul>
        </div>
        <div id="content">
            <div id="social-media">
                <a class="font-m hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>@evrovisuals</a>
            </div>
            <div id="side-nav">
                <ul>
                    <li><a class="font-m hover" href="#video">01</a></li>
                    <li><a class="font-m hover" href="#photo">02</a></li>
                    <li><a class="font-m hover" href="#contact">03</a></li>
                </ul>
            </div>
            <!-- camera layout -->
            <!-- Top left-->
            <div id="top-left" class="top camera-anchor">
                <p class="name font-l text-align-left">Evro Visuals</p>
                <svg class="camera-anchor-lines landscape" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <line x1="0" x2="200" y1="0" y2="0" />
                    <line x1="0" x2="0" y1="0" y2="100" />
                </svg>
                <svg class="camera-anchor-lines portrait" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <line x1="0" x2="100" y1="0" y2="0" />
                    <line x1="0" x2="0" y1="0" y2="150" />
                </svg>
            </div>
            <!-- Top right -->
            <div id="top-right" class="top camera-anchor">
                <div class="battery">
                    <img src="../assets/images/battery.png">
                    <p class="font-l">
                        64%
                    </p>
                </div>
                <svg class="camera-anchor-lines landscape" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin meet">
                    <line x1="0" x2="200" y1="0" y2="0" />
                    <line x1="200" x2="200" y1="0" y2="100" />
                </svg>
                <svg class="camera-anchor-lines portrait" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin meet">
                    <line x1="0" x2="100" y1="0" y2="0"/>
                    <line x1="100" x2="100" y1="0" y2="150"/>
                </svg>
            </div>
            <!-- Center -->
            <div id="center">
                <img src="../assets/images/profile.png" alt="profielfoto">
            </div>
            <!-- Bottom left -->
            <div id="bottom-left" class="bottom camera-anchor">
                <svg class="camera-anchor-lines landscape" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet">
                    <line x1="0" x2="200" y1="100" y2="100" />
                    <line x1="0" x2="0" y1="0" y2="100" />
                </svg>
                <svg class="camera-anchor-lines portrait" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <line x1="0" x2="100" y1="150" y2="150"/>
                    <line x1="0" x2="0" y1="0" y2="150"/>
                </svg>
                <p class="font-l text-align-left">1/125</p>
            </div>
            <!-- Bottom center -->
            <div id="bottom-center">
                <p class="font-l">
                    F2.8
                </p>
                <div class="bottom-center-text">
                    <p class="bg-white color-black p-1 font-l mr-25">M.M.</p>
                    <p class="font-l">-1.7</p>
                </div>
            </div>
            <!-- Bottom right -->
            <div id="bottom-right" class="bottom camera-anchor">
                <svg class="camera-anchor-lines landscape" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
                    <line x1="0" x2="200" y1="100" y2="100" />
                    <line x1="200" x2="200" y1="0" y2="100" />
                </svg>
                <svg class="camera-anchor-lines portrait" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin meet">
                    <line x1="0" x2="100" y1="150" y2="150"/>
                    <line x1="100" x2="100" y1="0" y2="150"/>
                </svg>
                <p class="text-align-right font-l">ISO 800</p>
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
        align-items: center;
        justify-content: center;
    }

    #header{
        width: 100%;
        max-height: 10vh;
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
        display: grid;
        grid-template-columns: 1fr 4fr 8fr 4fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;
        max-height: 90vh;
        width: 95vw;
    }

    #social-media{
        grid-area: 2/1/3/2;
    }

    #side-nav{
        grid-area: 2/5/3/6;
    }

    #side-nav > ul {
        height: 50%;
    }

    #top-left{
        grid-area: 1/2/2/3;
    }

    #top-right{
        grid-area: 1/4/2/5;
        align-items: flex-end;
    }

    #center{
        grid-area: 2/3/3/4;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #bottom-left{
        grid-area: 3/2/4/3;
    }

    #bottom-center{
        grid-area: 3/3/4/4;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    #bottom-right{
        grid-area: 3/4/4/5;
        align-items: flex-end;
    }

    .bottom{
        justify-content: flex-end !important;
    }

    .top{
        justify-content: flex-end !important;
    }

    .landscape{
        display: none;
    }

    .camera-anchor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .camera-anchor-lines{
        flex-basis: 75%;
        stroke-width: 7px;
        stroke: #fff;
        max-width: 100%;
    }

    .battery{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1vw;
    }

    .battery > img{
        width: 32px;
    }

    #center > img{
        border-radius: 50%;
        border: 5px solid #D2A307;
        max-height: 20vh;
        width: auto;
    }

    .bottom-center-text{
        display: flex;
    }

    @media screen and (min-width: 650px) {
        #header > ul{
            width: 40%;
        }

        .portrait{
            display: none;
        }
        .landscape{
            display: block;
        }

        .battery > img{
            width: 48px;
        }

        #center > img{
            max-height: 25vh;
        }
    }

    @media screen and (min-width: 950px) {
        .battery > img{
            width: 96px;
        }

        #center > img{
            max-height: 37vh;
        }

        .camera-anchor{
            max-height: 25vh;
        }
    }
</style>