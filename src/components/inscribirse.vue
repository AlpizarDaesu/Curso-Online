<template>
  <section class="login-page">
    <div class="login-card">
      <div class="login-card__header">
       
        <p class="login-card__eyebrow">Uady Cursos</p>
        <h1>Bienvenido</h1>
        <p class="login-card__description">
        Registrate para acceder a los cursos de la UADY online y mejorar tus habilidades.
        </p>
      </div>

      <div class="social-login" aria-label="Inicia sesión con una red social">
        <p>Inicia sesión con:</p>
        <div class="social-login__buttons">
          <button class="social-button" type="button" aria-label="Google">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.32 2.98-7.36Z"/>
              <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.56-5.59-3.66H3.07v2.58A10 10 0 0 0 12 22Z"/>
              <path fill="#FBBC05" d="M6.41 13.48A6.02 6.02 0 0 1 6.1 12c0-.5.09-.99.31-1.48V7.94H3.07A10 10 0 0 0 2 12c0 1.61.39 3.13 1.07 4.06l3.34-2.58Z"/>
              <path fill="#EA4335" d="M12 5.97c1.47 0 2.78.5 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.93 5.94l3.34 2.58C7.2 7.53 9.4 5.97 12 5.97Z"/>
            </svg>
          </button>
        
          <button class="social-button" type="button" aria-label="Microsoft">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#F25022" d="M2 2h9.5v9.5H2V2Z"/>
              <path fill="#7F5AF0" d="M12.5 2H22v9.5h-9.5V2Z"/>
              <path fill="#00A4EF" d="M2 12.5h9.5V22H2v-9.5Z"/>
              <path fill="#FFB900" d="M12.5 12.5H22V22h-9.5v-9.5Z"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="divider"><span>O rellena tus datos:</span></div>

      <form class="login-form" @submit="handleSubmit">
        <div class="form-field">
          <label for="name">Nombre</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            placeholder="Escribe tu nombre"
          >
        </div>

        <div class="form-field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            placeholder="tu@email.com"
          >
        </div>

        <div class="form-field">
          <label for="password">Contraseña</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            autocomplete="current-password"
            placeholder="Introduce tu contraseña"
          >
        </div>

        <button class="login-button" type="submit">
          Iniciar sesión
        </button>
        <p v-if="loginMessage" class="login-message" :class="{ 'login-message--error': loginError }">
          {{ loginMessage }}
        </p>
      </form>

      <div class="login-links">
        <a href="#forgot-password">¿He olvidado mi contraseña?</a>
        <p>
          ¿No tienes cuenta en Cursos UADY?
          <a href="#register">Regístrate</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { LoginForm } from '../interfaces/insInterface'
import { login } from '../stores/auth'

const router = useRouter()
const loginMessage = ref('')
const loginError = ref(false)

const form = reactive<LoginForm>({
  name: '',
  email: '',
  phone: '',
  course: '',
  password: ''
})

const handleSubmit = (event: Event) => {
  event.preventDefault()

  const user = login(form.email, form.password)

  if (!user) {
    loginError.value = true
    loginMessage.value = 'Correo o contraseña incorrectos.'
    return
  }

  loginError.value = false
  loginMessage.value = `Sesión iniciada como ${user.rol}.`
  form.password = ''
  void router.push('/lobby')
}
</script>

<style scoped>
.login-page {
  display: flex;
  min-height: calc(100vh - 90px);
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  background:
    radial-gradient(circle at 15% 10%, rgba(139, 92, 246, 0.2), transparent 28%),
    linear-gradient(135deg, #09070f 0%, #15111f 100%);
}

.login-card {
  width: min(100%, 570px);
  padding: 2.5rem;
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  background: rgba(21, 17, 31, 0.97);
  box-shadow: 0 24px 70px var(--shadow);
}

.login-card__header {
  text-align: center;
}

.login-card__icon {
  display: grid;
  width: 3.25rem;
  height: 3.25rem;
  margin: 0 auto 1rem;
  place-items: center;
  border-radius: 50%;
  background: var(--accent-strong);
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 800;
}

.login-card__eyebrow {
  margin: 0 0 0.45rem;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.login-card h1 {
  margin: 0;
  color: var(--text-h);
  font-size: clamp(2rem, 5vw, 2.7rem);
  line-height: 1.15;
}

.login-card__description {
  margin: 0.65rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.social-login {
  margin: 2rem 0 1.5rem;
  text-align: center;
}

.social-login > p {
  margin: 0 0 0.8rem;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.social-login__buttons {
  display: flex;
  justify-content: center;
  gap: 0.65rem;
}

.social-button {
  display: grid;
  width: 2.8rem;
  height: 2.8rem;
  padding: 0;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface-raised);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.social-button:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: 0 7px 18px rgba(30, 47, 65, 0.12);
}

.social-button svg {
  width: 1.3rem;
  height: 1.3rem;
}

.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.login-form {
  display: grid;
  gap: 1rem;
}

.form-field {
  display: grid;
  gap: 0.45rem;
}

.form-field label {
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 750;
}

.form-field input,
.form-field select {
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  outline: none;
  background: #0f0c16;
  color: var(--text);
  font: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field input::placeholder {
  color: #8f849f;
}

.form-field input:focus,
.form-field select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.16);
}

.select-wrap {
  position: relative;
}

.select-wrap::after {
  content: '⌄';
  position: absolute;
  top: 50%;
  right: 1rem;
  color: var(--muted);
  pointer-events: none;
  transform: translateY(-58%);
}

.form-field select {
  appearance: none;
  padding-right: 2.5rem;
}

.login-button {
  display: flex;
  width: 100%;
  min-height: 3.4rem;
  margin-top: 0.4rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 0;
  border-radius: 999px;
  background: var(--accent-strong);
  color: #ffffff;
  cursor: pointer;
  font: inherit;
  font-weight: 800;
  box-shadow: 0 12px 25px rgba(139, 92, 246, 0.25);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.login-button:hover {
  background: #7c3aed;
  box-shadow: 0 15px 30px rgba(139, 92, 246, 0.3);
  transform: translateY(-1px);
}

.login-button:active {
  transform: translateY(0);
}

.login-message {
  margin: 0;
  color: #86efac;
  font-size: 0.85rem;
  text-align: center;
}

.login-message--error {
  color: #fca5a5;
}

.login-links {
  display: grid;
  gap: 0.7rem;
  margin-top: 1.5rem;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.5;
  text-align: center;
}

.login-links a {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}

.login-links a:hover {
  text-decoration: underline;
}

.login-links p {
  margin: 0;
}

@media (max-width: 560px) {
  .login-page {
    padding: 1.5rem 1rem;
  }

  .login-card {
    padding: 2rem 1.25rem;
    border-radius: 1.15rem;
  }

  .social-login__buttons {
    gap: 0.45rem;
  }
}
</style>
