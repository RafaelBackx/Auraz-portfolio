<template>
  <div id="portfolio">
    <home/>
    <videos/>
    <photo/>
    <contact/>
  </div>
</template>

<script>
import Home from './Home.vue'
import Videos from './video-component/Videos.vue'
import Photo from './Photo.vue'
import Contact from './Contact.vue'
export default {    
  components: {
    Home,
    Videos,
    Photo,
    Contact
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