<script setup lang="ts">
import { ref } from 'vue'

interface Curso {
  id: number
  tituloDestacado: string
  subtitulo: string
  proveedor: string
  institucion: string
  tituloPrincipal: string
  imagenUrl: string
  categoria: string
}

const cursos: Curso[] = [
  {
    id: 1,
    tituloDestacado: 'Aprende a usar la IA de Google para mejorar tu vida diaria. Gratis y online.',
    subtitulo: 'Explora Gemini, La IA de Google que lo cambia todo',
    proveedor: 'Curso Santander',
    institucion: 'Google',
    tituloPrincipal: 'Domina la IA con Gemini',
    imagenUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  },
  {
    id: 2,
    tituloDestacado: 'Aprende a programar desde cero con Python',
    subtitulo: 'Domina los fundamentos de Python con lecciones interactivas y ejercicios prácticos. ¡Escribe código eficiente!',
    proveedor: 'Curso Santander',
    institucion: 'Santander Open Academy',
    tituloPrincipal: 'Introducción a la programación con Python',
    imagenUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  },
  {
    id: 3,
    tituloDestacado: 'Domina la IA con prompting responsable',
    subtitulo: 'Descubre cómo transformar tu forma de trabajar utilizando la inteligencia artificial de manera eficaz. Este curso te ofrece una guía práctica y completa...',
    proveedor: 'Curso Santander',
    institucion: 'Microsoft & Founderz',
    tituloPrincipal: 'Domina la IA con prompting responsable',
    imagenUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  },
  {
    id: 4,
    tituloDestacado: 'Capacitación Profesional Santander - Programa Delfín',
    subtitulo: 'Fortalece tu futuro profesional con cursos en inglés, inteligencia artificial y habilidades clave para estudiantes, investigadores y profesionistas.',
    proveedor: 'Curso',
    institucion: 'Santander Universidades México',
    tituloPrincipal: 'Capacitación Profesional Santander - Programa Delfín',
    imagenUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    categoria: 'Habilidades'
  },
  {
    id: 5,
    tituloDestacado: 'Inicia tu camino en ciencia de datos hoy',
    subtitulo: 'Aprende a usar datos para decisiones empresariales inteligentes y explora el fascinante mundo del Big Data.',
    proveedor: 'Curso Santander',
    institucion: 'IE University',
    tituloPrincipal: 'Introducción a Ciencia de Datos',
    imagenUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  }
]

const topTresCursos = ref<Curso[]>([])

const mezclarCursos = (lista: Curso[]) => {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

topTresCursos.value = mezclarCursos(cursos).slice(0, 3)
</script>

<template>
  <section class="top-cursos">
    <h2>Top 3 Cursos más solicitados</h2>
    <p>Listado de cursos destacados</p>

    <ol class="lista-top">
      <li v-for="(curso, index) in topTresCursos" :key="curso.id" class="curso-item">
        <div class="numero">{{ index + 1 }}</div>
        <div class="contenido">
          <h3>{{ curso.tituloPrincipal }}</h3>
          <p>{{ curso.subtitulo }}</p>
          <span>{{ curso.proveedor }} · {{ curso.institucion }}</span>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
  .top-cursos {
    max-width: 900px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: #15111f;
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
  }

  h2 {
    margin: 0 0 0.5rem;
    color: var(--text-h);
  }

  p {
    margin: 0 0 1.5rem;
    color: var(--muted);
  }

  .lista-top {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1rem;
  }

  .curso-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #1e182b;
    border-radius: 16px;
    padding: 1rem;
    border: 1px solid var(--border);
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.05);
  }

  .numero {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, #7c3aed, #a78bfa);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    flex-shrink: 0;
  }

  .contenido {
    flex: 1;
  }

  .contenido h3 {
    margin: 0 0 0.4rem;
    color: var(--text-h);
    font-size: 1.05rem;
  }

  .contenido p {
    margin: 0 0 0.4rem;
    color: var(--muted);
    line-height: 1.5;
  }

  .contenido span {
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 600;
  }
</style>
