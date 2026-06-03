<template>
  <div class="min-h-screen bg-cover bg-center py-12" style="background-image: url('/Rwanda.png');">
    <div class="bg-black/65 min-h-screen">
      <div class="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div class="bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 space-y-6">
              <h1 class="text-4xl font-bold text-green-900">Contact Us</h1>
              <p class="text-green-800 text-lg">Reach out to our Rwanda travel specialists to plan your next adventure, ask about guided tours, or receive help with accommodations.</p>
              <div class="space-y-4">
                <div>
                  <h2 class="font-semibold text-green-900">Email</h2>
                  <p>info@rwandatravel.example</p>
                </div>
                <div>
                  <h2 class="font-semibold text-green-900">Phone</h2>
                  <p>+250 123 456 789</p>
                </div>
                <div>
                  <h2 class="font-semibold text-green-900">Office</h2>
                  <p>Kigali City, Rwanda</p>
                </div>
              </div>
            </div>
            <div class="p-10 bg-green-50">
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-green-900">Name</label>
                  <input type="text" class="mt-2 w-full rounded-xl border border-green-200 p-3" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-green-900">Email</label>
                  <input type="email" class="mt-2 w-full rounded-xl border border-green-200 p-3" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-green-900">Message</label>
                  <textarea class="mt-2 w-full rounded-xl border border-green-200 p-3 h-32"></textarea>
                </div>
                <button class="w-full rounded-xl bg-green-800 text-white px-5 py-3 font-semibold hover:bg-green-900">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
