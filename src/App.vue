<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/footer.vue'
import { cartItems } from './stores/cart'

</script>

<template>
  <NavBar />
  <main class="quick-actions" aria-label="Accesos rápidos">
    <RouterLink
      to="/inscribirse"
      class="register-button"
      aria-label="Registrarse"
      title="Registrarse"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.5 20.5v-1.8a4.2 4.2 0 0 0-4.2-4.2H7.7a4.2 4.2 0 0 0-4.2 4.2v1.8" />
        <circle cx="9.5" cy="7.5" r="3.5" />
        <path d="M19 8v6m-3-3h6" />
      </svg>
    </RouterLink>
    <RouterLink
      to="/carrito"
      class="cart-button"
      :aria-label="`Ir al carrito, ${cartItems.length} artículos`"
      aria-live="polite"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3h2l2.2 11.1a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" />
        <circle cx="10" cy="20" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
      </svg>
      <span class="cart-label">Carrito</span>
      <span class="cart-count">{{ cartItems.length }}</span>
    </RouterLink>
  </main>
  <RouterView />
  <Footer />
</template>

<style scoped>
.quick-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  width: calc(100% - 1.5rem);
  margin: 0 auto;
  padding: 1rem 0 0;
}

.register-button,
.cart-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  text-decoration: none;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.register-button:hover,
.cart-button:hover {
  transform: translateY(-1px);
  border-color: var(--accent);
  background: var(--surface-raised);
}

.register-button {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
}

.cart-button {
  position: relative;
  gap: 0.55rem;
  min-height: 2.75rem;
  padding: 0.55rem 0.85rem;
  border-radius: 0.75rem;
  font-weight: 700;
}

.cart-count {
  position: absolute;
  top: -0.45rem;
  right: -0.45rem;
  display: grid;
  min-width: 1.25rem;
  height: 1.25rem;
  place-items: center;
  padding: 0 0.2rem;
  border: 2px solid var(--bg);
  border-radius: 999px;
  background: var(--accent-strong);
  color: white;
  font-size: 0.7rem;
  line-height: 1;
}

.register-button svg,
.cart-button svg {
  width: 1.35rem;
  height: 1.35rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

@media (max-width: 560px) {
  .quick-actions {
    width: calc(100% - 1rem);
  }

  .cart-button {
    width: 2.75rem;
    padding: 0;
  }

  .cart-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
</style>
