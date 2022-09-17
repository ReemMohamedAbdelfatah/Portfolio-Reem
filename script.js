const hamburger = document.getElementsByClassName('hamburger-icon')[0];
const modalWindowOverlay = document.getElementById('modal-overlay');
const body = document.querySelector('body');
const closeIcon = document.querySelector('#close-icon');
const container = document.getElementsByClassName('header-container')[0];
const ListLinks = document.querySelectorAll('.hamburger-menu-link');
const form = document.querySelector('#contactme-form');
const error = document.querySelector('#errorMessage');
const email = document.querySelector('#mail');

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'block';
  body.style.overflow = 'hidden';
  container.style.filter = 'blur(3px)';
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.toLowerCase() === email.value) {
    form.submit();
    error.style.visibility = 'hidden';
    email.style.border = '1px solid white';
  } else {
    error.innerHTML = 'email address must be lower case';
    error.style.visibility = 'visible';
    error.style.color = 'red';
    email.style.border = '1px solid red';
  }
});
