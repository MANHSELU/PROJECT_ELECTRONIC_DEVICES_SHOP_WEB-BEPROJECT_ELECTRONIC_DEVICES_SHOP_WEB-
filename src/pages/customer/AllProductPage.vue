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


    <div class="layout">
      <!-- Sidebar Filters -->
      <aside class="sidebar">
        <div class="sidebar__header">
          <h3 class="sidebar__title">Filters</h3>
          <p class="sidebar__sub">REFINE YOUR SELECTION</p>
        </div>

        <!-- Categories -->
        <div class="filter-group">
          <div class="filter-group__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            CATEGORIES
          </div>
          <label class="checkbox" v-for="cat in categories" :key="cat">
            <input type="checkbox" v-model="selectedCategories" :value="cat" />
            <span class="checkbox__box"></span>
            <span class="checkbox__label">{{ cat }}</span>
          </label>
        </div>

        <!-- Price Range -->
        <div class="filter-group">
          <div class="filter-group__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            PRICE RANGE
          </div>
          <input type="range" class="range-slider" v-model="maxPrice" min="0" max="5000" step="50" />
          <div class="range-labels">
            <span>$0</span>
            <span>{{ maxPrice >= 5000 ? '$5,000+' : '$' + maxPrice }}</span>
          </div>
        </div>

        <!-- Brand -->
        <div class="filter-group">
          <div class="filter-group__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            BRAND
          </div>
          <label class="radio" v-for="brand in brandFilters" :key="brand">
            <input type="radio" v-model="selectedBrand" :value="brand" name="brand" />
            <span class="radio__dot"></span>
            <span class="radio__label">{{ brand }}</span>
          </label>
        </div>

        <!-- Connectivity -->
        <div class="filter-group">
          <div class="filter-group__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>
            CONNECTIVITY
          </div>
          <div class="tag-group">
            <span
              class="tag"
              v-for="conn in connectivityOptions"
              :key="conn"
              :class="{ 'tag--active': selectedConnectivity.includes(conn) }"
              @click="toggleConnectivity(conn)"
            >{{ conn }}</span>
          </div>
        </div>

        <!-- Sustainability -->
        <div class="filter-group">
          <div class="filter-group__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            SUSTAINABILITY
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="recycledOnly" />
            <span class="toggle__track"></span>
            <span class="toggle__label">Recycled Materials</span>
          </label>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main">
        <div class="main__header">
          <div>
            <h1 class="main__title">Products Archive</h1>
            <p class="main__sub">{{ filteredProducts.length }} carefully curated instruments for the modern digital workspace.</p>
          </div>
          <div class="sort">
            <span class="sort__label">SORT BY:</span>
            <select v-model="sortBy" class="sort__select">
              <option value="popularity">Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="product-grid">
          <div
            class="product-card"
            v-for="product in paginatedProducts"
            :key="product.product_id"
          >
            <RouterLink
              :to="{ name: 'ProductDetailPage', params: { id: product.product_id } }"
              class="product-card__link"
            >
              <div class="product-card__img">
                <img :src="product.images?.[0]?.img_url" :alt="product.product_name" />
                <button
                  class="product-card__wishlist"
                  @click.prevent.stop="product.wished = !product.wished"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" :fill="product.wished ? '#ef4444' : 'none'" :stroke="product.wished ? '#ef4444' : '#999'" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </button>
              </div>
              <div class="product-card__info">
                <div class="product-card__top">
                  <h3 class="product-card__name">{{ product.product_name }}</h3>
                </div>
                <p class="product-card__desc">{{ product.description }}</p>
                <p class="product-card__price">${{ product.product_price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
                <button class="product-card__buy" @click.prevent.stop>BUY NOW</button>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">&#8249;</button>
          <button
            class="page-btn"
            v-for="p in totalPages"
            :key="p"
            :class="{ 'page-btn--active': p === currentPage }"
            @click="currentPage = p"
          >{{ p }}</button>
          <span class="page-btn page-btn--dots" v-if="totalPages > 4">...</span>
          <span class="page-btn">12</span>
          <button class="page-btn" :disabled="currentPage === totalPages" @click="currentPage++">&#8250;</button>
        </div>
      </main>
    </div>

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
import { getAllProductApi } from '../../services/NotAuth.Service/GetAllProduct.Service';

export default {
  name: 'AllProductPage',
  data() {
    return {
      searchQuery: '',
      sortBy: 'popularity',
      currentPage: 1,
      perPage: 8,
      maxPrice: 5000,
      selectedCategories: [],
      selectedBrand: null,
      selectedConnectivity: [],
      recycledOnly: false,
      categories: ['Laptops', 'Phones', 'Audio', 'Accessories'],
      brandFilters: ['Atelier Pro', 'Zenith Tech', 'Lumina'],
      connectivityOptions: ['Wifi 6E', 'Bluetooth 5.3', '5G'],
      products: [],
    }
  },
  computed: {
    filteredProducts() {
      let list = this.products
      if (this.selectedCategories.length) {
        list = list.filter(p => this.selectedCategories.includes(p.category))
      }
      if (this.selectedBrand) {
        list = list.filter(p => p.brand === this.selectedBrand)
      }
      if (this.maxPrice < 5000) {
        list = list.filter(p => p.price <= this.maxPrice)
      }
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase()
        list = list.filter(p => p.name.toLowerCase().includes(q))
      }
      if (this.sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
      else if (this.sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
      else if (this.sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
      return list
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.perPage)
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.perPage
      return this.filteredProducts.slice(start, start + this.perPage)
    },
  },
  async mounted (){
    await this.fetchGetAllProduct();
  },
  methods: {
    toggleConnectivity(conn) {
      const idx = this.selectedConnectivity.indexOf(conn)
      if (idx === -1) this.selectedConnectivity.push(conn)
      else this.selectedConnectivity.splice(idx, 1)
    },
    async fetchGetAllProduct (){
      const res = await getAllProductApi();
      this.products = res;
    }
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
  color: #1a1a2e;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  position: relative;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar__link {
  text-decoration: none;
  color: #666;
  font-size: 13.5px;
  font-weight: 500;
  padding-bottom: 3px;
  transition: color 0.2s;
}

.navbar__link.active {
  color: #111;
  border-bottom: 2px solid #2563eb;
}

.navbar__link:hover {
  color: #111;
}

.navbar__search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f5f6f8;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  padding: 6px 14px;
  width: 220px;
  color: #999;
  margin-left: auto;
}

.navbar__search input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  color: #333;
  width: 100%;
}

.navbar__search input::placeholder {
  color: #aaa;
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
  transition: background 0.2s;
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

/* ── Layout ── */
.layout {
  display: flex;
  flex: 1;
  gap: 0;
  padding: 32px 32px;
  width: 100%;
  align-items: flex-start;
}

/* ── Sidebar ── */
.sidebar {
  width: 320px;
  flex-shrink: 0;
  background: #f5f6f8;
  border-radius: 12px;
  padding: 24px 24px 24px 24px;
  position: sticky;
  top: 72px;
}

.sidebar__title {
  font-size: 16px;
  font-weight: 700;
  color: #111;
  margin-bottom: 2px;
}

.sidebar__sub {
  font-size: 10px;
  color: #bbb;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.filter-group {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.filter-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.filter-group__label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #2563eb;
  margin-bottom: 12px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 8px;
}

.checkbox input {
  display: none;
}

.checkbox__box {
  width: 16px;
  height: 16px;
  border: 1.5px solid #ddd;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
}

.checkbox input:checked ~ .checkbox__box {
  background: #2563eb;
  border-color: #2563eb;
}

.checkbox input:checked ~ .checkbox__box::after {
  content: '';
  width: 8px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg) translateY(-1px);
  display: block;
}

.checkbox__label {
  font-size: 13px;
  color: #444;
}

.radio {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 8px;
}

.radio input {
  display: none;
}

.radio__dot {
  width: 16px;
  height: 16px;
  border: 1.5px solid #ddd;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.radio input:checked ~ .radio__dot {
  border-color: #2563eb;
}

.radio input:checked ~ .radio__dot::after {
  content: '';
  width: 8px;
  height: 8px;
  background: #2563eb;
  border-radius: 50%;
  display: block;
}

.radio__label {
  font-size: 13px;
  color: #444;
}

/* Range slider */
.range-slider {
  width: 100%;
  accent-color: #2563eb;
  margin-bottom: 6px;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #888;
}

/* Tags */
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1.5px solid #e0e0e0;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.tag--active {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

/* Toggle */
.toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.toggle input {
  display: none;
}

.toggle__track {
  width: 36px;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
}

.toggle__track::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

.toggle input:checked ~ .toggle__track {
  background: #2563eb;
}

.toggle input:checked ~ .toggle__track::after {
  transform: translateX(16px);
}

.toggle__label {
  font-size: 13px;
  color: #444;
}

/* ── Main ── */
.main {
  flex: 1;
  padding-left: 32px;
}

.main__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
}

.main__title {
  font-size: 40px;
  font-weight: 800;
  color: #0f0f1a;
  margin-bottom: 4px;
}

.main__sub {
  font-size: 13px;
  color: #888;
}

.sort {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #aaa;
}

.sort__select {
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 7px 32px 7px 12px;
  font-size: 13px;
  color: #333;
  background: #fff;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
}

/* ── Product Grid ── */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 40px;
}

