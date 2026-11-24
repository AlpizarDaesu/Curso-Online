<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ItemTienda } from '../interfaces/itemTienda'
import { cartItems } from '../stores/cart'
import { currentUser } from '../stores/auth'

const router = useRouter()

const items = ref<ItemTienda[]>([
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
])

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(price)

const addToCart = (id: number) => {
  if (!cartItems.value.includes(id)) {
    cartItems.value.push(id)
  }
}

const addToCalendar = (item: ItemTienda) => {
  if (currentUser.value?.rol !== 'Usuario') {
    void router.push('/inscribirse')
    return
  }

  if (!item.fechaPreventa) return

  const storageKey = 'preventasUsuario'
  const stored = localStorage.getItem(storageKey)
  let preventas: Array<{ id: string; title: string; date: string; platform: string }> = []

  if (stored) {
    try {
      preventas = JSON.parse(stored)
    } catch {
      localStorage.removeItem(storageKey)
    }
  }

  if (!preventas.some((preventa) => preventa.title === item.nombre)) {
    preventas.push({
      id: `producto-${item.id}`,
      title: item.nombre,
      date: item.fechaPreventa,
      platform: 'PC'
    })
    localStorage.setItem(storageKey, JSON.stringify(preventas))
  }

  void router.push('/calendario')
}
</script>

<template>
  <main class="store">
    <section class="store-heading" aria-labelledby="store-title">
      <div>
        <p class="eyebrow">THE GAMERSHOP · JUEGA A TU MANERA</p>
        <h1 id="store-title">Explora la tienda</h1>
        <p class="intro">Tus próximas aventuras empiezan aquí.</p>
      </div>
    </section>

    <section class="catalog" aria-label="Catálogo de videojuegos">
      <article v-for="item in items" :key="item.id" class="game-card">
        <div class="game-art">
          <img :src="item.imagen" :alt="`Imagen de ${item.nombre}`" loading="lazy">
          <span v-if="item.preventa" class="badge preorder">Preventa</span>
          <span v-else-if="item.stock === 'Últimas unidades'" class="badge limited">
            {{ item.stock }}
          </span>
        </div>
        <div class="game-info">
          <p class="platform">PC <span aria-hidden="true">·</span> Global</p>
          <h2>{{ item.nombre }}</h2>
          <p class="availability" :class="{ upcoming: item.preventa }">
            <span class="status-dot" aria-hidden="true"></span>
            {{ item.stock }}
          </p>
          <div class="purchase-row">
            <p class="price">{{ formatPrice(item.precio) }}</p>
            <button
              v-if="item.preventa"
              type="button"
              class="add-button preorder-button"
              @click="addToCalendar(item)"
            >
              Agregar al calendario
            </button>
            <button
              v-else
              type="button"
              class="add-button"
              :class="{ added: cartItems.includes(item.id) }"
              :disabled="cartItems.includes(item.id)"
              @click="addToCart(item.id)"
            >
              {{ cartItems.includes(item.id) ? 'Añadido' : 'Añadir al carrito' }}
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.store {
  width: min(1200px, calc(100% - 3rem));
  margin: 0 auto;
  padding: 3.5rem 0 5rem;
}

.store-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.eyebrow {
  margin-bottom: 0.55rem;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.store-heading h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: -0.04em;
}

.intro {
  margin-top: 0.5rem;
  color: var(--muted);
}

.cart-summary {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--surface);
  color: var(--text);
  white-space: nowrap;
}

.cart-icon {
  font-size: 1.1rem;
}

.cart-count {
  display: grid;
  width: 1.4rem;
  height: 1.4rem;
  place-items: center;
  border-radius: 50%;
  background: var(--accent-strong);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 235px), 1fr));
  gap: 1.25rem;
}

.game-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background: var(--surface);
  box-shadow: 0 10px 24px var(--shadow);
  transition: transform 180ms ease, border-color 180ms ease;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-strong);
}

.game-art {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--surface-raised);
}

.game-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms ease;
}

.game-card:hover .game-art img {
  transform: scale(1.04);
}

.badge {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  padding: 0.3rem 0.55rem;
  border-radius: 0.4rem;
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
}

.preorder {
  background: var(--accent-strong);
}

.limited {
  background: #b45309;
}

.game-info {
  padding: 1rem;
}

.platform {
  margin-bottom: 0.4rem;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.game-info h2 {
  min-height: 3.2rem;
  font-size: 1.05rem;
  line-height: 1.5;
}

.availability {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.65rem;
  color: #86efac;
  font-size: 0.8rem;
}

.availability.upcoming {
  color: #c4b5fd;
}

.status-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: currentColor;
}

.purchase-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border);
}

.price {
  color: var(--text-h);
  font-size: 1.2rem;
  font-weight: 800;
  white-space: nowrap;
}

.add-button {
  padding: 0.55rem 0.7rem;
  border: 0;
  border-radius: 0.55rem;
  background: var(--accent-strong);
  color: white;
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  transition: background 160ms ease;
}

.add-button:hover:not(:disabled) {
  background: var(--accent);
}

.add-button:disabled {
  background: var(--surface-raised);
  color: var(--muted);
  cursor: default;
}

@media (max-width: 560px) {
  .store {
    width: min(100% - 2rem, 1200px);
    padding-top: 2rem;
  }

  .store-heading {
    align-items: flex-start;
  }

  .cart-summary {
    gap: 0.35rem;
    padding: 0.55rem;
    font-size: 0.85rem;
  }
}
</style>
