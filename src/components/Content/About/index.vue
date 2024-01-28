<script setup lang="ts">
import Section from '../Section.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <Section id="about" :title="t('header.nav.about')">
    <p class="mb-4 text-justify">
      {{ t('about.paragraph1') }}
    </p>
  </Section>
</template>
