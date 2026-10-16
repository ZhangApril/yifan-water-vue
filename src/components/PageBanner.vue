<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  breadcrumb: { type: String, default: '' }
})

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="page-banner">
    <div class="page-banner-content">
      <div class="breadcrumb">
        <a @click.prevent="goHome">首页</a> / {{ breadcrumb || title }}
      </div>
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 360px;
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 72px;
}

.page-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath d='M0,100 Q50,80 100,100 T200,100' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='2'/%3E%3Cpath d='M0,130 Q50,110 100,130 T200,130' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='2'/%3E%3Cpath d='M0,70 Q50,50 100,70 T200,70' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='2'/%3E%3C/svg%3E");
}

.page-banner-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  color: white;
}

.breadcrumb {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

.breadcrumb a:hover {
  color: white;
}

.page-banner h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 12px;
}

.page-banner p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
}

@media (max-width: 768px) {
  .page-banner {
    height: 280px;
  }
  .page-banner h1 {
    font-size: 30px;
  }
}
</style>
