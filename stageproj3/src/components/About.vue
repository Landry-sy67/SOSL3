<template>
    <section
        class="relative h-screen bg-cover bg-center mt-12 flex items-center"
        style="background-image: url('/Rwanda 🇷🇼.png');"
    >
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative max-w-4xl mx-auto px-6 py-20 text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">About Rwanda</h1>
            <p class="text-lg mb-6">Rwanda is a small, vibrant country in East Africa known for its rolling hills, rich culture, and remarkable conservation efforts. From gorilla trekking in Volcanoes National Park to Kigali’s lively markets, Rwanda offers unforgettable experiences.</p>

            <ul class="list-disc pl-5 space-y-2 text-green-200 mb-6">
                <li>Friendly people and safe cities</li>
                <li>Rich cultural heritage and festivals</li>
                <li>World-class wildlife and nature reserves</li>
            </ul>

            <div class="flex gap-4">
                <router-link to="/" class="bg-white text-green-700 px-4 py-2 rounded-md">Back Home</router-link>
                <router-link to="/destinations" class="bg-green-600 text-white px-4 py-2 rounded-md">See Destinations</router-link>
            </div>
        </div>
    </section>
</template>