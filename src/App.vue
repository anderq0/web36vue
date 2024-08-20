<template>
  <h1 v-if="bool" @click="str+='!'">{{ str }}</h1>
  <h1 v-else @click="str+='!'">{{ str.split('').reverse().join('')}}</h1>
  <button v-on:click="bool=!bool, color+=150" :style="'color:#' + color">Reverse</button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const str = ref('Damn it is vue')
  const bool = ref(true)
  const color = ref(123123)
  
</script>

<style scoped>
h1{
  user-select: none;
}
</style>
// https://v3.ru.vuejs.org/ru/guide/introduction.html#декларативная-отрисовка