const helloButton = document.getElementById('hello');
const message = document.getElementById('message');
let clickCount = 0;

helloButton.addEventListener('click', () => {
  clickCount += 1;
  helloButton.classList.toggle('clicked');
  message.textContent = `你已经按了${clickCount}次，请按ㄧ次。`;
});

const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');
function closeMenu() {
  mainMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}
menuToggle.addEventListener('click', () => {
  mainMenu.hidden = !mainMenu.hidden;
  menuToggle.setAttribute('aria-expanded', String(!mainMenu.hidden));
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu-anchor')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mainMenu.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});
const colors = ['red', 'orange', 'yellow', 'blue', 'purple'];
const colorNames = ['紅', '橙', '黃', '藍', '紫'];
document.querySelectorAll('.color-option').forEach((button) => {
  const label = button.textContent.split(' · ')[0];
  let next = 0;
  button.addEventListener('click', () => {
    button.dataset.color = colors[next];
    button.textContent = `${label} · ${colorNames[next]}`;
    next = (next + 1) % colors.length;
  });
});
