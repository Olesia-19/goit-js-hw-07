function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector('.change-color');
const colorElem = document.querySelector('.color')

buttonElem.addEventListener('click', handleButtonElemClick);

function handleButtonElemClick(e) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorElem.textContent = newColor;
}