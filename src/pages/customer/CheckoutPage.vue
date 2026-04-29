<template>
  <div class="page">
    <!-- Navbar -->
    <header class="navbar">
      <a href="#" class="navbar__back">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to Cart
      </a>
      <div class="navbar__logo">TechCurator</div>
      <div class="navbar__secure">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
        SECURE CHECKOUT
      </div>
    </header>

    <!-- Content -->
    <div class="content">
      <!-- Left: Form -->
      <div class="form-section">

        <!-- Shipping -->
        <div class="step">
          <div class="step__header">
            <span class="step__number">1</span>
            <h2 class="step__title">Shipping Information</h2>
          </div>
          <div class="form-card">
            <div class="field">
              <label class="field__label">FULL NAME</label>
              <input v-model="shipping.name" class="field__input" type="text" placeholder="Johnathan Doe" />
            </div>
            <div class="field">
              <label class="field__label">EMAIL ADDRESS</label>
              <input v-model="shipping.email" class="field__input" type="email" placeholder="j.doe@curator.com" />
            </div>
            <div class="field">
              <label class="field__label">STREET ADDRESS</label>
              <input v-model="shipping.street" class="field__input" type="text" placeholder="123 Digital Avenue" />
            </div>
            <div class="field-row">
              <div class="field">
                <label class="field__label">CITY</label>
                <input v-model="shipping.city" class="field__input" type="text" placeholder="San Francisco" />
              </div>
              <div class="field">
                <label class="field__label">ZIP CODE</label>
                <input v-model="shipping.zip" class="field__input" type="text" placeholder="94105" />
              </div>
            </div>
          </div>
        </div>

        <!-- Payment -->
        <div class="step">
          <div class="step__header">
            <span class="step__number">2</span>
            <h2 class="step__title">Payment Method</h2>
          </div>

          <!-- Credit Card -->
          <div class="payment-option" :class="{ 'payment-option--active': paymentMethod === 'card' }" @click="paymentMethod = 'card'">
            <div class="payment-option__top">
              <div class="radio" :class="{ 'radio--active': paymentMethod === 'card' }"></div>
              <div class="payment-option__info">
                <p class="payment-option__name">Credit or Debit Card</p>
                <p class="payment-option__sub">Visa, Mastercard, Amex</p>
              </div>
              <div class="payment-option__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </div>
            </div>
            <div class="card-fields" v-if="paymentMethod === 'card'">
              <div class="field">
                <input v-model="card.number" class="field__input" type="text" placeholder="Card Number" />
              </div>
              <div class="field-row">
                <div class="field">
                  <input v-model="card.expiry" class="field__input" type="text" placeholder="MM/YY" />
                </div>
                <div class="field">
                  <input v-model="card.cvc" class="field__input" type="text" placeholder="CVC" />
                </div>
              </div>
            </div>
          </div>

          <!-- PayPal -->
          <div class="payment-option" :class="{ 'payment-option--active': paymentMethod === 'paypal' }" @click="paymentMethod = 'paypal'">
            <div class="payment-option__top">
              <div class="radio" :class="{ 'radio--active': paymentMethod === 'paypal' }"></div>
              <p class="payment-option__name">PayPal</p>
              <div class="payment-option__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Apple Pay -->
          <div class="payment-option" :class="{ 'payment-option--active': paymentMethod === 'apple' }" @click="paymentMethod = 'apple'">
            <div class="payment-option__top">
              <div class="radio" :class="{ 'radio--active': paymentMethod === 'apple' }"></div>
              <p class="payment-option__name">Apple Pay</p>
              <div class="payment-option__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 814 1000" fill="#6b7280">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-98.8c-44.5-53.9-81.1-136.9-81.1-215.7 0-195.4 127.4-298.5 252.7-298.5 66.1 0 121.2 43.4 162.6 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Right: Order Summary -->
      <div class="summary">
        <h2 class="summary__title">Order Summary</h2>

        <div class="order-items">
          <div class="order-item" v-for="item in orderItems" :key="item.name">
            <div class="order-item__img">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="order-item__info">
              <p class="order-item__name">{{ item.name }}</p>
              <p class="order-item__variant">{{ item.variant }}</p>
              <p class="order-item__price">{{ item.price }}</p>
            </div>
          </div>
        </div>

        <div class="summary__rows">
          <div class="summary__row">
            <span>Subtotal</span>
            <span>$2,748.00</span>
          </div>
          <div class="summary__row">
            <span>Shipping</span>
            <span class="summary__free">Free</span>
          </div>
          <div class="summary__row">
            <span>Estimated Tax</span>
            <span>$63.25</span>
          </div>
        </div>

        <div class="summary__total">
          <span>Total</span>
          <span class="summary__total-val">$2,811.25</span>
        </div>

        <button class="btn-purchase" @click="completePurchase">COMPLETE PURCHASE</button>

        <div class="summary__ssl">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          SSL ENCRYPTED TRANSACTION
        </div>
        <div class="summary__badges">
          <div class="badge-icon" v-for="i in 3" :key="i">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
        </div>

        <!-- Curation Policy -->
        <div class="curation-policy">
          <div class="curation-policy__header">
            <div class="curation-policy__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span class="curation-policy__title">Curation Policy</span>
          </div>
          <p class="curation-policy__text">All TechCurator products include a 1-year limited warranty and concierge setup assistance. Your data is protected under our global privacy shield.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__brand">
          <h3 class="footer__logo">TechCurator</h3>
          <p class="footer__tagline">Elevating technology through intentional design and editorial precision.</p>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">SUPPORT</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping Guide</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">COMPANY</h4>
          <ul>
            <li><a href="#">Our Ethos</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2024 TechCurator. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  data() {
    return {
      paymentMethod: 'card',
      shipping: {
        name: '',
        email: '',
        street: '',
        city: '',
        zip: '',
      },
      card: {
        number: '',
        expiry: '',
        cvc: '',
      },
      orderItems: [
        {
          name: 'AtelierBook M3 Pro',
          variant: 'Space Black | 32GB | 1TB',
          price: '$2,499.00',
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=120&q=80',
        },
        {
          name: 'SonicMaster Studio',
          variant: 'Midnight Blue',
          price: '$249.00',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&q=80',
        },
      ],
    }
  },
  methods: {
    completePurchase() {
      alert('Purchase complete!')
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
  color: #111827;
}

/* ── Navbar ── */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar__back {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  color: #6b7280;
  transition: color 0.2s;
}

.navbar__back:hover {
  color: #111827;
}

.navbar__logo {
  font-size: 18px;
  font-weight: 800;
  color: #0f0f1a;
  letter-spacing: -0.5px;
}

.navbar__secure {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6b7280;
  text-transform: uppercase;
}

/* ── Content ── */
.content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 28px;
  padding: 48px 48px 64px;
  flex: 1;
  align-items: start;
}

