<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__brand">
        <span class="footer__logo">GS</span>
        <div>
          <strong>The GaymerShop</strong>
          <p>Descubre miles de juegos y guías.</p>
        </div>
      </div>

      <nav class="footer__links" aria-label="Enlaces del sitio">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="footer__link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>

    <p class="footer__copyright">© {{ currentYear }} The GamerShop. Todos los derechos reservados.</p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const links = [
  { label: 'Tienda', path: '/ofertaBeca' },
  { label: 'Recomendaciones', path: '/us' },
  { label: 'Como registrarse', path: '/inscribirse' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped> 
.footer {
  margin-top: auto;
  padding: 2rem 1.5rem 1.5rem;
  background: #0d0a14;
  color: #ffffff;
  border-top: 1px solid var(--border);
}

.footer__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer__logo {
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border-radius: 50%;
  background: var(--accent-strong);
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
}

.footer__brand strong {
  font-size: 1.1rem;
}

.footer__brand p {
  margin-top: 0.25rem;
  color: #cbd5e1;
  font-size: 0.9rem;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
}

.footer__link {
  color: #ffffff;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__link:hover,
.footer__link:focus-visible {
  color: var(--accent);
}

.footer__copyright {
  max-width: 1100px;
  margin: 1.5rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
  font-size: 0.85rem;
  text-align: center;
}

@media (max-width: 700px) {
  .footer__content {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer__links {
    justify-content: flex-start;
  }
}
</style>