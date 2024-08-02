<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {openPopup} from '../src/components/Store.js'
</script>

<template>
  <Header/>
  <Slidebar/>
  <Popup v-if="openPopup"/>
  <filterProduct/>
  <RouterView />
  <Totop/>
</template>
