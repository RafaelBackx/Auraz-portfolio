<template>
<div id="photos">
    <div id="Header">
        <router-link class="hover font-l" to="/"> Home </router-link>
    </div>
    <div id="content">
        <h1 class="font-l">Photos</h1>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #photos{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .hover:hover{
        color: #D2A307;
        border-bottom: 4px solid #D2A307;
        transition: 150ms;
    }
</style>