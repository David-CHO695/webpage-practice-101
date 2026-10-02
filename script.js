const helloButton = document.getElementById('hello');
const message = document.getElementById('message');
let clickCount = 0;

helloButton.addEventListener('click', () => {
  clickCount += 1;
  helloButton.classList.toggle('clicked');
  message.textContent = `你已经按了${clickCount}次，请按ㄧ次。`;
});

document.querySelectorAll('.option-button').forEach((button) => {
  button.addEventListener('click', () => {
    const isRed = button.classList.toggle('clicked');
    button.setAttribute('aria-pressed', String(isRed));
  });
});
