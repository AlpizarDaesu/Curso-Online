<script setup lang="ts">
import { ref } from 'vue'
import cursospng from '../assets/cursospng.png'

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

interface CursoIdioma {
  id: number
  tituloDestacado: string
  subtitulo: string
  proveedor: string
  universidad: string
  imagenUrl: string
  categoria: string
}

const cursosIdiomas = ref<CursoIdioma[]>([
  {
    id: 1,
    tituloDestacado: 'Inglés para Entrevistas y Networking',
    subtitulo: 'Aprende a comunicarte con seguridad en entrevistas y networking.',
    proveedor: 'Inglés para entrevistas',
    universidad: 'University of Pennsylvania',
    imagenUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    categoria: 'Idiomas'
  },
  {
    id: 2,
    tituloDestacado: 'Fundamentos del inglés para optimizar tu CV y búsqueda de empleo',
    subtitulo: 'Refuerza tus habilidades para destacar en tu búsqueda laboral.',
    proveedor: 'Inglés para búsqueda de empleo',
    universidad: 'University of Pennsylvania',
    imagenUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    categoria: 'Idiomas'
  },
  {
    id: 3,
    tituloDestacado: 'English Fundamentals: Collaborating for Team Success',
    subtitulo: 'Desarrolla inglés profesional y trabajo en equipo internacional.',
    proveedor: 'English Fundamentals',
    universidad: 'University of Pennsylvania',
    imagenUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    categoria: 'Idiomas'
  },
  {
    id: 4,
    tituloDestacado: 'Desarrolla tu liderazgo en inglés y comunica con confianza, claridad e impacto en entornos internacionales.',
    subtitulo: 'Comunicación de liderazgo en inglés',
    proveedor: 'Curso Santander',
    universidad: 'University of Pennsylvania',
    imagenUrl:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80',
    categoria: 'Idiomas'
  },
  {
    id: 5,
    tituloDestacado: 'Descubre cómo comunicarte con fuerza, vencer sesgos y liderar con palabras. ¡Totalmente gratis!',
    subtitulo: 'Comunica sin miedo, influye con impacto – LSE',
    proveedor: 'Curso Santander',
    universidad: 'London School of Economics and Political Sc...',
    imagenUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    categoria: 'Habilidades'
  }
])

