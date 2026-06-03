<script setup>
import { ref, computed } from 'vue'
import { t } from '../i18n.js'
import { isAuthenticated } from '../auth.js'
import { tourPackages, userBookings, createBooking, cancelBooking } from '../bookings.js'

const selectedPackage = ref(null)
const bookingDate = ref('')
const bookingGuests = ref(1)
const step = ref('list')
const message = ref('')

function selectPackage(pkg) {
  selectedPackage.value = pkg
  step.value = 'form'
  message.value = ''
}

function back() {
  step.value = 'list'
  selectedPackage.value = null
  message.value = ''
}

function submitBooking() {
  if (!bookingDate.value) { message.value = 'Please select a date'; return }
  const result = createBooking(selectedPackage.value.id, bookingDate.value, bookingGuests.value)
  if (result.ok) {
    message.value = 'Booking confirmed!'
    step.value = 'list'
    bookingDate.value = ''
    bookingGuests.value = 1
  } else {
    message.value = result.message
  }
}

function handleCancel(id) {
  cancelBooking(id)
}

const upcomingBookings = computed(() =>
  userBookings.value.filter(b => new Date(b.date) >= new Date())
)

const pastBookings = computed(() =>
  userBookings.value.filter(b => new Date(b.date) < new Date())
)
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" style="background-image: url('/rwanda2.png');">
    <div class="bg-black/60 min-h-screen">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold text-white mb-2">Bookings</h1>
          <p class="text-green-200 text-lg">Reserve your dream Rwanda experience</p>
        </div>

        <div v-if="!isAuthenticated" class="rounded-3xl bg-white/90 p-10 text-center max-w-lg mx-auto">
          <p class="text-slate-700 text-lg mb-4">Please log in to book a tour.</p>
          <router-link to="/login" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium">Login</router-link>
        </div>

        <template v-if="isAuthenticated">
          <div v-if="message && step === 'list'" class="mb-6 rounded-2xl bg-emerald-500 text-white p-4 text-center font-semibold">{{ message }}</div>

          <div v-if="step === 'list'">
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div v-for="pkg in tourPackages" :key="pkg.id" class="rounded-3xl overflow-hidden shadow-2xl bg-white">
                <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${pkg.image})` }"></div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-slate-900 mb-2">{{ pkg.name }}</h3>
                  <p class="text-slate-600 text-sm mb-3">{{ pkg.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-emerald-600 font-bold text-lg">${{ pkg.price }}</span>
                    <span class="text-slate-400 text-sm">{{ pkg.duration }}</span>
                  </div>
                  <button @click="selectPackage(pkg)" class="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-medium transition">Book Now</button>
                </div>
              </div>
            </div>

            <div v-if="upcomingBookings.length" class="rounded-3xl bg-white p-8 shadow-lg mb-6">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">Upcoming Trips</h2>
              <div v-for="b in upcomingBookings" :key="b.id" class="flex items-center justify-between border-b border-slate-200 py-4 last:border-0">
                <div>
                  <p class="font-semibold text-slate-900">{{ b.packageName }}</p>
                  <p class="text-sm text-slate-500">{{ b.date }} &middot; {{ b.guests }} guest{{ b.guests > 1 ? 's' : '' }} &middot; ${{ b.total }}</p>
                </div>
                <button @click="handleCancel(b.id)" class="text-red-500 hover:text-red-700 text-sm font-medium">Cancel</button>
              </div>
            </div>

            <div v-if="pastBookings.length" class="rounded-3xl bg-white p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">Past Trips</h2>
              <div v-for="b in pastBookings" :key="b.id" class="flex items-center justify-between border-b border-slate-200 py-4 last:border-0">
                <div>
                  <p class="font-semibold text-slate-900">{{ b.packageName }}</p>
                  <p class="text-sm text-slate-500">{{ b.date }} &middot; {{ b.guests }} guest{{ b.guests > 1 ? 's' : '' }}</p>
                </div>
                <span class="text-slate-400 text-sm">Completed</span>
              </div>
            </div>

            <div v-if="!upcomingBookings.length && !pastBookings.length" class="rounded-3xl bg-white p-10 text-center">
              <p class="text-slate-500 text-lg">No bookings yet. Start planning your adventure above!</p>
            </div>
          </div>

          <div v-if="step === 'form'" class="max-w-lg mx-auto">
            <div class="rounded-3xl bg-white p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-slate-900 mb-2">{{ selectedPackage.name }}</h2>
              <p class="text-slate-500 mb-2">${{ selectedPackage.price }} per person &middot; {{ selectedPackage.duration }}</p>
              <p class="text-slate-600 text-sm mb-6">{{ selectedPackage.description }}</p>

              <div class="mb-4">
                <label class="block text-sm font-medium text-slate-700 mb-1">Travel Date</label>
                <input type="date" v-model="bookingDate" class="w-full border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div class="mb-6">
                <label class="block text-sm font-medium text-slate-700 mb-1">Number of Guests</label>
                <input type="number" v-model.number="bookingGuests" min="1" max="20" class="w-full border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>

              <div class="flex justify-between text-lg font-bold text-slate-900 mb-6">
                <span>Total</span>
                <span>${{ selectedPackage.price * bookingGuests }}</span>
              </div>

              <p v-if="message" class="text-red-500 text-sm mb-4">{{ message }}</p>

              <div class="flex gap-3">
                <button @click="back" class="flex-1 border border-slate-300 text-slate-700 py-2 rounded-full font-medium hover:bg-slate-100">Back</button>
                <button @click="submitBooking" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-medium">Confirm Booking</button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
