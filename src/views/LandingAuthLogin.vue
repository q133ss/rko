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
    <span class="errors">{{errors[0]}}</span>
    <div class="auth__content">
      <form class="auth__form" @submit.prevent="doLogin" @keyup.enter="doLogin">
        <label class="auth__item">
          <span class="auth__label">Почта</span>
          <div class="auth__input">
            <input class="auth__input-input" v-model="login" type="email" placeholder="example@mail.com" />
          </div>
        </label>
        <label class="auth__item">
          <span class="auth__label">Пароль</span>
          <div class="auth__input">
            <input class="auth__input-input" v-model="password" type="password" placeholder="***********" />
          </div>
        </label>
      </form>
      <div class="auth__links">
        <router-link class="auth__button auth__link" to="/auth/registration">Регистрация</router-link>
        <router-link class="auth__button auth__link" to="/auth/forgot-pass">Забыли пароль?</router-link>
      </div>
      <div class="auth__buttons login__buttons">
        <button class="auth__button" @click="$router.go(-1)">Назад</button>
        <button class="auth__button auth__button_blue" v-on:click="doLogin">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default{
  data() {
    return {
      login: null,
      password: null,
      errors: [],
    }
  },
  methods:{
    doLogin: async function(event){
      this.errors = [];

      if (!this.login) {
        this.errors.push('Укажите электронную почту.');
      }

      if(!this.password){
        this.errors.push('Введите пароль.');
      }

      if(this.errors.length === 0){
        //если ошибок нет
        let password = this.password;
        let email = this.login;
        let query = await apiService.login({email, password});
        if(!query){
          this.errors.push('Неверный логин или пароль.');
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_auth.scss";
  .login__buttons {
    margin-top: 4rem;
  }

  .errors{
    margin: 0;
    color: var(--main-red-color);
    font-size: var(--small-text-size);
    font-weight: 500;
    display: block;
    text-align: center;
    width: 100%;
  }
</style>
