const hamburger = document.getElementsByClassName('hamburger-icon')[0];
const modalWindowOverlay = document.getElementById('modal-overlay');
const body = document.getElementsByTagName('body')[0];
const closeIcon = document.querySelector('#close-icon');
const container = document.getElementsByClassName('header-container')[0];
const ListLinks = document.querySelectorAll('.hamburger-menu-link');
const projBtns = document.querySelectorAll('.popup-project-btn');
const popupModal = document.querySelector('#popup-overlay');

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

const projects = [
  {
    id: 0,
    title: 'Tonic',
    subtitle: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    img: [
      'images/Snapshoot-Portfolio-Card1.png',
      'images/Snapshoot-Portfolio1-desktop.png',
    ],
    description:
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
    lang: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    id: 1,
    title: 'Tonic',
    subtitle: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    img: [
      'images/Snapshoot-Portfolio-Card2.png',
      'images/Snapshoot-Portfolio-desktop2.png',
    ],
    description:
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
    lang: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    id: 2,
    title: 'Tonic',
    subtitle: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    img: [
      'images/Snapshoot-Portfolio-Card3.png',
      'images/Snapshoot-Portfolio.png',
    ],
    description:
      ' Experimental content creation feature that allows users to<br />add to an existing story over the course of a day without<br />spamming their friends.',
    lang: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    id: 3,
    title: 'Tonic',
    subtitle: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    img: [
      'images/Snapshoot-Portfolio-Card4.png',
      'images/Snapshoot-Portfolio-desktop.png',
    ],
    description:
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
    lang: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
];

const addPopupModalContent = (projItem) => {
  console.log(projItem);
  let img = '';
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    img = `<img src='${projItem.img[0]}' width='100%' alt='Image of the project on large screens'>`;
  } else {
    img = `<img src='${projItem.img[1]}' width='100%' alt='Image of the project on mobile devices'>`;
  }
  console.log(img);

  const modalDeatails = `
      <div id='popup-overlay'>
          <div id='popup-modal'>
            <div id='popup-header'>
              <img src='icons/close-icon.png' alt='Close' id='close-icon' />
            </div>
            <div id='popup-content'>
            <div id=''>
            <h1 class='project-name'>+${projItem.title}+</h1>
            
                            <ul class='horizontal-list small-list'>
                              <li>
                                <h3 class='small-title'>+${projItem.subtitle}+</h3>
                              </li>
                              <li>
                                <div class='circle'></div>
                              </li>
                              <li>
                                <h5 class='small-detail'>+${projItem.role}+</h5>
                              </li>
                              <li>
                                <div class='circle'></div>
                              </li>
                              <li>
                                <h5 class='small-detail'>+${projItem.year}+</h5>
                              </li>
                            </ul>
                            <img
                              class='card-image'
                              src='+${img}+'
                              alt='Snapshoot'
                            />
                            <p class='project-desc'>
                             +${projItem.description}+
                            </p>
                             
             
                <div class='popup-btn-area'>
                  <button type='button' class='popup-btn'>
                    See Live
                    <img
                      src='icons/seelive-icon.png'
                      alt='See Live Icon'
                      class='popup-btn-icon'
                    />
                  </button>

                  <button type='button' class='popup-btn'>
                    See Source
                    <img
                      src='icons/seesource-icon.png'
                      alt='See Source Icon'
                      class='popup-btn-icon'
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class='popup-footer'></div>
          </div>
        </div>
`;

  body.innerHTML = modalDeatails;
  popupModal.style.display = 'flex';
};
const popupmodalClose = document.querySelector('#close-icon');

popupmodalClose.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

projBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const singleProj = e.target.parentElement.parentElement.getAttribute('id');
    console.log(singleProj);
    const project = projects[singleProj];
    addPopupModalContent(project);
  });
});

/* <div id='popup-overlay'>
          <div id='popup-modal'>
            <div id='popup-header'>
              <img src='icons/close-icon.png' alt='Close' id='close-icon' />
            </div>
            <div id='popup-content'>
              <div class='mobile-version'>
                <h1 class='project-name'>Tonic</h1>

                <ul class='horizontal-list small-list'>
                  <li>
                    <h3 class='small-title'>CANOPY</h3>
                  </li>
                  <li>
                    <div class='circle'></div>
                  </li>
                  <li>
                    <h5 class='small-detail'>Back End Dev</h5>
                  </li>
                  <li>
                    <div class='circle'></div>
                  </li>
                  <li>
                    <h5 class='small-detail'>2015</h5>
                  </li>
                </ul>
                <img
                  class='card-image'
                  src='images/Snapshoot-Portfolio-Card2.png'
                  alt='Snapshoot'
                />
                <p class='project-desc'>
                  A daily selection of privetly<br />
                  personalized reads; no accounts or<br />
                  sign-ups needed.
                </p>
                <ul class='horizontal-list skills-list'>
                  <li class='list-item'>
                    <div class='skills-rect'>
                      <a href=' ' class='skills'>html</a>
                    </div>
                  </li>
                  <li class='list-item'>
                    <div class='skills-rect'>
                      <a href=' ' class='skills'>css</a>
                    </div>
                  </li>
                  <li class='list-item'>
                    <div class='skills-rect js'>
                      <a href=' ' class='skills'>javascript</a>
                    </div>
                  </li>
                </ul>
                <div class='popup-btn-area'>
                  <button type='button' class='popup-btn'>
                    See Live
                    <img
                      src='icons/seelive-icon.png'
                      alt='See Live Icon'
                      class='popup-btn-icon'
                    />
                  </button>

                  <button type='button' class='popup-btn'>
                    See Source
                    <img
                      src='icons/seesource-icon.png'
                      alt='See Source Icon'
                      class='popup-btn-icon'
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class='popup-footer'></div>
          </div>
        </div>*/
