<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from '../components/chat/ChatMessages.vue'
import MessageBox from '../components/chat/MessageBox.vue'
import type { ChatMessage } from '../interfaces/chat-message.interface'

const messages = ref<ChatMessage[]>([
    {
        id: Date.now(),
        message: 'Hola mundo!!!',
        itsMine: true
    },
    {
        id: Date.now() + 1,
        message: '¿Quieres ir a tomar cafe?',
        itsMine: true
    },
    {
        id: Date.now() + 2,
        message: 'No',
        itsMine: false,
        image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnJ2Nzh4a3JlYnIzeDk0eXdqc3FjejN2OTd3dnc3c21jMm1zeHM2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h5l0zxkKIGc1rWIP6a/giphy.gif'
    },
])

const onMessage = (text: string) => {
  messages.value.push({
    id: Date.now(),
    itsMine: true,
    message: text,
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