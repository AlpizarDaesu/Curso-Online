<script setup lang="ts">
import { ref, computed } from 'vue';


type Direction = 'adelante' | 'atras' | 'izquierda' | 'derecha';

interface Node {
  id: string;
  text: string;
  paths: Partial<Record<Direction, string>>; // Conexión a otros nodos
}


const nodes: Record<string, Node> = {
  inicio: {
    id: 'inicio',
    text: 'Te encuentras en la entrada de una vieja mazmorra medieval. Un viento frío sopla desde el interior.',
    paths: { adelante: 'pasillo' }
  },
  pasillo: {
    id: 'pasillo',
    text: 'Estás en un pasillo oscuro iluminado por antorchas parpadeantes. Ves puertas a tus lados.',
    paths: { atras: 'inicio', izquierda: 'armeria', derecha: 'biblioteca', adelante: 'cruzamiento' }
  },
  armeria: {
    id: 'armeria',
    text: 'Entras a la armería. Hay espadas oxidadas por el suelo y un cofre de hierro al fondo.',
    paths: { derecha: 'pasillo' }
  },
  biblioteca: {
    id: 'biblioteca',
    text: 'Una biblioteca olvidada. Las estanterías de madera están cubiertas de polvo y tomos antiguos.',
    paths: { izquierda: 'pasillo' }
  },
  cruzamiento: {
    id: 'cruzamiento',
    text: 'Llegas a un cruce. Escuchas un leve susurro que proviene del frente.',
    paths: { atras: 'pasillo', adelante: 'tesoro' }
  },
  tesoro: {
    id: 'tesoro',
    text: '¡Has encontrado la sala del tesoro! Un resplandor dorado ilumina la estancia. Has triunfado.',
    paths: { atras: 'cruzamiento' }
  }
};


const currentNodeId = ref<string>('inicio');
const currentNode = computed(() => nodes[currentNodeId.value]);


const move = (direction: Direction): void => {
  const nextNodeId = currentNode.value.paths[direction];
  if (nextNodeId) {
    currentNodeId.value = nextNodeId;
  }
};
</script>

<template>
  <main class="minijuego-view">
    <div class="mud-container">
      <div class="screen">
        <p class="description">{{ currentNode.text }}</p>
      </div>

      <div class="controls">
        <button
          :disabled="!currentNode.paths.adelante"
          @click="move('adelante')"
        >
          ▲ Adelante
        </button>

        <div class="middle-buttons">
          <button
            :disabled="!currentNode.paths.izquierda"
            @click="move('izquierda')"
          >
            ◄ Izquierda
          </button>
          <button
            :disabled="!currentNode.paths.derecha"
            @click="move('derecha')"
          >
            Derecha ►
          </button>
        </div>

        <button
          :disabled="!currentNode.paths.atras"
          @click="move('atras')"
        >
          ▼ Atrás
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.minijuego-view {
  display: grid;
  min-height: 70vh;
  place-items: center;
  padding: 2rem 1rem;
  background-image:
    linear-gradient(rgba(9, 12, 18, 0.48), rgba(9, 12, 18, 0.48)),
    url('../assets/rpgfondo.jpg');
  background-position: center;
  background-size: cover;
}

.mud-container {
  width: min(100%, 500px);
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  background-color: rgba(13, 17, 23, 0.9);
  backdrop-filter: blur(3px);
  color: #20ff1c;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #28ff25;
}

.screen {
  min-height: 120px;
  border-bottom: 1px dashed #44ff51;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.middle-buttons {
  display: flex;
  gap: 20px;
}

button {
  background-color: #17111f;
  color: #51ff36;
  border: 1px solid #24ff4c;
  padding: 10px 15px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover:not(:disabled) {
  background-color: #34ff34;
  color: #100b18;
}

button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  border-color: #4a4058;
  color: #82788f;
}
</style>