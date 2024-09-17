<template>
  <h1>Memory Game</h1>
  <button>Play</button>

  <div class="memoryGame flex">
    <div>
      <img v-if="decideVisibility().first" class="frame frontPic" src="/7peak.jpg" alt="7peak" />
      <div v-else class="frame backPic"></div>
    </div>
    <div>
      <img v-if="decideVisibility().second" class="frame frontPic" src="/9bub.png" alt="9bub" />
      <div v-else class="frame backPic"></div>
    </div>
    <div>
      <img v-if="decideVisibility().third" class="frame frontPic" src="/7peak.jpg" alt="7peak" />
      <div v-else class="frame backPic"></div>
    </div>
    <div>
      <img v-if="decideVisibility().fourth" class="frame frontPic" src="/9bub.png" alt="9bub" />
      <div v-else class="frame backPic"></div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visibilityMeaning = ref(false);
const decideVisibility = ()=>{
  
  return {} as any
}
// const changeColor = (e: any) => {
//   // e.srcElement.id = e.srcElement.id == "white" ? "white" : e.srcElement.id;
//   console.log(visibilityMeaning.value)
//   // colorMeaning.value = e.srcElement.id;
//   console.log(e.srcElement.localName);
// };
</script>

<style scoped>
/* @-webkit-keyframes pulsate {
 50% { color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff; }
}
@keyframes pulsate {
 50% { color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff; }
}
*/
h1 {
  color: #535bf2;
  /* text-shadow: 0 -1px rgba(0,0,0,.1); */
  /* -webkit-animation: pulsate-27379236 2.2s cubic-bezier(0.34, -0.3, 1, 0.93) infinite; */
} 
.frame {
  background-color: aliceblue;
  width: 50px;
  height: 70px;
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
