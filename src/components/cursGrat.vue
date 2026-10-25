<script setup lang="ts">
import { computed, ref } from 'vue'

const videos = [
  {
    title: 'Introducción a la programación',
    url: 'https://www.youtube.com/embed/_WJkT42l7Wk?si=3TXefzf51mbHlrKq'
  },
  {
    title: 'Inglés básico para principiantes',
    url: 'https://www.youtube.com/embed/bpMELj9caNY?si=5ST4QafKbotSCZED'
  },
  {
    title: 'Curso de Excel de principiante a avanzado',
    url: 'https://www.youtube.com/embed/5RK6s5eB37o?si=TxfAM9CczmRMKMy-'
  }
]

const currentIndex = ref(0)
const currentVideo = computed(() => videos[currentIndex.value])

const nextVideo = () => {
  currentIndex.value = (currentIndex.value + 1) % videos.length
}

const prevVideo = () => {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length
}
</script>

<template> 
  <section class="cursos-gratuitos">
    <h1>Cursos gratuitos</h1>
    <p>Explora los cursos gratuitos disponibles.</p>

    <div class="carousel">
      <div class="video-title">{{ currentVideo.title }}</div>

      <div class="video-wrapper">
        <iframe
          :src="currentVideo.url"
          title="Video de curso gratuito"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div class="controls">
        <button @click="prevVideo" type="button">Anterior</button>
        <button @click="nextVideo" type="button">Siguiente</button>
      </div>

      <div class="dots">
        <span
          v-for="index in videos.length"
          :key="index"
          :class="{ active: index - 1 === currentIndex }"
          @click="currentIndex = index - 1"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .cursos-gratuitos {
    padding: 2rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-h);
  }

  p {
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  .carousel {
    background: linear-gradient(135deg, #1d1729, #120f19);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.25rem;
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);
  }

  .video-title {
    background: #0d0a14;
    color: white;
    padding: 0.9rem 1rem;
    border-radius: 12px 12px 0 0;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
  }

  .video-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 0 0 12px 12px;
    background: #000;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 1rem;
  }

  button {
    flex: 1;
    border: none;
    border-radius: 12px;
    background: var(--accent-strong);
    color: white;
    padding: 0.8rem 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease;
  }

  button:hover {
    background: #7c3aed;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #514365;
    display: inline-block;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .dots span.active {
    background: var(--accent);
    transform: scale(1.1);
  }
</style>
