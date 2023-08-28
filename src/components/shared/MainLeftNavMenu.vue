<template>
  <div class="nav-menu" :class="{ 'nav-menu_open': openMenu }">
    <div class="nav-menu__box">
      <div class="nav-menu__wrap">
        <div class="nav-menu__logo">
          <img src="images/logo.svg" alt="Логотип RKO Group" />
        </div>
        <div class="nav-menu__info">
          <div class="nav-menu__head">
            <div class="nav-menu__id">ID: {{ data.number }}</div>
            <div class="nav-menu__position">{{ data.pos }}</div>
          </div>
          <div class="nav-menu__avatar">
            <router-link class="nav-menu__button nav-menu__edit" to="/profile">
              <!--:class="$route.name == 'Profile' ? 'nav-menu__link_active' : ''"-->
              <SvgIcon class="nav-menu__icon" name="edit-user" />
            </router-link>
            <div class="nav-menu__photo">
              <img class="nav-menu__photo-img" src="images/avatar.jpg" :alt="`Аватар ${data.name}`" />
            </div>
            <button class="nav-menu__button nav-menu__log-out">
              <SvgIcon class="nav-menu__icon" name="logout" />
            </button>
          </div>
          <div class="nav-menu__name">{{ data.name }}</div>
        </div>
        <nav class="nav-menu__nav">
          <ul class="nav-menu__list">
            <li class="nav-menu__item" v-for="link in links" :key="link.title">
              <router-link
                class="nav-menu__link"
                :class="{ 'router-link-active': $route.path.includes(link.route) }"
                :to="link.route"
              >
                <SvgIcon class="nav-menu__link-icon" :name="link.icon" />
                <span class="nav-menu__link-text">{{ link.title }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="nav-menu__balance">
          <div class="nav-menu__balance-head">
            <SvgIcon class="nav-menu__balance-icon" name="wallet" />
            <div class="nav-menu__balance-text">Баланс: {{ balance }} ₽</div>
            <button class="nav-menu__balance-prompt" @click="openSubBalance">
              <SvgIcon class="nav-menu__balance-prompt-icon" name="prompt" />
            </button>
          </div>
          <transition
            name="prompt"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @before-leave="onBeforeLeave"
            @leave="onLeave"
          >
            <div class="nav-menu__prompt" :class="{ 'nav-menu__prompt_active': subBalance }" v-if="subBalance">
              <div class="nav-menu__prompt-content">
                <div class="nav-menu__prompt-price">
                  <div class="nav-menu__prompt-price-text">Доступно для вывода</div>
                  <div class="nav-menu__prompt-price-number">{{ balance }} <span>₽</span></div>
                </div>
                <div class="nav-menu__prompt-price">
                  <div class="nav-menu__prompt-price-text">Холд</div>
                  <div class="nav-menu__prompt-price-number">{{ balance }} <span>₽</span></div>
                </div>
                <div class="nav-menu__prompt-price">
                  <div class="nav-menu__prompt-price-text">Заказано выплат</div>
                  <div class="nav-menu__prompt-price-number">{{ balance }} <span>₽</span></div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <button class="nav-menu__burger" :class="{ 'nav-menu__burger_active': openMenu }" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import SvgIcon from "./SvgIcon.vue";

  const subBalance = ref(true);
  const openMenu = ref(false);

  const data = { number: "0000", pos: "Веб-Мастер", name: "Степанов Олег Александрович" };
  const links = [
    { icon: "dashboard", route: "/statistics", title: "Статистика" },
    { icon: "form", route: "/applications", title: "Заявки" },
    { icon: "bank", route: "/offers", title: "Предложения" },
    //{ icon: "documents", route: "Home", title: "Документы" },
    { icon: "services", route: "/referrals", title: "Реферальная система" },
    { icon: "money", route: "/finance", title: "Финансы" },
  ];
  const balance = "0";

  function openSubBalance() {
    subBalance.value = !subBalance.value;
  }

  function showMenu() {
    openMenu.value = !openMenu.value;
    document.body.classList.toggle("hidden");
  }

  function onBeforeEnter(el) {
    el.style.height = "0";
  }
  function onEnter(el) {
    el.style.height = el.scrollHeight + "px";
  }
  function onBeforeLeave(el) {
    el.style.height = el.scrollHeight + "px";
  }
  function onLeave(el) {
    el.style.height = "0";
  }
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/_left-menu.scss";
</style>
