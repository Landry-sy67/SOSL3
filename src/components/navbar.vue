<script setup>
import { t, languageOptions, currentLocaleLabel, setLocale, locale } from '../i18n.js'
import { isAuthenticated, user, logout } from '../auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const flagMap = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
  rw: '🇷🇼',
  de: '🇩🇪'
}

function handleLogout() {
  logout()
  router.push('/')
}
</script>

<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
  <img src="/Man traveling logo black and white.png" alt="Logo" class="h-10 rounded-full" />

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

    <li v-if="!isAuthenticated">
      <router-link to="/login" class="hover:text-yellow-300">{{ t('nav.login') }}</router-link>
    </li>
    <li v-if="!isAuthenticated">
      <router-link to="/register" class="hover:text-yellow-300">{{ t('nav.register') }}</router-link>
    </li>

    <li v-if="isAuthenticated" class="relative group">
      <span class="hover:text-yellow-300 cursor-pointer flex items-center">{{ user?.name }} <span class="ml-1">⏑</span></span>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full right-0 z-50">
        <li><router-link to="/overview" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.overview') }}</router-link></li>
        <li><router-link to="/bookings" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.bookings') }}</router-link></li>
        <li><router-link to="/dashboard" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.dashboard') }}</router-link></li>
        <li><button @click="handleLogout" class="block w-full text-left px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.logout') }}</button></li>
      </ul>
    </li>
    <li class="relative group">
      <span class="hover:text-yellow-300 cursor-pointer flex items-center">{{ currentLocaleLabel }} <span class="ml-1">⏑</span></span>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-56 top-full right-0 z-50">
        <li v-for="localeOption in languageOptions" :key="localeOption.code">
          <button
            @click="setLocale(localeOption.code)"
            :class="['block w-full text-left px-4 py-2 hover:bg-green-200', localeOption.code === locale ? 'font-bold bg-green-100' : '']"
          >
            <span class="mr-2">{{ flagMap[localeOption.code] }}</span>
            {{ localeOption.label }}
          </button>
        </li>
      </ul>
    </li>
  </ul>
</nav>
</template>