<script setup>
import { ref,watchEffect,computed,watch, onMounted, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import {product,subMenu,filterGrade,dataDetail,isFilter,openPopup,
     filterUsing, filterProducts_type,filterFtype, searchDataProducts} from '../components/Store.js'
import Products from './Products.vue';


const dataGrade=ref([])
const route= useRoute();
const router= useRouter();
const mid=ref(0)
const companiesvisible=ref(8);
const step=ref(8)

const Newdata=computed(()=>{
    let dataProduct=product.value;
    
    if(mid.value!=0){
        dataProduct= product.value.filter(el=>el['data-cate_id']==mid.value)
    }
    if(filterGrade.value.length){
        dataProduct=dataProduct.filter(el=>filterGrade.value.includes(el['data-grade']))
    }
    if(filterUsing.value.length){
        dataProduct=dataProduct.filter(el=>filterUsing.value.includes(el['data-using']))
    }
    if(filterProducts_type.value.length){
        dataProduct=dataProduct.filter(el=>filterProducts_type.value.includes(el['data-ptype']))
    }
    if(filterFtype.value.length){
        dataProduct=dataProduct.filter(el=>filterFtype.value.includes(el['data-ftype']))
    }
    if(searchDataProducts.value.length){
        dataProduct=dataProduct.filter(el=>el['data-title'].toLocaleLowerCase().includes(searchDataProducts.value))
    }
    return dataProduct;
})
const newDatas=computed(()=>{
    return Newdata.value.slice(0,companiesvisible.value)
})

const clickDetail=(pro)=>{
        dataDetail.value['data-cate_id']=pro['data-cate_id'],
        dataDetail.value['data-pid']=pro['data-pid'],
        dataDetail.value['data-title']=pro['data-title'],
        dataDetail.value['data-using']=pro['data-using'],
        dataDetail.value['data-grade']=pro['data-grade'],
        dataDetail.value['data-ptype']=pro['data-ptype'],
        dataDetail.value['data-ftype']=pro['data-ftype'],
        dataDetail.value['data-img']=pro['data-img'],
        dataDetail.value['data-qty']=pro['data-qty'],
        dataDetail.value['data-des']=pro['data-des'],
    dataDetail.value
    console.log(dataDetail.value);
    router.push({
        name:'detail',
        params:{
            'nid':pro['data-pid']
        }
    })
}
watchEffect(()=>{
    mid.value=0
    if(route.params.mid){
        mid.value=route.params.mid;
    }
})
const clickShowfilter=()=>{
    isFilter.value=!isFilter.value
    openPopup.value=!openPopup.value
}
onBeforeMount(()=>{
    window.scrollTo(0,0)
})
</script>
<template>
    <div class="col-xxl-9 col-xl-9 col-lg-9" style="background-color: ">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12" style="padding: 3px;">
                <div class="box-slide">
                    <img src="../assets/img/slide_subproduct.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 title">
                <h1>OUR PRODUCTS</h1>
                <h2 class="filter" @click="clickShowfilter">
                        <i class="fa-solid fa-filter"></i>
                        <span>Filter</span>
                    </h2>
            </div>
        </div>
        <div class="row">
            <div 
            v-for="(pro,i) in newDatas" :key="i"
            class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6 container-products">
                <div class="box-products" @click="clickDetail(pro)">
                    <div class="box-img">
                        <img :src="pro['data-img']" alt="" >
                    </div>
                    <div class="box-txt">
                        <span>{{pro['data-using']}}</span>
                        <h1>{{pro['data-title']}}</h1>
                    </div>
                </div>
            </div>
            <div class="container container-loadMore" style="padding-block: 50px;">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 loadMore" v-if="companiesvisible<Newdata.length">
                
                <button @click="companiesvisible+=step" >
                    <i class="fa-solid fa-chevron-down"></i>
                    <span>Load More...</span>
                    
                </button>
            </div>
        </div>
    </div>
        </div>
    </div>
   
</template>
<style scoped>
@import '../assets/styles/productsSub.css';
@import '../assets/styles/ourproducts.css';
</style>