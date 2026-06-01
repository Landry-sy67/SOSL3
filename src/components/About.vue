<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <section
    class="relative min-h-screen bg-cover bg-center mt-12 flex items-center"
    style="background-image: url('/Rwanda 🇷🇼.png');"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

    <div class="relative max-w-5xl mx-auto px-6 py-20 text-white">
      <p class="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200 bg-white/10 rounded-full border border-white/20">
        {{ t('about.officialLanguages') }}
      </p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('about.title') }}</h1>
      <p class="text-lg md:text-xl mb-6 max-w-3xl text-green-200">{{ t('about.description') }}</p>

      <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
        <router-link to="/" class="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-slate-100 transition">{{ t('about.backHome') }}</router-link>
        <router-link to="/destinations" class="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition">{{ t('about.seeDestinations') }}</router-link>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">Why Rwanda stands out</p>
          <h2 class="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">Exceptional travel that feels effortless</h2>
          <p class="mt-6 text-slate-600 leading-8">
            Rwanda combines world-class wildlife, premium hospitality and authentic cultural encounters. Each journey is crafted to feel seamless, secure and deeply memorable.
          </p>
          <p class="mt-6 text-slate-600 leading-8">
            Discover lush national parks, refined city experiences, and meaningful community visits with local experts who ensure your trip reflects the best of Rwanda.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
              <h3 class="text-xl font-semibold text-slate-900">Sustainable travel</h3>
              <p class="mt-2 text-slate-600 leading-7">Support responsible tourism that empowers communities and preserves Rwanda’s natural heritage.</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
              <h3 class="text-xl font-semibold text-slate-900">Expert hospitality</h3>
              <p class="mt-2 text-slate-600 leading-7">Enjoy premium accommodations, seamless transfers and curated experiences at every stage of your visit.</p>
            </div>
          </div>
        </div>

        <div class="grid gap-5">
          <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
            <h3 class="text-xl font-semibold text-slate-900">Wildlife & Parks</h3>
            <p class="mt-2 text-slate-600 leading-7">Explore Volcanoes, Akagera and Nyungwe with guided safaris, primate tracking and rainforest canopy walks.</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
            <h3 class="text-xl font-semibold text-slate-900">Safe and polished</h3>
            <p class="mt-2 text-slate-600 leading-7">Rwanda is recognized for its safety, cleanliness and efficient infrastructure—perfect for first-time and seasoned travelers alike.</p>
          </div>
        </div>
      </div>

      <div class="mt-14">
        <h2 class="text-3xl font-extrabold text-slate-900">Rwanda by the numbers</h2>
        <div class="mt-8 grid gap-6 sm:grid-cols-3">
          <article class="rounded-3xl bg-emerald-500 text-white p-8 shadow-lg">
            <p class="text-4xl font-extrabold">26%</p>
            <p class="mt-2 uppercase tracking-[0.2em] text-sm">Forest cover</p>
          </article>
          <article class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <p class="text-4xl font-extrabold text-slate-900">15</p>
            <p class="mt-2 uppercase tracking-[0.2em] text-sm text-slate-500">Parks & reserves</p>
          </article>
          <article class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <p class="text-4xl font-extrabold text-slate-900">12</p>
            <p class="mt-2 uppercase tracking-[0.2em] text-sm text-slate-500">Official languages</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>