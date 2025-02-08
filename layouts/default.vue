<script setup lang="ts">
import type { MenuMethods } from "primevue";
import type { MenuItem } from "primevue/menuitem";

// TODO : get the real time screen size so the avatar can update it's size
const screenSize = ref<number>(1);

const navbarItems = ref<MenuItem[]>([
  {
    label: "Compétitions",
    url: "/tournaments",
  },
  {
    label: "Résultats",
    url: "/results",
  },
  {
    label: "Classement",
    url: "/ranking",
  },
  {
    label: "FFSquash",
    url: "https://www.ffsquash.com/",
  },
]);

const profileMenuItems = ref<MenuItem[]>([
  {
    label: "Mon profil",
    icon: "material-symbols:person",
    url: "/",
  },
  {
    label: "Se déconnecter",
    icon: "material-symbols:logout",
    url: "/",
  },
]);

const profileMenu = ref<MenuMethods>();
const toggleProfileMenu = (event: Event) => {
  profileMenu.value?.toggle(event);
};
</script>

<template>
  <Menubar :model="navbarItems" class="p-4 flex gap-8">
    <template #start>
      <NuxtLink to="/">
        <NuxtPicture
          src="img/logo_squashnet.png"
          alt="Logo Squashnet"
          sizes="200px"
        />
      </NuxtLink>
    </template>

    <template #buttonicon>
      <Icon name="material-symbols:menu" class="text-3xl" />
    </template>

    <template #item="{ item }">
      <div class="p-3">
        <NuxtLink :to="item.url">
          <span class="text-xl md:text-2xl">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </template>

    <template #end>
      <Avatar
        shape="circle"
        :size="screenSize > 2 ? 'large' : 'xlarge'"
        class="cursor-pointer"
        @click="toggleProfileMenu"
      >
        <template #icon>
          <Icon name="material-symbols:person" size="xlarge" />
        </template>
      </Avatar>

      <Menu
        ref="profileMenu"
        :model="profileMenuItems"
        :popup="true"
        class="text-lg"
      >
        <template #itemicon="{ item }">
          <Icon :name="item.icon!" class="text-3xl" />
        </template>
      </Menu>
    </template>
  </Menubar>

  <slot />
</template>
