<template>
  <h1>Memory Game</h1>
  <button @click="resetGame">Play</button>

  <div class="memoryGame flex fdc aic">
    <div class="flex">
      <div @click="decideVisibility('first', '7peak')">
        <img
          v-if="visibilityMeaning.first"
          class="frame frontPic first"
          src="/7peak.jpg"
          alt="7peak"
        />
        <div v-else class="frame backPic first"></div>
      </div>
      <div @click="decideVisibility('second', '9bub')">
        <img
          v-if="visibilityMeaning.second"
          class="frame frontPic second"
          src="/9bub.png"
          alt="9bub"
        />
        <div v-else class="frame backPic second"></div>
      </div>
      <div @click="decideVisibility('third', '7peak')">
        <img
          v-if="visibilityMeaning.third"
          class="frame frontPic third"
          src="/7peak.jpg"
          alt="7peak"
        />
        <div v-else class="frame backPic third"></div>
      </div>
      <div @click="decideVisibility('fourth', '9bub')">
        <img
          v-if="visibilityMeaning.fourth"
          class="frame frontPic fourth"
          src="/9bub.png"
          alt="9bub"
        />
        <div v-else class="frame backPic fourth"></div>
      </div>
    </div>

    <div class="flex cringe">
      <div @click="decideVisibility('fifth', 'dama')">
        <img
          v-if="visibilityMeaning.fifth"
          class="frame frontPic fifth"
          src="/dama.jpeg"
          alt="dama"
        />
        <div v-else class="frame backPic fifth"></div>
      </div>
      <div @click="decideVisibility('sixth', 'muzhik')">
        <img
          v-if="visibilityMeaning.sixth"
          class="frame frontPic sixth"
          src="/muzhik.png"
          alt="muzhik"
        />
        <div v-else class="frame backPic sixth"></div>
      </div>
      <div @click="decideVisibility('seventh', 'dama')">
        <img
          v-if="visibilityMeaning.seventh"
          class="frame frontPic seventh"
          src="/dama.jpeg"
          alt="dama"
        />
        <div v-else class="frame backPic seventh"></div>
      </div>
      <div @click="decideVisibility('eighth', 'muzhik')">
        <img
          v-if="visibilityMeaning.eighth"
          class="frame frontPic eighth"
          src="/muzhik.png"
          alt="muzhik"
        />
        <div v-else class="frame backPic eighth"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const memoryBlockList = ref([
  {classFront:"frame frontPic",src:"muzhik.png",alt:"muzhik", backPic:"frame backPic", id:1},
  {classFront:"frame frontPic",src:"muzhik.png",alt:"muzhik", backPic:"frame backPic",id:2 },

  {classFront:"frame frontPic",src:"dama.jpeg",alt:"dama", backPic:"frame backPic", id:3},
  {classFront:"frame frontPic",src:"dama.jpeg",alt:"dama", backPic:"frame backPic", id:4},

  {classFront:"frame frontPic",src:"9bub.png",alt:"9bub", backPic:"frame backPic",id:5},
  {classFront:"frame frontPic",src:"9bub.png",alt:"9bub", backPic:"frame backPic",id:6},

  {classFront:"frame frontPic",src:"7peak.jpg",alt:"7peak", backPic:"frame backPic",id:7},
  {classFront:"frame frontPic",src:"7peak.jpg",alt:"7peak", backPic:"frame backPic",id:8},
])
console.log(memoryBlockList.value[0])
const visibilityMeaning = ref({
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  sixth: false,
  eighth: false,
  seventh: false,
});

// Массив для хранения двух открытых карточек
const openCards = ref([] as any[]);

const decideVisibility = (id: string, alt: string) => {
  let visResult = visibilityMeaning.value as any;
  if (visResult[id]) return; //если трушка то вырубаем нафиг

  visResult[id] = true;

  openCards.value.push({ id, alt });

  if (openCards.value.length === 2) {
    if (openCards.value[0].alt !== openCards.value[1].alt) {
      setTimeout(() => {
        visResult[openCards.value[0].id] = false;
        visResult[openCards.value[1].id] = false;
        openCards.value = [];
      }, 500); // Задержка для UX
    } else {
      openCards.value = [];
    }
  }
};

const resetGame = () => {
  visibilityMeaning.value = {
    first: false,
    second: false,
    third: false,
    fourth: false,
  };
  openCards.value = [];
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
  color: #535bf2;
  text-shadow: 0 -1px rgba(0,0,0,.1);
  -webkit-animation: pulsate-27379236 2.2s cubic-bezier(0.34, -0.3, 1, 0.93) infinite;
} */
.cringe {
  position: fixed;
  top: 500px;
}
.frame {
  background-color: aliceblue;
  height: 120px;
  width: 100px;
}
.flex {
  margin-top: 30px;
  display: flex;
  gap: 30px;
}
.fdc {
  flex-direction: column;
  gap: 30px;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
</style>
