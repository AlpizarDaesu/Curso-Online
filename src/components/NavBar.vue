<template>
  <nav class="navbar">
    <div class="logo">
      <img
        src="../assets/iconlobby.png"
        alt="Logo de UADY"
        width="135"
        height="62"
      >
      <span>The GamerShop</span>
    </div>

    <RouterLink to="/lobby">Inicio</RouterLink>

    <div
      class="dropdown"
      @mouseenter="showMenuCont = true"
      @mouseleave="showMenuCont = false"
    >
      <span class="menu-title">Juegos</span>
      <Transition name="dropdown">
        <div v-if="showMenuCont" class="dropdown-content">
          <RouterLink to="/us">Nuestra seleccion</RouterLink>
          <RouterLink to="/MiniJuego">Dragones y Mazmorras</RouterLink>
        </div>
      </Transition>
    </div>

    <div
      class="dropdown"
      @mouseenter="showMenuT = true"
      @mouseleave="showMenuT = false"
    >
      <span class="menu-title">Tienda</span>
      <Transition name="dropdown">
        <div v-if="showMenuT" class="dropdown-content">
          <RouterLink to="/Tienda">Descubre nuestros productos</RouterLink>
        </div>
      </Transition>
    </div>

    <RouterLink
      v-if="currentUser?.rol === 'Usuario'"
      to="/calendario"
      class="calendar-nav-link"
    >
      Calendario
    </RouterLink>

    <div v-if="currentUser" class="session-menu">
      <span class="role-badge">{{ currentUser.rol }}</span>
      <button type="button" class="logout-button" @click="handleLogout">
        Cerrar sesión
      </button>
    </div>

    <div class="navbar-actions">
      <RouterLink
        v-if="!currentUser"
        to="/inscribirse"
        class="register-button"
        aria-label="Iniciar sesión"
        title="Iniciar sesión"
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
        <span class="cart-count">{{ cartItems.length }}</span>
      </RouterLink>

      <RouterLink
        to="/chatview"
        class="chat-button"
        aria-label="Abrir chat de ayuda"
        title="Chat de ayuda"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          <circle cx="8.5" cy="12" r=".7" />
          <circle cx="12" cy="12" r=".7" />
          <circle cx="15.5" cy="12" r=".7" />
        </svg>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { currentUser, logout } from '../stores/auth'
import { cartItems } from '../stores/cart'

const showMenuCont = ref(false)
const showMenuT = ref(false)
const router = useRouter()

const handleLogout = () => {
  logout()
  void router.push('/inscribirse')
}
</script>

<style scoped>
/* Clases de la animación */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0d0a14;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-h);
  font-size: 1.5rem;
  font-weight: bold;
}

.logo img {
  width: 135px;
  height: auto;
  max-height: 62px;
  object-fit: contain;
}

a,
.menu-title {
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
}

.calendar-nav-link {
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.85rem;
  font-weight: 800;
}

.calendar-nav-link:hover {
  border-color: var(--accent);
  background: var(--surface-raised);
}

.dropdown {
  position: relative;
  /* Opcional: ayuda a que el mouse no pierda el hover al bajar al menú */
  padding-bottom: 0.5rem;
  margin-bottom: -0.5rem;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 150px;
  background: #191323;
  color: var(--text);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 12px 28px var(--shadow);
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  gap: 0.5rem;
  width: max-content;
}

.dropdown-content a:hover {
  background: #33234d;
}

.session-menu {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.role-badge {
  padding: 0.35rem 0.65rem;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
}

.logout-button {
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  background: var(--surface-raised);
  color: var(--text);
  cursor: pointer;
  padding: 0.45rem 0.65rem;
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
}

.logout-button:hover {
  border-color: var(--accent);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.register-button,
.chat-button,
.cart-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  text-decoration: none;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.register-button:hover,
.chat-button:hover,
.cart-button:hover {
  transform: translateY(-1px);
  border-color: var(--accent);
  background: var(--surface-raised);
}

.chat-button,
.cart-button {
  position: relative;
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
.chat-button svg,
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
  .navbar {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .navbar-actions {
    margin-left: auto;
  }

  .role-badge {
    display: none;
  }
}
</style>