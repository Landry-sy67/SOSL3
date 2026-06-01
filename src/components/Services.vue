<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/rwanda2.png');">
    <div class="bg-black/60 min-h-screen">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <h1 class="text-4xl font-bold text-white mb-12 text-center">{{ t('services.title') }}</h1>
        <div class="bg-white/95 rounded-xl shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
