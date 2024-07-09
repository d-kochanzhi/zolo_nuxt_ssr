<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>     
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import useLanguages from './shared/useLanguages';

const { currentLocale } = useLanguages();

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }   
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  htmlAttrs: {
    lang: currentLocale,
  },
});
</script>
