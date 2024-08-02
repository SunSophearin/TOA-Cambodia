<script setup>
import { onBeforeMount, ref } from 'vue';

const showTotop=ref(false)

const clickTotop=()=>{
    window.scrollTo(0,0)
}
onBeforeMount(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>200){
            showTotop.value=true;
        }else{
            showTotop.value=false
        }
    })
})
</script>

<template>
    <div class="toTop" v-if="showTotop">
        <div class="box-top" @click="clickTotop" >
            <i class="fa-solid fa-arrow-up"></i>
        </div>
    </div>
</template>
<style scoped>
.toTop{
    position: fixed;
    right: 30px;
    bottom: 40px;
    cursor: pointer;
}
.toTop .box-top{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: red;
}
.toTop .box-top:hover{
    background-color: var(--product-header--color);
    transition: .5s;
}
.toTop .box-top i{
    color: white;
    font-size: 25px;
}
.adds{
    display: flex !important;
}
@media (max-width: 575.98px) {}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .toTop .box-top{
        width: 60px;
        height: 60px;
    }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .toTop .box-top{
        width: 60px;
        height: 60px;
    }
}
</style>