<script setup lang="ts">
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  stack: { type: Array<string>, required: true },
  image: { type: String, required: false },
  index: { type: Number, required: true }
})
</script>

<template>
  <div class="bg-charcoal-gray/40 hover:bg-charcoal-gray/60 p-5 rounded-lg mb-10">
    <div class="flex flex-col md:flex-row items-start">
      <img
        :src="image"
        class="w-full md:w-1/3 md:mr-4 object-contain max-h-64 rounded-md mb-4 md:mb-0"
      />
      <div class="md:w-2/3">
        <h2 class="text-xl font-bold mb-2">{{ t(`projects.${index}.title`) }}</h2>
        <p>
          {{ t(`projects.${index}.description`) }}
        </p>

        <div class="flex flex-wrap gap-2 mt-3">
          <div
            class="flex items-center rounded-full bg-dark-turquoise/70 px-2 py-1 text-xs font-medium leading-4 text-light-gray"
            v-for="(tech, tIndex) in stack"
          >
            {{ t(`projects.${index}.stack.${tIndex}`) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
