<template>
<transition v-on:enter="enter" 
		              v-bind:css="false"
		              appear
	                >
  <div id="gallery" class="tabs__content">
    <div class="layout-wrapper layout-wrapper--tiny palm-layout--stacked">
      <header class="layout layout--middle palm-layout--stacked">
        <div class="layout__item">
          <h1 class="heading heading--main">Projects</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut commodi consectetur corporis cum eaque ex harum hic in ipsa labore nam odio omnis optio.
          </p>
        </div>
        <div class="layout__item">
          <div class="btn-wrapper btn-wrapper--center">
            <a href="#partecipate" class="btn btn--main">Participate</a>
          </div>
        </div>
      </header>
		</div>
  
    <section class="gallery">
    <div class="gallery__boxes js-open-detail">	
        <div v-for="item in this.paginatedData" class="gallery__el js-open-detail">	
          <div>	
            <div class="gallery__image">
              <img :src=item.attrs.img alt="" class="project__media">
            </div>
            <div class="gallery__text">
                {{item.attrs.make}}		
            </div>
            <div class="gallery__title">
                {{item.attrs.model}}
            </div>
            <div class="gallery__text">
                CarID: {{item.attrs.carId}}
            </div>
          </div>
        </div>
      </div>
      <nav id="gellery__paging" class="gallery__paging">
        <button class="gallery__paging__cmd gallery__paging__cmd--symbol" 
        @click="pageNumber=1">&laquo;</button>
        <button class="gallery__paging__cmd gallery__paging__cmd--symbol" 
        :disabled="pageNumber === 1" @click="prevPage">&lsaquo;</button>
        <span v-for="page of this.pageCount">
        <button class="gallery__paging__cmd" @click="pageNumber=page" v-bind:class="{'is-active': page == pageNumber }">
          {{page}}
        </button>
        </span>
        <button class="next gallery__paging__cmd gallery__paging__cmd--symbol"
        :disabled="pageNumber >= this.pageCount" @click="nextPage">&rsaquo;</button>
        <button  class="gallery__paging__cmd gallery__paging__cmd--symbol"
        @click="pageNumber=pageCount">&raquo;</button>
      </nav>
    </section>
  </div>
  </transition>
</template>
<script>
import { TimelineLite } from 'gsap'
import carData from "../../../data/cars.json"
  export default {
    name: 'GalleryComponent',
    data: function() {
      return {
        pageNumber: 1,
        size: 12
      }
    },
    computed:{
      pageCount(){
        return Math.floor(carData.length/this.size);
      },
      paginatedData(){
        const start = this.pageNumber * this.size,
              end = start + this.size;
        return carData
                .slice(start, end);
      }
    },
    methods: {
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      },
      enter(el, done) {
      var tween = new TimelineLite();
      tween.set('#gallery', {
                autoAlpha: 0,
                display: "none",
                scale: 1.1
            })
            tween.to('#gallery', 1, {
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
	@import 'src/css/gallery.scss';  
</style>