<script setup lang="ts">
import lobbypng from '../assets/lobbypng.png'
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <span class="eyebrow">Aprende a tu ritmo</span>
      <h1>Hay muchos caminos para crecer, encuentra el tuyo</h1>
      <p class="lead">
        Accede a opciones gratuitas, seas estudiante de la UADY o no. Elige el nivel, el horario y
        aprende a tu ritmo, adaptándolo a tu día a día, estés estudiando o trabajando.
      </p>
      <div class="actions">
        <button class="primary">Explorar cursos</button>
        <button class="secondary">Más información</button>
      </div>
    </div>

    <div class="hero-visual">
      <img :src="lobbypng" alt="Imagen de lobby" />
    </div>
  </section>
</template>

<style scoped>
  .hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2.5rem 2rem;
    background: linear-gradient(135deg, #f8fbff 0%, #eef6ff 100%);
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .eyebrow {
    display: inline-block;
    width: fit-content;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.12);
    color: #1d4ed8;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.2rem, 4vw, 4rem);
    line-height: 1.1;
    color: #0f172a;
    letter-spacing: -0.04em;
  }

  .lead {
    margin: 0;
    max-width: 650px;
    color: #475569;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }

  button {
    border: none;
    border-radius: 999px;
    padding: 0.9rem 1.4rem;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }

  .primary {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
  }

  .secondary {
    background: white;
    color: #0f172a;
    border: 1px solid #dbeafe;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-visual img {
    width: min(100%, 460px);
    border-radius: 24px;
    object-fit: cover;
    filter: drop-shadow(0 18px 24px rgba(15, 23, 42, 0.12));
  }

  @media (max-width: 820px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 2rem 1.25rem;
    }

    .hero-content {
      align-items: center;
    }

    .actions {
      justify-content: center;
    }
  }
</style>
