<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <NavBar />
  <main>Bienvenido a los cursos de la UADY online</main>

  <RouterView />
  <Footer />
</template>