/* ── Steps ── */
.step {
  margin-bottom: 36px;
}

.step__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.step__number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step__title {
  font-size: 22px;
  font-weight: 800;
  color: #0f0f1a;
  letter-spacing: -0.3px;
}

/* ── Form Card ── */
.form-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e8eaed;
  padding: 8px 24px 24px;
}

.field {
  padding-top: 20px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 4px;
}

.field:last-child {
  border-bottom: none;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 24px;
  border-bottom: 1px solid #f0f0f0;
}

.field-row .field {
  border-bottom: none;
}

.field-row .field:first-child {
  border-right: 1px solid #f0f0f0;
  padding-right: 24px;
}

.field__label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.field__input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  color: #111827;
  background: transparent;
  padding: 0 0 12px;
  font-family: 'Inter', sans-serif;
}

.field__input::placeholder {
  color: #d1d5db;
}

/* ── Payment Options ── */
.payment-option {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e8eaed;
  padding: 20px 24px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.payment-option--active {
  border-color: #2563eb;
}

.payment-option__top {
  display: flex;
  align-items: center;
  gap: 14px;
}

.radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}

.radio--active {
  border-color: #2563eb;
  border-width: 6px;
}

.payment-option__info {
  flex: 1;
}

.payment-option__name {
  font-size: 14.5px;
  font-weight: 600;
  color: #111827;
}

.payment-option__sub {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
}

.payment-option__icon {
  color: #9ca3af;
}

.card-fields {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
}

.card-fields .field {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 10px;
}

.card-fields .field:last-child {
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0;
}

.card-fields .field-row {
  border-bottom: none;
  gap: 10px;
}

.card-fields .field-row .field {
  border-right: none;
  padding-right: 0;
}

.card-fields .field__input {
  padding-bottom: 0;
  font-size: 14px;
}

/* ── Summary ── */
.summary {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8eaed;
  padding: 28px;
  position: sticky;
  top: 76px;
}

.summary__title {
  font-size: 20px;
  font-weight: 800;
  color: #0f0f1a;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  gap: 14px;
  align-items: center;
}

.order-item__img {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f3f4f6;
}

.order-item__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.order-item__name {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 3px;
}

.order-item__variant {
  font-size: 12px;
  color: #9ca3af;
  margin-bottom: 4px;
}

.order-item__price {
  font-size: 13.5px;
  font-weight: 700;
  color: #374151;
}

.summary__rows {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 16px;
}

.summary__row {
  display: flex;
  justify-content: space-between;
  font-size: 13.5px;
  color: #6b7280;
}

.summary__free {
  color: #2563eb;
  font-weight: 600;
}

.summary__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.summary__total span:first-child {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
}

.summary__total-val {
  font-size: 26px;
  font-weight: 900;
  color: #2563eb;
  letter-spacing: -1px;
}

.btn-purchase {
  width: 100%;
  padding: 15px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
}

.btn-purchase:hover {
  background: #1d4ed8;
}

.summary__ssl {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.summary__badges {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.badge-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
}

/* Curation Policy */
.curation-policy {
  background: #eff6ff;
  border-radius: 10px;
  padding: 16px;
}

.curation-policy__header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.curation-policy__icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.curation-policy__title {
  font-size: 13px;
  font-weight: 700;
  color: #1e40af;
}

.curation-policy__text {
  font-size: 12.5px;
  color: #3b82f6;
  line-height: 1.6;
}

/* ── Footer ── */
.footer {
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding: 0 48px;
}

.footer__top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  padding: 48px 0 32px;
}

.footer__logo {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #0f0f1a;
}

.footer__tagline {
  font-size: 13px;
  color: #888;
  line-height: 1.65;
  max-width: 220px;
}

.footer__heading {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 16px;
  color: #9ca3af;
  text-transform: uppercase;
}

.footer__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col ul a {
  text-decoration: none;
  font-size: 13px;
  color: #6b7280;
  transition: color 0.2s;
}

.footer__col ul a:hover {
  color: #0f0f1a;
}

.footer__bottom {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  font-size: 12px;
  color: #bbb;
}
</style>
