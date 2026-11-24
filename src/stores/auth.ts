import { ref } from 'vue'
import type { User } from '../interfaces/userInterface'

export const users: User[] = [
  {
    id: 1,
    nickName: 'Administrador',
    correo: 'admin@uady.mx',
    contraseña: 'admin123',
    rol: 'Administrador'
  },
  {
    id: 2,
    nickName: 'Usuario',
    correo: 'usuario@uady.mx',
    contraseña: 'usuario123',
    rol: 'Usuario'
  }
]

function readStoredUser(): User | null {
  const storedUser = localStorage.getItem('usuarioActivo')
  if (!storedUser) return null

  try {
    return JSON.parse(storedUser) as User
  } catch {
    localStorage.removeItem('usuarioActivo')
    return null
  }
}

export const currentUser = ref<User | null>(readStoredUser())

export function login(correo: string, contraseña: string): User | null {
  const normalizedEmail = correo.trim().toLowerCase()
  const user = users.find(
    (candidate) =>
      candidate.correo.toLowerCase() === normalizedEmail &&
      candidate.contraseña === contraseña
  )

  if (!user) return null

  currentUser.value = user
  localStorage.setItem('usuarioActivo', JSON.stringify(user))
  return user
}

export function logout(): void {
  currentUser.value = null
  localStorage.removeItem('usuarioActivo')
}
