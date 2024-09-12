<template>
  <div class="forecast flex fdc aic">
    <div class="currentDay borderMean flex aic">
      <div>
        <p class="city">{{ data.location.name }}</p>
        <p class="currentWeather">{{ data.current.temperature }}°C</p>
        <img :src="data.current.weather_icons" alt="weather" />
        <p class="writingWeatherPic">{{ data.current.weather_descriptions[0] }}</p>
      </div>
      <div>
        <p class="anotherInfo">
          <b>{{ data.location.localtime }}</b>
        </p>
        <p class="anotherInfo"><b>wind:</b> {{ data.current.wind_speed }} km/h</p>
        <p class="anotherInfo"><b>precip</b>: {{ data.current.precip }} mm</p>
        <p class="anotherInfo"><b>pressure</b>: {{ data.current.pressure }} mb</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const data = ref({} as any);

function getlocation() {
  axios("https://ipapi.co/json/").then((response) => {
    getWeatherForecast(response.data.city);
  });
}
getlocation();

function getWeatherForecast(keyword: string) {
  axios(
    `https://api.weatherstack.com/current?access_key=c0f0481ffc1efa7f9e579f4d8629186d&query=${keyword}`
  ).then((resp: any) => {
    data.value = resp.data;
  });
}
</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
}
.anotherInfo {
  font-size: 20px;
  margin-top: 40px;
}
.city {
  font-size: 30px;
}
.currentDay {
  color: #1a1a1a;
  background-color: #96b5e5;
  justify-content: space-around;
  width: 700px;
  height: 400px;
}
.currentWeather {
  font-size: 20px;
  font-weight: bold;
}
.borderMean {
  border: 1px solid;
  border-color: rgb(255, 255, 255);
  border-radius: 8px;
}
.flex {
  display: flex;
  gap: 20px;
}
.fdc {
  flex-direction: column;
}
.aic {
  align-items: center;
}
</style>
// https://v3.ru.vuejs.org/ru/guide/introduction.html#декларативная-отрисовка // Создать
// Создать html-страницу с блоками информации, которые от- // крываются по щелчку на
заголовок. В один момент времени может // быть развернут только один блок информации. //
//
https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fu2hokqg7m6Lf8XzSUQmFzEzsNa0rcHNd3HsfXplhaVeFoa32FakalGYWc30LL1EAq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FJS%2F%D0%94%D0%97%2FJS_DZ_Module_5_Week_14_1537344025.pdf&name=JS_DZ_Module_5_Week_14_1537344025.pdf
