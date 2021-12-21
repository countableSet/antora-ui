;(function () {
  'use strict'

  let dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const switchButton = document.getElementById('themeSwitch')

  document.addEventListener('DOMContentLoaded', function () {
    if (dark) {
      document.body.setAttribute('data-theme', 'dark')
    }
  })

  switchButton.addEventListener('click', function (e) {
    e.preventDefault()
    dark = !dark
    dark
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme')
  })
})()
