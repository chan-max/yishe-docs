<!--
 * @Author: chan-max jackieontheway666@gmail.com
 * @Date: 2025-07-03 07:33:12
 * @LastEditors: chan-max jackieontheway666@gmail.com
 * @LastEditTime: 2025-07-23 07:15:49
 * @FilePath: /design-server/Users/jackie/workspace/yishe-docs/.vitepress/theme/components/vuetheme/vitepress/components/VPNavBarTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <img class="logo" width="30" height="30" src="/images/logo-pure.png" alt="logo" />
      <div class="text">衣设文档 <small style="font-style: italic;opacity:.5; font-weight: bold;font-size: 10px;">docs of 1s.design </small></div>
    </slot>
  </a>
</template>

<style scoped>

.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
