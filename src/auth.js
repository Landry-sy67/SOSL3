import { ref, computed } from 'vue'

const STORAGE_KEY = 'tempera_user'
const USERS_KEY = 'tempera_users'

const currentUser = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'))

export const isAuthenticated = computed(() => !!currentUser.value)
export const user = computed(() => currentUser.value)

export function register(name, email, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  if (users.find(u => u.email === email)) {
    return { ok: false, message: 'Email already registered' }
  }
  const newUser = { id: Date.now(), name, email, password }
  users.push(newUser)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  currentUser.value = { id: newUser.id, name: newUser.name, email: newUser.email }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser.value))
  return { ok: true }
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  const found = users.find(u => u.email === email && u.password === password)
  if (!found) {
    return { ok: false, message: 'Invalid email or password' }
  }
  currentUser.value = { id: found.id, name: found.name, email: found.email }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser.value))
  return { ok: true }
}

export function logout() {
  currentUser.value = null
  localStorage.removeItem(STORAGE_KEY)
}
