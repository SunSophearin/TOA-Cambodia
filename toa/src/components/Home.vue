<script setup>
import { onBeforeMount, onMounted } from 'vue';

onMounted(()=>{
    window.scrollTo(0,0);
})

</script>
<template>
    <MarginTop/>
    <SlideHome/>
    <Slide_menu/>
    <Ourproducts/>
    <Footer/>
</template>