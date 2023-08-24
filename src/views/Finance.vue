<template>
  <div class="finance">
    <HeadLayout :head="head" />
    <div class="finance__title">Выплаты</div>
    <div class="finance__prompt" v-if="showPrompt">
      <img class="finance__prompt-icon" src="/images/icons/oval-info.svg" alt="" />
      Необходимо добавить <router-link to="/profile"> платежную информацию</router-link>
      <button class="finance__prompt-cross" @click="showPrompt = !showPrompt">
        <img class="finance__prompt-icon" src="/images/icons/cross.svg" alt="" />
      </button>
    </div>
    <div class="finance__content">
      <div class="finance__table">
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
          <tbody>
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
        <div class="finance__holders" v-if="!notOperations">
          <div class="finance__holder">Нет операций по выплатам</div>
          <div class="finance__holder"></div>
        </div>
      </div>
      <Button class="finance__button" yellowTransparent to="/finance/payments">Подробнее о выплатах</Button>
    </div>
    <div class="finance__content">
      <div class="finance__title">Все транзакции</div>
      <div class="finance__table">
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
          <tbody></tbody>
        </table>
        <div class="finance__holders" v-if="notOperations">
          <div class="finance__holder">Нет операций по выплатам</div>
          <div class="finance__holder"></div>
        </div>
      </div>
      <Button class="finance__button" yellowTransparent to="/finance/transactions">Подробнее о транзакциях</Button>
    </div>
  </div>
</template>

<script setup>
  import HeadLayout from "@/components/shared/HeadLayout.vue";
  import Button from "@/components/shared/Button.vue";
  import { ref } from "@vue/reactivity";

  const showPrompt = ref(true);
  const notOperations = ref(true);

  const head = {
    link: "/finance",
    icon: "money",
    title: "Финансы",
  };
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_finance.scss";
</style>
