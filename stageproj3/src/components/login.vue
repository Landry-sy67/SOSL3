<script setup lang="ts">
import { Ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const email = ref('')
const password = ref('')
const router = useRoute()
const activeMenu=
// this will handle login
function handleLogin(){
    router.push('/Dashboard')
}

</script>

<template>
    <div class="flex items-center justify-center bg-green-100 min-h-screeen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">LOGIN NOW</h2>
        <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
            <!-- email -->
            <input v-model="email" type="email" placeholder="please enter your email" required
            class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus-border-green-600">
            <!-- password -->
            <input v-model="password" type="password" placeholder="please enter your password" required
            class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus-border-green-600">
            <!-- login button -->
            <button type="submit" class="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition-colors duration-300">Login</button>
            
        </form>
        <P class="text-center text-sm mt-4 text-gray-600">DONT HAVE AN ACCOUNT?please create it<RouterLink to="/register" class="text-green-700 font-semibold hover:underline">REGISTER</RouterLink>

        
        </P>
    </div>
    </div>
</template>