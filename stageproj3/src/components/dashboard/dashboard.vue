<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import Overview from './overview.vue'
import Bookings from './bookings.vue'

const router = useRouter()

const activeMenu = ref('overview')

const currentComponent = computed(() => {
  switch (activeMenu.value) {
    case 'overview':
      return Overview
    case 'booking':
      return Bookings
    default:
      return Overview
  }
})

function logout() {
  router.push('/Login')
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside class="w-64 bg-green-800 text-white flex flex-col">

      <!-- Logo / Title -->
      <div class="p-6 text-2xl font-bold border-b border-green-700">
        Dashboard
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-3">

        <button
          @click="activeMenu = 'overview'"
          :class="[
            'w-full text-left px-4 py-2 rounded',
            activeMenu === 'overview'
              ? 'bg-green-700'
              : 'hover:bg-green-700'
          ]"
        >
          Overview
        </button>

        <button
          @click="activeMenu = 'booking'"
          :class="[
            'w-full text-left px-4 py-2 rounded',
            activeMenu === 'booking'
              ? 'bg-green-700'
              : 'hover:bg-green-700'
          ]"
        >
          Booking
        </button>

        <button
          class="w-full text-left px-4 py-2 rounded hover:bg-green-700"
        >
          Users
        </button>

      </nav>

      <!-- Logout -->
      <div class="p-4 border-t border-green-700">
        <button
          @click="logout"
          class="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-8">
      <component :is="currentComponent" />
    </main>

  </div>
</template>