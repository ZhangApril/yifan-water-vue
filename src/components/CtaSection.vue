<script setup>
import { useRouter } from 'vue-router'

defineProps({
  title: { type: String, default: '有水务工程项目合作需求？' },
  subtitle: { type: String, default: '20年行业经验，专业技术团队，为您提供一站式水务工程解决方案' },
  primaryBtnText: { type: String, default: '立即咨询' },
  secondaryBtnText: { type: String, default: '📞 400-888-0000' }
})

const router = useRouter()

const goContact = () => {
  router.push('/contact')
}
</script>

<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </div>
        <div class="cta-buttons">
          <a class="btn btn-hero btn-white" @click.prevent="goContact">{{ primaryBtnText }}</a>
          <a href="tel:4008880000" class="btn btn-hero btn-transparent">{{ secondaryBtnText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath d='M0,100 Q50,80 100,100 T200,100' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='2'/%3E%3Cpath d='M0,120 Q50,100 100,120 T200,120' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='2'/%3E%3Cpath d='M0,80 Q50,60 100,80 T200,80' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='2'/%3E%3C/svg%3E");
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.cta-text h2 {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.cta-text p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
}

@media (max-width: 768px) {
  .cta-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
