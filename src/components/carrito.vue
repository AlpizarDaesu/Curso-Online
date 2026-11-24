<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { ItemTienda } from '../interfaces/itemTienda'
import { cartItems as cartIds } from '../stores/cart'

interface CartItem {
  producto: ItemTienda
  cantidad: number
}

const catalogo: ItemTienda[] = [
  {
    id: 1,
    nombre: 'Cyberpunk 2077',
    precio: 899,
    imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png?w=780&thumb=false',
    stock: 'Disponible'
  },
  {
    id: 2,
    nombre: 'The Witcher 3: Wild Hunt',
    precio: 649,
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/97cca1147b256f450331044255b1dbd2d57d609e/header_alt_assets_4.jpg?t=1788333513',
    stock: 'Disponible'
  },
  {
    id: 3,
    nombre: 'Elden Ring: Nightreign',
    precio: 1199,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUwvT8nZPLwHi7ltLTeJJYJ1NQLYfqNSjn7DmYHDW3ZLNQw6DriFkQbw&s=10',
    preventa: true,
    fechaPreventa: '2026-12-10',
    stock: 'Próximamente'
  },
  {
    id: 4,
    nombre: 'Hollow Knight: Silksong',
    precio: 499,
    imagen: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch2/70010000105851/8787627be7f26ae7984456ffd9af17bea845032cebbf59fe6eeb596dea6bb20e',
    preventa: true,
    fechaPreventa: '2026-12-18',
    stock: 'Próximamente'
  },
  {
    id: 5,
    nombre: 'Forza Horizon 5',
    precio: 1099,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrngYM3YPrnmq9HdVbXxJIQVxqZb7EG-cKbFG15oYV8ap4q0dGI-q4QQj&s=10',
    stock: 'Últimas unidades'
  },
  {
    id: 6,
    nombre: 'Baldur’s Gate 3',
    precio: 1299,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1Rbs5NX2Xy3iLxkCepE_7VT3XCaKbvmJXsyhuZEy7NBMaUHISzlhaHnW&s=10',
    stock: 'Disponible'
  }
]

const cartItems = ref<CartItem[]>([])
const router = useRouter()
const subtotal = computed(() =>
  cartItems.value.reduce(
    (total, item) => total + item.producto.precio * item.cantidad,
    0
  )
)

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)

const syncCart = (ids: number[]) => {
  cartItems.value = ids.flatMap((id) => {
    const producto = catalogo.find((item) => item.id === id)
    if (!producto) return []

    const existingItem = cartItems.value.find((item) => item.producto.id === id)
    return [{
      producto,
      cantidad: existingItem?.cantidad ?? 1
    }]
  })
}

watch(cartIds, syncCart, { immediate: true, deep: true })

const increaseQuantity = (id: number) => {
  const item = cartItems.value.find((cartItem) => cartItem.producto.id === id)
  if (item) item.cantidad += 1
}

const decreaseQuantity = (id: number) => {
  const item = cartItems.value.find((cartItem) => cartItem.producto.id === id)
  if (item && item.cantidad > 1) item.cantidad -= 1
}

const removeItem = (id: number) => {
  const index = cartIds.value.indexOf(id)
  if (index !== -1) cartIds.value.splice(index, 1)
  cartItems.value = cartItems.value.filter((item) => item.producto.id !== id)
}

const completePurchase = () => {
  cartIds.value = []
  cartItems.value = []
  void router.push('/gracias')
}
</script>

<template>
  <main class="cart-page">
    <header class="cart-header">
      <h1>MI CARRITO</h1>
      <RouterLink to="/tienda" class="continue-link">CONTINUAR COMPRANDO</RouterLink>
    </header>

    <div class="cart-layout">
      <section class="items-panel" aria-label="Artículos en el carrito">
        <article v-for="item in cartItems" :key="item.producto.id" class="cart-item">
          <img
            class="product-image"
            :src="item.producto.imagen"
            :alt="`Imagen de ${item.producto.nombre}`"
          >
          <div class="product-details">
            <h2>{{ item.producto.nombre }}</h2>
            <p class="unit-price">{{ formatPrice(item.producto.precio) }} <span>MXN / unidad</span></p>
            <div class="item-actions">
              <div class="quantity-control" :aria-label="`Cantidad de ${item.producto.nombre}`">
                <button
                  type="button"
                  :aria-label="`Disminuir cantidad de ${item.producto.nombre}`"
                  :disabled="item.cantidad <= 1"
                  @click="decreaseQuantity(item.producto.id)"
                >
                  −
                </button>
                <span aria-live="polite">{{ item.cantidad }}</span>
                <button
                  type="button"
                  :aria-label="`Aumentar cantidad de ${item.producto.nombre}`"
                  @click="increaseQuantity(item.producto.id)"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                class="remove-button"
                @click="removeItem(item.producto.id)"
              >
                Eliminar
              </button>
            </div>
          </div>
          <p class="line-total">{{ formatPrice(item.producto.precio * item.cantidad) }}</p>
        </article>

        <p v-if="cartItems.length === 0" class="empty-cart">
          Tu carrito está vacío. Explora la tienda para encontrar tu próximo juego.
        </p>
      </section>

      <aside class="summary-panel" aria-labelledby="summary-title">
        <h2 id="summary-title">Resumen de compra</h2>
        <div class="subtotal-row">
          <span>Subtotal</span>
          <strong>{{ formatPrice(subtotal) }}</strong>
        </div>
        <p class="tax-note">Impuestos incluidos. Los productos digitales no tienen costo de envío.</p>
        <button type="button" class="checkout-button" @click="completePurchase">
          CONTINUAR
        </button>
        <section class="billing-details">
          <h3>Facturación y desglose</h3>
          <p>El subtotal incluye el precio de los artículos seleccionados.</p>
          <p>El total final se confirma antes de completar la compra.</p>
        </section>
      </aside>
    </div>
  </main>
