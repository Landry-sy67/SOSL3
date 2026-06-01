<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/Living in Rwanda.png');"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

    <div class="relative text-center px-6 max-w-4xl">
      <p class="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200 bg-white/10 rounded-full border border-white/20">
        {{ t('home.tagline') }}
      </p>
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">{{ t('home.heroTitle') }}</h1>
      <p class="text-lg md:text-xl mb-8 text-green-200 max-w-3xl mx-auto">
        Discover Rwanda through premium travel experiences, expert local guidance and fully planned itineraries designed for confident explorers.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/destinations" class="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition">{{ t('home.exploreButton') }}</router-link>
        <router-link to="/about" class="inline-flex items-center justify-center border border-white/70 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">{{ t('home.learnMoreButton') }}</router-link>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">Travel with confidence</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Rwanda showcases luxury, safety and unforgettable discovery</h2>
        <p class="mt-4 text-slate-600 mx-auto max-w-3xl">
          From gorilla treks to Kigali skyline dining, our curated journeys balance comfort, culture and the best of Rwanda’s natural beauty.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Signature Safaris</h3>
          <p class="text-slate-600 leading-7">Track mountain gorillas in Volcanoes National Park, then retreat to upscale lodges with expert local guides.</p>
        </article>

        <article class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <h3 class="text-xl font-semibold text-slate-900 mb-3">City & Culture</h3>
          <p class="text-slate-600 leading-7">Enjoy Kigali’s design districts, fine dining and immersive cultural experiences in a modern, welcoming capital.</p>
        </article>

        <article class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Exclusive Nature</h3>
          <p class="text-slate-600 leading-7">Explore rainforests, lakes and heritage routes with tailored support and seamless logistics throughout your stay.</p>
        </article>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div class="rounded-3xl bg-emerald-500 text-white p-8 shadow-lg">
          <p class="text-4xl font-extrabold">26%</p>
          <p class="mt-2 text-sm uppercase tracking-[0.2em]">Forest cover</p>
        </div>
        <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <p class="text-4xl font-extrabold text-slate-900">95%</p>
          <p class="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Guest satisfaction</p>
        </div>
        <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <p class="text-4xl font-extrabold text-slate-900">15</p>
          <p class="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Protected parks</p>
        </div>
      </div>
    </div>
  </section>
</template>