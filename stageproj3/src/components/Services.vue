<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <div class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/rwanda2.png');">
    <div class="bg-black/60 min-h-screen">
      <div class="max-w-6xl mx-auto px-6 py-16 space-y-10 text-white">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">{{ t('services.title') }}</h1>
          <p class="max-w-2xl mx-auto text-lg text-green-200">{{ t('services.description') }}</p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-3xl bg-white/95 p-8 shadow-2xl text-green-900">
            <h2 class="text-2xl font-semibold mb-4">{{ t('services.guideTitle') }}</h2>
            <p>{{ t('services.guideText') }}</p>
          </div>
          <div class="rounded-3xl bg-white/95 p-8 shadow-2xl text-green-900">
            <h2 class="text-2xl font-semibold mb-4">{{ t('services.lodgingTitle') }}</h2>
            <p>{{ t('services.lodgingText') }}</p>
          </div>
          <div class="rounded-3xl bg-white/95 p-8 shadow-2xl text-green-900">
            <h2 class="text-2xl font-semibold mb-4">{{ t('services.itineraryTitle') }}</h2>
            <p>{{ t('services.itineraryText') }}</p>
          </div>
        </div>
        <div class="mt-10 rounded-3xl bg-white/90 p-8 shadow-2xl border border-slate-200 text-slate-800">
          <p class="text-lg font-semibold">Tailored travel design</p>
          <p class="mt-3 leading-7">Every itinerary is handcrafted to match your interests, with private transfers, premium accommodations and flexible experiences for discerning travelers.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
