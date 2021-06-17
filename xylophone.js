const xylo = document.querySelector('.xylo')
let wordNum = 1

xylo.addEventListener('click', e => {
  new Audio(`sounds/${wordNum}_${e.target.id}.mp3`).play()
  wordNum < 5 ? (wordNum += 1) : (wordNum = 1)
})
