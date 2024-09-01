<template>
  <div class="calendarInfo flex fdc aic">
    <div class="inputs flex aic jcc">
      <label for="labelMonth">Month</label>
      <input v-model="monthValue" type="text" id="month" />
      <label for="labelMonth">Year</label>
      <input v-model="yearValue" type="text" id="year" />
    </div>
    <button @click="generateCalendarFunc" class="generateCalendar">Generate</button>
    <p id="monthAndYear">{{ searchDateRes }}</p>

    <table id="calendarTable" :hidden="hiddenMeaning">
      <thead>
        <tr>
          <th>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SUT</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(week, index) in calendar" :key="index">
          <td v-for="(day, idx) in week" :key="idx">{{ day }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let searchDateRes = ref("");
const monthValue = defineModel("monthValue");
const yearValue = defineModel("yearValue");
const calendar = ref([]);
let hiddenMeaning = ref(true);

const generateCalendarFunc = () => {
  hiddenMeaning.value = !hiddenMeaning.value
  searchDateRes.value =months.value[+(monthValue.value as string) - 1] + ", " + yearValue.value;
  let currentDayOfWeek = new Date(yearValue.value, monthValue.value - 1, 1).getDay();
  let daysInMonth = new Date(yearValue.value, monthValue.value, 0).getDate();

  let tempCalendar = []; //тут хранятся недели в месяце
  let week = []; // а тут дни в неделе

  for (let day = 1; day <= daysInMonth; day++) {
    week[currentDayOfWeek] = day; //

    if (currentDayOfWeek === 6 || day === daysInMonth) {
      tempCalendar.push([...week]);
      week = [];
      currentDayOfWeek = -1;
    }

    currentDayOfWeek++;
  }

  calendar.value = tempCalendar;
};

let months = ref([
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
]);
</script>

<style scoped>
.calendarInfo {
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
</style>
