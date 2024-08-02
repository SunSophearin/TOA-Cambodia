
<script setup>
import { onMounted } from 'vue';
import { dataDetail } from './Store';
onMounted(()=>{
    window.scrollTo(0,0)
})

</script>
<template>
    <MarginTop/>
    <div class="container-fluid">
        <div class="container">
            <div class="row" >
                <div class="col-xxl-6 col-xl-6 col-lg-6 container-detail">
                    <button class="back-page"  @click="$router.go(-1)">
                        <i class="fa-solid fa-angle-left"></i>
                        <span>Back</span>
                    </button>
                    <div class="box-img">
                        <img :src="dataDetail['data-img']" alt="">
                    </div>
                    
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 container-detail">
                    <div class="box-furter">
                        <h2>
                            {{dataDetail['data-title'] }}
                        </h2>
                        <p class="detail">
                            {{dataDetail['data-des'] }}
                        </p>
                        <h4>
                            Grade
                        </h4>
                        <p>
                            {{dataDetail['data-grade'] }}
                        </p>
                        <h4>
                            Film types
                        </h4>
                        <p>
                            {{dataDetail['data-ftype'] }}
                        </p>
                        <h4>
                            Quantity
                        </h4>
                        <p>
                            {{dataDetail['data-qty'] }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid container-fluid-video">
        <div class="container containers-video">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 container_video">
                    <iframe class="play_video"
                        src="https://www.youtube.com/embed/XO46C4cL4qs?si=JCflazE2XNt8Bx3D" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
    <Slide_Related_Products/>
    <Footer/>
</template>
<style scoped>
@import '../assets/styles/detail.css';
</style>