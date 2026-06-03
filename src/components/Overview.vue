<script setup>
import { computed } from 'vue'
import { user, isAuthenticated } from '../auth.js'
import { userBookings } from '../bookings.js'

const upcoming = computed(() =>
  userBookings.value.filter(b => new Date(b.date) >= new Date())
)

const past = computed(() =>
  userBookings.value.filter(b => new Date(b.date) < new Date())
)

const totalSpent = computed(() =>
  userBookings.value.reduce((sum, b) => sum + b.total, 0)
)

const totalBookings = computed(() => userBookings.value.length)

const nextTrip = computed(() => {
  const sorted = [...upcoming.value].sort((a, b) => new Date(a.date) - new Date(b.date))
  return sorted[0] || null
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div v-if="!isAuthenticated" class="text-center py-20">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Overview</h1>
        <p class="text-slate-600 mb-6">Please log in to view your travel overview.</p>
        <router-link to="/login" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium">Login</router-link>
      </div>

      <template v-if="isAuthenticated">
        <div class="mb-8">
          <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900">Travel Overview</h1>
          <p class="text-slate-600 mt-2">Welcome back, {{ user?.name }}</p>
        </div>

        <div class="grid gap-6 md:grid-cols-4 mb-10">
          <div class="rounded-3xl bg-emerald-500 text-white p-8 shadow-lg">
            <p class="text-sm uppercase tracking-[0.2em] text-emerald-100">Total Bookings</p>
            <p class="text-4xl font-extrabold mt-2">{{ totalBookings }}</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">Upcoming</p>
            <p class="text-4xl font-extrabold text-slate-900 mt-2">{{ upcoming.length }}</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">Completed</p>
            <p class="text-4xl font-extrabold text-slate-900 mt-2">{{ past.length }}</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <p class="text-sm uppercase tracking-[0.2em] text-emerald-600">Total Spent</p>
            <p class="text-4xl font-extrabold text-slate-900 mt-2">${{ totalSpent }}</p>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Next Trip</h2>
            <div v-if="nextTrip" class="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <p class="text-lg font-bold text-emerald-800">{{ nextTrip.packageName }}</p>
              <p class="text-emerald-600 mt-1">{{ nextTrip.date }} &middot; {{ nextTrip.guests }} guest{{ nextTrip.guests > 1 ? 's' : '' }}</p>
              <p class="text-emerald-500 font-semibold mt-2">${{ nextTrip.total }}</p>
            </div>
            <div v-else class="text-slate-400 py-6 text-center">
              <p>No upcoming trips planned.</p>
              <router-link to="/bookings" class="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium">Browse packages &rarr;</router-link>
            </div>
          </div>

          <div class="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div class="space-y-3">
              <router-link to="/bookings" class="block rounded-2xl bg-emerald-500 text-white p-5 hover:bg-emerald-600 transition">
                <p class="font-bold">Book a Tour</p>
                <p class="text-sm text-emerald-100 mt-1">Explore and reserve your next adventure</p>
              </router-link>
              <router-link to="/dashboard" class="block rounded-2xl bg-slate-100 text-slate-800 p-5 hover:bg-slate-200 transition">
                <p class="font-bold">Dashboard</p>
                <p class="text-sm text-slate-500 mt-1">View your account details</p>
              </router-link>
              <router-link to="/destinations" class="block rounded-2xl bg-slate-100 text-slate-800 p-5 hover:bg-slate-200 transition">
                <p class="font-bold">Destinations</p>
                <p class="text-sm text-slate-500 mt-1">Discover beautiful places in Rwanda</p>
              </router-link>
            </div>
          </div>
        </div>

        <div v-if="upcoming.length > 1" class="mt-8 rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">All Upcoming Trips</h2>
          <div v-for="b in upcoming" :key="b.id" class="flex items-center justify-between border-b border-slate-200 py-4 last:border-0">
            <div>
              <p class="font-semibold text-slate-900">{{ b.packageName }}</p>
              <p class="text-sm text-slate-500">{{ b.date }} &middot; {{ b.guests }} guest{{ b.guests > 1 ? 's' : '' }}</p>
            </div>
            <span class="font-bold text-emerald-600">${{ b.total }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
