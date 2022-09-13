const hamburger = document.getElementsByClassName('hamburger-icon')[0];
const modalWindowOverlay = document.getElementById('modal-overlay');
const body = document.getElementsByTagName('body')[0];
const container = document.getElementsByClassName('header-container')[0];
const showModalWindow = () => {
  modalWindowOverlay.style.display = 'block';
  body.style.overflow = 'hidden';
  container.style.filter = 'blur(3px)';
};
hamburger.addEventListener('click', showModalWindow);
