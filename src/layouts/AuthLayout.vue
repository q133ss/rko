<template>
  <div class="auth-layout">
    <div class="container">
      <div class="auth-layout__wrapper">
        <div class="auth-layout__inner">
          <router-view />
        </div>
      </div>
    </div>
    <FixedSocials />
  </div>
</template>

<script setup>
  import FixedSocials from "@/components/landing/FixedSocials.vue";
</script>
<style lang="scss" scoped>
  .auth-layout {
    background-color: var(--main-bg-color);

    // .auth-layout__wrapper

    &__wrapper {
      background: var(--white);
      padding: 2rem 0;
      min-height: 100vh;
      height: 100%;
      width: 100%;
      display: grid;
      align-items: center;
      background-image: url("/images/landing/auth-bg.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    // .auth-layout__inner

    &__inner {
    }
  }
  .container {
    width: 100%;
  }
</style>