const cursosTecnologia = ref<Curso[]>([
  {
    id: 1,
    tituloDestacado: 'Aprende a usar la IA de Google para mejorar tu vida diaria. Gratis y online.',
    subtitulo: 'Explora Gemini, La IA de Google que lo cambia todo',
    proveedor: 'Curso Santander',
    institucion: 'Google',
    tituloPrincipal: 'Domina la IA con Gemini',
    imagenUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  },
  {
    id: 2,
    tituloDestacado: 'Aprende a programar desde cero con Python',
    subtitulo: 'Domina los fundamentos de Python con lecciones interactivas y ejercicios prácticos. ¡Escribe código eficiente!',
    proveedor: 'Curso Santander',
    institucion: 'Santander Open Academy',
    tituloPrincipal: 'Introducción a la programación con Python',
    imagenUrl:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  },
  {
    id: 3,
    tituloDestacado: 'Domina la IA con prompting responsable',
    subtitulo: 'Descubre cómo transformar tu forma de trabajar utilizando la inteligencia artificial de manera eficaz. Este curso te ofrece una guía práctica y completa...',
    proveedor: 'Curso Santander',
    institucion: 'Microsoft & Founderz',
    tituloPrincipal: 'Domina la IA con prompting responsable',
    imagenUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  },
  {
    id: 4,
    tituloDestacado: 'Capacitación Profesional Santander - Programa Delfín',
    subtitulo: 'Fortalece tu futuro profesional con cursos en inglés, inteligencia artificial y habilidades clave para estudiantes, investigadores y profesionistas.',
    proveedor: 'Curso',
    institucion: 'Santander Universidades México',
    tituloPrincipal: 'Capacitación Profesional Santander - Programa Delfín',
    imagenUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    categoria: 'Habilidades'
  },
  {
    id: 5,
    tituloDestacado: 'Inicia tu camino en ciencia de datos hoy',
    subtitulo: 'Aprende a usar datos para decisiones empresariales inteligentes y explora el fascinante mundo del Big Data.',
    proveedor: 'Curso Santander',
    institucion: 'IE University',
    tituloPrincipal: 'Introducción a Ciencia de Datos',
    imagenUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    categoria: 'Tecnología'
  }
])
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Aprende gratis. Mejora tu perfil. Consigue oportunidades.</h1>
      <p>
        Formación online gratuita con certificado. Tú eliges cuándo empezar y hasta dónde llegar.
      </p>
    </div>
    <img :src="cursospng" alt="Imagen de cursos" class="hero-image" />
  </section>

  <section class="intro">
    <h2>¡A tu ritmo y sin prisa!</h2>
    <p>Explora y aprende en diferentes áreas</p>
  </section>

  <section class="categories">
    <a href="#idiomas" class="category-card">
      <h3>Idiomas</h3>
      <p>Hablar idiomas es abrir más puertas.</p>
    </a>

    <a href="#tecnologia" class="category-card">
      <h3>Tecnología</h3>
      <p>Aprende a programar y crea tus propias aplicaciones.</p>
    </a>
  </section>

  <section id="idiomas" class="detail-section">
    <div class="section-header">
      <h2>Idiomas</h2>
      <p>
        Domina inglés, francés o español para comunicarte mejor, acceder a nuevas oportunidades
        laborales y conectar con más personas en el mundo.
      </p>
    </div>

    <div class="course-grid">
      <article v-for="curso in cursosIdiomas" :key="curso.id" class="course-card">
        <div class="course-header">
          <h3>{{ curso.tituloDestacado }}</h3>
          <p>{{ curso.subtitulo }}</p>
        </div>

        <div class="course-image-wrap">
          <img :src="curso.imagenUrl" :alt="curso.tituloDestacado" />
        </div>

        <div class="course-body">
          <span class="course-meta">{{ curso.proveedor }} / {{ curso.universidad }}</span>
          <h4>{{ curso.tituloDestacado }}</h4>
          <span class="course-pill">{{ curso.categoria }}</span>
        </div>
      </article>
    </div>
  </section>

  <section id="tecnologia" class="detail-section alt">
    <div class="section-header">
      <h2>Tecnología</h2>
      <p>
        Aprende las herramientas y lenguajes más demandados del sector tecnológico para impulsar tu
        carrera profesional.
      </p>
    </div>

    <div class="course-grid">
      <article v-for="curso in cursosTecnologia" :key="curso.id" class="course-card">
        <div class="course-header">
          <h3>{{ curso.tituloDestacado }}</h3>
          <p>{{ curso.subtitulo }}</p>
        </div>

        <div class="course-image-wrap">
          <img :src="curso.imagenUrl" :alt="curso.tituloPrincipal" />
        </div>

        <div class="course-body">
          <span class="course-meta">{{ curso.proveedor }} / {{ curso.institucion }}</span>
          <h4>{{ curso.tituloPrincipal }}</h4>
          <span class="course-pill">{{ curso.categoria }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 1.5rem;
    background: linear-gradient(135deg, #1d1729, #120f19);
    border: 1px solid var(--border);
    border-radius: 18px;
    margin-bottom: 2rem;
  }

  .hero-text {
    flex: 1;
  }

  .hero-text h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: var(--text-h);
  }

  .hero-text p,
  .intro p,
  .section-header p,
  .detail-section p {
    font-size: 1rem;
    color: var(--muted);
    line-height: 1.6;
  }

  .hero-image {
    max-width: 320px;
    width: 100%;
    border-radius: 16px;
  }

  .intro {
    text-align: center;
    margin-bottom: 2rem;
  }

  .intro h2 {
    color: var(--text-h);
    margin-bottom: 0.5rem;
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .category-card {
    display: block;
    text-decoration: none;
    background: var(--surface);
    border: 2px solid var(--border);
    border-radius: 18px;
    padding: 2rem 1.5rem;
    color: var(--text);
    box-shadow: 0 10px 24px var(--shadow);
    transition: all 0.25s ease;
    min-height: 180px;
  }

  .category-card:hover {
    transform: translateY(-4px);
    background: #251b35;
    border-color: var(--accent);
  }

  .category-card h3 {
    font-size: 1.8rem;
    margin: 0 0 0.8rem;
  }

  .category-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }

  .detail-section {
    background: #15111f;
    border-radius: 18px;
    padding: 2rem 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 6px solid var(--accent-strong);
  }

  .detail-section.alt {
    border-left-color: #8b5cf6;
    background: #1d1529;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2,
  .detail-section h2 {
    margin-top: 0;
    color: var(--text-h);
  }

  .course-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .course-card {
    background: var(--surface);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .course-header {
    background: linear-gradient(180deg, #2b2040, #1b1528);
    padding: 1.2rem 1.1rem 1rem;
    border-bottom: 1px solid var(--border);
  }

  .course-header h3 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.4;
    color: var(--text-h);
    font-weight: 800;
  }

  .course-header p {
    margin: 0.5rem 0 0;
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .course-image-wrap {
    padding: 1rem 1rem 0;
  }

  .course-image-wrap img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }

  .course-body {
    background: var(--surface);
    padding: 1rem 1rem 1.2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .course-meta {
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  .course-body h4 {
    margin: 0;
    color: var(--text-h);
    font-size: 1.05rem;
    line-height: 1.45;
    font-weight: 800;
    margin-bottom: auto;
  }

  .course-pill {
    align-self: flex-start;
    margin-top: 1rem;
    background: rgba(167, 139, 250, 0.12);
    border: 1px solid rgba(167, 139, 250, 0.4);
    color: #c4b5fd;
    border-radius: 999px;
    padding: 0.45rem 0.8rem;
    font-size: 0.75rem;
    font-weight: 700;
  }

  @media (max-width: 980px) {
    .course-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .hero {
      flex-direction: column;
      text-align: center;
    }

    .course-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
