let wordNum = 1

document.querySelector('.xylo').addEventListener('click', e => {
  const btn = e.target.closest('button')
  if (!btn) return
  new Audio(`sounds/${wordNum}_${btn.id}.mp3`).play()
  wordNum < 5 ? (wordNum += 1) : (wordNum = 1)
})
