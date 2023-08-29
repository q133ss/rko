<template>
  <div class="head-info">
    <div class="head-info__socials">
      <!--<button class="head-info__button">
        <SvgIcon class="head-info__icon" name="message" />
      </button>-->
      <a class="head-info__button" href="https://web.telegram.org/a/#5914315839" target="_blank">
        <SvgIcon class="head-info__icon" name="telegram" />
      </a>
    </div>
    <div class="head-info__info">
      <p class="head-info__text">Номер пользовательского соглашения: №Дог-01/02-23/5</p>
      <p class="head-info__text">Согласие на обработку персональных данных</p>
    </div>
    <div class="head-info__callback">
      <a class="head-info__mail" href="mailto:service.rko@yandex.ru" target="_blank">service.rko@yandex.ru</a>
      <div class="head-info__time">
        <a class="head-info__tel" href="tel:+79093658655" target="_blank">+7(909)365-86-55</a>
        <div class="head-info__schedule">
          ПН-ПТ <span><img src="/images/icons/clock.svg" alt="" /></span> 10:00 - 19:00
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SvgIcon from "./SvgIcon.vue";
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_head-info.scss";
</style>
