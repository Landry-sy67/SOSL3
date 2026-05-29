<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.brand') }}</h3>
            <p class="text-sm text-green-200">{{ t('footer.description') }}</p>
        </div>
    
    <!-- quick link -->
     <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.quickLinks') }}</h3>
        <ul class="space-y-2 text-sm">
            <li>
                <RouterLink to="/" class="hover:text-yellow-300">{{ t('nav.home') }}</RouterLink>
            </li>
            <li>
               <RouterLink to="/contact" class="hover:text-yellow-300">{{ t('nav.contact') }}</RouterLink>  
            </li>
            <li>
                <RouterLink to="/services" class="hover:text-yellow-300">{{ t('nav.services') }}</RouterLink> 
            </li>
            <li>
                <RouterLink to="/about" class="hover:text-yellow-300">{{ t('nav.about') }}</RouterLink> 
            </li>
    
        </ul>
    </div>
    <!-- destinations -->
     <div>
      <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.destinations') }}</h3>
        <ul class="space-y-2 text-sm">
            <li>
                <RouterLink to="/north" class="hover:text-yellow-300">{{ t('nav.northernProvince') }}</RouterLink>
            </li>
            <li>
                 <RouterLink to="/south" class="hover:text-yellow-300">{{ t('nav.southernProvince') }}</RouterLink>
            </li>
            <li>
                 <RouterLink to="/west" class="hover:text-yellow-300">{{ t('nav.westernProvince') }}</RouterLink>
            </li>
            <li>
                 <RouterLink to="/east" class="hover:text-yellow-300">{{ t('nav.easternProvince') }}</RouterLink>
            </li>
            <li>
                 <RouterLink to="/kigali" class="hover:text-yellow-300">{{ t('nav.kigaliCity') }}</RouterLink>
            </li>
        </ul>
     </div>
     <!-- contact info -->
           <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.contactTitle') }}</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <span class="hover:text-yellow-300">{{ t('footer.email') }}</span> 
                </li>
                 <li>
                    <span class="hover:text-yellow-300">{{ t('footer.phone') }}</span>
            </li>
             <li>
                    <span class="hover:text-yellow-300">{{ t('footer.address') }}</span>
            </li>
            </ul>
           </div> 
    </div>
    <!-- COPY RIGHT -->
     <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class="text-center">{{ t('footer.copyRight') }}</p>
     </div>
    </footer>
</template>