<script setup lang="ts">
import type { ChatMessage } from '../../interfaces/chat-message.interface.ts';
import ChatBubble from './ChatBubble.vue';
interface Props {
    messages: ChatMessage[]
}
defineProps<Props>();
</script>

<template>
    <div class="chat-messages">
        <div class="chat-messages__list">
            <ChatBubble
                v-for="message in messages"
                :key="message.id"
                v-bind="message"
            />
        </div>
    </div>
</template>

<style scoped>
.chat-messages {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 1rem;
    color: var(--text);
}

.chat-messages__list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}
</style>
