const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const toggleButton = () => {
  navList.classList.toggle('show');
};

hamburgerBtn.addEventListener('click', toggleButton);
