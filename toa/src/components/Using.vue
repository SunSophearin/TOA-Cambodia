<script setup>
import { computed } from 'vue';
import {product} from '../components/Store.js'

const emit=defineEmits(['filterUsing'])
const using=computed(()=>{
    return [...new Set(product.value.map(el=>el['data-using']))]
})
const clickUsing=(e)=>{
    emit('filterUsing',e.target.value)
}

</script>
<template>
    <ul class="checkBox">
        <li>
            <span>USING</span>
        </li>
        <li v-for="(us,i) in using" :key="i">
            <input type="checkbox" @change="clickUsing" :value="us">
            <label for="">{{us}}</label>
        </li>
    </ul>
</template>
<style scoped>
@import '../assets/styles/menuleft.css';
</style>