<template>
    <div class="chat-message" :class="{ 'chat-message--mine': itsMine }">
        <div class="chat-message__bubble">
            <p>{{ message }}</p>
            <img v-if="image" :src="image" alt="GIF de respuesta">
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    message: string
    itsMine: boolean
    image?: string
}

defineProps<Props>()
</script>

<style scoped>
.chat-message {
    display: flex;
    justify-content: flex-start;
    
}

.chat-message--mine {
    justify-content: flex-end;
}

.chat-message__bubble {
    max-width: min(80%, 22rem);
    padding: 0.7rem 0.9rem;
    border-radius: 1rem 1rem 1rem 0.25rem;
    background: #282135;
    color: var(--text);
    overflow-wrap: anywhere;
}

.chat-message--mine .chat-message__bubble {
    border-radius: 1rem 1rem 0.25rem 1rem;
    background: #35234f;
}

.chat-message__bubble p {
    margin: 0;
}

.chat-message__bubble img {
    display: block;
    width: min(13rem, 100%);
    aspect-ratio: 1;
    margin-top: 0.6rem;
    border-radius: 0.5rem;
    object-fit: cover;
}
</style>