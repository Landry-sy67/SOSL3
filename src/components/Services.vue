<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-green-800 mb-12 text-center">{{ t('services.title') }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
