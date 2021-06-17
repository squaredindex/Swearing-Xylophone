const xylo = document.querySelector('.xylo')
let wordNum = 1

xylo.addEventListener('click', e => {
  btn = e.target.closest('button')
  if (btn) {
    new Audio(`sounds/${wordNum}_${btn.id}.mp3`).play()
    wordNum < 5 ? (wordNum += 1) : (wordNum = 1)
  }
})
