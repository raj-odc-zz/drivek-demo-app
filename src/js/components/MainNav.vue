<template>
<transition v-on:enter="enter" 
		              v-bind:css="false"
		              appear
	                >
  <div class="navbar ">
    <section class="tabs">
		<div class="layout-wrapper">
			<nav class="tabs__cmds">
				<a href="#partecipate" v-bind:class="{'is-selected': currentComponent == 'Participate' }" @click="swapComponent('Participate')" class="tabs__cmd js-tab-cmd">
					<img src="/img/participate.svg" />
					<span class="tabs__title">Participate</span>
				</a>
				<a href="#gallery" v-bind:class="{'is-selected': currentComponent == 'Gallery' }" @click="swapComponent('Gallery')"  class="tabs__cmd js-tab-cmd">
					<img src="/img/gallery.svg" />
					<span class="tabs__title">Gallery</span>
				</a>
				<a href="#showcase" v-bind:class="{'is-selected': currentComponent == 'Showcase' }" @click="swapComponent('Showcase')" class="tabs__cmd js-tab-cmd">
					<img src="/img/showcase.svg" />
					<span class="tabs__title">Showcase</span>
				</a>
			</nav>
			<div class="tabs__content-wrapper">
      	<section v-if="currentComponent === 'Participate'" class="tabs__content">
					<Participate/>
				</section>
        <section v-if="currentComponent === 'Gallery'" class="tabs__content">
        	<Gallery/>
				</section>
				<section v-if="currentComponent === 'Showcase'" class="tabs__content">
					<Showcase/>
				</section>
			</div>
		</div>
	</section>
  </div>
	</transition>
</template>

<script>
import Participate from './ParticipateComponent.vue'
import Gallery from './GalleryComponent.vue'
import Showcase from './ShowCaseComponent.vue'
import { TweenMax, Power4, TimelineMax, TimelineLite, SplitText } from 'gsap'
export default {
  name: 'MainNav',
  data () {
    return {
        currentComponent: "Participate",
        componentArray: ["Participate", "Gallery", "Showcase"]
    };
  },
  components: {
    "Participate": Participate,
    "Gallery": Gallery,
    "Showcase": Showcase,
  },
  methods: {
    createFakeData: function(){
      let data = [];
      for(let i = 0; i < 100; i++){
        data.push({first: 'John',
                  last:'Doe', 
                  suffix:'#' + i});
      }
      return data;
      },
    swapComponent: function(component)
    {
      this.currentComponent = component;
    },
		enter(el, done) {
      var tween = new TimelineLite();
        tween.set(el, {
                autoAlpha: 0,
                display: "none",
                scale: 1.1
            })
            tween.to(el, 1, {
                autoAlpha: 1,
                display: "block",
                scale: 1,
                clearProps: "scale"
            });
            tween.play()
        // const tl = new TimelineMax({
        //   onComplete: done
        // })
        
        // tl.set(el, {
        //   y: window.innerWidth * 1.5,
        //   scale: 0.8,
        //   transformOrigin: '50% 50%'
        // })
        
        // tl.to(el, 0.5, {
        //   y: 0,
        //   ease: Power4.easeOut
        // });
        
        // tl.to(el, 1, {
        //   scale: 1,
        //   ease: Power4.easeOut
        // });

        
      }
  }

}
</script>
<style scoped>
	@import 'src/css/nav.scss';  
</style>