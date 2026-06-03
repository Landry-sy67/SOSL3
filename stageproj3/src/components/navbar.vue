<script setup>
import { ref } from 'vue'

const currentLanguage = ref('English')

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' }
]

function changeLanguage(language) {
  currentLanguage.value = language.label
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img
  src="/logo.png"
  alt="Logo"
  class="h-10 w-10 rounded-full object-cover"
/>
      <h1 class="text-xl font-bold">Rwanda Tourism</h1>
    </div>

    <!-- Menu -->
    <ul class="flex gap-6 items-center font-medium">
      <li>
        <router-link to="/" class="hover:text-yellow-300">
          Home
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          About
        </router-link>
      </li>

      <li>
        <router-link to="/services" class="hover:text-yellow-300">
          Services
        </router-link>
      </li>

      <!-- Gallery -->
      <li class="relative group">
        <span class="cursor-pointer hover:text-yellow-300">
          Gallery ⏑
        </span>

        <ul
          class="absolute top-full left-0 hidden group-hover:block bg-white text-green-900 rounded shadow-lg min-w-[180px]"
        >
          <li>
            <router-link
              to="/photos"
              class="block px-4 py-2 hover:bg-green-100"
            >
              Photos
            </router-link>
          </li>

          <li>
            <router-link
              to="/videos"
              class="block px-4 py-2 hover:bg-green-100"
            >
              Videos
            </router-link>
          </li>
        </ul>
      </li>

      <!-- Destinations -->
      <li class="relative group">
        <span class="cursor-pointer hover:text-yellow-300">
          Destinations ⏑
        </span>

        <ul
          class="absolute top-full left-0 hidden group-hover:block bg-white text-green-900 rounded shadow-lg min-w-[220px]"
        >
          <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-100">Northern Province</router-link></li>
          <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-100">Southern Province</router-link></li>
          <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-100">Eastern Province</router-link></li>
          <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-100">Western Province</router-link></li>
          <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-100">Kigali City</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          Contact
        </router-link>
      </li>

      <!-- Language -->
      <li class="relative group">
        <span class="cursor-pointer hover:text-yellow-300">
          {{ currentLanguage }} ⏑
        </span>

        <ul
          class="absolute top-full right-0 hidden group-hover:block bg-white text-green-900 rounded shadow-lg min-w-[180px]"
        >
          <li
            v-for="language in languages"
            :key="language.code"
          >
            <button
              @click="changeLanguage(language)"
              class="w-full text-left px-4 py-2 hover:bg-green-100"
            >
              {{ language.flag }} {{ language.label }}
            </button>
          </li>
        </ul>
      </li>

      <li>
        <router-link
          to="/login"
          class="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Login
        </router-link>
      </li>

      <li>
        <router-link
          to="/register"
          class="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Register
        </router-link>
      </li>
    </ul>
  </nav>
</template>