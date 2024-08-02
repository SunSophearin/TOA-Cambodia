
<script setup>
import {openSlide} from '../components/Store.js'
</script>

<template>
    <div class="container-slidebar" :class="{'open-slide':openSlide}">
        <div class="box-slidebar">
            <ul class="clone-toa">
                <li class="markss">
                    <h1>
                        <!-- <img src="../assets/img/logo.svg" alt=""> -->
                        <router-link  @click="actives=false,openSlide=false" to="/"><img src="../assets/img/logo.svg" alt=""></router-link>
                    </h1>
                    <h2 @click="openSlide=false">
                        <i class="fa-solid fa-xmark"></i>
                    </h2>
                </li>
            </ul>
            <ul>
                <li>
                    <RouterLink to="/en/products" @click=" openSlide=false">Products</RouterLink>
                </li>
                <li>
                    <RouterLink to="/en/videos"  @click="actives=false,openSlide=false">Videos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/en/disributor" @click="actives=false,openSlide=false">Dealer Location</RouterLink>
                </li>
                <li>
                    <RouterLink to="/en/Aboutus" @click="actives=false,openSlide=false" >Aboute us</RouterLink>
                </li>
            </ul>
        </div>
        <div class="informations">
            <h1>
                RedEye.
            </h1>
            <ul class="information">
                <li>
                    <a href="https://www.facebook.com/zi.rin.75?mibextid=ZbWKwL">
                        <img src="../assets/img/fb2.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://t.me/Sunsophearin">
                        <img src="../assets/img/tele2.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>
<style scoped>
@import '../assets/styles/slidebar.css';
</style>