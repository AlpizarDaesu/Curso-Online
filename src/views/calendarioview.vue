<script setup lang="ts">
import { computed, ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3/all'
import '@fullcalendar/vue3/skeleton.css'
import type { EventInput } from '@fullcalendar/vue3'

interface Preventa {
  id: string
  title: string
  date: string
  platform: string
}

const storageKey = 'preventasUsuario'
const preventas = ref<Preventa[]>(readPreventas())

function readPreventas(): Preventa[] {
  const stored = localStorage.getItem(storageKey)
  if (!stored) return []

  try {
    return JSON.parse(stored) as Preventa[]
  } catch {
    localStorage.removeItem(storageKey)
    return []
  }
}

const calendarEvents = computed<EventInput[]>(() =>
  preventas.value.map((preventa) => ({
    id: preventa.id,
    title: `${preventa.title} - ${preventa.platform}`,
    start: preventa.date,
    allDay: true,
    backgroundColor: '#7c3aed',
    borderColor: '#a78bfa'
  }))
)

const calendarOptions = computed(() => ({
  initialView: 'dayGridMonth',
  locale: 'es',
  height: 'auto',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek'
  },
  buttonText: {
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana'
  },
  events: calendarEvents.value
}))

function removePreventa(id: string) {
  preventas.value = preventas.value.filter((preventa) => preventa.id !== id)
  localStorage.setItem(storageKey, JSON.stringify(preventas.value))
}
</script>

<template>
  <section class="calendar-page">
    <header class="calendar-header">
      <p class="calendar-eyebrow">Zona de usuario</p>
      <h1>Calendario de preventas</h1>
      <p>Consulta tus próximos lanzamientos reservados desde la tienda.</p>
    </header>

    <div class="calendar-card">
      <FullCalendar :options="calendarOptions" />
    </div>

    <section v-if="preventas.length" class="preventa-list" aria-label="Mis preventas">
      <h2>Mis preventas</h2>
      <article v-for="preventa in preventas" :key="preventa.id" class="preventa-item">
        <div>
          <strong>{{ preventa.title }}</strong>
          <span>{{ preventa.platform }} · {{ preventa.date }}</span>
        </div>
        <button type="button" aria-label="Eliminar preventa" @click="removePreventa(preventa.id)">
          ×
        </button>
      </article>
    </section>
  </section>
</template>

<style scoped>
.calendar-page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
  color: var(--text);
}

.calendar-header {
  margin-bottom: 1.5rem;
}

.calendar-header h1 {
  margin: 0.25rem 0;
  color: var(--text-h);
}

.calendar-header p {
  color: var(--muted);
}

.calendar-eyebrow {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.calendar-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  background: var(--surface);
  padding: 1.25rem;
}

.preventa-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.65rem;
  margin-top: 1.25rem;
}

.preventa-list h2 {
  grid-column: 1 / -1;
  margin: 0;
  color: var(--text-h);
}

.preventa-item {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  padding: 0.65rem;
}

.preventa-item div {
  display: grid;
  gap: 0.2rem;
}

.preventa-item span {
  color: var(--muted);
  font-size: 0.78rem;
}

.preventa-item button {
  width: 1.75rem;
  height: 1.75rem;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 1.1rem;
}

:deep(.fc) {
  color: var(--text);
}

:deep(.fc-theme-standard td),
:deep(.fc-theme-standard th),
:deep(.fc-scrollgrid) {
  border-color: var(--border);
}

:deep(.fc-button) {
  background: var(--accent-strong);
  border-color: var(--accent-strong);
}

</style>