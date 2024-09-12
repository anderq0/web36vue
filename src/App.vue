<template>
  <HeaderComponent>
    <p>𓆝</p>
    <p>тэг</p>
  </HeaderComponent>
  <div id="conditionalRendering">
    <div v-if="random > 0.5">Сейчас меня видно</div>
    <div v-else>А уже нет</div>
  </div>

  <ol>
    <template v-for="todo in todos">
      <TodoElement :todo="todo"></TodoElement>
    </template>
  </ol>
  <div class="gallery flex aic jcc">
    <button @click="clickLeft">👈</button>

    <template v-for="image in images">
      <img :src="image.src" :alt="image.alt" :style="'display:' + image.isVisible" />
    </template>

    <button @click="clickRight">👉</button>
  </div>

  <CalendarTable></CalendarTable>
  <!-- <ForecastTable></ForecastTable> -->

  <div class="fontManager flex fdc jcc aic">
    <div class="chooseAnswer flex">
      <div class="rovniedivi">
        <label for="checkboxBold">Bold</label>
        <input v-model="boldModel" type="checkbox" />
        <label for="checkboxItalic">Italic</label>
        <input v-model="italicsModel" type="checkbox" />
        <label for="checkboxUnderlined">Underlined</label>
        <input v-model="underlinedModel" type="checkbox" />
      </div>

      <div class="rovniedivi">
        <label for="radioLeft">Left</label>
        <input
          name="checkboxes"
          id="left"
          value="text-align: start;"
          v-model="radioModel"
          type="radio"
        />
        <label for="radioJustify">Justify</label>
        <input
          checked
          name="checkboxes"
          id="justify"
          value="text-align: center;"
          v-model="radioModel"
          type="radio"
        />
        <label for="radioRight">Right</label>
        <input
          name="checkboxes"
          id="right"
          value="text-align: end;"
          v-model="radioModel"
          type="radio"
        />
      </div>
    </div>

    <textarea v-model="inputTextManagerModel" class="inputTextManager"></textarea>
    <button @click="resTextManager">Show text</button>
    <div class="flex">
      <div class="textManagerResultDiv" :style="stylesRes">{{ textManagerResult }}</div>
    </div>
  </div>

  <!-- <p :style="stylesRes">{{ textManagerResult }}</p> -->
  <hr />
  <p>Memory Game</p>
  <div class="memoryGame flex">
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
    <div class="frame"></div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import CalendarTable from "./components/CalendarTable.vue";
import TodoElement from "./components/TodoElement.vue";
// import ForecastTable from "./components/ForecastTable.vue";
import { ref } from "vue";

const radioModel = defineModel("radioLeftModel");
const textManagerResult = ref("" as string | undefined);
const underlinedModel = defineModel("underlinedModel");
const boldModel = defineModel("boldModel");
const italicsModel = defineModel("italicsModel");
const inputTextManagerModel = defineModel<string>("inputTextManagerModel");
const stylesRes = ref("");
const resTextManager = () => {
  textManagerResult.value = inputTextManagerModel.value;
  stylesRes.value = "";
  if (underlinedModel.value == true) {
    stylesRes.value += "text-decoration: underline;";
  }
  if (boldModel.value == true) {
    stylesRes.value += "font-weight: bold;";
  }
  if (italicsModel.value == true) {
    stylesRes.value += "font-style: italic;";
  }
  stylesRes.value += radioModel.value;
  console.log(radioModel.value);
};
const random = ref(Math.random());

let images = ref([
  { id: 0, src: "durov.webp", alt: "durov", isVisible: "block" },
  { id: 1, src: "lomonosov.webp", alt: "lomonosov", isVisible: "none" },
  { id: 2, src: "pushkin.webp", alt: "pushkin", isVisible: "none" },
]);
let currentSlide = 0;
let imagesSize = images.value.length;

const clickLeft = () => {
  currentSlide = (currentSlide - 1 + imagesSize) % imagesSize;
  resultOfSlider();
};
const clickRight = () => {
  currentSlide = (currentSlide + 1) % imagesSize; // после последней пикчи переключается на первый
  resultOfSlider();
};
const resultOfSlider = () => {
  for (let el of images.value) {
    el.isVisible = el.id == currentSlide ? "block" : "none";
  }
};

const todos = ref([
  { text: "анжуманя делат" },
  { text: "прес качат" },
  { text: "бегит" },
]);
</script>

<style scoped>
.rovniedivi {
  display: flex;
  gap: 10px;
  margin-right: 30px;
}
.frame {
  background-color: aliceblue;
  width: 50px;
  height: 50px;
}
.textManagerResultDiv {
  background-color: rgb(59 59 59);
  height: 200px;
  width: 600px;
  font-size: 20px;
}
.inputTextManager {
  height: 200px;
  font-size: 20px;
  width: 600px;
  resize: none;
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
.gallery {
  display: flex;
  justify-content: center;
}
.gallery img {
  height: 350px;
  width: 350px;
}
h1 {
  user-select: none;
}
</style>
// https://v3.ru.vuejs.org/ru/guide/introduction.html#декларативная-отрисовка // Создать
// Создать html-страницу с блоками информации, которые от- // крываются по щелчку на
заголовок. В один момент времени может // быть развернут только один блок информации. //
https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fu2hokqg7m6Lf8XzSUQmFzEzsNa0rcHNd3HsfXplhaVeFoa32FakalGYWc30LL1EAq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FJS%2F%D0%94%D0%97%2FJS_DZ_Modul_4_Week_13_1532340649.pdf&name=JS_DZ_Modul_4_Week_13_1532340649.pdf
