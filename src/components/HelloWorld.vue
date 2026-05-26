<script setup>
import sosLogo from '../assets/sos-logo.png'

const staff = [
  {
    id: 1,
    name: 'PHILIPPE',
    role: 'Principal',
    department: 'Administration',
    email: 'john@sosschool.com'
  },
  {
    id: 2,
    name: 'JEAN DE LA CROIX',
    role: 'ICT Teacher',
    department: 'Technology',
    email: 'jane@sosschool.com'
  },
  {
    id: 3,
    name: 'JEAN DE DIEU',
    role: 'Science Teacher',
    department: 'Science',
    email: 'peter@sosschool.com'
  },
  {
    id: 4,
    name: 'MARIE UWINEZA',
    role: 'Librarian',
    department: 'Library',
    email: 'mary@sosschool.com'
  }
]
</script>

<template>
<section class="min-h-screen bg-gray-100">

  
  <nav class="bg-blue-700 text-white p-5">
    <div class="flex items-center gap-4">
      <img 
      :src="sosLogo"
      alt="SOS Logo"
      class="w-12 h-12 rounded-full bg-white p-1"/>
       <h1 class="text-3xl font-bold"> 
        <h1 class="text-2xl font-bold">
        SOS SCHOOL BLOG
      </h1>

       </h1>

    </div>
   
  </nav>

  
  <div class="text-center py-12">

    <img
      :src="heroImg"
      class="w-60 mx-auto mb-6"
    />

    <h1 class="text-5xl font-bold">
      Welcome to SOS Blog
    </h1>

    <p class="mt-4 text-gray-600">
      Innovation • Technology • Student Stories
    </p>

  </div>

  <!-- Cards -->
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-6">

    <div class="bg-white shadow rounded p-5">

      <img
        :src="viteLogo"
        class="w-20 mx-auto"
      />

      <h2 class="text-xl font-bold mt-4">
        Innovation Projects
      </h2>

      <p class="mt-2 text-gray-600">
        Students submit and share projects.
      </p>

    </div>

    <div class="bg-white shadow rounded p-5">

      <img
        :src="vueLogo"
        class="w-20 mx-auto"
      />

      <h2 class="text-xl font-bold mt-4">
        Technology Club
      </h2>

      <p class="mt-2 text-gray-600">
        Explore software and design activities.
      </p>

    </div>

    <div class="bg-white shadow rounded p-5">

      <img
        :src="heroImg"
        class="w-20 mx-auto"
      />

      <h2 class="text-xl font-bold mt-4">
        School Events
      </h2>

      <p class="mt-2 text-gray-600">
        Stay updated with school innovation events.
      </p>

    </div>

  </div>

  <!-- Staff Table -->
  <div class="max-w-6xl mx-auto p-6">

    <h2 class="text-3xl font-bold mb-6 text-center text-blue-700">
      School Staff
    </h2>

    <div class="overflow-x-auto bg-white shadow rounded-lg">

      <table class="min-w-full border border-gray-200">

        <thead class="bg-blue-700 text-white">
          <tr>
            <th class="py-3 px-4 border">#</th>
            <th class="py-3 px-4 border">Name</th>
            <th class="py-3 px-4 border">Role</th>
            <th class="py-3 px-4 border">Department</th>
            <th class="py-3 px-4 border">Email</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="member in staff"
            :key="member.id"
            class="text-center hover:bg-gray-100"
          >
            <td class="py-3 px-4 border">{{ member.id }}</td>
            <td class="py-3 px-4 border">{{ member.name }}</td>
            <td class="py-3 px-4 border">{{ member.role }}</td>
            <td class="py-3 px-4 border">{{ member.department }}</td>
            <td class="py-3 px-4 border">{{ member.email }}</td>
          </tr>
        </tbody>

      </table>

    </div>

  </div>

</section>
</template>