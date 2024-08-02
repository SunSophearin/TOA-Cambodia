<script setup>
import { computed } from 'vue';
import { product } from './Store';
const emit=defineEmits(['filterFtype']);
const clickFtype=(e)=>{
    emit('filterFtype',e.target.value)
}
const flim_type=computed(()=>{
    return [...new Set(product.value.map(el=>el['data-ftype']))]
})
</script>
<template>
    <ul class="checkBox">
        <li>
            <span>FLIM TYPES</span>
        </li>
        <li v-for="(ft,i) in flim_type" :key="i">
            <input type="checkbox" @change="clickFtype" :value="ft">
            <label for="">{{ft}}</label>
        </li>
    </ul>
</template>
<style scoped>
@import '../assets/styles/menuleft.css';
</style>