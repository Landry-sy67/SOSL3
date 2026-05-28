<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
  <img src="../assets/sos-logo.png" alt="Logo" class="h-10">   
  
  <ul class="flex gap-8 font-medium">
    <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>
    <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>
    <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
    
    <li class="relative group">
      <span class="hover:text-yellow-300 cursor-pointer">Gallery <span>⏑</span></span>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        <li><router-link to="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</router-link></li>
        <li><router-link to="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</router-link></li>
      </ul>
    </li>
    
    <li class="relative group">
      <router-link to="/destinations" class="hover:text-yellow-300 cursor-pointer flex items-center">Destinations <span class="ml-1">⏑</span></router-link>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern Province</router-link></li>
        <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern Province</router-link></li>
        <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western Province</router-link></li>
        <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern Province</router-link></li>
        <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali City</router-link></li>
      </ul>
    </li>
    
    <li><router-link to="/contact" class="hover:text-yellow-300">Contact</router-link></li>
  </ul>
</nav>
</template>