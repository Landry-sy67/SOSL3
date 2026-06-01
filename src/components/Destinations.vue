<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <div class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/Rwanda 🇷🇼.png');">
    <div class="bg-black/55 min-h-screen">
      <div class="max-w-6xl mx-auto px-6 py-16 space-y-10 text-white">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">{{ t('destinations.title') }}</h1>
          <p class="max-w-2xl mx-auto text-lg text-green-200">{{ t('destinations.description') }} Enjoy curated region guides and signature experiences from Kigali to the national parks.</p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/kigali.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Kigali</h2>
              <p>Urban elegance, refined dining and museum tours—Kigali is the ideal starting point for modern Rwanda travel.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/kivu.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Lake Kivu</h2>
              <p>Enjoy luxury lakeside retreats, sunset cruises and fresh seafood dining against lush hilltop scenery.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Living in Rwanda.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Volcanoes</h2>
              <p>Meet mountain gorillas, hike iconic volcano trails and relax in premium eco-lodges near the park.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Rwanda.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Nyungwe Forest</h2>
              <p>Traverse canopy walkways, spot chimpanzees and unwind in rainforest luxury at one of Africa’s oldest forests.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/rwanda2.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Akagera</h2>
              <p>Experience guided safari drives, private game lodges and exceptional birding across expansive savannas.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Rwanda 🇷🇼.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Heritage Trails</h2>
              <p>Discover village life, cultural ceremonies and Rwanda’s inspiring story through tailored heritage tours.</p>
            </div>
          </div>
        </div>
        <div class="mt-10 text-center">
          <p class="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-700">Plan your custom itinerary and unlock the best of each region with our expert travel team.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
