import { ref, computed } from 'vue'
import { user, isAuthenticated } from './auth.js'

const BOOKINGS_KEY = 'tempera_bookings'

const packages = [
  { id: 1, name: 'Kigali City Tour', description: 'Explore Kigali’s museums, markets, and vibrant neighborhoods.', price: 80, image: '/kigali.png', duration: '4 hours' },
  { id: 2, name: 'Lake Kivu Retreat', description: 'Luxury lakeside escape with sunset cruises and water activities.', price: 200, image: '/kivu.png', duration: '2 days' },
  { id: 3, name: 'Volcanoes Gorilla Trek', description: 'Trek through Volcanoes National Park to see mountain gorillas.', price: 1500, image: '/Rwanda.png', duration: '1 day' },
  { id: 4, name: 'Nyungwe Forest Canopy', description: 'Walk the canopy bridge and spot chimpanzees in Nyungwe.', price: 120, image: '/Rwanda 🇷🇼.png', duration: '1 day' },
  { id: 5, name: 'Akagera Safari Drive', description: 'Guided safari through Akagera National Park with game viewing.', price: 250, image: '/rwanda2.png', duration: '1 day' },
  { id: 6, name: 'Heritage Trail Experience', description: 'Visit cultural villages, traditional ceremonies, and historical sites.', price: 150, image: '/Living in Rwanda.png', duration: '1 day' },
]

const bookings = ref(JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]'))

function save() {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings.value))
}

export const tourPackages = packages

export const userBookings = computed(() =>
  bookings.value.filter(b => b.userId === user.value?.id)
)

export function createBooking(packageId, date, guests) {
  if (!isAuthenticated.value) return { ok: false, message: 'You must be logged in to book' }
  const pkg = packages.find(p => p.id === packageId)
  if (!pkg) return { ok: false, message: 'Package not found' }
  const booking = {
    id: Date.now(),
    userId: user.value.id,
    packageId,
    packageName: pkg.name,
    price: pkg.price,
    date,
    guests,
    total: pkg.price * guests,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }
  bookings.value.push(booking)
  save()
  return { ok: true, booking }
}

export function cancelBooking(id) {
  const idx = bookings.value.findIndex(b => b.id === id && b.userId === user.value?.id)
  if (idx === -1) return { ok: false }
  bookings.value.splice(idx, 1)
  save()
  return { ok: true }
}
