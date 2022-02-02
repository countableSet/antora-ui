/* global localStorage */
;(function () {
  'use strict'
  let theme = localStorage.getItem('theme')
  if (theme !== null) {
    document.documentElement.setAttribute('data-theme', theme)
  } else {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.setAttribute('data-theme',
      systemDark ? 'dark' : 'light')
  }

  const switchButton = document.getElementById('themeSwitch')
  switchButton.addEventListener('click', function (e) {
    e.preventDefault()
    theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  })
})()
