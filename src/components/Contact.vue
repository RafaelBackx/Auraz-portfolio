<template>
    <div id="contact">
        <div id="header">
            <h2 class="font-l">Contact</h2>
        </div>
        <div id="social-media">
            <a class="font-m hover" href="https://www.instagram.com/evrovisuals/" target="_blank"><i class="fab fa-instagram p-25"></i>@evrovisuals</a>
        </div>
        <div id="side-nav">
            <ul>
                <li><a class="font-m hover" href="#video">01</a></li>
                <li><a class="font-m hover" href="#photo">02</a></li>
                <li><a class="font-m hover active" href="#contact">03</a></li>
            </ul>
        </div>
        <div id="contact-content">
            <div id="contact-article">
                <p>
                    I'm a kid that has a passion for film making and delivering the absolute best quality content that i can
                </p>
                <br>
                <p>
                    That's why it's an honor to be chosen for a project by you.
                    trusting me to capture your story on camera.
                </p>
                <br>
                <p>
                    Don't hesitate and fill in this form for any questions or porject ideas.
                    I'm also very active on instagram for a faster response time.
                </p>
            </div>
            <form id="form">
                <input class="form-input" type="text" placeholder="Name">
                <input class="form-input" type="Email" placeholder="Email">
                <textarea class="form-input" placeholder="Message">
                </textarea>
                <button class="form-button" type="button"> Send
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #contact{
        margin: auto;
        width: 95vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 16fr 1fr;
        grid-template-rows: 1fr 15fr;
    }

    #social-media{
        grid-area: 2/1/3/2;
    }

    #side-nav{
        grid-area: 2/3/3/4;
    }

    #header{
        grid-area: 1/2/2/3;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    #contact-content{
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #contact-article{
        padding: 1em 0;
    }

    .form-input{
        font-family: "Ikaros", sans-serif;
        background-color: #000;
        border:none;
        border-bottom: 2px solid #D2A307;
        padding: 0.2em;
        color: #fff;
    }

    .form-input:focus{
        outline: none;
    }

    #form{
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 2em;
        width: 75%;
    }

    .form-button{
        border: none;
        background-color: #000;
        color: #D2A307;
        border: 2px solid #D2A307;
        padding: 0.2em;
        cursor: pointer;
    }

    .form-button:hover{
        background-color: #D2A307;
        color: #000;
        transition: 200ms;
    }

</style>