const userNameElem = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


userNameElem.addEventListener('input', handleUserNameInput);

function handleUserNameInput(e) {
    const inputValue = e.target.value.trim();
      nameOutput.textContent = inputValue !== '' ? inputValue : 'Anonymous';
}