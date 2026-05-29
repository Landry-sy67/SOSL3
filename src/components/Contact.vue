<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-green-800 mb-8">{{ t('contact.title') }}</h1>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Add your contact form here -->
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
