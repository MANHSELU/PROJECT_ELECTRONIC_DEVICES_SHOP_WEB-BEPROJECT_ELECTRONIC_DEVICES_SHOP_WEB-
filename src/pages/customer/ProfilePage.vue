<template>
  <div class="home">
    <!-- Navbar (từ Home) -->
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


    <!-- Page Content -->
    <div class="profile-layout">

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar__user">
          <div class="sidebar__avatar">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&q=80" alt="Avatar" />
          </div>
          <p class="sidebar__name">The Collector</p>
          <p class="sidebar__role">Premium Member</p>
        </div>

        <nav class="sidebar__nav">
          <a href="#" class="sidebar__link sidebar__link--active">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Overview
          </a>
          <a href="#" class="sidebar__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Security
          </a>
          <a href="#" class="sidebar__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Orders
          </a>
          <a href="#" class="sidebar__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Preferences
          </a>
        </nav>

      </aside>

      <!-- Main Content -->
      <main class="profile-main">
        <h1 class="page-title">Your Profile</h1>
        <p class="page-sub">Manage your personal settings and preferences.</p>

        <!-- Profile Information -->
        <div class="card">
          <div class="card__header">
            <h2 class="card__title">Profile Information</h2>
            <button class="btn-edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
              UPDATE PROFILE
            </button>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label class="info-label">FULL NAME</label>
              <input class="info-input" v-model="profile.fullName" type="text" />
            </div>
            <div class="info-item">
              <span class="info-label">EMAIL ADDRESS</span>
              <span class="info-value">j.thorne@atelier.tech</span>
            </div>
            <div class="info-item">
              <label class="info-label">PHONE NUMBER</label>
              <input class="info-input" v-model="profile.phone" type="text" />
            </div>
            <div class="info-item">
              <span class="info-label">MEMBER SINCE</span>
              <span class="info-value">October 2022</span>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">ROLE</span>
              <span class="info-value">Premium Member</span>
            </div>
            <div class="info-item">
              <span class="info-label">ACCOUNT STATUS</span>
              <span class="info-status info-status--active">
                <span class="info-status__dot"></span>
                Active
              </span>
            </div>
          </div>
        </div>

        <!-- Shipping Address -->
        <div class="card">
          <div class="card__header">
            <h2 class="card__title">Shipping Address</h2>
            <a href="#" class="link-manage">Manage Addresses</a>
          </div>

          <div class="address-item">
            <div class="address-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <div class="address-body">
              <div class="address-name-row">
                <span class="address-name">Default Shipping</span>
                <span class="address-badge">PRIMARY</span>
              </div>
              <p class="address-text">742 Highgate Residences, Floor 12<br/>Chelsea Innovation District<br/>New York, NY 10011</p>
            </div>
          </div>
        </div>

      </main>

      <!-- Right Panel -->
      <aside class="right-panel">
        <!-- Linked Accounts -->
        <div class="card">
          <h2 class="card__title">Linked Accounts</h2>
          <div class="linked-list">
            <div class="linked-item">
              <div class="linked-icon linked-icon--github">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="linked-info">
                <span class="linked-name">GitHub</span>
                <span class="linked-status">Connected</span>
              </div>
              <button class="linked-unlink">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
              </button>
            </div>
            <div class="linked-item">
              <div class="linked-icon linked-icon--apple">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-98.8c-44.5-53.9-81.1-136.9-81.1-215.7 0-195.4 127.4-298.5 252.7-298.5 66.1 0 121.2 43.4 162.6 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                </svg>
              </div>
              <div class="linked-info">
                <span class="linked-name">Apple ID</span>
                <span class="linked-status">Connected</span>
              </div>
              <button class="linked-unlink">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
              </button>
            </div>
          </div>
          <button class="btn-add-connection">ADD CONNECTION</button>
        </div>

        <!-- Elite Member Card -->
        <div class="elite-card">
          <div class="elite-card__image">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80" alt="Elite" />
          </div>
          <div class="elite-card__body">
            <span class="elite-card__tag">EXCLUSIVE TIER</span>
          </div>
        </div>
      </aside>

    </div>

    <!-- Footer (từ Home) -->
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
export default {
  name: 'ProfilePage',
  data() {
    return {
      profile: {
        fullName: 'Julian Alexander Thorne',
        phone: '+1 (555) 892-0431',
      },
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

.home {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  color: #1a1a2e;
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
  color: #0f0f1a;
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

/* ── Layout ── */
.profile-layout {
  display: grid;
  grid-template-columns: 300px 1fr 280px;
  gap: 24px;
  padding: 40px 48px 40px 0;
  flex: 1;
  align-items: stretch;
}

/* ── Sidebar ── */
.sidebar {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e8eaed;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 2px 0 8px rgba(0,0,0,0.04);
}

.sidebar__user {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 8px 8px 20px;
  border-bottom: 1px solid #e8eaed;
  margin-bottom: 8px;
  text-align: center;
}

.sidebar__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid #e8eaed;
}

.sidebar__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sidebar__name {
  font-size: 14.5px;
  font-weight: 700;
  color: #0f0f1a;
  margin-top: 2px;
}

.sidebar__role {
  font-size: 12px;
  color: #6b7280;
  margin-top: -4px;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  color: #374151;
  transition: all 0.15s;
}

.sidebar__link:hover {
  background: #f3f4f6;
  color: #0f0f1a;
}

.sidebar__link--active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 700;
}

.sidebar__signout {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  margin-top: 16px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 500;
  color: #ef4444;
  border-radius: 8px;
  transition: background 0.15s;
  font-family: 'Inter', sans-serif;
}

.sidebar__signout:hover {
  background: #fef2f2;
}

/* ── Right Panel ── */
.right-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 76px;
  padding-top: 80px;
}

/* ── Main ── */
.page-title {
  font-size: 28px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
}

.page-sub {
  font-size: 13.5px;
  color: #9ca3af;
  margin-bottom: 24px;
}

.card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e8eaed;
  padding: 24px;
  margin-bottom: 20px;
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.card__title {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
}

.btn-edit {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: background 0.2s;
  font-family: 'Inter', sans-serif;
}

.btn-edit:hover {
  background: #1d4ed8;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 32px;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #9ca3af;
  text-transform: uppercase;
}

.info-value {
  font-size: 14.5px;
  font-weight: 600;
  color: #111827;
}

.info-input {
  width: 100%;
  padding: 0;
  font-size: 14.5px;
  font-weight: 600;
  color: #111827;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
}

.info-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
}

