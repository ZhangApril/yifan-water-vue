<script setup>
import { ref, computed } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import CtaSection from '../components/CtaSection.vue'
import { newsCategories, newsList, hotNews, newsCategoriesWithCount, newsArchives } from '../data/news.js'

const activeCategory = ref('全部资讯')
const currentPage = ref(1)
const pageSize = 6

const filteredNews = computed(() => {
  if (activeCategory.value === '全部资讯') return newsList
  return newsList.filter(n => n.category === activeCategory.value)
})

const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredNews.value.slice(start, start + pageSize)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredNews.value.length / pageSize)))

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
  <div class="news-page">
    <PageBanner
      title="新闻资讯"
      subtitle="关注行业动态，了解熠凡最新发展"
      breadcrumb="新闻资讯"
    />

    <section style="padding: 60px 0;">
      <div class="container">
        <div class="news-layout">
          <!-- Main list -->
          <div class="news-main">
            <div class="news-tabs">
              <button
                v-for="cat in newsCategories"
                :key="cat"
                class="news-tab"
                :class="{ active: activeCategory === cat }"
                @click="setCategory(cat)"
              >{{ cat }}</button>
            </div>

            <div class="news-list">
              <div class="news-list-item" v-for="n in pagedNews" :key="n.id">
                <div
                  class="news-list-thumb"
                  :style="{ background: `linear-gradient(135deg, ${n.gradient})` }"
                >
                  <div class="news-thumb-bg" :style="{ backgroundImage: n.bg }"></div>
                </div>
                <div class="news-list-content">
                  <div class="news-list-meta">
                    <span class="news-category">📌 {{ n.category }}</span>
                    <span>📅 {{ n.date }}</span>
                    <span>👁 {{ n.views }}</span>
                  </div>
                  <h3>{{ n.title }}</h3>
                  <p>{{ n.desc }}</p>
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

          <!-- Sidebar -->
          <aside class="sidebar">
            <div class="sidebar-widget">
              <h4>🔥 热门推荐</h4>
              <ul class="hot-news">
                <li v-for="(item, i) in hotNews" :key="i">
                  <span class="hot-news-num">{{ i + 1 }}</span>
                  <span class="hot-news-title">{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="sidebar-widget">
              <h4>📂 资讯分类</h4>
              <ul class="category-list">
                <li v-for="c in newsCategoriesWithCount" :key="c.name">
                  <span>{{ c.name }}</span><span>{{ c.count }}</span>
                </li>
              </ul>
            </div>

            <div class="sidebar-widget">
              <h4>📅 归档</h4>
              <ul class="category-list">
                <li v-for="a in newsArchives" :key="a.month">
                  <span>{{ a.month }}</span><span>{{ a.count }}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <CtaSection
      title="想了解更多行业资讯？"
      subtitle="关注熠凡水务，获取最新水务行业动态与技术前沿"
      primary-btn-text="关注我们"
      secondary-btn-text="查看案例 →"
    />
  </div>
</template>

<style scoped>
.news-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
}

.news-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 0;
}

.news-tab {
  padding: 14px 24px;
  background: transparent;
  border: none;
  font-size: 15px;
  color: var(--text-muted);
  cursor: pointer;
  position: relative;
  transition: var(--transition);
  font-weight: 500;
  font-family: inherit;
}

.news-tab:hover {
  color: var(--primary);
}

.news-tab.active {
  color: var(--primary);
}

.news-tab.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
}

.news-list-item {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: var(--transition);
}

.news-list-item:hover {
  background: var(--bg-light);
  margin: 0 -16px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: var(--radius-md);
  border-bottom-color: transparent;
}

.news-list-thumb {
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: var(--radius-sm);
  overflow: hidden;
  position: relative;
}

.news-thumb-bg {
  position: absolute;
  inset: 0;
}

.news-list-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 10px;
  line-height: 1.5;
  transition: color 0.3s;
}

.news-list-item:hover .news-list-content h3 {
  color: var(--primary);
}

.news-list-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 13px;
  color: var(--text-light);
}

.news-list-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.news-list-meta .news-category {
  color: var(--primary);
  font-weight: 500;
}

.news-list-content p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Sidebar */
.sidebar-widget {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 24px;
}

.sidebar-widget h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary);
  display: inline-block;
}

.hot-news li {
  padding: 12px 0;
  border-bottom: 1px dashed var(--border);
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: var(--transition);
}

.hot-news li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.hot-news li:hover .hot-news-title {
  color: var(--primary);
}

.hot-news-num {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: var(--bg-light);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}

.hot-news li:nth-child(1) .hot-news-num,
.hot-news li:nth-child(2) .hot-news-num,
.hot-news li:nth-child(3) .hot-news-num {
  background: var(--primary);
  color: white;
}

.hot-news-title {
  font-size: 14px;
  color: var(--text-body);
  line-height: 1.5;
  transition: color 0.3s;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.category-list li {
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
}

.category-list li:last-child {
  border-bottom: none;
}

.category-list li:hover {
  color: var(--primary);
  padding-left: 8px;
}

.category-list li span:last-child {
  width: 28px;
  height: 20px;
  background: var(--bg-light);
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
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
  .news-layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .news-list-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .news-list-thumb {
    aspect-ratio: 16/9;
  }
}
</style>
