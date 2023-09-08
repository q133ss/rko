<template>
  <div class="cabinet">
    <div class="cabinet__user">
      <div class="cabinet__box cabinet__box_user">
        <div class="cabinet__photo">
          <img class="cabinet__img" :src="photo ?? '/images/big-photo.jpg'" alt="Степанов Олег Александрович" />
          <Button class="cabinet__upload" icon="picture" purple>Изменить фото</Button>
        </div>

        <label class="cabinet__label">
          <span class="cabinet__label-title">ФИО</span>
          <input class="default-input" type="text" :placeholder="fio" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">E-Mail</span>
          <input class="default-input" type="email" :placeholder="email" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Телефон</span>
          <input class="default-input" type="tel" :placeholder="phone ?? '+7 (999) 999-99-99'" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Сайт</span>
          <input class="default-input" type="text" :placeholder="site ?? 'rkoservice.ru'" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Соц.сети</span>
          <input class="default-input" type="text" placeholder="olegstp/vk.com" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Соц.сети</span>
          <input class="default-input" type="text" placeholder="olegstp/tm#523234" />
        </label>
      </div>
    </div>
    <div class="cabinet__info">
      <div class="cabinet__head-buttons">
        <Button class="cabinet__head-button" icon="key" orange>Изменить пароль</Button>
        <Button class="cabinet__head-button" icon="save" green>Сохранить изменения</Button>
      </div>
      <div class="cabinet__box">
        <div class="cabinet__title">Информация и платежные реквизиты</div>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Адрес для корреспонденции</span>
          <input class="default-input" type="text" :placeholder="correspondence_address" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">ИНН</span>
          <input class="default-input" type="text" :placeholder="inn" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">ОГРН</span>
          <input class="default-input" type="text" :placeholder="ogrn" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">БИК</span>
          <input class="default-input" type="text" :placeholder="bik" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Наименование банка</span>
          <input class="default-input" type="text" :placeholder="bank" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Корреспондентский счет</span>
          <input class="default-input" type="text" :placeholder="correspondence_check" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Расчетный счет</span>
          <input class="default-input" type="text" :placeholder="calculated_check" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text cabinet__input-text_mobile-hide"></span>
          <Checkbox>Наличие электронного документооборота</Checkbox>
        </label>
      </div>
      <div class="cabinet__docs">
        <div class="cabinet__box">
          <div class="cabinet__title">Документация</div>
          <div class="cabinet__text">
            Просьба прикрепить нижеуказанные документы. <br />
            Данные документы позволят завершить процедуру регистрации и <br />
            осуществлять оплаты агентского вознаграждения.
          </div>
          <div class="cabinet__doc">
            <Button class="cabinet__doc-button" icon="sharp" purple>Прикрепить</Button>
            <div class="cabinet__doc-descr">Фото/скан первого разворота паспорта</div>
          </div>
          <div class="cabinet__doc">
            <Button class="cabinet__doc-button" icon="sharp" purple>Прикрепить</Button>
            <div class="cabinet__doc-descr">Фото/скан разворота с пропиской паспорта</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/shared/Button.vue";
  import Checkbox from "@/components/shared/Checkbox.vue";
</script>

<script>
import apiService from "../services/apiService.js";

export default {
  data() {
    return {
      id: null,
      photo: null,
      fio: null,
      email: null,
      phone: null,
      site: null,
      social_network_1: null,
      social_network_2: null,

      inn: null,
      ogrn: null,
      bik: null,
      bank: null,
      correspondence_address: null,
      correspondence_check: null,
      calculated_check: null,

      errors: [],
    }
  },
  async mounted() {
    //получаем инфу о юзере
    //нужно их в 1 переменную записать в array, а не заниматься хней.. Но как обновлять потом???

    async function getData() {
      try {
        const data = await apiService.getUserInfo();
        let formattedData = JSON.parse(data);
        return formattedData;

      } catch (error) {
        console.error(error);
      }
    }

    let data = await getData();
    this.fio = data.attributes.surname + " " + data.attributes.firstname + " " + data.attributes.patronymic;
    this.email = data.attributes.email;
    this.photo = data.attributes.photo;
    this.phone = data.attributes.phone;
    this.site = data.attributes.site;

    this.inn = data.attributes.inn;
    this.ogrn = data.attributes.ogrn;
    this.bik = data.attributes.bik;
    this.bank = data.attributes.bank;
    this.correspondence_address = data.attributes.correspondence_address;
    this.correspondence_check = data.attributes.correspondence_check;
    this.calculated_check = data.attributes.calculated_check;

  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_cabinet.scss";
</style>
