;(function () {
  'use strict'

  const hljs = require('highlight.js/lib/index')
  ;[].slice.call(document.querySelectorAll('pre code.hljs')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
