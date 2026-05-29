<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
    <section class="bg-white text-green-600 h-screen w-full mt-12">
    <h1 class="text-5xl font-bold py-24">{{ t('nav.videos') }}</h1>
    </section>
</template>