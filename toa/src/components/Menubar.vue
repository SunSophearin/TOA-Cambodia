<script setup>
import {subMenu} from '../components/Store.js'
</script>

<template>
    <div class="container">
        <ul>
            <!-- <li>
                <RouterLink to="/product/:mid">ALL</RouterLink>
            </li> -->
            <li v-for="(menu,i) in subMenu" :key="i">
                <RouterLink :to="{name:'home2',params:{'mid':menu['data-id']}}">
                    {{menu['data-name']}}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<style scoped>
@import '../assets/styles/menubar.css';
.container{
    width: 80%;
    background-color: black;
    margin: auto;
}
.container ul{
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.container ul li a{
    display: block;
    color: white;
    padding: 10px;
    text-decoration: none;
}
</style>