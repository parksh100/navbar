const toggleBtn = document.querySelector('.navbar_toggleBtn')
const menu = document.querySelector('.nav_menu')
const icons = document.querySelector('.navbar_icons')

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active')
});