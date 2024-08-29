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

  <div class="calendarInfo flex fdc aic">
    <div class="inputs flex aic jcc">
      <label for="labelMonth">Month</label>
      <input v-model="monthValue" type="text" id="month" />
      <label for="labelMonth">Year</label>
      <input v-model="yearValue" type="text" id="year" />
    </div>
    <button @click="generateCalendarFunc" class="generateCalendar">Generate</button>
    <p id="monthAndYear">{{ searchDateRes }}</p>

    <table id="calendarTable">
    <thead>
      <tr>
        <th>MON</th>
        <th>TUE</th>
        <th>WED</th>
        <th>THU</th>
        <th>FRI</th>
        <th>SUT</th>
        <th>SUN</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td></td>

      </tr>
      
      <tr>
        <td></td>
      </tr>

      <tr>
        <td></td>
      </tr>

    </tbody>
  </table>
  </div>
  
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue"
import TodoElement from "./components/TodoElement.vue"
import { ref } from "vue"
const random = ref(Math.random())
let searchDateRes = ref('')
const monthValue = defineModel<string>('monthValue') 
const yearValue = defineModel('yearValue')
// let date = ref(new Date(`${yearValue.value}-${monthValue.value-1}-1`))

const generateCalendarFunc = () =>{
    searchDateRes.value = months.value[+(monthValue.value as string)-1] +', '+ yearValue.value
    let date = new Date(`${monthValue.value}-1-${yearValue.value}`)
    console.log(date)
}

let months = ref(['january','february','march','april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])
let images = ref([
  { id: 0, src: "durov.webp", alt: "durov", isVisible: "block" },
  { id: 1, src: "lomonosov.webp", alt: "lomonosov", isVisible: "none" },
  { id: 2, src: "pushkin.webp", alt: "pushkin", isVisible: "none" },
])
let currentSlide = 0
let imagesSize = images.value.length

const clickLeft = () => {
  currentSlide = (currentSlide - 1 + imagesSize) % imagesSize
  resultOfSlider()
}
const clickRight = () => {
  currentSlide = (currentSlide + 1) % imagesSize // после последней пикчи переключается на первый
  resultOfSlider()
}
const resultOfSlider = () => {
  for (let el of images.value) {
    el.isVisible = el.id == currentSlide ? "block" : "none"
  }
}

const todos = ref([
  { text: "анжуманя делат" },
  { text: "прес качат" },
  { text: "бегит" },
])
</script>

<style scoped>
.calendarInfo{
  margin-top: 50px;
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
html-страницу, на которой пользователь может вве- // сти номер месяца, год, и получить
календарь на указанный месяц. // Календарь можно генерировать с помощью таблицы. Начальный
// день недели всегда должен быть понедельник. //
https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fu2hokqg7m6Lf8XzSUQmFzEzsNa0rcHNd3HsfXplhaVeFoa32FakalGYWc30LL1EAq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FJS%2F%D0%94%D0%97%2FJS_DZ_Modul_4_Week_13_1532340649.pdf&name=JS_DZ_Modul_4_Week_13_1532340649.pdf&nosw=1
