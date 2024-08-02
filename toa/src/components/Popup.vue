<script setup>
import {openPopup,clickback,isFilter} from '../components/Store.js'
const clickPopup=()=>{
    isFilter.value=!isFilter.value
    openPopup.value=!openPopup.value
}
</script>

<template>
    <div class="popUp" @click="clickPopup"></div>
</template>
<style scoped>
.popUp{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.297);
}
</style>