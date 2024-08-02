<script setup>
import { computed } from 'vue';
import { product } from './Store';

const emit=defineEmits(['filterproducts_type'])
const clickproducts_type=(e)=>{
    emit('filterproducts_type',e.target.value)
}
const products_type=computed(()=>{
    return [...new Set(product.value.map(el=>el['data-ptype']))]
})
</script>
<template>
    <ul class="checkBox">
        <li>
            <span>PRODUCTSS TYPE</span>
        </li>
        <li v-for="(pt,i) in products_type" :key="i">
            <input type="checkbox" @change="clickproducts_type" :value="pt">
            <label for="">{{pt}}</label>
        </li>
    </ul>
</template>
<style scoped>
@import '../assets/styles/menuleft.css';
</style>