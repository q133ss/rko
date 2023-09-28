<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="/images/landing-logo.svg" alt="Логотип" />
    </div>
    <div class="auth__title auth__title_forgot">Забыли <span>пароль</span>?</div>
    <div class="auth__content">
      <form class="auth__form">
        <label class="auth__item">
          <span class="auth__label">Почта</span>
          <div class="auth__input">
            <input class="auth__input-input" type="email" placeholder="example@mail.com" />
          </div>
        </label>
      </form>
      <div class="auth__prompt">
        <div class="auth__descr">Отправим ссылку с подверждением аккаунта на вашу почту.</div>
        <div class="auth__small-descr"><span>Примечание:</span> перейдите по ссылке, для изменения пароля.</div>
      </div>
      <div class="auth__buttons forgot__buttons">
        <button class="auth__button" @click="$router.go(-1)">Назад</button>
        <button class="auth__button auth__button_blue">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_auth.scss";
  .forgot__buttons {
    margin-top: 7.5rem;
  }
  .auth__title_forgot {
    margin-bottom: 3rem;
  }
</style>
