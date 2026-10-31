
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
      <span class="menu-title">¡Nuestros favoritos!</span>
      <div v-if="showMenuCont" class="dropdown-content">
        <RouterLink to="/us">Nuestra seleccion</RouterLink>
      </div>
    </div>

    

  

    <div
      class="dropdown"
      @mouseenter="showMenuC = true"
      @mouseleave="showMenuC = false"
    >
      <span class="menu-title">Juego en Navegador</span>
      <div v-if="showMenuC" class="dropdown-content">
        <RouterLink to="/MiniJuego"> Tragones y Mazmorras</RouterLink>
      </div>
    </div>

    <div
      class="dropdown"
      @mouseenter="showMenuT = true"
      @mouseleave="showMenuT = false"
    >
      <span class="menu-title">Tienda</span>
      <div v-if="showMenuT" class="dropdown-content">
        <RouterLink to="/Tienda">Descubre nuestros productos</RouterLink>
      </div>
    </div>

    <div
      class="dropdown"
      @mouseenter="showMenuR = true"
      @mouseleave="showMenuR = false"
    >
      <span class="menu-title">Chat de ayuda</span>
      <div v-if="showMenuR" class="dropdown-content">
        <RouterLink to="/chatview">Chat</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenuCont = ref(false)
const showMenu = ref(false)
const showMenuR = ref(false)
const showMenuC = ref(false)
const showMenuT = ref(false)
</script>

<style scoped>
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

  .nav-links {
    display: flex;
    gap: 1rem;
    list-style: none;
  }

  .nav-links a {
    color: var(--text);
    text-decoration: none;
  }

  a,
  .menu-title {
    color: var(--text);
    text-decoration: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
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
  }

  .dropdown-content a:hover {
    background: #33234d;
  }
</style>
