const $ = document;

const touchStart = $.querySelector('.touch-start')
const touchMove = $.querySelector('.touch-move')
const touchEnd = $.querySelector('.touch-end')
const touchResult = $.querySelectorAll('.touchresult')

touchStart.addEventListener('touchstart', function(){
  touchResult[0].textContent = 'touched'
})
touchMove.addEventListener('touchmove', function(){
  touchResult[1].textContent = 'touched'
})
touchEnd.addEventListener('touchend', function(){
  touchResult[2].textContent = 'touched'
})