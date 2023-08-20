<template>
  <div class="nav-menu">
    <div class="nav-menu__wrap">
      <div class="nav-menu__logo">
        <img src="/public/images/logo.svg" alt="Логотип RKO Group" />
      </div>
      <div class="nav-menu__info">
        <div class="nav-menu__head">
          <div class="nav-menu__id">ID: {{ data.number }}</div>
          <div class="nav-menu__position">{{ data.pos }}</div>
        </div>
        <div class="nav-menu__avatar">
          <button class="nav-menu__button nav-menu__edit">
            <SvgIcon class="nav-menu__icon" name="edit-user" />
          </button>
          <div class="nav-menu__photo">
            <img class="nav-menu__photo-img" src="/public/images/avatar.jpg" :alt="`Аватар ${data.name}`" />
          </div>
          <button class="nav-menu__button nav-menu__log-out">
            <SvgIcon class="nav-menu__icon" name="logout" />
          </button>
        </div>
        <div class="nav-menu__name">{{ data.name }}</div>
      </div>
      <nav class="nav-menu__nav">
        <ul class="nav-menu__list">
          <li class="nav-menu__item" v-for="(link, i) in links" :key="link.title">
            <a class="nav-menu__link" :href="link.route" :class="{ active: i === 0 }">
              <SvgIcon class="nav-menu__link-icon" :name="link.icon" />
              <span class="nav-menu__link-text">{{ link.title }}</span>
            </a>
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
</template>

<script setup>
  import { ref } from "vue";
  import SvgIcon from "./SvgIcon.vue";

  const subBalance = ref(true);

  const data = { number: "0000", pos: "Веб-Мастер", name: "Степанов Олег Александрович" };
  const links = [
    { icon: "dashboard", route: "/", title: "Статистика" },
    { icon: "form", route: "/", title: "Заявки" },
    { icon: "bank", route: "/", title: "Предложения" },
    { icon: "documents", route: "/", title: "Документы" },
    { icon: "services", route: "/", title: "Реферальная система" },
    { icon: "money", route: "/", title: "Финансы" },
  ];
  const balance = "0";

  function openSubBalance() {
    subBalance.value = !subBalance.value;
  }

  function onBeforeEnter(el) {
    console.log(el);
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
