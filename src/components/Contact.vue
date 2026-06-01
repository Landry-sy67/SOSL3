<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/rwanda.png');">
    <div class="bg-black/60 min-h-screen">
      <div class="max-w-4xl mx-auto px-6 py-12">
        <h1 class="text-4xl font-bold text-white mb-8">{{ t('contact.title') }}</h1>
        <div class="bg-white/95 rounded-lg shadow-lg p-8">
          <!-- Add your contact form here -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
