<template>
  <div class="hero">
    <div class="hero__decorations">
      <div class="hero__decorate hero__decorate_1">
        <img class="hero__decorate-img" src="/images/landing/hero-decorate-1.svg" alt="Декорация" aria-hidden="true" />
      </div>
      <div class="hero__decorate hero__decorate_2">
        <img class="hero__decorate-img" src="/images/landing/hero-decorate-2.svg" alt="Декорация" aria-hidden="true" />
      </div>
    </div>
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__content">
          <h1 class="hero__title">Платформа по заработку на финансовых продуктах</h1>
          <p class="hero__text">Готовые предложения для развития вашего бизнесса и прочего прочего прочего</p>
          <div class="hero__points">
            <div class="hero__point">
              <div class="hero__point-img">
                <img src="/images/landing/document.svg" alt="Иконка" aria-hidden="true" />
              </div>
              <div class="hero__point-text">
                <div class="hero__point-head">Договор</div>
                <div class="hero__point-footer">RKO-Service</div>
              </div>
            </div>
            <div class="hero__point">
              <div class="hero__point-img">
                <img src="/images/landing/look.svg" alt="Иконка" aria-hidden="true" />
              </div>
              <div class="hero__point-text">
                <div class="hero__point-head">Согласие на обработку</div>
                <div class="hero__point-footer">Персональных данных</div>
              </div>
            </div>
          </div>
          <div class="hero__button">
            <Button to="/auth/registration">Зарегистрироваться</Button>
          </div>
        </div>
        <div class="hero__picture">
          <div class="hero__inner">
            <img src="/images/landing/hero-img.png" alt="Интерфейс личного кабинета" class="hero__img" />
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
  @import "@/assets/scss/landing/_hero.scss";
</style>
