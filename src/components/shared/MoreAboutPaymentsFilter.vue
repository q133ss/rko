<template>
  <div class="payments-filter" v-if="showFilter">
    <div class="payments-filter__wrapper">
      <div class="payments-filter__head">
        <div class="payments-filter__title">{{ title }}</div>
      </div>
      <div class="payments-filter__items">
        <div class="payments-filter__item">
          <DateSelect />
        </div>
        <div class="payments-filter__item">
          <CustomSelect
            title="Метод оплаты"
            placeholder="Выберите метод оплаты"
            icon="/images/icons/loupe.svg"
            :sublistItems="offers"
          />
        </div>
        <div class="payments-filter__item">
          <CustomSelect title="Статус" placeholder="Выберите статус" :sublistItems="status" arrow />
        </div>
        <div class="payments-filter__item">
          <Button
            class="payments-filter__button"
            :class="{ 'payments-filter__button_icon': hasInfo }"
            :icon="hasInfo ? 'cross' : ''"
            :gray="hasInfo"
            :yellow="!hasInfo"
            @click="hasInfo = !hasInfo"
          >
            {{ hasInfo ? "Очистить" : "Показать" }}
          </Button>
        </div>
      </div>
      <button class="payments-filter__close" @click="$emit('closeMenu')"></button>
    </div>
  </div>
</template>

<script setup>
  import DateSelect from "@/components/shared/DateSelect.vue";
  import CustomSelect from "@/components/shared/CustomSelect.vue";
  import Button from "@/components/shared/Button.vue";
  import { ref } from "@vue/reactivity";

  const hasInfo = ref(false);

  const props = defineProps({
    title: String,
    showFilter: {
      type: Boolean,
      default: false,
    },
  });

  const offers = [
    {
      title: "(3) Локо Банк РКО",
      value: "offer-1",
    },
    {
      title: "(12) Касса Тинькофф",
      value: "offer-2",
    },
    {
      title: "(10) Тинькофф - Кредит для Бизнеса",
      value: "offer-3",
    },
    {
      title: "(3) Локо Банк РКО",
      value: "offer-1",
    },
    {
      title: "(12) Касса Тинькофф",
      value: "offer-2",
    },
    {
      title: "(10) Тинькофф - Кредит для Бизнеса",
      value: "offer-3",
    },
  ];
  const status = [
    {
      title: "Статус 1 (Инфо)",
      value: "status-1",
    },
    {
      title: "Статус 2 (Инфо)",
      value: "status-2",
    },
    {
      title: "Статус 3 (Инфо)",
      value: "status-3",
    },
    {
      title: "Статус 4 (Инфо)",
      value: "status-4",
    },
    {
      title: "Статус 5 (Инфо)",
      value: "status-5",
    },
  ];
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_payments-filter.scss";
</style>
