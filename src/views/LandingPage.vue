<template>
  <Hero id="how-it-work" />
  <Features id="advantages" />
  <Partners id="partners" />
  <Banner />
  <Points />
  <Form @open-modal="openModal" />
  <Footer id="contacts" />
  <FixedSocials />
  <Modal @close="closeModal" :show="showModal">
    <SendSuccess @close="closeModal" />
  </Modal>
</template>

<script setup>
  import Hero from "@/components/landing/Hero.vue";
  import Features from "@/components/landing/Features.vue";
  import Partners from "@/components/landing/Partners.vue";
  import Banner from "@/components/landing/Banner.vue";
  import Points from "@/components/landing/Points.vue";
  import Form from "@/components/landing/Form.vue";
  import Footer from "@/components/landing/Footer.vue";
  import FixedSocials from "@/components/landing/FixedSocials.vue";
  import Modal from "@/components/landing/Modal.vue";
  import SendSuccess from "@/components/landing/SendSuccess.vue";
  import { ref } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";

  const showModal = ref(false);

  function closeModal() {
    showModal.value = false;
  }

  function openModal() {
    showModal.value = true;
  }

  onMounted(() => {
    document.documentElement.classList.add("smooth-scroll");
  });
</script>
