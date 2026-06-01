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
              <h2 class="text-2xl font-semibold mb-3">Kigali City</h2>
              <p>Explore Rwanda’s energetic capital with art studios, markets, rooftop cafés and contemporary culture.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/kivu.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Lake Kivu & Gisenyi</h2>
              <p>Relax by the lake, cruise to island cafés and discover vibrant coffee communities along the shore.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Living in Rwanda.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Volcanoes National Park</h2>
              <p>Track endangered mountain gorillas, hike forested ridges and stay in eco-lodges tucked into misty hills.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Rwanda.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Nyungwe Forest</h2>
              <p>Walk canopy bridges, spot chimpanzees and breathe in the oldest rainforest’s lush, emerald landscape.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/rwanda2.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Akagera Reserve</h2>
              <p>Enjoy private game drives, boat safaris and spectacular birdlife across eastern Rwanda’s golden savanna.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Rwanda 🇷🇼.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Musanze Caves</h2>
              <p>Explore dramatic karst caverns and discover the volcanic heart of northern Rwanda.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/Rwanda.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">King’s Palace Museum</h2>
              <p>Step into Rwanda’s royal heritage with traditional architecture, cultural performances and history.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-56 bg-cover bg-center" style="background-image: url('/rwanda2.png');"></div>
            <div class="bg-white p-6 text-green-900">
              <h2 class="text-2xl font-semibold mb-3">Lake Ihema Wetlands</h2>
              <p>Take a quiet boat tour to see hippos, crocodiles and some of Rwanda’s most impressive birdlife.</p>
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
