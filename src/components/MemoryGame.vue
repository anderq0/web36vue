<template>
  <h1>Memory Game</h1>
  <button>Play</button>

  <div class="memoryGame flex">
    <div
      @click="changeColor"
      class="frame"
      id="blue"
      :style="'background-color:' + colorMeaning"
    ></div>
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const colorMeaning = ref("");
const changeColor = (e: any) => {
  colorMeaning.value = e.srcElement.id;
  e.srcElement.id = "white";
  console.log(e.srcElement.id);
};
</script>

<style scoped>
/* @-webkit-keyframes pulsate {
 50% { color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff; }
}
@keyframes pulsate {
 50% { color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff; }
}
h1 {
  color: rgb(245,245,245);
  text-shadow: 0 -1px rgba(0,0,0,.1);
  -webkit-animation: pulsate 1.2s linear infinite;
} */
/* h1 {
  font-weight: bold;
  color: #646cff;
} */
h1:hover {
  color: #535bf2;
}
.frame {
  background-color: aliceblue;
  width: 50px;
  height: 50px;
}
.flex {
  display: flex;
  gap: 20px;
}
.fdc {
  flex-direction: column;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
</style>
