f = getEventListeners(window).scroll[0].listener
window.removeEventListener('scroll', getEventListeners(window).scroll[0].listener, false)
window.addEventListener('scroll', f, false)
