<template>
  <div class="success">
    <div class="success__content">
      <div class="success__descr">Ваша заявка на рассмотрении!</div>
      <div class="success__title">Менеджер <span>RKO-Service</span></div>
      <div class="success__descr">
        свяжется с Вами <br />
        в <span>ближайшие 10 минут!</span>
      </div>
      <div class="success__link">
        <button class="success__button" @click="$emit('close')">Закрыть окно</button>
      </div>
    </div>
    <div class="success__picture">
      <div class="success__img">
        <img src="/images/landing/success.png" alt="Человек" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_success.scss";
</style>
