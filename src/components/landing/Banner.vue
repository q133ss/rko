<template>
  <div class="landing-banner">
    <div class="container">
      <div class="landing-banner__wrapper">
        <div class="landing-banner__content">
          <div class="landing-banner__head">
            <span>АКЦИЯ</span> <img src="/images/landing/icons/clock.svg" alt="" /> 01.08.2023 - 31.01.2024
          </div>
          <div class="landing-banner__title">23 КЛИЕНТА <span> +&nbsp;CASHBACK</span></div>
          <div class="landing-banner__descr">
            Открой счет 23 клиентам и получи 10 000 руб. на свой счет от RKO-Service. Подробнее об условиях акции можете
            узнать у менеджера - Подробнее
          </div>
          <div class="landing-banner__footer">
            <Button class="landing-banner__button">Подробнее</Button>
          </div>
        </div>
        <div class="landing-banner__picture">
          <div class="landing-banner__img">
            <img src="/images/landing/banner-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/landing/Button.vue";
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_banner.scss";
</style>
