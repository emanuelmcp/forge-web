<script setup lang="ts">
const links = [{
  label: 'Aviso legal',
  to: 'https://ui.nuxt.com/'
}, {
  label: 'Politica de cookies y privacidad',
  to: 'https://nuxt.com'
}, {
  label: 'Nuxt Studio',
  to: 'https://nuxt.studio'
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UButton
        icon="i-heroicons-envelope"
        color="gray"
        variant="ghost"
        to="/contact"
      />
    </template>
  </UFooter>
</template>

