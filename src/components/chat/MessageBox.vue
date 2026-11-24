<template>
    <form class="message-box" @submit.prevent="sendMessage">
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        aria-label="Escribe un mensaje"
        v-model="message"
      />
      <button type="submit" aria-label="Enviar mensaje">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <path
            d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  sendMessage: [text: string]
}>();

const message = ref('')

const sendMessage = () => {
  const text = message.value.trim()
  if (!text) return
  emits('sendMessage', text)
  message.value = ''
};
</script>

<style scoped>
.message-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-top: 1px solid #000000;
  background: #100d17;
  border-top-color: var(--border);
}

.message-box input {
  flex: 1;
  min-width: 0;
  padding: 0.7rem 1rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: #000000;
  background: #ffffff;
  font: inherit;
}

.message-box input:focus {
  border-color: var(--accent);
  outline: 2px solid rgba(26, 26, 27, 0.25);
}

.message-box button {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  flex: 0 0 auto;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: var(--accent-strong);
  cursor: pointer;
}

.message-box button:hover {
  background: #7c3aed;
}
</style>