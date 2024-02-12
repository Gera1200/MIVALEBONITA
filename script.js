const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
let fontSize = 2
let messages = [
  '"No" no es opción',
  '¿Que haces?',
  '¿Segura?',
  '¿Pq sigues?',
  "¿Sabes q te amo?",
  'A la de ya el "SI"'
]
buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .4
  buttonYes.style.fontSize = `${fontSize}rem`
  const indexRandom = Math.floor(Math.random() * messages.length)
  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})