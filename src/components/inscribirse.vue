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
          <label for="phone">Teléfono</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            placeholder="+34 600 000 000"
          >
        </div>

        <div class="form-field">
          <label for="course">Curso a elegir</label>
          <div class="select-wrap">
            <select id="course" v-model="form.course">
              <option value="">Selecciona un curso</option>
              <option value="Cursos de Idiomas">Cursos de Idiomas</option>
              <option value="Cursos de Tecnologias">Cursos de Tecnologias</option>
            </select>
          </div>
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
import { reactive } from 'vue'

interface LoginForm {
  name: string
  email: string
  phone: string
  course: string
  password: string
}

const form = reactive<LoginForm>({
  name: '',
  email: '',
  phone: '',
  course: '',
  password: ''
})

const handleSubmit = (event: Event) => {
  event.preventDefault()

  form.name = ''
  form.email = ''
  form.phone = ''
  form.course = ''
  form.password = ''
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
    radial-gradient(circle at 15% 10%, rgba(244, 162, 97, 0.23), transparent 28%),
    linear-gradient(135deg, #f6f8fa 0%, #e9eff4 100%);
}

.login-card {
  width: min(100%, 570px);
  padding: 2.5rem;
  border: 1px solid rgba(211, 219, 227, 0.9);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 24px 70px rgba(30, 47, 65, 0.13);
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
  background: #2c3e50;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 800;
}

.login-card__eyebrow {
  margin: 0 0 0.45rem;
  color: #c0392b;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.login-card h1 {
  margin: 0;
  color: #17212b;
  font-size: clamp(2rem, 5vw, 2.7rem);
  line-height: 1.15;
}

.login-card__description {
  margin: 0.65rem 0 0;
  color: #66717d;
  line-height: 1.6;
}

.social-login {
  margin: 2rem 0 1.5rem;
  text-align: center;
}

.social-login > p {
  margin: 0 0 0.8rem;
  color: #4b5662;
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
  border: 1px solid #d9e0e6;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.social-button:hover {
  transform: translateY(-2px);
  border-color: #b7c1ca;
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
  color: #7b8792;
  font-size: 0.85rem;
  font-weight: 600;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #dce2e7;
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
  color: #34414d;
  font-size: 0.85rem;
  font-weight: 750;
}

.form-field input,
.form-field select {
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border: 1px solid #d2d9df;
  border-radius: 0.75rem;
  outline: none;
  background: #ffffff;
  color: #17212b;
  font: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field input::placeholder {
  color: #9aa4ad;
}

.form-field input:focus,
.form-field select:focus {
  border-color: #c0392b;
  box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.12);
}

.select-wrap {
  position: relative;
}

.select-wrap::after {
  content: '⌄';
  position: absolute;
  top: 50%;
  right: 1rem;
  color: #65727e;
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
  background: #c0392b;
  color: #ffffff;
  cursor: pointer;
  font: inherit;
  font-weight: 800;
  box-shadow: 0 12px 25px rgba(192, 57, 43, 0.25);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.login-button:hover {
  background: #a92f24;
  box-shadow: 0 15px 30px rgba(192, 57, 43, 0.3);
  transform: translateY(-1px);
}

.login-button:active {
  transform: translateY(0);
}

.login-links {
  display: grid;
  gap: 0.7rem;
  margin-top: 1.5rem;
  color: #5f6b76;
  font-size: 0.82rem;
  line-height: 1.5;
  text-align: center;
}

.login-links a {
  color: #c0392b;
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
