const hamburger = document.getElementsByClassName('hamburger-icon')[0];
const modalWindowOverlay = document.getElementById('modal-overlay');
const body = document.querySelector('body')[0];
const closeIcon = document.querySelector('#close-icon');
const container = document.getElementsByClassName('header-container')[0];
const ListLinks = document.querySelectorAll('.hamburger-menu-link');

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'block';
  body.style.overflow = 'hidden';
  container.style.filter = 'blur(3px)';
  modalWindowOverlay.classList.add('mobile-version');
};
const HideModalWindow = () => {
  modalWindowOverlay.style.display = 'none';
  body.style.overflow = 'auto';
  container.style.filter = 'none';
};

hamburger.addEventListener('click', showModalWindow);
closeIcon.addEventListener('click', HideModalWindow);
ListLinks.forEach((element) => {
  element.addEventListener('click', HideModalWindow);
});
