<template>
  <div class="landing-404">
    <div class="landing-404__content">
      <div class="landing-404__logo">
        <img src="images/landing-logo.svg" alt="" />
      </div>
      <div class="landing-404__number">404</div>
      <div class="landing-404__descr">Страница <span>не найдена!</span></div>
      <div class="landing-404__text">Попробуйте обновить страницу или зайти позже.</div>
      <div class="landing-404__button">
        <Button to="/">Главная страница</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/landing/Button.vue";
</script>

<style lang="scss" scoped>
  .landing-404 {
    overflow: hidden;
    position: relative;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    padding: 4rem 1rem;

    @media (max-width: 480px) {
      padding: 2rem 1rem;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      background-repeat: no-repeat;
      background-size: cover;
      @media (max-width: 768px) {
        opacity: 0.6;
      }
      @media (max-width: 480px) {
        opacity: 0.4;
      }
    }
    &::before {
      bottom: 0;
      width: 37rem;
      height: 44rem;
      background-image: url("images/landing/404-bottom.svg");
      @media (max-width: 768px) {
        width: 27rem;
        height: 34rem;
        bottom: -4rem;
      }
      @media (max-width: 480px) {
        width: 17rem;
        height: 24rem;
      }
    }
    &::after {
      right: -0.5rem;
      width: 39rem;
      height: 45.125rem;
      background-image: url("images/landing/404-top.svg");
      @media (max-width: 768px) {
        width: 29rem;
        height: 35.125rem;
      }
      @media (max-width: 480px) {
        width: 19rem;
        height: 25.125rem;
      }
    }

    // .landing-404__content

    &__content {
      text-align: center;
    }

    // .landing-404__logo

    &__logo {
      margin-bottom: 4rem;
      @media (max-width: 768px) {
        margin-bottom: 2rem;
      }
    }

    // .landing-404__number

    &__number {
      font-size: 16rem;
      font-weight: 700;
      line-height: 1;
      color: #616ef8;
      @media (max-width: 1024px) {
        font-size: 14rem;
      }
      @media (max-width: 768px) {
        font-size: 12rem;
      }
      @media (max-width: 480px) {
        font-size: 8rem;
      }
    }

    // .landing-404__descr

    &__descr {
      margin-top: -1rem;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 1rem;

      @media (max-width: 1024px) {
        font-size: 2rem;
      }
      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
      @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-top: 0;
      }
      span {
        color: #616ef8;
      }
    }

    // .landing-404__text

    &__text {
      font-weight: 500;
      @media (max-width: 480px) {
        font-size: 0.75rem;
      }
    }

    // .landing-404__button

    &__button {
      margin-top: 10rem;
      @media (max-width: 1024px) {
        margin-top: 8rem;
      }
      @media (max-width: 768px) {
        margin-top: 6rem;
      }
      @media (max-width: 480px) {
        margin-top: 4rem;
      }
    }
  }
</style>
