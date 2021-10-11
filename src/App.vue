<template>
  <div id="app">
    <home/>
    <videos/>
    <contact/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Videos from './components/video-component/Videos.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'App',
  components: {
    Home,
    Videos,
    Contact
  }
}
</script>

<style>
  @font-face {
    font-family: "Ikaros";
    src: local("Ikaros"), url("./fonts/Ikaros-Regular.otf") format("truetype");
  }

  html{
    scroll-behavior: smooth;
  }

  #app {
    overflow-x: hidden;
    font-family: "Ikaros", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    background-color: #000;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  a{
    text-decoration: none;
    color: #fff;
  }

  .font-l{
    font-size: large;
  }

  .font-m{
    font-size: medium;
  }

  .font-s{
    font-size: small;
  }

  .font-xs{
    font-size: x-small;
  }

  @media screen and (min-width: 650px) {
    .font-l{
        font-size: x-large;
    }

    .font-m{
        font-size: large;
    }

    .font-s{
      font-size: medium;
    }

    .font-xs{
      font-size: small;
    }
  }

  @media screen and (min-width: 950px) {
    .font-l{
        font-size: xx-large;
    }
    .font-m{
        font-size: x-large;
    }

    .font-s{
      font-size: large;
    }

    .font-xs{
      font-size: medium;
    }
  }

  #social-media{
    margin: auto;
  }

  #social-media > a {
    transform: rotate(180deg);
    writing-mode: vertical-lr;
  }

  #side-nav{
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  #side-nav > ul {
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .bg-white{
    background-color: #fff;
  }

  .p-1{
    padding: 0.1em;
  }

  .mb-50{
    margin-bottom: 0.5em;
  }

  .color-black{
    color: #000;
  }

  .text-align-left{
    text-align: left;
  }

  .text-align-right{
    text-align: right;
  }

  .hover:hover{
    color: #D2A307;
    transition: 150ms;
  }

  .mr-25{
    margin-right: 0.25em;
  }   

  .active{
    color: #D2A307;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>
