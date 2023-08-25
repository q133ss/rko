<template>
  <div class="date-select">
    <div class="date-select__title">Даты</div>
    <button class="date-select__button" @click="toggleSubmenu">
      2023-07-09 - 2023-08-09
      <span class="date-select__icon"></span>
    </button>
    <div class="date-select__dropdown" v-if="showSubmenu">
      <ul class="date-select__menu">
        <li class="date-select__item">
          <button class="date-select__item-btn">Сегодня</button>
          <button class="date-select__item-btn">Вчера</button>
          <button class="date-select__item-btn">Неделя</button>
          <button class="date-select__item-btn">Месяц</button>
          <button class="date-select__item-btn">Квартал</button>
          <button class="date-select__item-btn" @click="openCalendar">Свой диапазон</button>
        </li>
      </ul>
      <!-- https://vcalendar.io/calendar/dates.html -->
      <div class="date-select__calendar" v-if="showCalendar">
        <VCalendar :columns="columns" :attributes="attributes" :expanded="expanded" />
        <div class="date-select__buttons">
          <Button class="date-select__btn" yellowTransparent>Назад</Button>
          <Button class="date-select__btn" yellow> Применить </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/shared/Button.vue";
  import { ref } from "vue";
  import { useScreens } from "vue-screen-utils";

  const showSubmenu = ref(false);
  const showCalendar = ref(false);

  const { mapCurrent } = useScreens({
    xs: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
  });
  const columns = mapCurrent({ lg: 2 }, 1);
  const expanded = mapCurrent({ lg: false }, true);

  const attributes = ref([
    {
      highlight: "blue",
      dates: [new Date(2022, 10, 4), [new Date(2022, 10, 7), new Date(2022, 10, 9)]],
    },
    {
      highlight: "red",
      dates: [[new Date(2022, 10, 17), new Date(2022, 10, 19)]],
    },
    {
      highlight: "green",
      dates: [[new Date(2022, 10, 20), new Date(2022, 10, 24)]],
    },
  ]);

  function toggleSubmenu() {
    showSubmenu.value = !showSubmenu.value;
  }
  function openCalendar() {
    showCalendar.value = !showCalendar.value;
  }
</script>

<style lang="scss">
  @import "@/assets/scss/components/_date-select.scss";
</style>
