<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="/images/landing-logo.svg" alt="Логотип" />
    </div>
    <div class="auth__title auth__title_reset">Установите новый пароль для <span>RKO-Service</span></div>
    <div class="auth__content">
      <form class="auth__form">
        <label class="auth__item">
          <span class="auth__label">Новый пароль</span>
          <div class="auth__input">
            <input class="auth__input-input" :type="pass ? 'password' : 'text'" placeholder="***********" />
            <button
              @click.prevent="pass = !pass"
              class="auth__input-eye"
              :class="pass ? 'auth__input-eye_show' : 'auth__input-eye_hide'"
            ></button>
          </div>
        </label>
        <label class="auth__item">
          <span class="auth__label">Повторите пароль</span>
          <div class="auth__input">
            <input class="auth__input-input" :type="repeatPass ? 'password' : 'text'" placeholder="***********" />
            <button
              @click.prevent="repeatPass = !repeatPass"
              class="auth__input-eye"
              :class="repeatPass ? 'auth__input-eye_show' : 'auth__input-eye_hide'"
            ></button>
          </div>
        </label>
      </form>
      <div class="auth__buttons reset-pass__buttons">
        <button class="auth__button" @click="$router.go(-1)">Назад</button>
        <button class="auth__button auth__button_blue">Установить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Checkbox from "@/components/shared/Checkbox.vue";
  import { ref } from "@vue/reactivity";

  const pass = ref(true);
  const repeatPass = ref(true);
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_auth.scss";
  .reset-pass__buttons {
    margin-top: 7rem;
  }
  .auth__title_reset {
    margin-bottom: 3rem;
  }
</style>
