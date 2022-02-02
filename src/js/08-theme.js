/* global localStorage */
;(function () {
  'use strict'
  const stored = localStorage.getItem('theme')
  console.log('stored = ' + stored)
  const systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)')
  console.log('system = ' + (systemInitiatedDark.matches ? 'dark' : 'light'))
  var actual = null
  if (stored != null) {
    actual = stored
    console.log('using stored')
  } else {
    actual = systemInitiatedDark.matches ? 'dark' : 'light'
    console.log('using system')
  }
  console.log('actual = ' + actual)

  if (actual === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    console.log('set element dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
    console.log('set element light')
  }

  const switchButton = document.getElementById('themeSwitch')
  switchButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (actual === 'dark') {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
      console.log('to light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      console.log('to dark')
    }
  })
})()
