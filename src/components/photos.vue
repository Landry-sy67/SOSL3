<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
    <section class="bg-white text-green-600 h-screen w-full mt-12 bg-cover bg-center" style="background-image: url('/living-in-rwanda.png');">
        <div class="bg-white/70 h-full w-full flex items-center justify-center">
            <h1 class="text-5xl font-bold py-24 text-green-900">{{ t('nav.photos') }}</h1>
        </div>
    </section>
</template>