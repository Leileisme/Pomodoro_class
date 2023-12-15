// Utilities
import { createPinia } from 'pinia'
// 來源網址 https://www.npmjs.com/package/pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 讓我們可以使用pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
