<template>
  <nav class="navbar">
    <div class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_UADY.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
        alt="Logo de UADY"
        width="135"
        height="62"
      >
      <span>Cursos Online UADY</span>
    </div>

    <RouterLink to="/lobby">Inicio</RouterLink>

    <div
      class="dropdown"
      @mouseenter="showMenuCont = true"
      @mouseleave="showMenuCont = false"
    >
      <span class="menu-title">¿Quienes somos?</span>
      <div v-if="showMenuCont" class="dropdown-content">
        <RouterLink to="/us">Sobre nosotros</RouterLink>
      </div>
    </div>

    <div
      class="dropdown"
      @mouseenter="showMenu = true"
      @mouseleave="showMenu = false"
    >
      <span class="menu-title">Cursos</span>
      <div v-if="showMenu" class="dropdown-content">
        <RouterLink to="/inscribirse">¿Como inscribirse?</RouterLink>
        <RouterLink to="/cursos">Cursos</RouterLink>
        <RouterLink to="/topcursos">Los Cursos mas top</RouterLink>
      </div>
    </div>

    <div
      class="dropdown"
      @mouseenter="showMenuC = true"
      @mouseleave="showMenuC = false"
    >
      <span class="menu-title">Becas</span>
      <div v-if="showMenuC" class="dropdown-content">
        <RouterLink to="/ofertaBeca">Ofertas de becas</RouterLink>
      </div>
    </div>

    <div
      class="dropdown"
      @mouseenter="showMenuR = true"
      @mouseleave="showMenuR = false"
    >
      <span class="menu-title">Cursos Gratuitos</span>
      <div v-if="showMenuR" class="dropdown-content">
        <RouterLink to="/cursGrat">Cursos disponibles</RouterLink>
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
    background-color: #2c3e50;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: white;
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
    color: white;
    text-decoration: none;
  }

  a,
  .menu-title {
    color: white;
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
    background: rgb(102, 102, 102);
    color: black;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
  }

  .dropdown-content a:hover {
    background: #8a8989;
  }
</style>
