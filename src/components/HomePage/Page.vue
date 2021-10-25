<template>
  <div id="portfolio">
    <home/>
    <info/>
  </div>
</template>

<script>
import Home from './Home.vue'
import Info from './Info.vue'
export default {    
  components: {
    Home,
    Info
  }
}
</script>

<style scoped>
  #portfolio {
    display: flex;
    flex-direction: column;
    gap: 4em;
  }
</style>