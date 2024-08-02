<script setup>
import { computed } from 'vue';
import { grade,filterGrade,product, clickback } from '../components/Store.js';

const emit=defineEmits(['filter'])

const status=computed(()=>{
    return [...new Set(product.value.map(el=>el['data-grade']))]
})

const clickgrade=(gd)=>{
    emit('filter',gd.target.value)
    console.log(gd.target.value)
}
</script>
<template>
    <ul class="checkBox">
        <li>
            <span>GRADE</span>
        </li>
        <li v-for="(stu,i) in status" :key="i">
            <input type="checkbox" @change="clickgrade" :value="stu">
            <label for="">{{stu}}</label>
        </li>
    </ul>
</template>
<style scoped>

@import '../assets/styles/menuleft.css';
</style>