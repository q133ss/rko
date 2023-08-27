<template>
  <Hero />
  <Features />
  <Partners />
  <Banner />
  <Points />
</template>

<script setup>
  import Hero from "@/components/landing/Hero.vue";
  import Features from "@/components/landing/Features.vue";
  import Partners from "@/components/landing/Partners.vue";
  import Banner from "@/components/landing/Banner.vue";
  import Points from "@/components/landing/Points.vue";
</script>

<style scoped lang="scss">
  @import "@/assets/scss/landing/_hero.scss";
</style>
