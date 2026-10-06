<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__brand">
        <span class="footer__logo">CU</span>
        <div>
          <strong>Cursos Online UADY</strong>
          <p>Aprende y desarrolle con nuestros cursos.</p>
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

    <p class="footer__copyright">© {{ currentYear }} Cursos Online UADY</p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const links = [
  { label: 'Ofertas de becas', path: '/ofertaBeca' },
  { label: 'Sobre nosotros', path: '/us' },
  { label: 'Cómo inscribirse', path: '/inscribirse' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 2rem 1.5rem 1.5rem;
  background: #2c3e50;
  color: #ffffff;
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
  background: #f4a261;
  color: #2c3e50;
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
  color: #f4a261;
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