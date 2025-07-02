<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <img class="logo" width="30" height="30" src="/images/logo-pure.png" alt="logo" />
      <div class="text">衣设 <small>1s</small></div>
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
