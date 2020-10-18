const btns = document.querySelectorAll('.btn');

let wordNum = 1;

function playSound(e) {
  new Audio(`sounds/${wordNum}_${e.target.id}.mp3`).play();
  return wordNum < 5 ? wordNum++ : (wordNum = 1);
}

btns.forEach(btn => btn.addEventListener('click', playSound));
