<script setup>
import {slideList} from '../components/Store.js'
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
    <div class="container-fluid">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 container-slide">
                <swiper
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }"
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :loop="true"
                    :pagination="{
                    clickable: true,
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(e,i) in slideList" :key="i">
                        <img :src="e.img" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-slide{
    height: 500px;
    padding: 0;
    margin: 0;
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
    display: block;
    width: 100% !important;
    /* margin: 0 !important;
    padding: 0 !important; */
}
.mySwiper .swiper-wrapper .swiper-slide img{
    display: block;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    user-select: none !important;
}

@media (max-width: 575.98px) {
    .container-slide{
        height: 270px;
    }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .container-slide{
        height: 300px;
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .container-slide{
        height: 400px;
    }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}
</style>