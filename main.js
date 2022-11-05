import { createSSRApp } from 'vue'import App from './App'import { setupI18n } from '@/setup/i18n.js'export function createApp() {
  const app = createSSRApp(App)  // 多语言设置  setupI18n(app)  
  return {
    app
  }
}