const helloButton = document.getElementById('hello');
const message = document.getElementById('message');
let clickCount = 0;

helloButton.addEventListener('click', () => {
  clickCount += 1;
  helloButton.classList.toggle('clicked');
  message.textContent = `你已经按了${clickCount}次，请按ㄧ次。`;
});

const optionColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const optionColorNames = ['紅', '橙', '黃', '綠', '藍', '紫'];
document.querySelectorAll('.color-option').forEach((button) => {
  const label = button.textContent.split(' · ')[0];
  let nextColor = 0;
  button.addEventListener('click', () => {
    button.dataset.color = optionColors[nextColor];
    button.textContent = `${label} · ${optionColorNames[nextColor]}`;
    nextColor = (nextColor + 1) % optionColors.length;
  });
});
