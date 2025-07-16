/*
 * @Author: chan-max jackieontheway666@gmail.com
 * @Date: 2025-06-13 20:22:44
 * @LastEditors: chan-max jackieontheway666@gmail.com
 * @LastEditTime: 2025-06-15 09:52:40
 * @FilePath: /yishe-docs/.vitepress/theme/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from './components/vuetheme/vitepress'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import SecurityUpdateBtn from './components/SecurityUpdateBtn.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
// import VueSchoolLink from './components/VueSchoolLink.vue'
import WwAds from './components/WwAds.vue'
import Banner from './components/Banner.vue'
// import TextAd from './components/TextAd.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      // 'sidebar-top': () => h(PreferenceSwitch),
      // 'sidebar-bottom': () => h(SecurityUpdateBtn),
      // 'aside-mid': () => h(SponsorsAside),
      'aside-bottom': () => h(WwAds)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
    // app.component('TextAd', TextAd)
  }
})
