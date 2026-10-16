<script setup>
import PageBanner from '../components/PageBanner.vue'
import CtaSection from '../components/CtaSection.vue'
import { milestones, qualifications, cultureValues, team, aboutFeatures } from '../data/about.js'
</script>

<template>
  <div class="about-page">
    <PageBanner
      title="关于熠凡水务"
      subtitle="二十年深耕水务工程领域，用专业和品质守护城市水脉安全"
      breadcrumb="关于熠凡"
    />

    <!-- 公司简介 -->
    <section class="about-intro">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-image"></div>
          <div class="intro-text">
            <span class="section-label">COMPANY PROFILE</span>
            <h2>公司简介</h2>
            <p>
              熠凡水务建筑工程有限公司成立于2005年，总部位于江苏苏州，是一家专注于水务工程领域的综合性建筑企业。公司拥有市政公用工程施工总承包壹级资质、环保工程专业承包壹级资质、建筑机电安装工程专业承包资质，并已通过ISO9001质量管理体系、ISO14001环境管理体系、ISO45001职业健康安全管理体系认证。
            </p>
            <p>
              二十年来，公司始终秉承"质量为本、诚信立业"的经营理念，累计完成各类水务工程项目300余项，服务遍及全国20多个省市，在市政给排水、污水处理、水环境治理、水厂建设等领域积累了丰富的工程经验和技术优势，获得国家及省部级工程奖项20余项。
            </p>
            <p>
              公司现有员工280余人，其中高级工程师52人、工程师86人，注册建造师、造价工程师等各类注册执业人员60余人。我们以技术创新为驱动力，累计获得发明专利12项、实用新型专利21项，是国家高新技术企业。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="milestone-section">
      <div class="container">
        <div class="section-title">
          <span class="section-label">DEVELOPMENT HISTORY</span>
          <h2>发展历程</h2>
          <p>二十年砥砺前行，每一步都是成长的印记</p>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="(m, i) in milestones" :key="i">
            <div v-if="m.left" class="timeline-content">
              <div class="timeline-year">{{ m.year }}</div>
              <h4>{{ m.title }}</h4>
              <p>{{ m.desc }}</p>
            </div>
            <div v-else></div>
            <div class="timeline-dot">
              <div class="timeline-dot-inner"></div>
            </div>
            <div v-if="!m.left" class="timeline-content">
              <div class="timeline-year">{{ m.year }}</div>
              <h4>{{ m.title }}</h4>
              <p>{{ m.desc }}</p>
            </div>
            <div v-else></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 资质荣誉 -->
    <section class="qualifications">
      <div class="container">
        <div class="section-title">
          <span class="section-label">QUALIFICATIONS & HONORS</span>
          <h2>资质荣誉</h2>
          <p>专业资质认证，实力值得信赖</p>
        </div>
        <div class="qual-grid">
          <div class="qual-card" v-for="q in qualifications" :key="q.title">
            <div class="qual-icon">{{ q.icon }}</div>
            <h4>{{ q.title }}</h4>
            <p>{{ q.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="culture-section">
      <div class="container">
        <div class="section-title">
          <span class="section-label">CORPORATE CULTURE</span>
          <h2>企业文化</h2>
          <p>我们的价值观，指引前行的方向</p>
        </div>
        <div class="culture-grid">
          <div class="culture-card" v-for="c in cultureValues" :key="c.title">
            <div class="culture-icon">{{ c.icon }}</div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心团队 -->
    <section class="team-section">
      <div class="container">
        <div class="section-title">
          <span class="section-label">CORE TEAM</span>
          <h2>核心团队</h2>
          <p>专业的技术团队，为项目保驾护航</p>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="t in team" :key="t.name">
            <div class="team-avatar">{{ t.avatar }}</div>
            <div class="team-info">
              <h4>{{ t.name }}</h4>
              <div class="team-title">{{ t.title }}</div>
              <p class="team-desc">{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="想了解更多关于熠凡水务？"
      subtitle="欢迎联系我们，获取公司详细资料或预约实地考察"
      primary-btn-text="联系我们"
      secondary-btn-text="查看案例 →"
    />
  </div>
</template>

<style scoped>
.about-intro {
  padding: 80px 0;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.intro-image {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-light));
  position: relative;
  overflow: hidden;
}

.intro-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 375'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23062F4F'/%3E%3Cstop offset='100%25' stop-color='%231E77B5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg)' width='500' height='375'/%3E%3Cg fill='%23ffffff' opacity='0.1'%3E%3Crect x='50' y='130' width='60' height='120' rx='3'/%3E%3Crect x='120' y='100' width='45' height='150' rx='3'/%3E%3Crect x='175' y='115' width='70' height='135' rx='3'/%3E%3Crect x='255' y='90' width='50' height='160' rx='3'/%3E%3Crect x='315' y='110' width='55' height='140' rx='3'/%3E%3Crect x='380' y='125' width='65' height='125' rx='3'/%3E%3C/g%3E%3Cpath d='M0,280 Q125,250 250,280 T500,280 L500,375 L0,375 Z' fill='rgba(0,180,216,0.25)'/%3E%3Cpath d='M0,300 Q125,270 250,300 T500,300 L500,375 L0,375 Z' fill='rgba(144,224,239,0.2)'/%3E%3C/svg%3E") center/cover;
}

.intro-text h2 {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 24px;
}

.intro-text p {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-body);
  margin-bottom: 16px;
}

/* Milestone */
.milestone-section {
  padding: 80px 0;
  background: var(--bg-cream);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--accent));
  transform: translateX(-50%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  margin-bottom: 40px;
  position: relative;
}

.timeline-content {
  padding: 8px 30px;
}

.timeline-item:nth-child(odd) .timeline-content {
  text-align: right;
}

.timeline-dot {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8px;
}

.timeline-dot-inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 4px solid var(--primary);
  box-shadow: 0 0 0 6px rgba(10, 77, 124, 0.1);
}

.timeline-year {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 8px;
}

.timeline-content h4 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Qualifications */
.qualifications {
  padding: 80px 0;
}

.qual-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.qual-card {
  background: var(--bg-light);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid transparent;
}

.qual-card:hover {
  background: white;
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.qual-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-md);
  background: white;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: var(--shadow-sm);
}

.qual-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.qual-card p {
  font-size: 13px;
  color: var(--text-muted);
}

/* Culture */
.culture-section {
  padding: 80px 0;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.culture-card {
  padding: 40px 32px;
  background: linear-gradient(135deg, rgba(10, 77, 124, 0.05), rgba(0, 180, 216, 0.05));
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.culture-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.culture-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: var(--shadow-sm);
}

.culture-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.culture-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.8;
}

/* Team */
.team-section {
  padding: 80px 0;
  background: var(--bg-cream);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.team-card {
  background: white;
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition);
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.team-avatar {
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.8);
}

.team-info {
  padding: 20px;
  text-align: center;
}

.team-info h4 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.team-title {
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 10px;
}

.team-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .qual-grid, .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .culture-grid {
    grid-template-columns: 1fr;
  }
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .timeline::before {
    left: 24px;
  }
  .timeline-item {
    grid-template-columns: 48px 1fr;
  }
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    text-align: left;
    padding-left: 20px;
    padding-right: 0;
    grid-column: 2;
  }
  .timeline-dot {
    grid-column: 1;
  }
  .qual-grid, .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
