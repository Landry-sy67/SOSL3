<script setup>
import { computed } from 'vue'
import { user, logout } from '../auth.js'
import { userBookings } from '../bookings.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const tripsPlanned = computed(() => userBookings.value.length)

function handleLogout() {
  logout()
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900">Dashboard</h1>
          <p class="text-slate-600 mt-2">Welcome back, {{ user?.name }}</p>
        </div>
        <button @click="handleLogout" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition">Sign Out</button>
      </div>

      <div class="grid gap-6 md:grid-cols-3 mb-10">
        <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">Account</p>
          <p class="text-2xl font-bold text-slate-900 mt-2">{{ user?.name }}</p>
          <p class="text-slate-500">{{ user?.email }}</p>
        </div>
        <div class="rounded-3xl bg-emerald-500 text-white p-8 shadow-lg">
          <p class="text-sm uppercase tracking-[0.2em] text-emerald-100">Trips Planned</p>
          <p class="text-4xl font-extrabold mt-2">{{ tripsPlanned }}</p>
        </div>
        <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">Member Since</p>
          <p class="text-2xl font-bold text-slate-900 mt-2">{{ new Date().toLocaleDateString() }}</p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mb-10">
        <router-link to="/overview" class="rounded-3xl bg-emerald-500 text-white p-8 shadow-lg hover:bg-emerald-600 transition">
          <p class="text-sm uppercase tracking-[0.2em] text-emerald-100">Travel Overview</p>
          <p class="text-2xl font-bold mt-2">View your trip summary</p>
        </router-link>
        <router-link to="/bookings" class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:bg-slate-50 transition">
          <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">Bookings</p>
          <p class="text-2xl font-bold text-slate-900 mt-2">Book a new tour</p>
        </router-link>
      </div>

      <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Your Next Adventure Awaits</h2>
        <p class="text-slate-600 leading-7 mb-6">Start planning your dream trip to Rwanda. Browse our destinations, book guided tours, and create unforgettable memories.</p>
        <router-link to="/destinations" class="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition">Explore Destinations</router-link>
      </div>
    </div>
  </div>
</template>
