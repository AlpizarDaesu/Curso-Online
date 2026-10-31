<template>
  <section class="about-page">
    <div class="about-hero">
      <div class="about-hero__content">
        <span class="about-hero__eyebrow">Nuestros favoritos de toda la vida</span>
        <h1>CyberPunk 2077</h1>
        <p>
         La historia sigue la lucha de V, un/una mercenario/a de Night City que lidia con las consecuencias de un atraco que salió mal y que resulta en un biochip experimental cibernético que contiene un engrama de la legendaria estrella de rock y terrorista Johnny Silverhand, que amenaza con sobrescribir lentamente la mente de V. 
        </p>
      </div>

      <div class="about-hero__image-wrap">
        <img
          class="about-hero__image"
          src="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg?w=780&thumb=false"
          alt="Estudiante participando en un curso online de UADY"
          width="900"
          height="600"
        >
      </div>
    </div>

    <div class="about-intro">
      <div class="about-intro__copy">
        <span class="about-intro__eyebrow">Recomendacion imperdible</span>
        <h2>Elden Ring</h2>
        <p>
          El jugador elige una clase de personaje al inicio del juego, lo cual determina los hechizos y equipamiento con el que comienza la partida.
        </p>
        <p>
          El combate contra los enemigos puede ser a melé o a distancia usando armas a distancia o hechizos. Se puede bloquear los ataques de los enemigos mediante escudos o esquivando. 
        </p>
      </div>

      <div class="about-images">
        <figure class="about-image about-image--large">
          <img
            src="https://images.steamusercontent.com/ugc/2058741034012526512/379E6434B473E7BE31C50525EB946D4212A8C8B3/"
            alt="Grupo de estudiantes trabajando juntos"
            width="2100"
            height="700"
            loading="lazy"
          >
          <figcaption>Elder Ring</figcaption>
        </figure>

        
      </div>
    </div>

    <div class="about-mission">
      <span class="about-mission__number">10 años</span>
      <div>
        <span class="about-mission__eyebrow">Nuestro compromiso</span>
        <h2>Apoyando a la sociedad gaymer desde 2016</h2>
        <p>
          Recordamos con cariño los 10 años de nuestra tienda, y nos sentimos orgullosos de haber sido parte de la comunidad gaymer durante todo este tiempo. Nuestro compromiso es seguir ofreciendo productos de calidad y experiencias únicas para todos nuestros clientes.
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
