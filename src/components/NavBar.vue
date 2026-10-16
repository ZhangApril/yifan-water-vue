<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { path: '/', name: '首页' },
  { path: '/about', name: '关于熠凡' },
  { path: '/cases', name: '案例中心' },
  { path: '/news', name: '新闻资讯' },
  { path: '/contact', name: '联系我们' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const goTo = (path) => {
  mobileMenuOpen.value = false
  if (path === '/') {
    router.push(path)
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  } else {
    router.push(path)
  }
}

const goContact = () => {
  mobileMenuOpen.value = false
  router.push('/contact')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo" @click="goTo('/')">
        <div class="logo-icon"></div>
        <div class="logo-text">
          <span class="logo-name">熠凡水务</span>
          <span class="logo-sub">YIFAN WATER</span>
        </div>
      </div>
      <ul class="nav-menu">
        <li v-for="item in navItems" :key="item.path">
          <a
            :class="{ active: route.path === item.path }"
            @click.prevent="goTo(item.path)"
          >{{ item.name }}</a>
        </li>
      </ul>
      <div class="nav-cta">
        <div class="nav-phone">
          <span>📞</span>
          <span>400-888-0000</span>
        </div>
        <a class="btn btn-primary" @click.prevent="goContact">获取报价</a>
      </div>
      <div class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
      </div>
    </div>
    <div v-if="mobileMenuOpen" class="mobile-menu">
      <li v-for="item in navItems" :key="item.path">
        <a
          :class="{ active: route.path === item.path }"
          @click.prevent="goTo(item.path)"
        >{{ item.name }}</a>
      </li>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.navbar.scrolled {
  box-shadow: var(--shadow-sm);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'%3E%3Cpath d='M22 4C22 4 10 20 10 28C10 34.6 15.4 40 22 40C28.6 40 34 34.6 34 28C34 20 22 4 22 4Z' fill='rgba(255,255,255,0.9)'/%3E%3C/svg%3E") center/contain no-repeat;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-dark);
  letter-spacing: 2px;
}

.logo-sub {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 4px;
}

.nav-menu a {
  display: block;
  padding: 8px 20px;
  color: var(--text-body);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  position: relative;
  cursor: pointer;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--primary);
  background: rgba(10, 77, 124, 0.06);
}

.nav-menu a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  font-weight: 600;
  font-size: 15px;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
}

.mobile-toggle span {
  width: 24px;
  height: 2px;
  background: var(--primary-dark);
  transition: var(--transition);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 16px 20px;
  background: white;
  border-top: 1px solid var(--border);
}

.mobile-menu li {
  list-style: none;
}

.mobile-menu a {
  display: block;
  padding: 12px 16px;
  color: var(--text-body);
  font-size: 15px;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.mobile-menu a.active,
.mobile-menu a:hover {
  color: var(--primary);
  background: rgba(10, 77, 124, 0.06);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 20px;
    height: 64px;
  }
  .nav-menu, .nav-phone {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
