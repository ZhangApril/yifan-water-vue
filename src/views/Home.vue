<script setup>
import { useRouter } from 'vue-router'
import CtaSection from '../components/CtaSection.vue'
import { services, stats } from '../data/home.js'
import { cases } from '../data/cases.js'
import { newsList } from '../data/news.js'

const router = useRouter()
const previewCases = cases.slice(0, 3)
const previewNews = newsList.slice(0, 3)

const goCases = () => router.push('/cases')
const goAbout = () => router.push('/about')
const goNews = () => router.push('/news')
const goContact = () => router.push('/contact')
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-inner">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            专业水务建筑工程服务商
          </div>
          <h1>
            匠心筑造水务工程<br>
            <span>守护城市水脉安全</span>
          </h1>
          <p class="hero-desc">
            熠凡水务专注于市政给排水、污水处理、水环境治理等水务建筑工程的设计与施工，以专业技术和卓越品质，为城市水务基础设施建设保驾护航。
          </p>
          <div class="hero-buttons">
            <a class="btn-hero btn-hero-white" @click.prevent="goCases">
              查看案例
              <span>→</span>
            </a>
            <a class="btn-hero btn-hero-ghost" @click.prevent="goAbout">
              了解我们
            </a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat" v-for="stat in stats" :key="stat.label">
              <div class="hero-stat-num">{{ stat.num }}</div>
              <div class="hero-stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C360,120 720,0 1080,56 C1260,84 1380,40 1440,32 L1440,120 L0,120 Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>

    <!-- 业务范围 -->
    <section class="services">
      <div class="container">
        <div class="section-title">
          <span class="section-label">BUSINESS SCOPE</span>
          <h2>核心业务范围</h2>
          <p>全方位水务工程解决方案，从设计到施工，一站式专业服务</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="svc in services" :key="svc.title">
            <div class="service-icon">{{ svc.icon }}</div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <a class="service-link" @click.prevent="goCases">了解详情 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于熠凡 -->
    <section class="about-preview">
      <div class="container">
        <div class="about-row">
          <div class="about-image-side">
            <div class="about-main-img"></div>
            <div class="about-badge">
              <div class="about-badge-num">20<span>+</span></div>
              <div class="about-badge-text">年行业沉淀</div>
            </div>
          </div>
          <div class="about-content-side">
            <div class="section-title" style="text-align: left;">
              <span class="section-label">ABOUT YIFAN</span>
              <h2 style="text-align: left;">关于熠凡水务</h2>
            </div>
            <p>
              熠凡水务建筑工程有限公司成立于2005年，是一家专注于水务工程领域的综合性建筑企业。公司拥有市政公用工程施工总承包壹级资质、环保工程专业承包壹级资质，是国家高新技术企业。
            </p>
            <p>
              二十年来，我们始终秉承"质量为本、诚信立业"的经营理念，累计完成各类水务工程项目300余项，服务遍及全国20多个省市，在市政给排水、污水处理、水环境治理等领域积累了丰富的工程经验和技术优势。
            </p>
            <div class="about-features">
              <div class="about-feature">
                <div class="about-feature-icon">✓</div>
                <div>
                  <h4>一级资质认证</h4>
                  <p>市政总承包+环保双壹级</p>
                </div>
              </div>
              <div class="about-feature">
                <div class="about-feature-icon">✓</div>
                <div>
                  <h4>高新技术企业</h4>
                  <p>30+项专利技术</p>
                </div>
              </div>
              <div class="about-feature">
                <div class="about-feature-icon">✓</div>
                <div>
                  <h4>ISO 三体系认证</h4>
                  <p>质量/环境/职业健康</p>
                </div>
              </div>
              <div class="about-feature">
                <div class="about-feature-icon">✓</div>
                <div>
                  <h4>专业技术团队</h4>
                  <p>50+高级工程师</p>
                </div>
              </div>
            </div>
            <a class="btn btn-outline" @click.prevent="goAbout">了解更多 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 案例中心 -->
    <section class="cases">
      <div class="container">
        <div class="section-title">
          <span class="section-label">PROJECT CASES</span>
          <h2>精选工程案例</h2>
          <p>每一个项目都是实力的见证，用品质铸就信赖</p>
        </div>
        <div class="cases-grid">
          <div class="case-card" v-for="c in previewCases" :key="c.id">
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
        <div class="cases-more">
          <a class="btn btn-outline" @click.prevent="goCases">查看更多案例 →</a>
        </div>
      </div>
    </section>

    <!-- 新闻资讯 -->
    <section class="news">
      <div class="container">
        <div class="section-title">
          <span class="section-label">NEWS CENTER</span>
          <h2>新闻资讯</h2>
          <p>关注行业动态，了解熠凡最新发展</p>
        </div>
        <div class="news-grid">
          <div class="news-card" v-for="n in previewNews" :key="n.id">
            <div class="news-thumb" :style="{ background: `linear-gradient(135deg, ${n.gradient})` }">
              <div class="news-thumb-bg" :style="{ backgroundImage: n.bg }"></div>
            </div>
            <div class="news-date">{{ n.date }} · {{ n.category }}</div>
            <h3>{{ n.title }}</h3>
            <p>{{ n.desc }}</p>
          </div>
        </div>
        <div class="cases-more">
          <a class="btn btn-outline" @click.prevent="goNews">查看更多资讯 →</a>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%);
  padding: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1'%3E%3Cpath d='M0,50 Q25,30 50,50 T100,50'/%3E%3Cpath d='M0,60 Q25,40 50,60 T100,60'/%3E%3Cpath d='M0,70 Q25,50 50,70 T100,70'/%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.hero-wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  line-height: 0;
}

