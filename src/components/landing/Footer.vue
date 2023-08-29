<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__head">
          <div class="footer__logo">
            <img src="/images/landing-logo.svg" alt="Логотип RKO сервис" />
          </div>
          <nav class="footer__nav">
            <ul class="footer__list">
              <li class="footer__item">
                <a class="footer__link" href="/">Главная</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="/">Преимущества</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="/">Банки-партнёры</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="/">Акции</a>
              </li>
            </ul>
          </nav>
          <div class="footer__up">
            <button class="footer__back-to-top" @click="scrollToTop">
              <img src="/images/landing/up-button.svg" alt="Иконка вверх траницы" />
            </button>
          </div>
        </div>
        <div class="footer__info">
          <div class="footer__address">
            <div class="footer__city">
              г. Тольятти <br />
              Новый проезд д.8, офис 313
            </div>
            <a class="footer__number" href="tel:89093658655" target="_blank">8 (909) 365-86-55</a>
            <div class="footer__time">
              ПН-ПТ <span><img src="/images/icons/clock.svg" alt="" /></span> 10:00 - 19:00
            </div>
          </div>
          <div class="footer__social">
            <div class="footer__social-text">подписаться</div>
            <div class="footer__social-link">
              <a href="https://t.me/+FUgNitN1mS1mNzky" target="_blank">TELEGRAM</a>
            </div>
          </div>
          <div class="footer__dev-by">
            <img src="/images/landing/mbc-logo.svg" alt="Разработка компании MBC" />
          </div>
        </div>
        <div class="footer__footer">
          <div class="footer__potected">© {{ date }} Все права защищены</div>
          <router-link class="footer__policy" to="/">Политика конфиденциальности</router-link>
          <div class="footer__design">Design by Bozhenov</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { computed } from "@vue/runtime-core";

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const date = computed(() => {
    return new Date().getFullYear();
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_footer.scss";
</style>
