<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <section class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/kivu 2.png');">
    <div class="bg-white/90 min-h-screen">
      <div class="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <div class="rounded-3xl bg-green-900/95 p-10 text-white shadow-2xl">
          <h1 class="text-5xl font-bold mb-4">{{ t('regions.south') }}</h1>
          <p class="text-lg leading-relaxed">Southern Province is known for its rolling hills, lush tea plantations, and vibrant cultural heritage. It’s a serene area for relaxation and discovery.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-3xl bg-white p-6 shadow-xl">
            <h2 class="font-semibold text-green-900 mb-2">Highlights</h2>
            <ul class="space-y-2 text-green-700">
              <li>Tea fields and terraces</li>
              <li>Historic sites and museums</li>
              <li>Scenic walking trails</li>
            </ul>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-xl">
            <h2 class="font-semibold text-green-900 mb-2">Best activities</h2>
            <ul class="space-y-2 text-green-700">
              <li>Nature photography</li>
              <li>Local craft markets</li>
              <li>Lakeside picnics</li>
            </ul>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-xl">
            <h2 class="font-semibold text-green-900 mb-2">Travel tips</h2>
            <ul class="space-y-2 text-green-700">
              <li>Book a cultural village tour</li>
              <li>Bring a light jacket for evenings</li>
              <li>Enjoy fresh local produce</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>