<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    window.scrollTo(0,0)
})
</script>
<template>
    <MarginTop/>
    <div class="container pro-container">
        <div class="row">
            <MenuLeft/>
            <ProductsSub/>
        </div>
    </div>
    <Footer/>
</template>
<style scoped>
.pro-container{
    margin-top: 15px;
}
</style>