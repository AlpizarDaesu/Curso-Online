<template>
  <section class="scholarships-page">
    <header class="hero">
      <div class="hero__content">
        <span class="hero__eyebrow">Oportunidades para tu futuro</span>
        <h1>Encuentra la beca que te ayude a formarte y crecer</h1>
        <p class="hero__description">
          Con el apoyo de Universidades, instituciones y organizaciones líderes.
        </p>

        <div class="hero__banners">
          <div class="hero-banner hero-banner--mint">
            <span class="hero-banner__icon" aria-hidden="true">💰</span>
            <span>Descubre todas las becas disponibles para ti</span>
          </div>
          <div class="hero-banner hero-banner--cyan">
            <span class="hero-banner__icon" aria-hidden="true">🌏</span>
            <span>Con oportunidades globales para impulsar tu carrera</span>
          </div>
        </div>
      </div>

      <div class="hero__visual" aria-label="Collage de oportunidades de becas">
        <div class="hero-card hero-card--main">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
            alt="Estudiantes trabajando juntos"
            width="1000"
            height="1200"
          >
          <span class="hero-card__tag hero-card__tag--research">Research</span>
        </div>

        <div class="hero-card hero-card--top">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=85"
            alt="Estudiante estudiando"
            width="700"
            height="700"
          >
          <span class="hero-card__tag hero-card__tag--internship">Internship</span>
        </div>

        <div class="hero-card hero-card--bottom">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85"
            alt="Jóvenes estudiantes de distintas culturas"
            width="700"
            height="700"
          >
          <span class="hero-card__tag hero-card__tag--mobility">Mobility</span>
        </div>

       
      </div>
    </header>

    <section class="categories" aria-labelledby="categories-title">
      <div class="categories__header">
        <span class="categories__eyebrow">Nuestros programas</span>
        <h2 id="categories-title">Encuentra la que se adapta a ti</h2>
        <p>
          Tu talento tiene muchas formas de crecer. No importa en qué etapa de
          tu formación estés, tenemos un programa diseñado para ayudarte a dar
          el siguiente paso.
        </p>
      </div>

      <div class="categories__grid">
        <article
          v-for="category in categories"
          :key="category.title"
          class="category-card"
        >
          <div class="category-card__icon" aria-hidden="true">
            {{ category.icon }}
          </div>
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <span class="category-card__arrow" aria-hidden="true">→</span>
        </article>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
interface ScholarshipCategory {
  title: string
  description: string
  icon: string
}

const categories: ScholarshipCategory[] = [
  {
    title: 'Ayuda económica',
    description:
      'Becas de ayuda económica para apoyo a estudios de grado y acceso a la universidad para situaciones de necesidad.',
    icon: '₡'
  },
  {
    title: 'Movilidad académica',
    description:
      'Becas de movilidad nacional e internacional para cursar parte de los estudios universitarios en otra institución académica.',
    icon: '⌖'
  },
  {
    title: 'Investigación',
    description:
      'Becas para universitarios y docentes con el fin de apoyar la investigación en un programa o proyecto concreto.',
    icon: '✦'
  },
  {
    title: 'Prácticas profesionales',
    description:
      'Becas para facilitar el acceso al mercado laboral a los estudiantes a través de prácticas profesionales.',
    icon: '▣'
  }
]
</script>

<style scoped>
.scholarships-page {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  color: #1f2933;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
  align-items: center;
  gap: clamp(2.5rem, 6vw, 6rem);
}

.hero__content {
  position: relative;
  z-index: 2;
}

.hero__eyebrow,
.categories__eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: #b34b35;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 690px;
  margin: 0;
  color: #17212b;
  font-size: clamp(2.7rem, 5.5vw, 5.4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.02;
}

.hero__description {
  max-width: 590px;
  margin: 1.5rem 0 0;
  color: #5f6c77;
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  line-height: 1.65;
}

.hero__banners {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  margin-top: 2.5rem;
}

.hero-banner {
  display: flex;
  min-height: 4rem;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.3;
}

.hero-banner--mint {
  background: #dff5e9;
  color: #1d5e4a;
}

.hero-banner--cyan {
  background: #dff3f8;
  color: #245c6c;
}

