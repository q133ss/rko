<template>
  <div class="fixed-socials">
    <ul class="fixed-socials__list">
      <li class="fixed-socials__item">
        <a class="fixed-socials__link" href="https://web.telegram.org/a/#5914315839" target="_blank">
          <img src="/images/landing/icons/tg-icon.svg" alt="Логотип телеграма" />
        </a>
      </li>
      <li class="fixed-socials__item">
        <a class="fixed-socials__link" href="mailto:service.rko@yandex.ru">
          <img src="/images/landing/icons/email-icon.svg" alt="Логотип почты" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .fixed-socials {
    position: fixed;
    right: 0;
    top: 7.5rem;
    background-color: var(--landing-input-bg);
    padding: 1rem;
    border-radius: 0.3125rem 0 0 0.3125rem;

    @media (max-width: 480px) {
      padding: 0.5rem;
      top: auto;
      bottom: 1rem;
    }

    // .fixed-socials__list

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    // .fixed-socials__item

    &__item {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    // .fixed-socials__link

    &__link {
      display: block;
      transition: transform 0.15s ease;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(1);
      }
      img {
        display: block;
      }
    }
  }
</style>
