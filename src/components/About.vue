<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>
<template>
    <section
        class="relative min-h-screen bg-cover bg-center mt-12 flex items-center"
        style="background-image: url('/Rwanda 🇷🇼.png');"
    >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

        <div class="relative max-w-5xl mx-auto px-6 py-20 text-white">
            <p class="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200 bg-white/10 rounded-full border border-white/20">
                About Rwanda
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
                    <h2 class="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">A place where nature, culture and community connect</h2>
                    <p class="mt-6 text-slate-600 leading-8">
                        Rwanda is celebrated for its gorilla conservation, clean cities, and vibrant cultural experiences. Visitors discover a nation that has rebuilt with purpose and embraces visitors with warmth and safety.
                    </p>

                    <div class="mt-8 grid gap-4 sm:grid-cols-2">
                        <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
                            <h3 class="text-xl font-semibold text-slate-900">Community tourism</h3>
                            <p class="mt-2 text-slate-600 leading-7">Stay with local families, discover traditional crafts, and support villages that benefit directly from tourism.</p>
                        </div>
                        <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
                            <h3 class="text-xl font-semibold text-slate-900">Food & flavors</h3>
                            <p class="mt-2 text-slate-600 leading-7">Taste Rwandan classics like brochettes, plantains, and fresh coffee while exploring street markets and elegant restaurants.</p>
                        </div>
                    </div>
                </div>

                <div class="grid gap-5">
                    <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
                        <h3 class="text-xl font-semibold text-slate-900">Wildlife & Parks</h3>
                        <p class="mt-2 text-slate-600 leading-7">Visit Parc National des Volcans, Akagera and Nyungwe for gorillas, savanna wildlife, and ancient rainforest canopy walks.</p>
                    </div>
                    <div class="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
                        <h3 class="text-xl font-semibold text-slate-900">Clean and safe</h3>
                        <p class="mt-2 text-slate-600 leading-7">Rwanda is one of Africa’s cleanest and safest travel destinations, with modern infrastructure and a welcoming environment.</p>
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