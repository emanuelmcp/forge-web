<script setup lang="ts">
const links = [
  {
    label: "Forge",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Descargar",
    icon: "i-folder-arrow-down",
    to: "/download",
  },
  {
    label: "Caracteristicas",
    icon: "i-heroicons-at-symbol",
    to: "/contact",
  },
  {
    label: "Ayuda",
    icon: "i-heroicons-at-symbol",
    to: "/contact",
  }
];
</script>

<template>
  <UHeader
    :links="links"
  >
    <template #logo>
      Forge
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
  <UContainer>
    <UPage>
      <NuxtPage />
    </UPage>
  </UContainer>
  <BaseFooter />
</template>
