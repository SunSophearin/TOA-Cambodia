<script setup>
import {subMenu} from '../components/Store.js'
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation , Pagination} from 'swiper/modules';

const modules = [ Autoplay , Navigation, Pagination ];
const pagination= {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
}
</script>

<template>
    <div class="container-fluid" style="background-color: white;">
  <div class="container" >
    <div class="row">
      <div class="col-xxl-12 col-xl-12 col-lg-12 slide-container">
          <swiper
            :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
            :navigation="false" 
            :loop='true'
            :slidesPerView="4"
            :spaceBetween="40"
            
            :breakpoints="{
              '500': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              '640': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              '768': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }"
            :modules="modules"
            class="mySwiper" >
            <swiper-slide v-for="(menu) in subMenu" :key="menu.id">
                <router-link :to="{name:'products2',params:{'mid':menu['data-id']}}" >
                    <span :style="menu['data-background']">{{menu['data-name']}}</span>
                </router-link>
            </swiper-slide>
          </swiper>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.slide-container{
    padding: 0;
    margin: 0;
    height: 80px;
    display: flex;
    justify-content:center ;
}
.mySwiper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mySwiper .swiper-wrapper{
  width: 100%;
    height: 100%;
}
.mySwiper .swiper-wrapper .swiper-slide{
    display: flex;
    align-items: center;
    width: 280px !important;
    margin: 0 !important;
    padding: 5px !important;
}
.mySwiper .swiper-wrapper .swiper-slide a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    
}
.mySwiper .swiper-wrapper .swiper-slide a span{
    width: 200px;
    height: 70%;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    font-family: --font-family--Battambang;
    font-size: 18px;
}
@media  (min-width: 0px) and (max-width: 499px) {
  .slide-container{
    height: 60px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide{
    width: 130px !important;
    margin: 0 !important;
    padding: 4px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide a span{
    width: 100% !important;
    font-size: 11px;
    padding: 0px !important;
  }
}
@media  (min-width: 500px) and (max-width: 575.98px) {
  .slide-container{
    height: 50px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide{
    width: 165px !important;
    margin: 0 !important;
    padding: 6px !important;
    
  }
  .mySwiper .swiper-wrapper .swiper-slide a span{
    width: 165px !important;
    font-size: 14px;
    padding: 4px !important;
  }
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .slide-container{
    height: 70px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide{
    width: 170px !important;
    margin: 0 !important;
    padding: 7px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide a span{
    width: 170px !important;
    font-size: 12px !important;
    padding: 2px !important;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .slide-container{
    height: 70px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide{
    width: 190px !important;
    margin: 0 !important;
    padding: 7px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide a span{
    width: 190px !important;
    font-size: 15px !important;
    padding: 2px !important;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .slide-container{
    height: 70px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide{
    width: 190px !important;
    margin: 0 !important;
    padding: 7px !important;
  }
  .mySwiper .swiper-wrapper .swiper-slide a span{
    width: 190px !important;
    font-size: 15px !important;
    padding: 2px !important;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}
</style>