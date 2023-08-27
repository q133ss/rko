<template>
  <div class="offer-article">
    <HeadLayout class="offer-article__head" :head="head" />
    <div class="offer-article__info">
      <div class="offer-article__left">
        <div class="offer-article__box">
          <div class="offer-article__top">
            <div class="offer-article__logo">
              <img src="./images/logos/logo-bank-open.svg" alt="" class="offer-article__img" />
            </div>
            <div class="offer-article__status">
              <div
                class="offer-article__nameplate"
                :class="offer.status ? 'offer-article__nameplate_active' : 'offer-article__nameplate_disabled'"
              >
                {{ offer.status ? "Активен" : "Неактивен" }}
              </div>
            </div>
          </div>
          <div class="offer-article__name">Открытие Банк РКО</div>
          <ul class="offer-article__list">
            <li class="offer-article__text">
              ID предложения: <b>{{ offer.id }}</b>
            </li>
            <li class="offer-article__text">
              Дата запуска: <b>{{ offer.date }}</b>
            </li>
            <li class="offer-article__text">
              Продукт: <b>{{ offer.product }}</b>
            </li>
          </ul>
        </div>
        <Button class="offer-article__button" yellow>Оставить заявку</Button>
      </div>
      <div class="offer-article__right">
        <div class="offer-article__box">
          <div class="offer-article__title">Информация</div>

          <div class="offer-article__text">
            Обновление статистики: <b>{{ offer.refreshStatistic }}</b>
          </div>
          <div class="offer-article__text">
            Холд: <b>{{ offer.hold }} дней</b>
          </div>
        </div>
        <div class="offer-article__box">
          <div class="offer-article__title">Выплаты</div>

          <div class="offer-article__text" v-html="offer.payouts.text"></div>
          <div class="offer-article__text">
            Открытие счета: <b>{{ offer.payouts.price }} ₽</b>
          </div>
        </div>
      </div>
    </div>
    <div class="offer-article__box" v-html="offer.info"></div>
  </div>
</template>

<script setup>
  import HeadLayout from "@/components/shared/HeadLayout.vue";
  import Button from "@/components/shared/Button.vue";

  const head = {
    link: "/offers/offer",
    icon: "bank",
    title: "Предложения",
    text: "Открытие Банк РКО",
  };

  const offer = {
    status: true,
    logo: "./images/logos/logo-bank-open.svg",
    name: "Открытие Банк",
    id: 2,
    date: "16.12.2022",
    product: "РКО",
    refreshStatistic: "Онлайн",
    hold: 0,
    payouts: {
      text: `
        <p>Открытие счета для ООО + активация (после открытия, по счету должно минимум 3 операции на сумму не менее 30 000 рублей): <b>12 000 ₽</b></p>
        <p>Открытие счета для ИП + активация (после открытия, по счету должно минимум 3 операции на сумму не менее 30 000 рублей): <b>4 000 ₽</b></p>
      `,
      price: 0,
    },
    info: `
      <b>Целевые действия:</b> <br/><br/>
      1. Активация счета РКО (после открытия, по счету должно минимум 3 операции на сумму не менее 30 000 рублей, срок, в течение которого необходимо совершить транзакции - 3 мес.): </br>
      • Переводы со своего счета на свои счета в других банках не учитываются </br>
      • Переводы между своими счетами внутри банка не учитываются </br>
      • Пополнение счета НЕ считается активацией. </br>
      • Возвраты средств, возврат займов, предоставление займов; </br>
      • Не учитывается перевод с РС на свою карту физ лица </br>
      2. Подключение клиента к СБП, создание кассира и проведение операций по QR-коду на сумму не менее 50 000 руб. </br>
      ​Подключить ЛокоПэй можно дополнительно к открытому счету. </br>
      Необходимые документы для открытия счёта для ООО: </br>
      - Устав (последняя редакция)- Листы изменения к Уставу (при наличии)- Сведения об участниках общества**/выписка из реестра акционеров- Сведения об органах управления юридического лица***- Решение/Протокол/Приказ о назначении единоличного исполнительного органа- Документ, удостоверяющий личность Руководителя юридического лица / Документ, удостоверяющий личность Руководителя обособленного подразделения юридического лица (в случае открытия счета обособленному подразделению юридического лица)- Положение об обособленном подразделении юридического лица- Документы, подтверждающие полномочия Руководителя обособленного подразделения юридического лица - Доверенность на Руководителя обособленного подразделения, удостоверяющая его полномочия, выданная Руководителем юридического лица (документы предоставляются в Банк в случае открытия счета обособленному подразделению юридического лица <br/> <br/>
      <b>ГЕО:</b> <br/>
      Москва, Санкт-Петербург, Архангельск, Барнаул, Белгород, Владивосток, Владикавказ, Вологда, Воронеж, Екатеринбург, Ижевск, Йошкар-Ола, Иркутск, Казань, Калининград, Калуга, Краснодар, Красноярск, Курск, Липецк, Магнитогорск, Набережные Челны, Нальчик, Нижний Новгород, Новосибирск, Омск, Оренбург, Пенза, Пермь, Ростов-на-Дону, Самара, Ставрополь, Тверь, Тольятти, Томск, Тула, Тюмень, Уфа, Чебоксары, Челябинск, Череповец, Ярославль, Кемерово, Хабаровск, Новокузнецк, Волгоград, Белгород </br>
    `,
  };
</script>

<style scoped lang="scss">
  @import "@/assets/scss/pages/_offer-article.scss";
</style>
