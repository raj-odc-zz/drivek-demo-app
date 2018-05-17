<template>
  <section id="partecipate" class=" Participate tabs__content">
	 <transition v-on:enter="enter" 
		              v-bind:css="false"
		              appear
	                >
					<div class="layout portable-layout--stacked">
						<figure class="layout__item u-1/3 hero portable--order-02">
							<div class="svg-wrapper">
								<svg class="shape-wrapper" xmlns="http://www.w3.org/2000/svg">
									<rect class="shape"/>
								</svg>
							</div>
							<img src="img/ph01.png" alt="" class="hero__media">
						</figure>
						<div class="layout__item u-2/3 portable--order-01">
							<h1 class="heading heading--sec">How to participate</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolor enim expedita explicabo illum impedit iste labore, minima mollitia nemo officia rem rerum suscipit tempora. Blanditiis natus quas voluptatem!
							</p>
							<div class="btn-wrapper">
								<a href="#" class="btn btn--sec">Download the template</a>
							</div>
							<div class="form-wrapper">
								<ParticipateForm/>
							</div>
						</div>
					</div>
				</transition>
				</section>
</template>
<script>
import { TimelineLite } from 'gsap'
import ParticipateForm from './ParticipateForm.vue'
  export default {
    name: 'ParticipantComponent',
    components: {
      ParticipateForm,
    },
    data () {
      return {
        count: 1
      }
    },
		methods: {
      enter(el, done) {
        var tween = new TimelineLite();
        tween.set('#partecipate', {
                autoAlpha: 0,
                display: "none",
                scale: 1.1
            })
            tween.to('#partecipate', 1, {
                autoAlpha: 1,
                display: "block",
                scale: 1,
                clearProps: "scale"
            });
            tween.play()
      }
	  }
  }
</script>