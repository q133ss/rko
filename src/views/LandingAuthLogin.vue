<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="/images/landing-logo.svg" alt="Логотип" />
    </div>
    <div class="auth__head">
      <div class="auth__title">Авторизация в <span>RKO-Service</span></div>
      <div class="auth__text">
        У вас нет аккаунта? <router-link to="/auth/registration">Зарегистрироваться</router-link>
      </div>
    </div>
    <div class="auth__content">
      <form class="auth__form">
        <label class="auth__item">
          <span class="auth__label">Логин/Почта</span>
          <div class="auth__input">
            <input class="auth__input-input" type="email" placeholder="example@mail.com" />
          </div>
        </label>
        <label class="auth__item">
          <span class="auth__label">Пароль</span>
          <div class="auth__input">
            <input class="auth__input-input" type="password" placeholder="***********" />
          </div>
        </label>
      </form>
      <div class="auth__links">
        <router-link class="auth__button auth__link" to="/auth/registration">Регистрация</router-link>
        <router-link class="auth__button auth__link" to="/auth/forgot-pass">Забыли пароль?</router-link>
      </div>
      <div class="auth__buttons login__buttons">
        <button class="auth__button" @click="$router.go(-1)">Назад</button>
        <button class="auth__button auth__button_blue">Войти</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_auth.scss";
  .login__buttons {
    margin-top: 4rem;
  }
</style>
