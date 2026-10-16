<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const services = ['市政给排水工程', '污水处理工程', '水环境治理', '水厂建设工程', '工程设计咨询']
const quickLinks = [
  { name: '网站首页', path: '/' },
  { name: '关于熠凡', path: '/about' },
  { name: '案例中心', path: '/cases' },
  { name: '新闻资讯', path: '/news' },
  { name: '联系我们', path: '/contact' }
]

const goTo = (path) => {
  router.push(path)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon">💧</div>
            <span class="footer-logo-text">熠凡水务</span>
          </div>
          <p>专注水务建筑工程20年，以专业技术和卓越品质，为城市水务基础设施建设保驾护航。</p>
          <div class="social-links">
            <a href="#">微</a>
            <a href="#">抖</a>
            <a href="#">号</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>业务领域</h4>
          <ul>
            <li v-for="item in services" :key="item"><a href="#">{{ item }}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>快速导航</h4>
          <ul>
            <li v-for="link in quickLinks" :key="link.path">
              <a @click.prevent="goTo(link.path)">{{ link.name }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>联系方式</h4>
          <div class="contact-item">
            <div class="contact-item-icon">📍</div>
            <div>
              <strong>公司地址</strong>
              江苏省苏州市工业园区星湖街888号熠凡大厦
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">📞</div>
            <div>
              <strong>服务热线</strong>
              400-888-0000
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">✉️</div>
            <div>
              <strong>邮箱</strong>
              contact@yifanwater.com
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 熠凡水务建筑工程有限公司 版权所有</span>
        <span>苏ICP备12345678号-1 | 苏公网安备 32050000000000号</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #061B2E;
  color: rgba(255, 255, 255, 0.7);
  padding: 70px 0 30px;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 50px;
}

.footer-col h4 {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
}

.footer-col li {
  margin-bottom: 12px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  cursor: pointer;
}

.footer-col a:hover {
  color: var(--accent-light);
}

.footer-brand p {
  font-size: 14px;
  line-height: 1.8;
  margin: 16px 0 24px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--accent), var(--primary-light));
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.footer-logo-text {
  font-size: 18px;
  font-weight: 700;
  color: white;
  letter-spacing: 2px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: var(--transition);
}

.social-links a:hover {
  background: var(--accent);
}

.contact-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.7;
}

.contact-item-icon {
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 6px;
  background: rgba(0, 180, 216, 0.15);
  color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.contact-item strong {
  display: block;
  color: white;
  font-weight: 500;
  margin-bottom: 2px;
}

.footer-bottom {
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
