/* global localStorage */
;(function () {
  'use strict'
  const systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)')
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (systemInitiatedDark.matches) {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  })
  const switchButton = document.getElementById('themeSwitch')
  switchButton.addEventListener('click', function (e) {
    e.preventDefault()
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else if (systemInitiatedDark.matches) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
  })
})()
