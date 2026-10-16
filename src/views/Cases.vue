<script setup>
import { ref, computed } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import CtaSection from '../components/CtaSection.vue'
import { caseCategories, cases } from '../data/cases.js'

const activeCategory = ref('全部案例')
const currentPage = ref(1)
const pageSize = 9

const filteredCases = computed(() => {
  if (activeCategory.value === '全部案例') return cases
  return cases.filter(c => c.category === activeCategory.value)
})

const pagedCases = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredCases.value.slice(start, start + pageSize)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredCases.value.length / pageSize)))

const setCategory = (cat) => {
  activeCategory.value = cat
  currentPage.value = 1
}

const setPage = (p) => {
  if (p >= 1 && p <= totalPages.value) {
    currentPage.value = p
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="cases-page">
    <PageBanner
      title="工程案例"
      subtitle="300+ 精品项目，每一个都是实力的见证"
      breadcrumb="案例中心"
    />

    <!-- Filter -->
    <div class="filter-section">
      <div class="container">
        <div class="filter-tabs">
          <button
            v-for="cat in caseCategories"
            :key="cat"
            class="filter-tab"
            :class="{ active: activeCategory === cat }"
            @click="setCategory(cat)"
          >{{ cat }}</button>
        </div>
      </div>
    </div>

    <!-- Cases Grid -->
    <section class="cases-section">
      <div class="container">
        <div class="cases-full-grid">
          <div class="case-card" v-for="c in pagedCases" :key="c.id">
            <div class="case-image" :style="{ background: `linear-gradient(135deg, ${c.gradient})` }">
              <div class="case-image-bg" :style="{ backgroundImage: c.bg }"></div>
              <span class="case-tag">{{ c.category }}</span>
            </div>
            <div class="case-body">
              <h3>{{ c.title }}</h3>
              <p>{{ c.desc }}</p>
              <div class="case-meta">
                <span class="case-meta-item">📍 {{ c.location }}</span>
                <span class="case-meta-item">📅 {{ c.date }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="page-btn" @click="setPage(currentPage - 1)">←</button>
          <button
            v-for="p in totalPages"
            :key="p"
            class="page-btn"
            :class="{ active: currentPage === p }"
            @click="setPage(p)"
          >{{ p }}</button>
          <button class="page-btn" @click="setPage(currentPage + 1)">→</button>
        </div>
      </div>
    </section>

    <CtaSection
      title="有类似项目需求？"
      subtitle="300+成功案例经验，专业团队为您提供定制化解决方案"
      primary-btn-text="获取方案"
    />
  </div>
</template>

<style scoped>
.filter-section {
  padding: 40px 0;
  background: var(--bg-cream);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 10px 28px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 14px;
  color: var(--text-body);
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
}

.filter-tab:hover,
.filter-tab.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.cases-section {
  padding: 60px 0 80px;
}

.cases-full-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.case-card {
  background: white;
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  border: 1px solid var(--border);
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.case-image {
  width: 100%;
  aspect-ratio: 16/10;
  position: relative;
  overflow: hidden;
}

.case-image-bg {
  position: absolute;
  inset: 0;
  opacity: 0.7;
  transition: transform 0.5s ease;
}

.case-card:hover .case-image-bg {
  transform: scale(1.05);
}

.case-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary);
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  backdrop-filter: blur(10px);
  z-index: 2;
}

.case-body {
  padding: 24px;
}

.case-body h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 10px;
  line-height: 1.5;
}

.case-body p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.case-meta-item {
  font-size: 12px;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 5px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 50px;
}

.page-btn {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: white;
  color: var(--text-body);
  font-size: 14px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.page-btn:hover,
.page-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

@media (max-width: 1024px) {
  .cases-full-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cases-full-grid {
    grid-template-columns: 1fr;
  }
}
</style>
