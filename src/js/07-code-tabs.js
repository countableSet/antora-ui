/*
Inspired from the asciidoctorj-tabbed-code-extension
https://github.com/bmuschko/asciidoctorj-tabbed-code-extension

Removed dependency zeptojs (aka jquery) by converting to pure javascript, as well as adjust css styling.
*/
function addBlockSwitches () {
  Array.from(document.getElementsByClassName('primary')).forEach((primary) => {
    createSwitchItem(primary, createBlockSwitch(primary)).item.classList.add('selected')
    primary.querySelector('.title').remove()
  })
  Array.from(document.getElementsByClassName('secondary')).forEach(
    (secondary) => {
      const primary = findPrimary(secondary)
      const switchItem = createSwitchItem(
        secondary,
        primary.querySelector('.switch')
      )
      switchItem.content.classList.add('hidden')
      primary.append(switchItem.content)
      secondary.remove()
    }
  )
}

function createBlockSwitch (primary) {
  const blockSwitch = document.createElement('div')
  blockSwitch.classList.add('switch')
  primary.prepend(blockSwitch)
  return blockSwitch
}

function findPrimary (secondary) {
  let candidate = secondary.previousElementSibling
  while (!candidate.classList.contains('primary')) {
    candidate = candidate.previousElementSibling
  }
  return candidate
}

function createSwitchItem (block, blockSwitch) {
  const blockName = block.querySelector('.title').textContent
  const content = block.querySelector('.content')
  const calloutList = block.querySelector('.colist')
  if (calloutList !== null) {
    content.append(calloutList)
  }
  const item = document.createElement('div')
  item.classList.add('switch--item')
  item.innerText = blockName
  item.onclick = (_) => {
    item.classList.add('selected')
    getSiblings(item).forEach((sib) => {
      sib.classList.remove('selected')
    })

    getSiblings(content, 'content').forEach((sib) => {
      sib.classList.add('hidden')
    })
    content.classList.remove('hidden')
  }
  blockSwitch.append(item)
  return {
    item: item,
    content: content,
  }
}

function getSiblings (current, filter = undefined) {
  const siblings = []
  let sibling = current.parentNode.firstChild
  while (sibling) {
    if (
      sibling.nodeType === 1 &&
      sibling !== current &&
      (filter === undefined || sibling.classList.contains(filter))
    ) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}

document.addEventListener('DOMContentLoaded', function () {
  addBlockSwitches()
})
