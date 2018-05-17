<template>
  <div class="layout portable-layout--stacked">
						<transition v-on:enter="enter"
						v-bind:css="false"
						appear
						>
						<div class="layout__item palm--order-02 ph">
							<div id="showcase-grid" class="grid">
								<div id="showcase-grid__wrapper">
									<div class="grid__row layout">
										<div class="grid__item layout__item u-2/3">
											<img src="img/grid/01.png" alt="TEST">
										</div>
										<div class="grid__item grid__item--stacked layout__item u-1/3">
											<div class="grid__item">
												<img src="img/grid/02_2.png" alt="">
											</div>
											<div class="grid__item">
												<img src="img/grid/thumb_gears2_default.png" alt="">
											</div>
										</div>
									</div>
									<div class="grid__row layout">
										<div class="grid__item  grid__item--stacked layout__item u-1/3">
											<div class="grid__item">
												<img src="img/grid/03.png" alt="">
											</div>
											<div class="grid__item">
												<img src="img/grid/gears2_design_detail01.png" alt="">
											</div>
										</div>
										<div class="grid__item layout__item u-2/3">
											<img src="img/grid/gears2_design_detail03.png" alt="">
										</div>
									</div>
									<div class="grid__row layout">
										<div class="grid__item layout__item">
											<img src="img/grid/gears2_connectivity_basic.png" alt="">
										</div>
										<div class="grid__item layout__item">
											<img src="img/grid/gears2_design_detail02.png" alt="">
										</div>
									</div>
									<div class="grid__row layout">
										<div class="grid__item layout__item">
											<img src="img/grid/gears2_kv_left.png" alt="test">
										</div>
										<div class="grid__item layout__item">
											<img src="img/grid/01_2.png" alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
						</transition>
						<transition v-on:enter="enter"
						v-bind:css="false"
						appear
						>
						<div class="layout__item palm--order-01 ph">
							<section id="showcase-copy" class="showcase-copy fixedsticky">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque, in
									nemo nisi quaerat quibusdam temporibus. Ducimus eaque eligendi, enim mollitia neque
									porro reprehenderit sequi ullam unde vel voluptates voluptatum?
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque.
								</p>
								<div class="btn-wrapper">
									<a href="#" class="btn btn--sec">I'm a CTA</a>
									<a href="#" class="btn btn--sec">Yeah, me too</a>
								</div>
							</section>
						</div>
						</transition>
					</div>
</template>
<script>
import { TweenMax, Power4, TimelineMax, TimelineLite } from 'gsap'

  export default {
    name: 'ShowCaseComponent',
    methods: {
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
	  	}
		}
  }
</script>

<style>
	@import 'src/css/showcase.scss';
</style>