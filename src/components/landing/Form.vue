<template>
  <div class="landing-form">
    <div class="container">
      <div class="landing-form__wrapper">
        <h2 class="landing-form__title landing-title">Стать партнёром</h2>
        <p class="landing-form__descr landing-descr">Начните зарабатывать прямо сейчас. Оставьте заявку.*</p>

        <form class="landing-form__form">
          <div class="landing-form__wrap">
            <div class="landing-form__inputs">
              <input class="landing-form__input" type="text" placeholder="Ф.И.О." />
              <input class="landing-form__input" type="email" placeholder="E-mail" />
              <input class="landing-form__input" type="tel" placeholder="Телефон" />
            </div>
            <textarea class="landing-form__textarea" placeholder="Сообщение"></textarea>
          </div>
          <div class="landing-form__footer">
            <div class="landing-form__info">
              <div class="landing-form__policy">
                Нажимая на кнопку - вы даете согласие на обработку
                <router-link to="/policy">
                  персональных данных и соглашаетесь c политикой конфиденциальности
                </router-link>
              </div>
              <div class="landing-form__prompt">
                <span>*</span> Агентский договор заключается только с юридическим лицом (ИП и ООО)
              </div>
            </div>
            <div class="landing-form__button">
              <Button>Отправить</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/landing/Button.vue";
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_form.scss";
</style>
