'use strict'

// eslint-disable-next-line no-unused-vars
var uiRootPath = '_'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark')
}
