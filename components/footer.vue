<script setup lang="ts">
const partners = ref<{ name: string; img: string }[]>([
  { name: "European Squash", img: "img/partners/logo_esf.png" },
  { name: "Agence Nationale du Sport", img: "img/partners/logo_ans.png" },
  { name: "Maif", img: "img/partners/logo_maif.png" },
  { name: "Dunlop", img: "img/partners/logo_dunlop.png" },
  { name: "ASB", img: "img/partners/logo_asb.png" },
]);
</script>

<template>
  <div class="flex flex-col h-full justify-end">
    <div class="mb-6">
      <Carousel
        :value="partners"
        :numVisible="3"
        :numScroll="1"
        :showIndicators="false"
        :autoplayInterval="3000"
        circular
      >
        <template #header>
          <div class="flex justify-center text-2xl mb-8">LES PARTENAIRES</div>
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
      </Carousel>
    </div>

    <div class="flex flex-row gap-8 justify-center items-center h-[7%]">
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
