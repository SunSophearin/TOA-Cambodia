<script setup>
import { ref,watch,watchEffect} from 'vue';
import {isFilter,subMenu, filterGrade,filterUsing, filterProducts_type,filterFtype} from '../components/Store.js';

const handleGrade=(filter)=>{
    if(filterGrade.value.includes(filter)){
       return filterGrade.value.splice(filterGrade.value.indexOf(filter),1)
    }
   return filterGrade.value.push(filter)
}
const handleUsing=(filter)=>{
    if(filterUsing.value.includes(filter)){
        return filterUsing.value.splice(filterUsing.value.indexOf(filter),1)
    }
    console.log(filterUsing.value)
    return filterUsing.value.push(filter)
    
}
const handleProducts_type=(filter)=>{
    if(filterProducts_type.value.includes(filter)){
        return filterProducts_type.value.splice(filterProducts_type.value.indexOf(filter),1)
    }
    return filterProducts_type.value.push(filter)
}
const handleFtype=(filter)=>{
    if(filterFtype.value.includes(filter)){
        return filterFtype.value.splice(filterFtype.value.indexOf(filter),1)
    }
    return filterFtype.value.push(filter)
}
</script>
<template>
    <div class="container-filter">
            <div class="menuLeft" :class="{'showFilter':isFilter}" >
                <div class="box-menuLeft">
                    <ul class="ourCategory">
                        <li><a>OUR CATEGORY</a></li>
                        <li v-for="(menu) in subMenu" :key="menu.id">
                            <router-link :to="{name:'products2',params:{'mid':menu['data-id']}}" >
                                <span>{{menu['data-name']}}</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </router-link>
                        </li>
                    </ul>

                    <Grade @filter="handleGrade"/>
                    <Using @filterUsing="handleUsing"/>
                    <Products_type @filterproducts_type="handleProducts_type"/>
                    <Film_type @filterFtype="handleFtype"/>
                </div>
            </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/filterProduct.css';
@import '../assets/styles/menuleft.css';

</style>
