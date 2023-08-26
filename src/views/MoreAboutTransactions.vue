<template>
  <div class="more-payments">
    <HeadLayout :head="head" />
    <div class="more-payments__head">
      <div class="more-payments__content">
        <div class="more-payments__title">Подробнее о транзакциях</div>
        <div class="more-payments__buttons">
          <button class="more-payments__filter more-payments__button" @click="openFilter">
            <SvgIcon class="more-payments__svg" name="filter" />
          </button>
          <Button class="more-payments__export" icon="export" yellow>Экспорт</Button>
        </div>
      </div>
      <MoreAboutPaymentsFilter title="Фильтр по выплатам" :showFilter="showFilter" @close-menu="openFilter" />
    </div>

    <div class="more-payments__inner">
      <div class="more-payments__table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата заказа выплаты</th>
              <th>Название</th>
              <th>Счет</th>
              <th>К оплате</th>
              <th>Статус</th>
              <th>Документы</th>
            </tr>
          </thead>
          <tbody v-if="!notOperations">
            <tr>
              <td>ID</td>
              <td>Дата заказа выплаты</td>
              <td>Название</td>
              <td>Счет</td>
              <td>К оплате</td>
              <td>Статус</td>
              <td>Документы</td>
            </tr>
          </tbody>
        </table>
        <div class="more-payments__holders" v-if="notOperations">
          <div class="more-payments__holder">Нет операций по выплатам</div>
          <div class="more-payments__holder"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HeadLayout from "@/components/shared/HeadLayout.vue";
  import Button from "@/components/shared/Button.vue";
  import SvgIcon from "@/components/shared/SvgIcon.vue";
  import MoreAboutPaymentsFilter from "@/components/shared/MoreAboutPaymentsFilter.vue";
  import { ref } from "@vue/reactivity";

  const notOperations = ref(true);
  const showFilter = ref(true);

  const head = {
    link: "/finance/payments",
    icon: "money",
    title: "Финансы",
    text: "Подробнее о выплатах",
  };

  function openFilter() {
    showFilter.value = !showFilter.value;
  }
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_more-payments.scss";
</style>
