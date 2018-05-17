<template>
  <div id="app">
    <Header/>
    <Slider/>
    <div id="mainNav">
      <MainNav/>
    </div>
  </div>
  
</template>

<script>
import MainNav from './MainNav.vue'
import Slider from './SliderComponent.vue'
import Header from './HeaderComponent.vue'

export default {
  components: { 
    Header,
    Slider,
    MainNav,
  }
}
</script>