.product-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  cursor: pointer;
}

.product-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
  border-color: #d8d8d8;
}

.product-card__link {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
  color: inherit;
}

.product-card__img {
  position: relative;
  aspect-ratio: 4 / 3;
  background: #f5f6f8;
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
}

.product-card:hover .product-card__wishlist {
  opacity: 1;
}

.product-card__wishlist:hover {
  transform: scale(1.1);
}

.product-card__info {
  padding: 14px 14px 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 6px;
}

.product-card__name {
  font-size: 13px;
  font-weight: 700;
  color: #0f0f1a;
  line-height: 1.4;
  margin-bottom: 6px;
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11.5px;
  font-weight: 600;
  color: #555;
  white-space: nowrap;
  margin-bottom: 6px;
}

.star {
  color: #f59e0b;
}

.product-card__desc {
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
  line-height: 1.5;
}

.product-card__price {
  font-size: 15px;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 2px;
}

.product-card__buy {
  margin-top: 10px;
  padding: 9px 0;
  width: 100%;
  background: #f0f1f3;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #333;
  cursor: pointer;
  transition: background 0.18s;
}

.product-card__buy:hover {
  background: #e4e5e8;
}

/* ── Pagination ── */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding-bottom: 40px;
}

.page-btn {
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #e0e0e0;
  background: #fff;
  color: #555;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
}

.page-btn:hover:not(:disabled):not(.page-btn--dots) {
  border-color: #2563eb;
  color: #2563eb;
}

.page-btn--active {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.page-btn--dots {
  border: none;
  background: transparent;
  cursor: default;
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
