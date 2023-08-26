<template>
  <div class="create-application">
    <div class="create-application__head">
      <div class="create-application__page">
        <div class="create-application__left">
          <SvgIcon class="create-application__icon" name="form" />
          <div class="create-application__descr">Создать заявку</div>
        </div>
        <div class="create-application__text">Введите данные клиента</div>
      </div>
      <div class="create-application__title">Введите данные клиента</div>
    </div>
    <div class="create-application__rows">
      <div class="create-application__row">
        <div class="create-application__item">
          <CustomSelect title="Город" placeholder="Выберите город" :sublistItems="offers" arrow />
        </div>
        <div class="create-application__item">
          <CustomInput title="ИНН" placeholder="Введите ИНН" />
        </div>
        <div class="create-application__item">
          <CustomInput title="КПП" placeholder="Введите КПП" darken />
        </div>
        <div class="create-application__item">
          <CustomInput title="ОГРН/ОРГНИП" placeholder="Введите ОГРН/ОРГНИП" />
        </div>
        <div class="create-application__item">
          <CustomInput title="Название организации" placeholder="Выберите название организации" />
        </div>
        <div class="create-application__item create-application__item_end">
          <Button class="create-application__autocomplete" brown>Автозаполнение</Button>
        </div>
      </div>
      <div class="create-application__row">
        <div class="create-application__item">
          <CustomInput title="ФИО Руководителя/ИП" placeholder="Введите ФИО" />
        </div>
        <div class="create-application__item">
          <CustomInput title="E-mail" placeholder="Введите E-mail" />
        </div>
        <div class="create-application__item">
          <CustomInput title="Телефон" placeholder="Введите Телефон" />
        </div>
        <div class="create-application__item">
          <CustomSelect title="Пол М/Ж" placeholder="Выберите пол" :sublistItems="offers" arrow />
        </div>
        <div class="create-application__item">
          <CustomSelect title="Оффер" placeholder="Выберите оффер" :sublistItems="offers" arrow />
        </div>
      </div>
    </div>
    <div class="create-application__buttons">
      <Button class="create-application__button" yellowTransparent to="/applications">Назад</Button>
      <Button class="create-application__button" yellow>Далее</Button>
    </div>
  </div>
</template>

<script setup>
  import CustomSelect from "@/components/shared/CustomSelect.vue";
  import CustomInput from "@/components/shared/CustomInput.vue";
  import Button from "@/components/shared/Button.vue";
  import SvgIcon from "@/components/shared/SvgIcon.vue";

  const offers = [
    {
      title: "(3) Локо Банк РКО",
      value: "offer-1",
    },
    {
      title: "(12) Касса Тинькофф",
      value: "offer-2",
    },
    {
      title: "(10) Тинькофф - Кредит для Бизнеса",
      value: "offer-3",
    },
    {
      title: "(3) Локо Банк РКО",
      value: "offer-1",
    },
    {
      title: "(12) Касса Тинькофф",
      value: "offer-2",
    },
    {
      title: "(10) Тинькофф - Кредит для Бизнеса",
      value: "offer-3",
    },
  ];
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_create-application.scss";
</style>
