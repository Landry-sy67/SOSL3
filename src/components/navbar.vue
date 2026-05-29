<script setup>
import { useI18n } from '../i18n.js'

const { currentLocaleLabel, availableLocales, setLocale, t } = useI18n()
</script>

<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
  <img src="/Man traveling logo black and white.png" alt="Logo" class="h-10 rounded-full">   
  
  <ul class="flex gap-8 font-medium">
    <li><router-link to="/" class="hover:text-yellow-300">{{ t('nav.home') }}</router-link></li>
    <li><router-link to="/about" class="hover:text-yellow-300">{{ t('nav.about') }}</router-link></li>
    <li><router-link to="/services" class="hover:text-yellow-300">{{ t('nav.services') }}</router-link></li>
    
    <li class="relative group">
      <span class="hover:text-yellow-300 cursor-pointer">{{ t('nav.gallery') }} <span>⏑</span></span>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        <li><router-link to="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.photos') }}</router-link></li>
        <li><router-link to="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.videos') }}</router-link></li>
      </ul>
    </li>
    
    <li class="relative group">
      <router-link to="/destinations" class="hover:text-yellow-300 cursor-pointer flex items-center">{{ t('nav.destinations') }} <span class="ml-1">⏑</span></router-link>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.northernProvince') }}</router-link></li>
        <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.southernProvince') }}</router-link></li>
        <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.westernProvince') }}</router-link></li>
        <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.easternProvince') }}</router-link></li>
        <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.kigaliCity') }}</router-link></li>
      </ul>
    </li>
    
    <li><router-link to="/contact" class="hover:text-yellow-300">{{ t('nav.contact') }}</router-link></li>

    <li class="relative group">
      <button type="button" class="hover:text-yellow-300 cursor-pointer flex items-center gap-1">
        {{ currentLocaleLabel }} <span>⏑</span>
      </button>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full right-0 z-50">
        <li v-for="lang in availableLocales" :key="lang.code">
          <button type="button" class="block w-full text-left px-4 py-2 hover:bg-green-200 text-green-900" @click="setLocale(lang.code)">
            {{ lang.label }}
          </button>
        </li>
      </ul>
    </li>
  </ul>
</nav>
</template>