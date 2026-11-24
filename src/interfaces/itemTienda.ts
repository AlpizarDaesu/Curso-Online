export interface ItemTienda {
  id: number
  nombre: string 
  precio: number
  imagen: string
  preventa?: boolean
  fechaPreventa?: string
  stock?: string
}