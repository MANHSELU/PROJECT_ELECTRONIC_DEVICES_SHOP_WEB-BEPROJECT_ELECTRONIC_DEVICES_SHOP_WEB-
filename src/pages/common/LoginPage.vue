<template>
  <div class="page">
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar__logo">Tech Atelier</div>
      <nav class="navbar__links">
        <a href="#" class="navbar__link">Home</a>
        <a href="#" class="navbar__link">Products</a>
        <a href="#" class="navbar__link">News</a>
        <a href="#" class="navbar__link">Order</a>
        <a href="#" class="navbar__link">Showcase</a>

      </nav>
      <div class="navbar__icons">
        <button class="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </button>
        <button class="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="card">
        <!-- Left: Image -->
        <div class="card__image">
          <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" alt="Tech Robot" />
          <div class="card__image-overlay">
            <h2 class="card__image-title">Curating the<br/>Future of Motion.</h2>
            <p class="card__image-desc">Access our high-precision catalog of elite hardware and curated digital artifacts.</p>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="card__form">
          <h1 class="form__title">Welcome Back</h1>
          <p class="form__sub">Login to access your curation.</p>

          <form @submit.prevent="login">
            <div class="field">
              <input
                v-model="form.email"
                type="email"
                class="field__input"
                placeholder="Email"
              />
            </div>

            <div class="field">
              <input
                v-model="form.password"
                type="password"
                class="field__input"
                placeholder="Password"
              />
            </div>

            <div class="remember-row">
              <label class="checkbox">
                <input type="checkbox" v-model="form.remember" />
                <span class="checkbox__box"></span>
                <span class="checkbox__label">Remember me</span>
              </label>
              <a href="#" class="field__forgot">Forgot password?</a>
            </div>

            <button type="submit" class="btn-submit">LOGIN</button>

            <p class="form__register">
              New to the Atelier?
              <RouterLink :to="{name: 'RegisterPage'}"class="link">Request Register</RouterLink>
            </p>
          </form>
        </div>
      </div>  
    </main>

    <!-- Footer -->
    <footer class="footer">
      <span class="footer__copy">© 2024 TECH ATELIER. EDITORIAL PRECISION.</span>
      <div class="footer__links">
        <a href="#">PRIVACY</a>
        <a href="#">TERMS</a>
        <a href="#">SUPPORT</a>
        <a href="#">ACCESSIBILITY</a>
      </div>
    </footer>
  </div>
</template>

<script >
import { useRouter, useRoute } from 'vue-router';
import { alertSuccess, alertError } from '@/composables/useAlert';
import { loginApi } from '../../services/NotAuth.Service/Login.Service';
export default{
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      loading : false,
    }
  },
  mounted() {
    const route = useRoute();
    const verified = route.query.verified;
    if (verified === 'true') {
      alertSuccess('Xác thực tài khoản thành công! Vui lòng đăng nhập.');
    } else if (verified === 'false') {
      alertError('Xác thực thất bại hoặc token hết hạn!');
    }
  },
  methods: {
    async login() {
      const payload = {
        email: this.form.email,
        password: this.form.password,
      }
      try {
        const router = useRouter();
        const res = await loginApi(payload);
        alertSuccess(res.message);
        setTimeout(() => this.$router.push({name:'Home'}),1000)
      } catch (err) {
        alertError(err)
      }
    },
  },
}
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: #f3f4f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
}

/* ── Navbar ── */
.navbar {
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.navbar__logo {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0f0f1a;
}

.navbar__links {
  display: flex;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar__link {
  text-decoration: none;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar__link:hover {
  color: #111;
}

.navbar__icons {
  display: flex;
  gap: 8px;
  margin-left: auto;
  align-items: center;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: background 0.2s;
}

.icon-btn:hover {
  background: #f5f5f5;
}

/* ── Main ── */
.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
}

.card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
}

/* Left image */
.card__image {
  flex: 0 0 50%;
  position: relative;
  min-height: 560px;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.card__image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
}

.card__image-title {
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.card__image-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Right form */
.card__form {
  flex: 1;
  padding: 52px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form__title {
  font-size: 28px;
  font-weight: 800;
  color: #0f0f1a;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.form__sub {
  font-size: 14px;
  color: #888;
  margin-bottom: 36px;
}

/* ── Fields ── */
.field {
  margin-bottom: 8px;
}

.field__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.field__label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6b7280;
  margin-bottom: 0;
  text-transform: uppercase;
}

.field__forgot {
  font-size: 12px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.field__forgot:hover {
  text-decoration: underline;
}

.field__input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 14px 0;
  font-size: 14px;
  color: #333;
  outline: none;
  background: transparent;
  transition: border-color 0.2s;
  font-family: 'Inter', sans-serif;
}

.field__input::placeholder {
  color: #aaa;
}

.field__input:focus {
  border-bottom-color: #2563eb;
}

/* ── Remember row ── */
.remember-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
}

/* ── Checkbox ── */
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.checkbox input {
  display: none;
}

.checkbox__box {
  width: 18px;
  height: 18px;
  border: 1.5px solid #ccc;
  border-radius: 3px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.checkbox input:checked ~ .checkbox__box {
  background: #2563eb;
  border-color: #2563eb;
}

.checkbox input:checked ~ .checkbox__box::after {
  content: '';
  width: 9px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg) translateY(-1px);
  display: block;
}

.checkbox__label {
  font-size: 13.5px;
  color: #555;
}

/* ── Submit ── */
.btn-submit {
  width: 100%;
  padding: 16px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 24px;
  font-family: 'Inter', sans-serif;
}

.btn-submit:hover {
  background: #1d4ed8;
}

.form__register {
  text-align: center;
  font-size: 13.5px;
  color: #888;
}

.link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

/* ── Footer ── */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  font-size: 11px;
  color: #aaa;
  letter-spacing: 0.5px;
}

.footer__copy {
  text-transform: uppercase;
}

.footer__links {
  display: flex;
  gap: 28px;
}

.footer__links a {
  text-decoration: none;
  color: #aaa;
  font-size: 11px;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.footer__links a:hover {
  color: #333;
}
</style>
