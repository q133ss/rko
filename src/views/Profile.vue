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
          <input class="default-input" type="text" v-model="fio" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">E-Mail</span>
          <input class="default-input" v-model="email" type="email"/>
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Телефон</span>
          <input class="default-input" type="tel" v-model="phone" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Сайт</span>
          <input class="default-input" type="text" v-model="site" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Соц.сети</span>
          <input class="default-input" type="text" v-model="social_network_1" placeholder="olegstp/vk.com" />
        </label>

        <label class="cabinet__label">
          <span class="cabinet__label-title">Соц.сети</span>
          <input class="default-input" type="text" v-model="social_network_2" placeholder="olegstp/tm#523234" />
        </label>
      </div>
    </div>
    <div class="cabinet__info">
      <div class="cabinet__head-buttons">
        <Button class="cabinet__head-button" icon="key" orange>Изменить пароль</Button>
        <Button class="cabinet__head-button" icon="save" @click="update" green>Сохранить изменения</Button>
      </div>
      <div class="cabinet__box">
        <div class="cabinet__title">Информация и платежные реквизиты</div>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Адрес для корреспонденции</span>
          <input class="default-input" type="text" v-model="correspondence_address" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">ИНН</span>
          <input class="default-input" type="text" v-model="inn" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">ОГРН</span>
          <input class="default-input" type="text" v-model="ogrn" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">БИК</span>
          <input class="default-input" type="text" v-model="bik" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Наименование банка</span>
          <input class="default-input" type="text" v-model="bank" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Корреспондентский счет</span>
          <input class="default-input" type="text" v-model="correspondence_check" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text">Расчетный счет</span>
          <input class="default-input" type="text" v-model="calculated_check" />
        </label>

        <label class="cabinet__input">
          <span class="cabinet__input-text cabinet__input-text_mobile-hide"></span>
          <Checkbox @checkboxChange="handleCheckboxChange">Наличие электронного документооборота</Checkbox>
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

      is_electronic_document_management: null
    }
  },
  async mounted() {
    await this.getData();

  },
  methods: {
    async getData(){
      try {
        const unFormattedData = await apiService.getUserInfo();
        let data;

        if(typeof(unFormattedData) == 'object'){
          data = unFormattedData;
        }else{
          data = JSON.parse(unFormattedData);
        }

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

      } catch (error) {
        console.error(error);
      }
    },
    update(){
      //TODO добавать FIO
      let email = this.email;
      let phone = this.phone;
      let site = this.site;
      let social_network_1 = this.social_network_1;
      let social_network_2 = this.social_network_2;

      let inn = this.inn;
      let ogrn = this.ogrn;
      let bik = this.bik;
      let bank = this.bank;
      let correspondence_address = this.correspondence_address;
      let correspondence_check = this.correspondence_check;
      let calculated_check = this.calculated_check;
      let is_electronic_document_management = this.is_electronic_document_management;


      apiService.updateUserInfo({email, phone, site, social_network_1, social_network_2, inn, ogrn, bik, bank, correspondence_address, correspondence_check, calculated_check, is_electronic_document_management});
    },
    handleCheckboxChange(isChecked) {
      // Обработка состояния чекбокса
      this.is_electronic_document_management = isChecked;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_cabinet.scss";
</style>
