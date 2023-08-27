<template>
  <Header />
  <div class="landing">
    <router-view />
  </div>
</template>

<script setup>
  import Header from "@/components/landing/Header.vue";
</script>

<style lang="scss">
  .landing {
    overflow: hidden;

    background-color: var(--main-bg-color);
  }
  .landing-title {
    margin: 0;
    position: relative;
    font-size: var(--landing-title-size-desctop);
    font-weight: 600;
    padding-left: 1rem;

    @media (max-width: 1024px) {
      font-size: var(--landing-title-size-tablet);
    }
    @media (max-width: 480px) {
      font-size: var(--landing-title-size-mobile);
    }

    &::before {
      display: block;
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0.375rem;
      height: 80%;
      border-radius: 0 2rem 0 2rem;
      background-color: var(--landing-title-border-color);
    }
  }
  .landing-descr {
    margin: 0;
    font-size: var(--landing-descr-size-desctop);
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: var(--landing-descr-size-tablet);
    }
    @media (max-width: 480px) {
      font-size: var(--landing-descr-size-mobile);
    }
  }
</style>
