/* global localStorage */
;(function () {
  'use strict'
  let theme = localStorage.getItem('theme')
  if (theme === null) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme = systemDark ? 'dark' : 'light'
  }
  document.documentElement.setAttribute('data-theme', theme)

  const switchButton = document.getElementById('themeSwitch')
  switchButton.addEventListener('click', function (e) {
    e.preventDefault()
    theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  })
})()
