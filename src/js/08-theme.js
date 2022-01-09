/* global sessionStorage */
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
    const theme = sessionStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme')
      sessionStorage.setItem('theme', 'light')
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark')
      sessionStorage.setItem('theme', 'dark')
    } else if (systemInitiatedDark.matches) {
      document.documentElement.removeAttribute('data-theme')
      sessionStorage.setItem('theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      sessionStorage.setItem('theme', 'dark')
    }
  })
})()
