<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const secondsRemaining = ref(10)
let countdownId: number | undefined
let redirectId: number | undefined

onMounted(() => {
  countdownId = window.setInterval(() => {
    secondsRemaining.value -= 1
  }, 1000)

  redirectId = window.setTimeout(() => {
    void router.push('/tienda')
  }, 10000)
})

onBeforeUnmount(() => {
  if (countdownId !== undefined) window.clearInterval(countdownId)
  if (redirectId !== undefined) window.clearTimeout(redirectId)
})
</script>

<template>
  <main class="thanks-page">
    <section class="thanks-card" aria-live="polite">
      <div class="thanks-icon" aria-hidden="true">✓</div>
      <p class="thanks-eyebrow">Compra completada</p>
      <h1>Gracias por tu compra</h1>
      <p>Serás redirigido a la tienda en {{ secondsRemaining }} segundos.</p>
    </section>
  </main>
</template>

<style scoped>
.thanks-page {
  min-height: calc(100vh - 180px);
  display: grid;
  place-items: center;
  padding: 3rem 1.5rem;
}

.thanks-card {
  width: min(100%, 520px);
  padding: 3rem 2rem;
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  text-align: center;
}

.thanks-icon {
  display: grid;
  width: 4.5rem;
  height: 4.5rem;
  margin: 0 auto 1.25rem;
  place-items: center;
  border-radius: 50%;
  background: var(--accent-strong);
  color: white;
  font-size: 2.25rem;
  font-weight: 900;
}

.thanks-eyebrow {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.thanks-card h1 {
  margin: 0.45rem 0;
  color: var(--text-h);
}

.thanks-card p:last-child {
  margin: 0.75rem 0 0;
  color: var(--muted);
}
</style>
