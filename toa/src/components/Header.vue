<script setup>
import { onBeforeMount, ref,onMounted,watchEffect} from 'vue';
import {openSlide,openPopup,clickback,searchDataProducts} from '../components/Store.js'
const emit=defineEmits(['filterSearch'])
const clickSlidebar=()=>{
    openSlide.value=!openSlide.value
}
const actives=ref(false)
const searchProduct=(e)=>{
       searchDataProducts.value=e.target.value;
       console.log(searchDataProducts.value)
}
const clickActive=()=>{
    actives.value=!actives.value
}

watchEffect(()=>[
    actives.value=false
])
</script>

<template>
    <div class="container-fluid header-pc">
        <div class="container">
            <div class="row">
                <div class="col xll-12 col-xl-12 col-lg-12 header">
                    <div class="box-header">
                        <div class="box-logo">
                            <router-link to="/"><img src="../assets/img/logo.svg" alt=""></router-link>
                            
                        </div>
                        <div class="container-bar">
                            <div class="box-search">
                                <div class="box1-1">
                                    <input type="text" placeholder="What are you looking for.." @input="searchProduct">
                                    <div class="btn-search1"><i class="fa-solid fa-magnifying-glass"></i></div>
                                </div>
                                <div class="box1-2">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/zi.rin.75?mibextid=ZbWKwL">
                                                <i class="fa-brands fa-facebook"></i>
                                                <span>Login</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fa-solid fa-flag"></i>
                                                <span>Khmer</span>
                                            </a>
                                        </li>                                    </ul>
                                </div>
                            </div>
                            <div class="box-menubar">
                                <ul>
                                    <li>
                                        <RouterLink to="/en/products" @click="clickActive" :class="{'active':actives}">Products</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/en/videos"  @click="actives=false">Videos</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/en/disributor" @click="actives=false">Dealer Location</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/en/Aboutus"  >Aboute us</RouterLink>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid-header-phone">
        <div class="container" style="padding: 0;">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 container-Header-phone">
                    <div class="header-phone">
                        <div class="box-logo">
                            <router-link to="/"><img src="../assets/img/logo.svg" alt=""></router-link>
                            <!-- <img src="../assets/img/logo.jpg" alt=""> -->
                        </div>
                        <div class="container-search-headerPh">
                            <div class="box-ph-search">
                                <div class="search-box">
                                    <button class="btn-search"><i class="fas fa-search"></i></button>
                                    <input type="text" @input="searchProduct" class="input-search" placeholder="Type to Search...">
                                </div>
                            </div>
                            <div class="box-Phslide-bar" >
                                <div class="slide_bar" @click="clickSlidebar">
                                    <i class="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/header.css';
</style>