<template>
  <div class="home">
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


    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content">
        <span class="hero__badge">NEW RELEASE</span>
        <h1 class="hero__title">
          Next-Gen<br>
          <span class="hero__title--blue">Performance.</span>
        </h1>
        <p class="hero__desc">
          Experience the pinnacle of engineering with the all-new Atelier Pro.
          Designed for those who demand absolute precision and raw power.
        </p>
        <div class="hero__actions">
          <button class="btn btn--primary">BUY NOW</button>
          <button class="btn btn--text">LEARN MORE</button>
        </div>
      </div>
      <div class="hero__image">
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=80" alt="Laptop" />
      </div>
    </section>

    <!-- Categories -->
    <section class="categories">
      <div class="category-card" v-for="cat in categories" :key="cat.category_name">
        <div class="category-card__icon">
          <span v-html="categoryIcons[cat.category_name] || categoryIcons.default"></span>
        </div>
        <p class="category-card__name">{{ cat.category_name }}</p>
      </div>
    </section>

    <!-- Hot Deals -->
    <section class="hot-deals">
      <div class="hot-deals__header">
        <div>
          <h2 class="hot-deals__title">Hot Deals</h2>
          <p class="hot-deals__sub">Hand-picked curated technology for your lifestyle.</p>
        </div>
        <a href="#" class="hot-deals__view-all">View All &#8594;</a>
      </div>
      <div class="product-grid">
        <RouterLink
          v-for="product in hotDeals"
          :key="product.product_id"
          :to="{name: 'ProductDetailPage', params: {id: product.product_id}}"
          class="product-card">
          <div class="product-card__img">
            <img :src="product.images?.[0]?.img_url" :alt="product.product_name" />
            <button class="product-card__wishlist" @click.stop.prevent="toggleWishlist(product)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{ 'wished': product.wished }">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="product-card__info">
            <p class="product-card__name">{{ product.product_name }}</p>
            <p class="rating-score">{{ product.description }}</p>
            <p class="rating-count">{{ product.category }}</p>
            <p class="product-card__price">${{ product.product_price.toFixed() }}</p>
            <button class="btn btn--outline btn--sm" @click.stop.prevent="buyNow(product)">BUY NOW</button>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Brands -->
    <section class="brands">
      <h3 class="brands__title">Trusted Brands</h3>
      <div class="brands__track-wrapper">
        <div class="brands__track">
          <div class="brand-card" v-for="(brand, i) in [...brands, ...brands, ...brands, ...brands]" :key="brand.name + i">
            <div class="brand-card__logo" :style="{ background: brand.bg }">
              <span class="brand-card__icon" v-html="brand.icon"></span>
            </div>
            <span class="brand-card__name">{{ brand.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
      <h2 class="newsletter__title">Stay Informed.</h2>
      <p class="newsletter__sub">
        Subscribe to get early access to exclusive product drops, curated tech news,<br />
        and member-only pricing.
      </p>
      <form class="newsletter__form" @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          class="newsletter__input"
          placeholder="Enter your email"
        />
        <button type="submit" class="newsletter__btn">JOIN NOW</button>
      </form>
      <p class="newsletter__terms">By subscribing, you agree to our privacy policy and terms.</p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__brand">
          <h3 class="footer__logo">Tech Atelier</h3>
          <p class="footer__tagline">Curating the world's most innovative technology to elevate your digital lifestyle.</p>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Shop</h4>
          <ul>
            <li><a href="#">Computers</a></li>
            <li><a href="#">Audio Equipment</a></li>
            <li><a href="#">Smart Home</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4 class="footer__heading">Company</h4>
          <ul>
            <li><a href="#">About Atelier</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2018 Tech Atelier. All rights reserved.</span>
        <div class="footer__social">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { getTopProductApi } from '../../services/NotAuth.Service/GetTopProduct.Service';
import { getAllCategoriesApi } from '../../services/NotAuth.Service/GetAlllCategory.Service';

export default {
  name: 'HomePage',
  data() {
    return {
      email: '',
      categories: [],
      categoryIcons: {
        'Laptop':  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
        'Phone':   '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
        'Watches': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        'Audio':   '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18v-6a9 9 0 0118 0v6"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>',
        'default': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
      },
      brands: [
        {
          name: 'Apple',
          bg: '#000',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.46 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/></svg>'
        },
        {
          name: 'Samsung',
          bg: '#1428a0',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 200 40" fill="#fff"><text x="100" y="28" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" text-anchor="middle" letter-spacing="1">SAMSUNG</text></svg>'
        },
        {
          name: 'Sony',
          bg: '#000',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 200 40" fill="#fff"><text x="100" y="30" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" font-style="italic" text-anchor="middle" letter-spacing="2">SONY</text></svg>'
        },
        {
          name: 'Dell',
          bg: '#0076ce',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 100 60" fill="#fff"><text x="50" y="42" font-family="Arial, sans-serif" font-size="36" font-weight="700" text-anchor="middle">DELL</text></svg>'
        },
        {
          name: 'Asus',
          bg: '#0b1f3a',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 100 40" fill="#fff"><text x="50" y="28" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" text-anchor="middle" letter-spacing="1">ASUS</text></svg>'
        },
      ],
      hotDeals: [],
    }
  },
  async mounted(){
     await this.fetchTopProductList();
     await this.fetchAllCategory();
    },
  methods: {
    // Api lấy top sản phẩm
    async fetchTopProductList(){
        const res = await getTopProductApi();
        this.hotDeals = res;
    },
    // Api lấy tất cả category
    async fetchAllCategory(){
        const res = await getAllCategoriesApi();
        this.categories = res;
        console.log("data : ", res)
    },
    subscribe() {
      if (this.email) {
        alert(`Subscribed with: ${this.email}`)
        this.email = ''
      }
    },
    toggleWishlist(product) {
      product.wished = !product.wished
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

.home {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  color: #1a1a2e;
  background: #fff;
  min-width: 0;
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
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.3px;
  white-space: nowrap;
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
  padding-bottom: 3px;
  transition: color 0.2s;
  white-space: nowrap;
}

.navbar__link.active {
  color: #111;
  border-bottom: 2px solid #2563eb;
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
}

.icon-btn:hover {
  background: #f5f5f5;
}

.cart-btn {
  position: relative;
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

/* ── Hero ── */
.hero {
  display: flex;
  align-items: center;
  padding: 60px 80px 60px 360px;
  background: #f3f4f6;
  min-height: 520px;
  gap: 48px;
  overflow: hidden;
}

.hero__content {
  flex: 0 0 400px;
}

.hero__badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #2563eb;
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  margin-bottom: 24px;
  text-transform: uppercase;
  background: #dbeafe;
}

.hero__title {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 20px;
  color: #0f0f1a;
}

.hero__title--blue {
  color: #2563eb;
}

.hero__desc {
  font-size: 14px;
  color: #666;
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 360px;
}

.hero__actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.hero__image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image img {
  width: 600px;
  max-width: 100%;
  border-radius: 4px;
  object-fit: cover;
  transform: rotate(2deg);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18);
}

/* ── Buttons ── */
.btn {
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 4px;
  padding: 13px 26px;
  border: none;
  transition: all 0.18s;
  text-transform: uppercase;
}

.btn--primary {
  background: #2563eb;
  color: #fff;
}

.btn--primary:hover {
  background: #1d4ed8;
}

.btn--text {
  background: transparent;
  color: #2563eb;
  border: none;
  padding-left: 4px;
  padding-right: 4px;
  font-weight: 700;
  letter-spacing: 1px;
}

.btn--text:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.btn--outline {
  background: #f0f1f3;
  border: 1px solid #e0e0e0;
  color: #333;
  font-weight: 700;
}

.btn--outline:hover {
  background: #e4e5e8;
}

.btn--sm {
  padding: 10px 0;
  font-size: 11px;
  width: 100%;
  margin-top: 12px;
  letter-spacing: 0.8px;
}

/* ── Categories ── */
.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 92px 48px 40px;
  background: #fff;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 32px 16px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-card:hover {
  background: #2563eb;
  border-color: #2563eb;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.25);
}

.category-card:hover .category-card__icon {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.category-card:hover .category-card__name {
  color: #fff;
}

.category-card__icon {
  width: 56px;
  height: 56px;
  background: #e8e9eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  transition: all 0.2s;
}

.category-card__name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  transition: color 0.2s;
}

/* ── Hot Deals ── */
.hot-deals {
  padding: 40px 48px 56px;
  background: #fff;
}

.hot-deals__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
}

.hot-deals__title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #0f0f1a;
}

.hot-deals__sub {
  font-size: 13px;
  color: #888;
}

.hot-deals__view-all {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.hot-deals__view-all:hover {
  text-decoration: underline;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.product-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  border-color: #d8d8d8;
}

.product-card__img {
  aspect-ratio: 4 / 3;
  position: relative;
  background: #f5f6f8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 12px 12px 0;
  border-radius: 8px;
}

.product-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .product-card__img img {
  transform: scale(1.04);
}

.product-card__wishlist {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  color: #bbb;
}

.product-card:hover .product-card__wishlist {
  opacity: 1;
}

.product-card__wishlist svg.wished {
  fill: #ef4444;
  stroke: #ef4444;
  color: #ef4444;
}

.product-card__info {
  padding: 14px 14px 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 6px;
}

.star {
  color: #f59e0b;
  font-size: 12px;
}

.rating-score {
  font-size: 11.5px;
  font-weight: 600;
  color: #555;
}

.rating-count {
  font-size: 11px;
  color: #aaa;
}

.product-card__name {
  font-size: 14px;
  font-weight: 700;
  color: #0f0f1a;
  margin-bottom: 6px;
  line-height: 1.4;
}

.product-card__price {
  font-size: 15px;
  font-weight: 700;
  color: #2563eb;
}

/* ── Brands ── */
.brands {
  padding: 48px 48px 56px;
  background: #fafafa;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  overflow: hidden;
}

.brands__title {
  font-size: 15px;
  font-weight: 600;
  color: #aaa;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.brands__track-wrapper {
  overflow: hidden;
  width: 100%;
}

.brands__track {
  display: flex;
  gap: 24px;
  animation: slide-brands 24s linear infinite;
  width: max-content;
}

.brands__track:hover {
  animation-play-state: paused;
}

@keyframes slide-brands {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}

.brand-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  flex-shrink: 0;
}

.brand-card__logo {
  width: 160px;
  height: 100px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
}

.brand-card:hover .brand-card__logo {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.brand-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
}

.brand-card__name {
  font-size: 13px;
  font-weight: 600;
  color: #999;
  letter-spacing: 0.5px;
}

/* ── Newsletter ── */
.newsletter {
  background: #3b5bdb;
  color: #fff;
  text-align: center;
  padding: 72px 48px;
  margin: 40px 32px 40px;
  border-radius: 20px;
}

.newsletter__title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 14px;
  letter-spacing: -0.5px;
}

.newsletter__sub {
  font-size: 14px;
  opacity: 0.82;
  line-height: 1.75;
  margin-bottom: 36px;
}

.newsletter__form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  max-width: 520px;
  margin: 0 auto 14px;
}

.newsletter__input {
  flex: 1;
  padding: 0 20px;
  font-size: 13.5px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: #333;
  background: rgba(255, 255, 255, 0.18);
  height: 52px;
  color: #fff;
}

.newsletter__input::placeholder {
  color: rgba(255, 255, 255, 0.65);
}

.newsletter__btn {
  padding: 0 28px;
  background: #fff;
  color: #3b5bdb;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
  white-space: nowrap;
  height: 52px;
  transition: background 0.18s;
}

.newsletter__btn:hover {
  background: #e8efff;
}

.newsletter__terms {
  font-size: 11px;
  opacity: 0.5;
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

.footer__social {
  display: flex;
  gap: 24px;
}

.footer__social a {
  text-decoration: none;
  color: #bbb;
  font-size: 12px;
  transition: color 0.2s;
}

.footer__social a:hover {
  color: #333;
}
</style>
