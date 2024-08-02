<script setup>
import {product,dataDetail} from '../components/Store.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation , Pagination} from 'swiper/modules';
import { computed } from 'vue';


const clickDetail=(re)=>{
    window.scrollTo(0,0)
        dataDetail.value['data-cate_id']=re['data-cate_id'],
        dataDetail.value['data-pid']=re['data-pid'],
        dataDetail.value['data-title']=re['data-title'],
        dataDetail.value['data-using']=re['data-using'],
        dataDetail.value['data-grade']=re['data-grade'],
        dataDetail.value['data-ptype']=re['data-ptype'],
        dataDetail.value['data-ftype']=re['data-ftype'],
        dataDetail.value['data-img']=re['data-img'],
        dataDetail.value['data-qty']=re['data-qty'],
        dataDetail.value['data-des']=re['data-des'],
    dataDetail.value
    console.log(dataDetail.value);
    router.push({
        name:'detail',
        params:{
            'nid':re['data-pid']
        }
    })
}
const relatedData=computed(()=>{
    return product.value.filter(el=>el['data-cate_id']==dataDetail.value['data-cate_id'])
})

console.log(dataDetail.value)


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
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 related">
                    <h1>
                        Related Products
                    </h1>
                </div>
                <div class="col-xxl-12 col-xl-12 col-lg-12 containerslide">
                    <div class="box-slide">
                        <swiper
                        :navigation="true"
                            :slidesPerView="3"
                            :spaceBetween="30"
                            :freeMode="true"
                            
                            :modules="modules"
                            class="mySwiper"
                        >
                            <swiper-slide v-for="(re,i) in relatedData" :key="i">
                                <div class="box-products" @click="clickDetail(re)">
                                <div class="box-img">
                                    <img :src="re['data-img']" alt="">
                                </div>
                                <div class="box-txt">
                                    <span>{{re['data-using']}}</span>
                                    <h1>{{re['data-title']}}</h1>
                                </div>
                            </div>
                            </swiper-slide>
                            
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/slide_Related_Products.css';

</style>