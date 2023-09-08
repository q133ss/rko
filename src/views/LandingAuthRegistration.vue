<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="/images/landing-logo.svg" alt="Логотип" />
    </div>
    <div class="auth__title">Регистрация в <span>RKO-Service</span></div>
    <span class="errors">{{errors[0]}}</span>
    <div class="auth__content">
      <form class="auth__form" @keyup.enter="doRegister">
        <label class="auth__item">
          <span class="auth__label">ФИО</span>
          <div class="auth__input">
            <input class="auth__input-input" v-model="fio" type="text" placeholder="ФИО" />
          </div>
        </label>
        <label class="auth__item">
          <span class="auth__label">Логин/Почта</span>
          <div class="auth__input">
            <input class="auth__input-input" v-model="login" type="email" placeholder="example@mail.com" />
          </div>
        </label>
        <label class="auth__item">
          <span class="auth__label">Пароль</span>
          <div class="auth__input">
            <input class="auth__input-input" v-model="password" :type="pass ? 'password' : 'text'" placeholder="***********" />
            <button
              @click.prevent="pass = !pass"
              class="auth__input-eye"
              :class="pass ? 'auth__input-eye_show' : 'auth__input-eye_hide'"
            ></button>
          </div>
        </label>
        <label class="auth__item">
          <span class="auth__label">Пароль</span>
          <div class="auth__input">
            <input class="auth__input-input" v-model="re_password" :type="repeatPass ? 'password' : 'text'" placeholder="***********" />
            <button
              @click.prevent="repeatPass = !repeatPass"
              class="auth__input-eye"
              :class="repeatPass ? 'auth__input-eye_show' : 'auth__input-eye_hide'"
            ></button>
          </div>
        </label>
      </form>
      <div class="auth__policy">
        <Checkbox class="auth__policy">
          Я принимаю <router-link to="/agreement">пользовательское соглашение</router-link> и даю
          <router-link to="/policy">согласие на обработку персональных данных</router-link>
        </Checkbox>
      </div>
      <div class="auth__buttons register__buttons">
        <button class="auth__button" @click="$router.go(-1)">Назад</button>
        <button class="auth__button auth__button_blue" @click="doRegister()">Зарегистрироваться</button>
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

<script>
import apiService from "../services/apiService.js";

export default {
  data() {
    return {
      fio: null,
      login: null,
      password: null,
      re_password: null,
      errors: []
    }
  },
  methods: {
    async doRegister(){
      this.errors = [];

      if(!this.fio){
        this.errors.push('Введите ФИО.');
      }

      if(!this.login){
        this.errors.push('Введите логин.');
      }

      if(!this.password){
        this.errors.push('Введите пароль.');
      }

      if(!this.re_password){
        this.errors.push('Введите повторный пароль.');
      }

      if(this.re_password !== this.password){
        this.errors.push('Пароли не совпадают.');
      }

      if(this.errors.length === 0){
        let fio = this.fio;
        let username = this.login;
        let email = this.login;
        let password = this.password;
        let password_confirmation = this.re_password;

        let query = await apiService.register({fio, username, email, password, password_confirmation});
        if(!query){
          this.errors.push('Ошибка');
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_auth.scss";
  .register__buttons {
    margin-top: 1rem;
  }
  .auth__policy {
    max-width: 23.5rem;
    margin: 1.5rem auto;
    &:deep(.checkbox__text) {
      font-size: 0.75rem;
      font-weight: 500;
      a {
        color: inherit;
        &:hover {
          text-decoration: none;
        }
      }
    }
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
