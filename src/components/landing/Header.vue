<template>
  <header class="header" :class="{ header_higlight: highliteHeader }">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo">
          <img src="/images/landing-logo.svg" alt="Логотип" />
        </div>
        <div class="header__menu" :class="{ header__menu_open: isOpenMenu }">
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item" v-for="item in header" :key="item.id">
                <a class="header__link" :href="item.link">{{ item.title }}</a>
              </li>
            </ul>
          </nav>
          <div class="header__login-wrap" @click="closeMenu">
            <router-link class="header__login" to="/auth">
              <div class="header__login-text">Войти</div>
              <div class="header__login-icon">
                <SvgIcon class="header__login-svg" name="login" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="header__holder" :class="{ header__holder_show: isOpenMenu }" @click="closeMenu"></div>
        <button class="header__burger" :class="{ header__burger_active: isOpenMenu }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
  import SvgIcon from "@/components/shared/SvgIcon.vue";
  import { ref } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";

  const isOpenMenu = ref(false);
  const highliteHeader = ref(false);

  const header = [
    {
      title: "Как это работает?",
      link: "#how-it-work",
    },
    {
      title: "Преимущества",
      link: "#advantages",
    },
    {
      title: "Банки-партнёры",
      link: "#partners",
    },
    {
      title: "Контакты",
      link: "#contacts",
    },
  ];

  function toggleMenu() {
    isOpenMenu.value = !isOpenMenu.value;
    document.body.classList.toggle("hidden");
  }
  function closeMenu() {
    isOpenMenu.value = false;
    document.body.classList.remove("hidden");
  }

  function addHeaderHighlight() {
    if (window.scrollY > 0) {
      highliteHeader.value = true;
    } else highliteHeader.value = false;
  }

  onMounted(() => {
    document.addEventListener("scroll", addHeaderHighlight);
  });
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_header.scss";
</style>
