<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from '../components/chat/ChatMessages.vue'
import MessageBox from '../components/chat/MessageBox.vue'
import type { ChatMessage } from '../interfaces/chat-message.interface'
import type { GIFResponse } from '../interfaces/gif.response'

interface PreMadeResponse {
  keywords: string[]
  message: string
}

const preMadeResponses: PreMadeResponse[] = [
  {
    keywords: ['registrarme', 'registro', 'registrar'],
    message: 'Da click en el botón de iniciar sesión.'
  },{
    keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches',"buenas"],
    message: 'Hola, en qué puedo ayudarte?'
  },
  {
    keywords: ['carrito', 'comprar', 'compra'],
    message: 'Puedes agregar los juegos desde la tienda y revisar tus productos en el carrito.'
  },
  {
    keywords: ['preventa', 'preventas', 'lanzamiento'],
    message: 'Los juegos con preventa tienen la opción Agregar al calendario.'
  },
  {
    keywords: ['calendario', 'agenda', 'fecha'],
    message: 'En el calendario puedes consultar las fechas de tus preventas como usuario.'
  },{
    keywords: ['adios', 'gracias', 'hasta luego'],
    message: 'Adiós! Si necesitas ayuda en el futuro, no dudes en volver.'
  },
  {
    keywords: ['ayuda', 'soporte', 'problema'],
    message: 'Puedes consultar ayuda sobre registro, carrito, compras, preventas o calendario.'
  }
]

type GifUrl = GIFResponse['data']['images']['fixed_height']['url']

const fallbackResponse = 'No te entendí, ¿puedes reformular tu pregunta?'
const fallbackGif = 'https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif'

const normalizeText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const getRandomGif = async (): Promise<GifUrl> => {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=g&tag=funny'
    )

    if (!response.ok) return fallbackGif

    const gifResponse = await response.json() as GIFResponse
    return gifResponse.data.images.fixed_height.url
  } catch {
    return fallbackGif
  }
}

const getPreMadeResponse = (text: string): string => {
  const normalizedText = normalizeText(text)
  const response = preMadeResponses.find((item) =>
    item.keywords.some((keyword) => normalizedText.includes(normalizeText(keyword)))
  )

  return response?.message ?? fallbackResponse
}

const messages = ref<ChatMessage[]>([
  {
    id: Date.now(),
    message: 'Hola, soy tu asistente de ayuda.',
    itsMine: false
  }
])

const onMessage = async (text: string) => {
  messages.value.push({
    id: Date.now(),
    itsMine: true,
    message: text,
  })

  await new Promise((resolve) => window.setTimeout(resolve, 500))

  messages.value.push({
    id: Date.now(),
    itsMine: false,
    message: getPreMadeResponse(text),
    image: await getRandomGif()
  })
}
</script>

<template>
  <main class="chat-view">
    <header class="chat-view__header">
      <span class="chat-view__avatar" aria-hidden="true">ALP</span>
      <div>
        <h1>Tecnico Alpizar</h1>
        <p>Chat de ayuda</p>
      </div>
    </header>

    <ChatMessages :messages="messages" />
    <MessageBox @send-message="onMessage" />
  </main>
</template>

<style scoped>
.chat-view {
  display: flex;
  flex-direction: column;
  width: min(100% - 2rem, 36rem);
  min-height: 32rem;
  height: min(68vh, 42rem);
  margin: 2rem auto;
  overflow: hidden;
  border: 1px solid #dbe3ec;
  border-radius: 1rem;
  background: #15111f;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
}

.chat-view__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: #211832;
  color: #fff;
}

.chat-view__avatar {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border-radius: 50%;
  background: #35234f;
  color: #d8c9ff;
  font-size: 1.2rem;
  font-weight: 700;
}

.chat-view__header h1 {
  margin: 0;
  color: inherit;
  font-size: 1rem;
}

.chat-view__header p {
  margin: 0.15rem 0 0;
  color: #c4b5fd;
  font-size: 0.85rem;
}

@media (max-width: 600px) {
  .chat-view {
    width: calc(100% - 1rem);
    min-height: 24rem;
    height: calc(100dvh - 12rem);
    margin: 0.5rem auto;
  }
}
</style>