export interface User {
  id: number
  nickName: string
  correo: string
  contraseña: string
  rol: 'Administrador' | 'Usuario'
}