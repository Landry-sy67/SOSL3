<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
            <p class="text-5m text-green-200">Discover the beauty of the land of a thousand hills</p>
        </div>
    
    <!-- quick link -->
     <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">quick links</h3>
        <ul class="space  y-2 text-sm">
            <li>
                <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
            </li>
            <li>
               <RouterLink to="/contact" class="hover:text-yellow-300">Contacts</RouterLink>  
            </li>
            <li>
                <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink> 
            </li>
            <li>
                <RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink> 
            </li>
    
        </ul>
    </div>
    <!-- destinations -->
     <div>
      <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
        <ul class="space  y-2 text-sm">
            <li>
                <RouterLink to="/north" class="hover:text-yellow-300">Northern province</RouterLink>
            </li>
            <li>
                 <RouterLink to="/south" class="hover:text-yellow-300">Southern province</RouterLink>
            </li>
            <li>
                 <RouterLink to="/west" class="hover:text-yellow-300">Western province</RouterLink>
            </li>
            <li>
                 <RouterLink to="/east" class="hover:text-yellow-300">Eastern province</RouterLink>
            </li>
            <li>
                 <RouterLink to="/kigali" class="hover:text-yellow-300">Kigali city</RouterLink>
            </li>
        </ul>
     </div>
     <!-- contact info -->
           <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">contact</h3>
            <ul class="space  y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">AHANTUNYABURANGA@gmail.com</RouterLink> 
                </li>
                 <li>
                 <RouterLink to="/" class="hover:text-yellow-300">0798945673</RouterLink>
            </li>
             <li>
                 <RouterLink to="/" class="hover:text-yellow-300">KAGUGU RWANDA</RouterLink>
            </li>
                
            </ul>
            
           </div> 
    </div>
    <!-- COPY RIGHT -->
     <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class="text-center">©2025 TEMBERA U RWANDA.ALL RIGHTS RESERVED</p>
     </div>
     
    </footer>
</template>