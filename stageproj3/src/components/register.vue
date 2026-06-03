<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">
        REGISTER NOW
      </h2>

      <form @submit.prevent="register" class="flex flex-col gap-4">

        <input v-model="username" type="text" placeholder="Enter username"
          class="border rounded px-4 py-2" required />

        <select v-model="gender" class="border rounded px-4 py-2" required>
          <option disabled value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input v-model="email" type="email" placeholder="Enter email"
          class="border rounded px-4 py-2" required />

        <input v-model="telephone" type="tel" placeholder="Enter phone"
          class="border rounded px-4 py-2" required />

        <input v-model="age" type="number" placeholder="Enter age"
          class="border rounded px-4 py-2" required />

        <input v-model="password" type="password" placeholder="Password"
          class="border rounded px-4 py-2" required />

        <input v-model="confirmPassword" type="password" placeholder="Confirm password"
          class="border rounded px-4 py-2" required />

        <button type="submit"
          class="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          REGISTER
        </button>

      </form>

      <p class="text-center text-sm mt-4 text-gray-600">
        Already have an account?
        <router-link to="/login"
          class="text-green-700 font-semibold hover:underline">
          LOGIN
        </router-link>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const username = ref("")
const gender = ref("")
const email = ref("")
const telephone = ref("")
const age = ref("")
const password = ref("")
const confirmPassword = ref("")

const register = () => {
  console.log("Register clicked")

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match")
    return
  }

  alert("Registration successful")
}
</script>