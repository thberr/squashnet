<script setup lang="ts">
import type { CarouselResponsiveOptions } from "primevue";

const partners = ref<{ name: string; img: string }[]>([
  { name: "European Squash", img: "img/partners/logo_esf.png" },
  { name: "Agence Nationale du Sport", img: "img/partners/logo_ans.png" },
  { name: "Maif", img: "img/partners/logo_maif.png" },
  { name: "Dunlop", img: "img/partners/logo_dunlop.png" },
  { name: "ASB", img: "img/partners/logo_asb.png" },
]);

const carouselResponsiveOptions = ref<CarouselResponsiveOptions[]>([
  {
    breakpoint: "1280px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "640px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="flex flex-col h-full justify-end gap-8">
    <Carousel
      :value="partners"
      :numVisible="4"
      :showIndicators="false"
      :autoplayInterval="3000"
      :responsiveOptions="carouselResponsiveOptions"
      circular
    >
      <template #header>
        <div class="flex justify-center text-2xl mb-8">LES PARTENAIRES</div>
      </template>

      <template #previcon>
        <Icon name="material-symbols:chevron-left-rounded" size="60px" />
      </template>

      <template #item="partner">
        <div class="flex h-full justify-center items-center">
          <NuxtPicture
            :src="partner.data.img"
            :alt="partner.data.name"
            sizes="120px"
          />
        </div>
      </template>

      <template #nexticon>
        <Icon name="material-symbols:chevron-right-rounded" size="60px" />
      </template>
    </Carousel>

    <div
      class="flex flex-col gap-8 justify-center items-center mb-4 md:flex-row md:h-[7%]"
    >
      <a
        href="https://www.ffsquash.com/fr/squashnet-mentions-legales.html"
        class="no-underline"
        >Mentions légales et CGU</a
      >
      <a
        href="https://www.ffsquash.com/fr/politique-de-protection-des-donnees.html"
        class="no-underline"
        >Politique de protection des données</a
      >
      <a href="mailto:secretariatsportif@ffsquash.com" class="no-underline"
        >Contact</a
      >
    </div>
  </div>
</template>