</template>

<style scoped>
.cart-page {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
  padding: 3rem 0 5rem;
}

.cart-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.cart-header h1 {
  color: var(--text-h);
  font-size: clamp(2rem, 5vw, 2.7rem);
  letter-spacing: 0.08em;
}

.continue-link {
  display: inline-block;
  margin-top: 0.65rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(260px, 0.8fr);
  align-items: start;
  gap: 2rem;
}

.items-panel,
.summary-panel {
  border: 1px solid var(--border);
  border-radius: 1rem;
  background: var(--surface);
}

.items-panel {
  padding: 0 1.25rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr) auto;
  align-items: center;
  gap: 1.1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
}

.cart-item:last-child {
  border-bottom: 0;
}

.product-image {
  width: 132px;
  height: 96px;
  border-radius: 0.65rem;
  background: var(--surface-raised);
  object-fit: cover;
}

.product-details h2 {
  color: var(--text-h);
  font-size: 1.05rem;
}

.unit-price {
  margin-top: 0.35rem;
  color: var(--accent);
  font-weight: 700;
}

.unit-price span {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 400;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.8rem;
}

.quantity-control {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  min-height: 2.25rem;
  padding: 0.15rem 0.4rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg);
}

.quantity-control button,
.remove-button {
  border: 0;
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  font: inherit;
}

.quantity-control button {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  font-size: 1.15rem;
  line-height: 1;
}

.quantity-control button:hover:not(:disabled) {
  background: var(--surface-raised);
}

.quantity-control button:disabled {
  color: var(--muted);
  cursor: default;
}

.quantity-control span {
  min-width: 1ch;
  color: var(--text-h);
  text-align: center;
}

.remove-button {
  font-size: 0.82rem;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.line-total {
  color: var(--text-h);
  font-weight: 800;
  white-space: nowrap;
}

.empty-cart {
  padding: 2rem 0;
  color: var(--muted);
  text-align: center;
}

.summary-panel {
  padding: 1.4rem;
}

.summary-panel h2 {
  margin-bottom: 1.3rem;
  color: var(--accent);
  font-size: 1.2rem;
}

.subtotal-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-h);
}

.subtotal-row strong {
  color: var(--accent);
  white-space: nowrap;
}

.tax-note {
  margin-top: 0.85rem;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.6;
}

.checkout-button {
  display: block;
  width: 100%;
  margin-top: 1.25rem;
  padding: 0.85rem 1rem;
  border-radius: 0.65rem;
  background: var(--accent-strong);
  color: white;
  font-size: 0.85rem;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  transition: background 160ms ease;
}

.checkout-button:hover {
  background: var(--accent);
}

.billing-details {
  margin-top: 1.5rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--border);
}

.billing-details h3 {
  margin-bottom: 0.55rem;
  color: var(--accent);
  font-size: 0.95rem;
}

.billing-details p {
  margin-top: 0.4rem;
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.55;
}

@media (max-width: 760px) {
  .cart-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 520px) {
  .cart-page {
    width: calc(100% - 2rem);
    padding-top: 2rem;
  }

  .items-panel {
    padding: 0 0.85rem;
  }

  .cart-item {
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 0.8rem;
  }

  .product-image {
    width: 82px;
    height: 82px;
  }

  .product-details h2 {
    font-size: 0.95rem;
  }

  .line-total {
    grid-column: 2;
    margin-top: -0.5rem;
  }

  .item-actions {
    flex-wrap: wrap;
    gap: 0.6rem;
  }
}
</style>
