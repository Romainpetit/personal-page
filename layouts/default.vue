<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media (min-width: 1280px) {
  html {
    font-size: 28px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

// @import '~/assets/sass/0-vendors/sanitize';
// @import '~/assets/sass/1-layouts/layout-dir';
// @import '~/assets/sass/2-base/base-dir';
// @import '~/assets/sass/3-modules/modules-dir';
// // Helpers are high specificity
// @import '~/assets/sass/2-base/helpers';
// @import '~/assets/sass/2-base/positionning';
</style>
