<script setup>
</script>
<template>
  <!-- HERO SECTION -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/Living in Rwanda.png');"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative text-center px-6 max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-white">Welcome to Rwanda</h1>
      <p class="text-lg md:text-xl mb-6 text-green-200">Discover the Land of a Thousand Hills — culture, nature and warm hospitality.</p>
      <div class="flex justify-center gap-4">
        <router-link to="/destinations" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">Explore Destinations</router-link>
        <router-link to="/about" class="bg-transparent border border-white text-white px-6 py-2 rounded-md">Learn More</router-link>
      </div>
    </div>
  </section>
</template>