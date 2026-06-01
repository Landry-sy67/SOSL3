<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <section class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/Kigali convention center.png');">
    <div class="bg-black/60 min-h-screen">
      <div class="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <div class="rounded-3xl bg-green-900/95 p-10 text-white shadow-2xl">
          <h1 class="text-5xl font-bold mb-4">{{ t('regions.kigali') }}</h1>
          <p class="text-lg leading-relaxed">Kigali is Rwanda’s vibrant capital, known for its welcoming streets, cultural museums, and growing art scene. It’s the perfect starting point for every journey.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-3xl bg-white p-6 shadow-xl">
            <h2 class="font-semibold text-green-900 mb-2">City highlights</h2>
            <ul class="space-y-2 text-green-700">
              <li>Inema Arts Center</li>
              <li>Kigali Genocide Memorial</li>
              <li>Local markets</li>
            </ul>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-xl">
            <h2 class="font-semibold text-green-900 mb-2">Dining & culture</h2>
            <ul class="space-y-2 text-green-700">
              <li>Rwandan cuisine</li>
              <li>Coffee shops and bakeries</li>
              <li>Live music venues</li>
            </ul>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-xl">
            <h2 class="font-semibold text-green-900 mb-2">Travel tips</h2>
            <ul class="space-y-2 text-green-700">
              <li>Use safe local transport</li>
              <li>Visit the city markets early</li>
              <li>Enjoy sunset views from a rooftop café</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>