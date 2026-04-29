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

    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a href="#">Products</a>
      <span>/</span>
      <span class="breadcrumb__current">{{ product?.product_name }}</span>
    </div>


    <!-- Product Section -->
    <section class="product">
      <!-- Left: Images -->
      <div class="product__gallery">
        <div class="product__main-img">
      <img :src="product?.images?.[activeImg]?.img_url" alt="Product" />
        </div>
        <div class="product__thumbs">
       <div
          v-for="(img, i) in product?.images"
          :key="img.image_id"
          class="product__thumb"
          :class="{ 'product__thumb--active': activeImg === i }"
          @click="activeImg = i"
        >
          <img :src="img.img_url" :alt="'Thumb ' + i" />
        </div>
        </div>
      </div>

      <!-- Right: Info -->
      <div class="product__info">
        <h1 class="product__title">{{ product?.product_name }}</h1>

        <div class="product__rating">
          <div class="stars">
            <span v-for="i in 5" :key="i" class="star" :class="{ 'star--half': i === 5 }">★</span>
          </div>
          <span class="rating__text">4.9/5 from 120 reviews</span>
        </div>

        <p class="product__price">$ {{ Number(product?.product_price).toLocaleString()}}</p>

        <p class="product__desc">{{ product?.description}}</p>

        <!-- Memory -->
        <div class="option-group">
          <span class="option-group__label">MEMORY (RAM)</span>
          <div class="option-group__items">
            <button
              v-for="m in memoryOptions"
              :key="m"
              class="option-btn"
              :class="{ 'option-btn--active': selectedMemory === m }"
              @click="selectedMemory = m"
            >{{ m }}</button>
          </div>
        </div>

        <!-- Storage -->
        <div class="option-group">
          <span class="option-group__label">STORAGE</span>
          <div class="option-group__items">
            <button
              v-for="s in storageOptions"
              :key="s"
              class="option-btn"
              :class="{ 'option-btn--active': selectedStorage === s }"
              @click="selectedStorage = s"
            >{{ s }}</button>
          </div>
        </div>

        <!-- Actions -->
        <div class="product__actions">
          <button class="btn-cart" @click="addToCart">ADD TO CART</button>
          <button class="btn-wish" :class="{ 'btn-wish--active': wished }" @click="wished = !wished">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="wished ? 'fill:#ef4444;stroke:#ef4444' : ''">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>

        <!-- Perks -->
        <div class="product__perks">
          <div class="perk">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
            </svg>
            Free shipping
          </div>
          <div class="perk">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            2-year warranty
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specifications -->
    <section class="specs">
      <h2 class="section-title">Technical Specifications</h2>
      <div class="specs__grid">
        <div class="spec-card" v-for="spec in specs" :key="spec.label">
          <span class="spec-card__category">{{ spec.category }}</span>
          <p class="spec-card__title">{{ spec.title }}</p>
          <p class="spec-card__sub">{{ spec.sub }}</p>
        </div>
      </div>
    </section>

    <!-- Community Feedback -->
    <section class="feedback">
      <div class="feedback__header">
        <div>
          <h2 class="section-title">Community Feedback</h2>
          <p class="feedback__sub">Trusted by professionals worldwide.</p>
        </div>
        <button class="btn-review">Write a Review</button>
      </div>
      <div class="feedback__grid">
        <div class="review-card" v-for="review in reviews" :key="review.name">
          <div class="review-card__top">
            <div class="review-card__avatar">{{ review.initials }}</div>
            <div class="review-card__meta">
              <span class="review-card__name">{{ review.name }}</span>
              <span class="review-card__role">{{ review.role }}</span>
            </div>
            <div class="review-card__stars">
              <span v-for="i in 5" :key="i" class="star">★</span>
            </div>
          </div>
          <p class="review-card__text">"{{ review.text }}"</p>
        </div>
      </div>
    </section>

    <!-- Complete Your Atelier -->
    <section class="related">
      <h2 class="section-title">Complete Your Atelier</h2>
      <div class="related__grid">
        <div class="related-card" v-for="item in relatedItems" :key="item.name">
          <div class="related-card__img">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="related-card__info">
            <span class="related-card__category">{{ item.category }}</span>
            <p class="related-card__name">{{ item.name }}</p>
            <p class="related-card__price">{{ item.price }}</p>
          </div>
        </div>
      </div>
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
import { getDetailProductApi } from '../../services/NotAuth.Service/GetDetailProduct.Service';

