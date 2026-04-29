<template>
  <div class="page">
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar__logo">Tech Atelier</div>
      <nav class="navbar__links">
        <router-link to="/customer/home" class="navbar__link">Home</router-link>
      <router-link to="/customer/products" class="navbar__link">Products</router-link>
      <router-link to="/news" class="navbar__link">News</router-link>
      <router-link to="/order" class="navbar__link">Order</router-link>
      <router-link to="/showcase" class="navbar__link">Showcase</router-link>
      </nav>
      <div class="navbar__icons">
        <RouterLink to="/customer/cart" class="icon-btn cart-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span class="cart-badge">2</span>
        </RouterLink>
        <RouterLink to="/customer/profile" class="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </RouterLink>
      </div>
    </header>


    <!-- Content -->
    <div class="content">
      <!-- Left: Cart -->
      <div class="cart-section">
        <h1 class="cart-title">Your Shopping Cart</h1>
        <p class="cart-sub">{{ cartItems.length }} Items in your curation</p>

        <div class="cart-list">
          <div class="cart-item" v-for="item in cartItems" :key="item.id">
            <div class="cart-item__img">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="cart-item__info">
              <p class="cart-item__name">{{ item.name }}</p>
              <p class="cart-item__variant">{{ item.variant }}</p>
              <p class="cart-item__price">${{ item.price.toFixed(2) }}</p>
            </div>
            <div class="cart-item__controls">
              <div class="qty">
                <button class="qty__btn" @click="decQty(item)">−</button>
                <span class="qty__val">{{ item.qty }}</span>
                <button class="qty__btn" @click="item.qty++">+</button>
              </div>
              <p class="cart-item__total">${{ (item.price * item.qty).toFixed(2) }}</p>
              <button class="cart-item__remove" @click="removeItem(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
                Remove
              </button>
            </div>
          </div>
        </div>

        <a href="#" class="continue-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Continue Shopping
        </a>
      </div>

      <!-- Right: Order Summary -->
      <div class="summary">
        <h2 class="summary__title">Order Summary</h2>

        <div class="summary__rows">
          <div class="summary__row">
            <span>Subtotal</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="summary__row">
            <span>Shipping</span>
            <span class="summary__free">FREE</span>
          </div>
          <div class="summary__row">
            <span>Estimated Tax</span>
            <span>${{ tax.toFixed(2) }}</span>
          </div>
        </div>

        <div class="summary__promo">
          <span class="summary__promo-label">PROMO CODE</span>
          <div class="summary__promo-row">
            <input v-model="promoCode" type="text" class="summary__promo-input" placeholder="ENTER CODE" />
            <button class="summary__promo-btn" @click="applyPromo">Apply</button>
          </div>
        </div>

        <div class="summary__total">
          <span>Total</span>
          <span class="summary__total-val">${{ total.toFixed(2) }}</span>
        </div>

        <button class="btn-checkout" @click="checkout">PROCEED TO CHECKOUT</button>

        <div class="summary__payment">
          <div class="payment-icons">
            <div class="payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
              </svg>
            </div>
            <div class="payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <p class="summary__secure">SECURE ENCRYPTED CHECKOUT. WE ACCEPT ALL MAJOR CREDIT CARDS AND DIGITAL WALLETS.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__brand">
          <h3 class="footer__logo">Tech Atelier</h3>
          <p class="footer__tagline">Elevating your digital lifestyle with hand-picked technology exhibits.</p>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Shop</h4>
          <ul>
            <li><a href="#">Latest Releases</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Exclusives</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Support</h4>
          <ul>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Company</h4>
          <ul>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2024 TechCurator Editorial. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      promoCode: '',
      cartItems: [
        {
          id: 1,
          name: 'AtelierBook M3 Pro',
          variant: '16GB RAM / 512GB SSD / Space Grey',
          price: 1899,
          qty: 1,
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&q=80',
        },
        {
          id: 2,
          name: 'SonicMaster Studio',
          variant: 'Active Noise Cancelling / 40h Battery',
          price: 349,
          qty: 2,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80',
        },
      ],
    }
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    },
    tax() {
      return this.subtotal * 0.0825
    },
    total() {
      return this.subtotal + this.tax
    },
  },
  methods: {
    decQty(item) {
      if (item.qty > 1) item.qty--
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(i => i.id !== id)
    },
    applyPromo() {
      alert(`Promo code "${this.promoCode}" applied!`)
    },
    checkout() {
      alert('Proceeding to checkout...')
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

.navbar__logo {
  font-size: 18px;
  font-weight: 700;
  color: #0f0f1a;
  letter-spacing: -0.3px;
}

.navbar__links {
  display: flex;
  gap: 32px;
}

.navbar__link {
  text-decoration: none;
  color: #666;
  font-size: 13.5px;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar__link:hover {
  color: #111;
}

.navbar__icons {
  display: flex;
  gap: 8px;
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
  position: relative;
  transition: background 0.2s;
}

.icon-btn:hover {
  background: #f5f5f5;
}

.cart-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: #2563eb;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Content ── */
.content {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 28px;
  padding: 48px 48px 64px;
  flex: 1;
  align-items: start;
}

/* ── Cart Section ── */
.cart-title {
  font-size: 36px;
  font-weight: 900;
  color: #0f0f1a;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.cart-sub {
  font-size: 14px;
  color: #9ca3af;
  margin-bottom: 32px;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e8eaed;
  padding: 20px 24px;
}

.cart-item__img {
  width: 100px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f3f4f6;
}

.cart-item__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item__info {
  flex: 1;
}

.cart-item__name {
  font-size: 15px;
  font-weight: 700;
  color: #0f0f1a;
  margin-bottom: 4px;
}

.cart-item__variant {
  font-size: 12.5px;
  color: #9ca3af;
  margin-bottom: 8px;
}

.cart-item__price {
  font-size: 14px;
  font-weight: 700;
  color: #2563eb;
}

.cart-item__controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.qty {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.qty__btn {
  width: 36px;
  height: 36px;
  background: #f9fafb;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  font-family: 'Inter', sans-serif;
}

.qty__btn:hover {
  background: #f0f0f0;
}

.qty__val {
  width: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #0f0f1a;
  border-left: 1.5px solid #e5e7eb;
  border-right: 1.5px solid #e5e7eb;
  line-height: 36px;
}

.cart-item__total {
  font-size: 15px;
  font-weight: 700;
  color: #0f0f1a;
}

.cart-item__remove {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #ef4444;
  transition: opacity 0.2s;
  font-family: 'Inter', sans-serif;
}

.cart-item__remove:hover {
  opacity: 0.7;
}

.continue-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
  transition: gap 0.2s;
}

.continue-link:hover {
  gap: 12px;
}

/* ── Summary ── */
.summary {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8eaed;
  padding: 32px 28px;
  position: sticky;
  top: 76px;
}

.summary__title {
  font-size: 22px;
  font-weight: 800;
  color: #0f0f1a;
  margin-bottom: 24px;
  letter-spacing: -0.3px;
}

.summary__rows {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 24px;
}

.summary__row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #374151;
}

.summary__free {
  color: #ef4444;
  font-weight: 700;
  font-size: 13px;
}

.summary__promo {
  margin-bottom: 24px;
}

.summary__promo-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.summary__promo-row {
  display: flex;
  gap: 0;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.summary__promo-input {
  flex: 1;
  padding: 10px 14px;
  border: none;
  outline: none;
  font-size: 13px;
  color: #374151;
  background: #fff;
  font-family: 'Inter', sans-serif;
}

.summary__promo-input::placeholder {
  color: #c4c9d4;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.summary__promo-btn {
  padding: 10px 18px;
  background: #f3f4f6;
  border: none;
  border-left: 1.5px solid #e5e7eb;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: background 0.2s;
  font-family: 'Inter', sans-serif;
}

.summary__promo-btn:hover {
  background: #e5e7eb;
}

.summary__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 24px;
  border-top: 1px solid #f3f4f6;
  margin-bottom: 20px;
}

.summary__total span:first-child {
  font-size: 15px;
  font-weight: 600;
  color: #374151;
}

.summary__total-val {
  font-size: 28px;
  font-weight: 900;
  color: #0f0f1a;
  letter-spacing: -1px;
}

.btn-checkout {
  width: 100%;
  padding: 16px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 24px;
  font-family: 'Inter', sans-serif;
}

.btn-checkout:hover {
  background: #1d4ed8;
}

.summary__payment {
  text-align: center;
}

.payment-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.payment-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
}

.summary__secure {
  font-size: 10px;
  color: #9ca3af;
  letter-spacing: 0.4px;
  line-height: 1.6;
  text-transform: uppercase;
}

/* ── Footer ── */
.footer {
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding: 0 48px;
}

.footer__top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 56px 0 40px;
}

.footer__logo {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0f0f1a;
}

.footer__tagline {
  font-size: 13px;
  color: #888;
  line-height: 1.65;
  max-width: 210px;
}

.footer__heading {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #0f0f1a;
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
  color: #888;
  transition: color 0.2s;
}

.footer__col ul a:hover {
  color: #0f0f1a;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  font-size: 12px;
  color: #bbb;
}
</style>
