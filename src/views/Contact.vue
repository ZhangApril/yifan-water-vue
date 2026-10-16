<script setup>
import { ref } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import { contactInfo, branches, faqs } from '../data/contact.js'

const activeFaq = ref(0)

const toggleFaq = (i) => {
  activeFaq.value = activeFaq.value === i ? -1 : i
}

const handleSubmit = (e) => {
  e.preventDefault()
  alert('感谢您的咨询！我们会尽快与您联系。')
}
</script>

<template>
  <div class="contact-page">
    <PageBanner
      title="联系我们"
      subtitle="期待与您的合作，共同守护城市水脉安全"
      breadcrumb="联系我们"
    />

    <!-- Contact Info Cards -->
    <div class="contact-hero">
      <div class="container">
        <div class="contact-info-grid">
          <div class="contact-info-card" v-for="info in contactInfo" :key="info.title">
            <div class="contact-info-icon">{{ info.icon }}</div>
            <h4>{{ info.title }}</h4>
            <p>{{ info.desc }}</p>
            <div class="contact-highlight">{{ info.highlight }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form + Map -->
    <section class="contact-form-section">
      <div class="container">
        <div class="contact-form-grid">
          <!-- Form -->
          <div class="form-card">
            <h3>在线咨询</h3>
            <p>填写以下信息，我们的专业顾问将尽快与您联系</p>
            <form @submit="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label>您的姓名 <span class="required">*</span></label>
                  <input type="text" class="form-input" placeholder="请输入您的姓名" required>
                </div>
                <div class="form-group">
                  <label>联系电话 <span class="required">*</span></label>
                  <input type="tel" class="form-input" placeholder="请输入手机号码" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>公司名称</label>
                  <input type="text" class="form-input" placeholder="请输入公司名称">
                </div>
                <div class="form-group">
                  <label>咨询类型 <span class="required">*</span></label>
                  <select class="form-select" required>
                    <option value="">请选择咨询类型</option>
                    <option value="sewage">污水处理工程</option>
                    <option value="water">市政供水工程</option>
                    <option value="environment">水环境治理</option>
                    <option value="plant">水厂建设</option>
                    <option value="design">工程设计咨询</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>所在地区</label>
                <input type="text" class="form-input" placeholder="省 / 市 / 区">
              </div>
              <div class="form-group">
                <label>需求描述 <span class="required">*</span></label>
                <textarea class="form-textarea" placeholder="请简要描述您的项目需求、规模等信息，以便我们更好地为您服务..." required></textarea>
              </div>
              <button type="submit" class="form-submit">
                提交咨询 →
              </button>
            </form>
          </div>

          <!-- Location -->
          <div class="location-card">
            <h3>总部地址</h3>
            <div class="location-item">
              <div class="location-item-icon">📍</div>
              <div>
                <h4>公司地址</h4>
                <p>江苏省苏州市工业园区<br>星湖街888号熠凡大厦18层</p>
              </div>
            </div>
            <div class="location-item">
              <div class="location-item-icon">📞</div>
              <div>
                <h4>联系电话</h4>
                <p>总机：0512-8888-8888<br>商务合作：400-888-0000</p>
              </div>
            </div>
            <div class="location-item">
              <div class="location-item-icon">✉️</div>
              <div>
                <h4>邮箱</h4>
                <p>商务合作：contact@yifanwater.com<br>人才招聘：hr@yifanwater.com</p>
              </div>
            </div>
            <div class="location-item">
              <div class="location-item-icon">🚇</div>
              <div>
                <h4>交通指引</h4>
                <p>地铁1号线星湖街站3号口出<br>步行约5分钟即达</p>
              </div>
            </div>

            <div class="map-placeholder">
              <div class="map-placeholder-icon">🗺️</div>
              <p>地图位置（对接百度/高德地图）</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Branches -->
    <section class="branches-section">
      <div class="container">
        <div class="section-title">
          <span class="section-label">BRANCH OFFICES</span>
          <h2>全国分支机构</h2>
          <p>服务网络覆盖全国20+省市，就近响应您的需求</p>
        </div>
        <div class="branches-grid">
          <div class="branch-card" v-for="b in branches" :key="b.name">
            <span class="branch-region">{{ b.region }}</span>
            <h4>{{ b.name }}</h4>
            <div class="branch-detail">
              <span>地址：</span>
              <span>{{ b.address }}</span>
            </div>
            <div class="branch-detail">
              <span>电话：</span>
              <span>{{ b.phone }}</span>
            </div>
            <div class="branch-detail">
              <span>负责：</span>
              <span>{{ b.area }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="section-title">
          <span class="section-label">FAQ</span>
          <h2>常见问题</h2>
          <p>快速了解合作常见问题</p>
        </div>
        <div class="faq-list">
          <div
            class="faq-item"
            v-for="(faq, i) in faqs"
            :key="i"
            :class="{ active: activeFaq === i }"
            @click="toggleFaq(i)"
          >
            <div class="faq-question">{{ faq.question }}</div>
            <div class="faq-answer">{{ faq.answer }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-hero {
  padding: 60px 0;
  background: var(--bg-cream);
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.contact-info-card {
  background: white;
  border-radius: var(--radius-md);
  padding: 32px 24px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--border);
}

.contact-info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.contact-info-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(10, 77, 124, 0.1), rgba(0, 180, 216, 0.1));
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: var(--transition);
}

.contact-info-card:hover .contact-info-icon {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
}

.contact-info-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.contact-info-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}