export default {
  name: 'ProductDetailPage',
  data() {
    return {
      activeImg: 0,
      wished: false,
      selectedMemory: '32GB',
      selectedStorage: '1TB',
      memoryOptions: ['32GB', '64GB', '128GB'],
      storageOptions: ['1TB', '2TB', '4TB'],
      product: null,
      reviews: [
        {
          initials: 'JD',
          name: 'Julian D.',
          role: 'Verified Architect',
          text: 'The rendering speeds on the M3 chip are unprecedented. I\'ve cut my project timelines by 30%. The display calibration is studio-grade out of the box.',
        },
        {
          initials: 'AM',
          name: 'Alisha M.',
          role: 'Visual Director',
          text: 'Finally, a laptop that doesn\'t thermal throttle under heavy 8K video exports. The build quality feels like a piece of precision engineering.',
        },
      ],
      relatedItems: [
        {
          category: 'DISPLAYS',
          name: 'Atelier View 32" 6K',
          price: '$1,499.00',
          image: 'https://images.unsplash.com/photo-1527443224154-c4a573d05e2a?w=400&q=80',
        },
        {
          category: 'PERIPHERALS',
          name: 'Atelier Click Pro',
          price: '$249.00',
          image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
        },
        {
          category: 'ACCESSORIES',
          name: 'Atelier Leather Sleeve',
          price: '$129.00',
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
        },
      ],
    }
  },
  async mounted (){
    await this.fetchProductDetail();
  },
  methods: {
    async fetchProductDetail(){
      const productId = this.$route.params.id;
      console.log("id", productId)
      const res = await getDetailProductApi(productId);
      this.product = res;
      console.log(res);
    },

    addToCart() {
      alert(`Added: ${this.selectedMemory} / ${this.selectedStorage}`)
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
  background: #fff;
  color: #111827;
  -webkit-font-smoothing: antialiased;
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
  padding-bottom: 3px;
}

.navbar__link--active {
  color: #2563eb;
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

/* ── Breadcrumb ── */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 48px;
  font-size: 12px;
  color: #9ca3af;
}

.breadcrumb a {
  text-decoration: none;
  color: #9ca3af;
  transition: color 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.breadcrumb a:hover {
  color: #374151;
}

.breadcrumb__current {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #374151;
  font-weight: 600;
}

/* ── Product Section ── */
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  padding: 32px 48px 64px;
  align-items: start;
}

/* Gallery */
.product__main-img {
  border-radius: 12px;
  overflow: hidden;
  background: #f3f4f6;
  aspect-ratio: 4/3;
}

.product__main-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product__thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 12px;
}

.product__thumb {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  aspect-ratio: 1;
  background: #f3f4f6;
}

.product__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product__thumb--active {
  border-color: #2563eb;
}

/* Info */
.product__title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #0f0f1a;
  margin-bottom: 16px;
}

.product__rating {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #f59e0b;
  font-size: 16px;
}

.star--half {
  color: #d1d5db;
}

.rating__text {
  font-size: 13px;
  color: #6b7280;
}

.product__price {
  font-size: 28px;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 20px;
}

.product__desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.75;
  margin-bottom: 28px;
}

/* Options */
.option-group {
  margin-bottom: 20px;
}

.option-group__label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.option-group__items {
  display: flex;
  gap: 8px;
}

.option-btn {
  padding: 8px 20px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s;
  font-family: 'Inter', sans-serif;
}

.option-btn:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.option-btn--active {
  border-color: #2563eb;
  background: #eff6ff;
  color: #2563eb;
}

/* Actions */
.product__actions {
  display: flex;
  gap: 12px;
  margin: 28px 0 24px;
}

.btn-cart {
  flex: 1;
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
  font-family: 'Inter', sans-serif;
}

.btn-cart:hover {
  background: #1d4ed8;
}

.btn-wish {
  width: 52px;
  height: 52px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: all 0.2s;
}

.btn-wish:hover {
  border-color: #ef4444;
  color: #ef4444;
}

.btn-wish--active {
  border-color: #ef4444;
}

/* Perks */
.product__perks {
  display: flex;
  gap: 32px;
}

.perk {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
}

/* ── Sections ── */
.section-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f0f1a;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

/* Specs */
.specs {
  padding: 64px 48px;
  background: #f9fafb;
  border-top: 1px solid #f0f0f0;
}

.specs__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.spec-card {
  background: #fff;
  border: 1px solid #e8eaed;
  border-radius: 12px;
  padding: 24px;
}

.spec-card__category {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #2563eb;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

.spec-card__title {
  font-size: 16px;
  font-weight: 700;
  color: #0f0f1a;
  margin-bottom: 6px;
}

.spec-card__sub {
  font-size: 13px;
  color: #9ca3af;
}

/* Feedback */
.feedback {
  padding: 64px 48px;
}

.feedback__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}

.feedback__sub {
  font-size: 13.5px;
  color: #9ca3af;
  margin-top: 4px;
}

.btn-review {
  padding: 10px 20px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
}

.btn-review:hover {
  background: #f3f4f6;
}

.feedback__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.review-card {
  background: #f9fafb;
  border: 1px solid #e8eaed;
  border-radius: 12px;
  padding: 24px;
}

.review-card__top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.review-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #2563eb;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.review-card__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.review-card__name {
  font-size: 14px;
  font-weight: 700;
  color: #0f0f1a;
}

.review-card__role {
  font-size: 12px;
  color: #9ca3af;
}

.review-card__stars {
  display: flex;
  gap: 1px;
}

.review-card__text {
  font-size: 13.5px;
  color: #4b5563;
  line-height: 1.7;
  font-style: italic;
}

/* Related */
.related {
  padding: 64px 48px;
  background: #f9fafb;
  border-top: 1px solid #f0f0f0;
}

.related__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.related-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e8eaed;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.related-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}

.related-card__img {
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
}

.related-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.related-card:hover .related-card__img img {
  transform: scale(1.04);
}

.related-card__info {
  padding: 16px 20px 20px;
}

.related-card__category {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #9ca3af;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}

.related-card__name {
  font-size: 15px;
  font-weight: 700;
  color: #0f0f1a;
  margin-bottom: 6px;
}

.related-card__price {
  font-size: 15px;
  font-weight: 700;
  color: #2563eb;
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
