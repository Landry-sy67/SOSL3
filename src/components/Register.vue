<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../auth.js'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

function handleRegister() {
  error.value = ''
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Please fill in all fields'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }
  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters'
    return
  }
  const result = register(name.value, email.value, password.value)
  if (result.ok) {
    router.push('/dashboard')
  } else {
    error.value = result.message
  }
}
</script>

<template>
  <div class="min-h-screen bg-cover bg-center flex items-center justify-center" style="background-image: url('/Rwanda.png');">
    <div class="bg-black/60 min-h-screen w-full flex items-center justify-center">
      <div class="bg-white/95 rounded-3xl shadow-2xl p-10 w-full max-w-md mx-6">
        <h1 class="text-3xl font-bold text-green-900 text-center mb-2">Create Account</h1>
        <p class="text-green-700 text-center mb-8">Join us and explore Rwanda</p>
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-green-900 mb-2">Full Name</label>
            <input v-model="name" type="text" placeholder="John Doe" class="w-full rounded-xl border border-green-200 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-green-900 mb-2">Email</label>
            <input v-model="email" type="email" placeholder="you@example.com" class="w-full rounded-xl border border-green-200 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-green-900 mb-2">Password</label>
            <input v-model="password" type="password" placeholder="At least 6 characters" class="w-full rounded-xl border border-green-200 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-green-900 mb-2">Confirm Password</label>
            <input v-model="confirmPassword" type="password" placeholder="••••••••" class="w-full rounded-xl border border-green-200 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>
          <button type="submit" class="w-full rounded-xl bg-green-800 text-white px-5 py-3 font-semibold hover:bg-green-900 transition">Create Account</button>
        </form>
        <p class="text-center text-sm text-green-700 mt-6">
          Already have an account?
          <router-link to="/login" class="text-green-600 font-semibold hover:underline">Sign In</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