.contact-highlight {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  margin-top: 8px;
}

/* Form section */
.contact-form-section {
  padding: 80px 0;
}

.contact-form-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
}

.form-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.form-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.form-card > p {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.form-group .required {
  color: var(--danger);
  margin-left: 4px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text-body);
  transition: var(--transition);
  background: white;
  font-family: inherit;
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(10, 77, 124, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
}

.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(10, 77, 124, 0.3);
}

/* Location side */
.location-card {
  background: var(--primary-dark);
  border-radius: var(--radius-lg);
  padding: 40px;
  color: white;
  position: relative;
  overflow: hidden;
}

.location-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'%3E%3Cpath d='M0,100 Q75,80 150,100 T300,100'/%3E%3Cpath d='M0,150 Q75,130 150,150 T300,150'/%3E%3Cpath d='M0,200 Q75,180 150,200 T300,200'/%3E%3C/g%3E%3C/svg%3E");
}

.location-card > * {
  position: relative;
  z-index: 2;
}

.location-card h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
}

.location-item {
  display: flex;
  gap: 14px;
  margin-bottom: 22px;
}

.location-item-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.location-item h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--accent-light);
}

.location-item p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.map-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-sm);
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
}

.map-placeholder-icon {
  font-size: 32px;
}

.map-placeholder p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

/* Branches */
.branches-section {
  padding: 80px 0;
  background: var(--bg-cream);
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.branch-card {
  background: white;
  border-radius: var(--radius-md);
  padding: 28px;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.branch-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.branch-region {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 180, 216, 0.1);
  color: var(--primary);
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: 14px;
}

.branch-card h4 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.branch-detail {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

.branch-detail span:first-child {
  color: var(--text-dark);
  font-weight: 500;
  min-width: 48px;
}

/* FAQ */
.faq-section {
  padding: 80px 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
}

.faq-item:hover {
  border-color: var(--accent);
}

.faq-question {
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: var(--text-dark);
  font-size: 15px;
}

.faq-question::after {
  content: '+';
  font-size: 20px;
  color: var(--primary);
  font-weight: 300;
  transition: transform 0.3s;
}

.faq-item.active .faq-question::after {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 24px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.8;
}

.faq-item.active .faq-answer {
  max-height: 300px;
  padding: 0 24px 20px;
}

@media (max-width: 1024px) {
  .contact-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-form-grid {
    grid-template-columns: 1fr;
  }
  .branches-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-card {
    padding: 28px 20px;
  }
  .branches-grid {
    grid-template-columns: 1fr;
  }
  .location-card {
    padding: 28px 20px;
  }
}
</style>
