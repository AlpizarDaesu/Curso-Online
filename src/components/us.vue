<template>
  <section class="about-page">
    <div class="about-hero">
      <div class="about-hero__content">
        <span class="about-hero__eyebrow">Nuestra historia</span>
        <h1>Aprender puede cambiar tu futuro</h1>
        <p>
          Cursos Online UADY nace de la pasión por ofrecer formación accesible,
          útil y de calidad para que cada persona pueda avanzar en su carrera.
        </p>
      </div>

      <div class="about-hero__image-wrap">
        <img
          class="about-hero__image"
          src="https://www.evolmind.com/wp-content/uploads/2019/03/estudiantes.webp"
          alt="Estudiante participando en un curso online de UADY"
          width="900"
          height="600"
        >
      </div>
    </div>

    <div class="about-intro">
      <div class="about-intro__copy">
        <span class="about-intro__eyebrow">¿Quiénes somos?</span>
        <h2>Aprendizaje gratuito para todos</h2>
        <p>
          La UADY comparte cursos, becas y contenidos de calidad desarrollados
          junto a universidades y organizaciones líderes en todo el mundo.
        </p>
        <p>
          La formación es online, gratuita y está abierta a cualquier persona,
          sin necesidad de ser cliente del banco. Todo el mundo puede aprender,
          crecer y construir su propio futuro.
        </p>
      </div>

      <div class="about-images">
        <figure class="about-image about-image--large">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
            alt="Grupo de estudiantes trabajando juntos"
            width="900"
            height="700"
            loading="lazy"
          >
          <figcaption>Aprendizaje colaborativo</figcaption>
        </figure>

        <figure class="about-image about-image--small">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=85"
            alt="Estudiante estudiando con una laptop"
            width="700"
            height="700"
            loading="lazy"
          >
          <figcaption>Aprendizaje flexible</figcaption>
        </figure>
      </div>
    </div>

    <div class="about-mission">
      <span class="about-mission__number">30 años</span>
      <div>
        <span class="about-mission__eyebrow">Nuestro compromiso</span>
        <h2>Apoyando a la sociedad desde 1996</h2>
        <p>
          La UADY lanzó en 1996 una iniciativa para impulsar la
          educación, la empleabilidad y el emprendimiento. Los cursos de la UADY forma parte de este compromiso y ayuda a convertir la
          formación en una oportunidad real para personas y empresas.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  color: var(--text);
}

.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
}

.about-hero__content {
  padding: 1rem 0;
}

.about-hero__eyebrow,
.about-intro__eyebrow,
.about-mission__eyebrow {
  display: inline-block;
  margin-bottom: 0.8rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.about-hero h1,
.about-intro h2,
.about-mission h2 {
  margin: 0;
  color: var(--text-h);
  line-height: 1.12;
}

.about-hero h1 {
  max-width: 600px;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
}

.about-hero p,
.about-intro p,
.about-mission p {
  line-height: 1.75;
}

.about-hero p {
  max-width: 540px;
  margin-top: 1.25rem;
  color: var(--muted);
  font-size: 1.08rem;
}

.about-hero__image-wrap {
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.16);
}

.about-hero__image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.about-hero__image-wrap:hover .about-hero__image {
  transform: scale(1.025);
}

.about-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: 4rem;
  padding: 3rem 0;
}

.about-intro__copy {
  max-width: 520px;
}

.about-intro h2,
.about-mission h2 {
  font-size: clamp(2rem, 4vw, 3.25rem);
}

.about-intro p {
  margin-top: 1rem;
  color: var(--muted);
}

.about-images {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  align-items: end;
  gap: 1.25rem;
}

.about-image {
  margin: 0;
  overflow: hidden;
  border-radius: 1.25rem;
  background: var(--surface-raised);
  border: 1px solid var(--border);
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.1);
}

.about-image img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.about-image--large img {
  aspect-ratio: 4 / 3;
}

.about-image--small img {
  aspect-ratio: 1 / 1;
}

.about-image figcaption {
  padding: 0.8rem 1rem;
  background: var(--surface);
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 700;
  text-align: center;
}

.about-mission {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 2.5rem;
  border-left: 5px solid var(--accent-strong);
  border-radius: 0 1.25rem 1.25rem 0;
  background: #1d1529;
}

.about-mission__number {
  color: var(--accent);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1;
}

.about-mission p {
  max-width: 780px;
  margin-top: 1rem;
  color: var(--muted);
}

@media (max-width: 850px) {
  .about-hero,
  .about-intro {
    grid-template-columns: 1fr;
  }

  .about-hero {
    gap: 2rem;
  }

  .about-intro {
    gap: 2.5rem;
  }
}

@media (max-width: 560px) {
  .about-page {
    padding: 2rem 1rem 3.5rem;
  }

  .about-images {
    grid-template-columns: 1fr;
  }

  .about-mission {
    grid-template-columns: 1fr;
    padding: 2rem 1.25rem;
  }
}
</style>
