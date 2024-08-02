<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import {isFilter,product,searchDataProducts,dataDetail,openPopup,filterGrade,filterUsing,filterProducts_type,filterFtype} from '../components/Store.js'
import { useRouter } from 'vue-router';
const companiesVisible=ref(12);
const step=ref(12);
const router=useRouter()



const Newdata=computed(()=>{
    let dataProduct=product.value;

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
    return Newdata.value.slice(0,companiesVisible.value)
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
const clickShowfilter=()=>{
    isFilter.value=!isFilter.value
    openPopup.value=!openPopup.value
}
</script>

<template>
    <div class="container-fluid">
        <div class="container">
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
            </div>
        </div>
    </div>
    <div class="container container-loadMore" style="padding-block: 50px;">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 loadMore" v-if="companiesVisible<product.length">
                
                <button @click="companiesVisible+=step" >
                    <i class="fa-solid fa-chevron-down"></i>
                    <span>Load More...</span>
                    
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/ourproducts.css';
</style>