.hero-wave svg {
  width: 100%;
  height: auto;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
}

.hero-inner {
  max-width: 680px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: var(--water);
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 28px;
  backdrop-filter: blur(10px);
}

.hero-badge-dot {
  width: 6px;
  height: 6px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.hero h1 {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero h1 span {
  background: linear-gradient(90deg, var(--accent-light), var(--water));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 560px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-hero {
  padding: 14px 32px;
  font-size: 16px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.btn-hero-white {
  background: white;
  color: var(--primary);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.btn-hero-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.btn-hero-ghost {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}

.btn-hero-ghost:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.hero-stat {
  text-align: left;
}

.hero-stat-num {
  font-size: 36px;
  font-weight: 800;
  color: white;
  line-height: 1;
}

.hero-stat-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
}

/* Services */
.services {
  background: var(--bg-cream);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.service-card {
  background: white;
  border-radius: var(--radius-md);
  padding: 36px 28px;
  transition: var(--transition);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(10, 77, 124, 0.1), rgba(0, 180, 216, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 24px;
  transition: var(--transition);
}

.service-card:hover .service-icon {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
}

.service-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.service-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-link {
  color: var(--primary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition);
  cursor: pointer;
}

.service-link:hover {
  gap: 10px;
  color: var(--accent);
}

/* About preview */
.about-preview {
  background: white;
}

.about-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image-side {
  position: relative;
}

.about-main-img {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-light));
  position: relative;
  overflow: hidden;
}

.about-main-img::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23062F4F'/%3E%3Cstop offset='100%25' stop-color='%231E77B5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g1)' width='400' height='300'/%3E%3Cpath d='M0,200 Q50,180 100,200 T200,200 T300,200 T400,200 L400,300 L0,300 Z' fill='rgba(0,180,216,0.3)'/%3E%3Cpath d='M0,220 Q50,200 100,220 T200,220 T300,220 T400,220 L400,300 L0,300 Z' fill='rgba(144,224,239,0.2)'/%3E%3Cg fill='rgba(255,255,255,0.1)'%3E%3Crect x='50' y='100' width='40' height='80'/%3E%3Crect x='100' y='80' width='30' height='100'/%3E%3Crect x='140' y='110' width='50' height='70'/%3E%3Crect x='200' y='70' width='35' height='110'/%3E%3Crect x='250' y='90' width='45' height='90'/%3E%3Crect x='310' y='100' width='40' height='80'/%3E%3C/g%3E%3C/svg%3E") center/cover;
}

.about-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 140px;
  height: 140px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  border: 6px solid var(--bg-light);
}

.about-badge-num {
  font-size: 32px;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.about-badge-text {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

.about-content-side .section-title {
  text-align: left;
  margin-bottom: 32px;
}

.about-content-side h2 {
  text-align: left;
}

.about-content-side > p {
  color: var(--text-body);
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 24px;
}

.about-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 32px 0;
}

.about-feature {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.about-feature-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: var(--radius-sm);
  background: rgba(0, 180, 216, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.about-feature h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.about-feature p {
  font-size: 13px;
  color: var(--text-muted);
}

/* Cases */
.cases {
  background: var(--bg-light);
}

.cases-grid {
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
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
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
  opacity: 0.6;
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

.cases-more {
  text-align: center;
  margin-top: 48px;
}

/* News */
.news {
  background: white;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.news-card {
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-4px);
}

.news-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
}

.news-thumb-bg {
  position: absolute;
  inset: 0;
  transition: transform 0.5s ease;
}

.news-card:hover .news-thumb-bg {
  transform: scale(1.05);
}

.news-date {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 10px;
}

.news-card h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.5;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.news-card:hover h3 {
  color: var(--primary);
}

.news-card > p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cases-grid, .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-row {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 600px;
    height: auto;
    padding: 120px 0 80px;
  }
  .hero-stats {
    gap: 24px;
    flex-wrap: wrap;
  }
  .services-grid, .cases-grid, .news-grid {
    grid-template-columns: 1fr;
  }
  .about-features {
    grid-template-columns: 1fr;
  }
}
</style>