.info-status--active {
  color: #16a34a;
}

.info-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #16a34a;
  flex-shrink: 0;
}

/* Address */
.link-manage {
  font-size: 13px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.link-manage:hover {
  text-decoration: underline;
}

.address-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.address-icon {
  width: 40px;
  height: 40px;
  background: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #6b7280;
}

.address-body {
  flex: 1;
}

.address-name-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.address-name {
  font-size: 14px;
  font-weight: 700;
  color: #111827;
}

.address-badge {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #2563eb;
  background: #eff6ff;
  padding: 2px 8px;
  border-radius: 20px;
}

.address-text {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.65;
}

/* Linked accounts */
.linked-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 16px 0 20px;
}

.linked-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.linked-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.linked-icon--github {
  background: #f3f4f6;
  color: #374151;
}

.linked-icon--apple {
  background: #f3f4f6;
  color: #374151;
}

.linked-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.linked-name {
  font-size: 13.5px;
  font-weight: 600;
  color: #111827;
}

.linked-status {
  font-size: 11.5px;
  color: #9ca3af;
}

.linked-unlink {
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s;
}

.linked-unlink:hover {
  color: #ef4444;
}

.btn-add-connection {
  width: 100%;
  padding: 10px;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
}

.btn-add-connection:hover {
  background: #f9fafb;
  color: #374151;
}

/* Elite card */
.elite-card {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e8eaed;
}

.elite-card__image {
  height: 140px;
  overflow: hidden;
}

.elite-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.elite-card__body {
  background: #111827;
  padding: 14px 16px;
}

.elite-card__tag {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #9ca3af;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
}

.elite-card__title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
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
