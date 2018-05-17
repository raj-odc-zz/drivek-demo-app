<template>
<transition v-on:enter="enter" 
		              v-bind:css="false"
		              appear
	                >
<section class="slider-wrapper slider-wrapper--main">
  <div class="carousel" data-flickity='{ "lazyLoad": true, "pageDots": false, "wrapAround":true }'>
  <div class="carousel-cell">
    <img class="carousel-cell-image"
      data-flickity-lazyload="https://unsplash.it/g/1920/800?image=0" alt="Image 1" />
  </div>
  <div class="carousel-cell">
    <img class="carousel-cell-image"
      data-flickity-lazyload="https://unsplash.it/g/1920/800?image=1" alt="image 2" />
  </div>
  <div class="carousel-cell">
    <img class="carousel-cell-image"
      data-flickity-lazyload="https://unsplash.it/g/1920/800?image=2" alt="image 2" />
  </div>
  <div class="carousel-cell">
    <img class="carousel-cell-image"
      data-flickity-lazyload="https://unsplash.it/g/1920/800?image=3" alt="image 2" />
  </div>
  <div class="carousel-cell">
    <img class="carousel-cell-image"
      data-flickity-lazyload="https://unsplash.it/g/1920/800?image=4" alt="image 2" />
  </div>
</div>
</section>
</transition>
</template>
<script>
import Flickity from 'vue-flickity';
import { TweenMax, Power4, TimelineMax, TimelineLite, SplitText } from 'gsap'
export default {
  name: 'Slider',
  components: {
    Flickity
  },
  methods: {
    enter(el, done) {
      var tween = new TimelineLite();
      tween.set('.slider-wrapper', {
                autoAlpha: 0,
                display: "none",
                scale: 1.1
            })
            tween.to('.slider-wrapper', 1, {
                autoAlpha: 1,
                display: "block",
                scale: 1,
                clearProps: "scale"
            });
            tween.play()
      },
      
  }
}  
</script>
<style scoped>
	@import 'src/css/slider.scss';
</style>