.hero-banner__icon {
  flex: 0 0 auto;
  font-size: 1.1rem;
}

.hero__visual {
  position: relative;
  min-height: 620px;
}

.hero-card {
  position: absolute;
  overflow: hidden;
  border: 6px solid #ffffff;
  border-radius: 2rem;
  background: #e5e7eb;
  box-shadow: 0 24px 60px rgba(24, 36, 48, 0.18);
}

.hero-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-card--main {
  top: 0;
  right: 0;
  width: 72%;
  height: 82%;
  transform: rotate(2deg);
}

.hero-card--top {
  top: 4%;
  left: 0;
  width: 43%;
  height: 40%;
  transform: rotate(-5deg);
}

.hero-card--bottom {
  right: 0;
  bottom: 0;
  width: 48%;
  height: 42%;
  transform: rotate(4deg);
}

.hero-card__tag {
  position: absolute;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 999px;
  background: rgba(255, 247, 242, 0.9);
  box-shadow: 0 8px 20px rgba(44, 25, 20, 0.1);
  color: #a14331;
  font-size: 0.75rem;
  font-weight: 800;
  backdrop-filter: blur(8px);
}

.hero-card__tag--research {
  top: 1rem;
  left: 1rem;
}

.hero-card__tag--internship {
  right: 1rem;
  bottom: 1rem;
}

.hero-card__tag--mobility {
  top: 1rem;
  right: 1rem;
}

.hero-card__tag--economic {
  bottom: 1.5rem;
  left: 2rem;
  z-index: 2;
  background: rgba(239, 250, 245, 0.94);
  color: #276b58;
}

.categories {
  margin-top: 6rem;
}

.categories__header {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.categories__header h2 {
  margin: 0;
  color: #17212b;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.15;
}

.categories__header p {
  margin: 1rem auto 0;
  color: #64717c;
  font-size: 1rem;
  line-height: 1.7;
}

.categories__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.category-card {
  position: relative;
  display: flex;
  min-height: 330px;
  flex-direction: column;
  padding: 1.7rem;
  overflow: hidden;
  border: 1px solid #e1e6e9;
  border-radius: 1.35rem;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(20, 34, 45, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.category-card:hover {
  border-color: #d5a79c;
  box-shadow: 0 18px 40px rgba(20, 34, 45, 0.1);
  transform: translateY(-6px);
}

.category-card__icon {
  display: grid;
  width: 3.2rem;
  height: 3.2rem;
  place-items: center;
  border-radius: 1rem;
  background: #fbeeea;
  color: #b34b35;
  font-size: 1.5rem;
  font-weight: 800;
}

.category-card h3 {
  margin: 1.8rem 0 0.75rem;
  color: #1d2832;
  font-size: 1.3rem;
}

.category-card p {
  margin: 0;
  color: #65727d;
  font-size: 0.9rem;
  line-height: 1.65;
}

.category-card__arrow {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  color: #b34b35;
  font-size: 1.5rem;
  font-weight: 800;
  transition: transform 0.2s ease;
}

.category-card:hover .category-card__arrow {
  transform: translateX(4px);
}

@media (max-width: 1040px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero__content {
    max-width: 760px;
  }

  .hero__visual {
    width: min(100%, 760px);
    min-height: 580px;
    margin: 0 auto;
  }

  .categories__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .scholarships-page {
    padding: 2.5rem 1rem 4rem;
  }

  .hero h1 {
    font-size: clamp(2.35rem, 12vw, 3.5rem);
  }

  .hero__banners {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 470px;
  }

  .hero-card {
    border-width: 4px;
    border-radius: 1.25rem;
  }

  .hero-card--main {
    width: 78%;
    height: 78%;
  }

  .hero-card--top {
    width: 48%;
    height: 38%;
  }

  .hero-card--bottom {
    width: 54%;
    height: 42%;
  }

  .hero-card__tag {
    padding: 0.45rem 0.65rem;
    font-size: 0.65rem;
  }

  .hero-card__tag--economic {
    bottom: 0.8rem;
    left: 0.8rem;
  }

  .categories {
    margin-top: 4rem;
  }

  .categories__grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    min-height: 280px;
  }
}
</style>
