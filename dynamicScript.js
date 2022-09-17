const dynamicCardsArea = document.querySelector('.CardWorksArea');
const popupOverlay = document.querySelector('#popup-overlay');
const blurContainer = document.querySelector('.container');
const variable = '';
const Projects = [
  {
    title: ['Tonic', 'Tonic'],
    subtitle: ['CANOPY', 'CANOPY'],
    role: ['Back End Dev', 'Back End Dev'],
    year: ['2015', '2015'],
    img: [
      'images/Snapshoot-Portfolio-Card1.png',
      'images/Snapshoot-Portfolio1-desktop.png',
    ],
    description: [
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
    ],
    lang: [
      ['html', 'css', 'javascript'],
      ['html', 'css', 'javascript'],
    ],
    live: 'https://reemmohamedabdelfatah.github.io/Portfolio-Reem/',
    source: 'https://github.com/ReemMohamedAbdelfatah/Portfolio-Reem.git',
  },
  {
    title: ['Tonic', 'Multi-Post Stories'],
    subtitle: ['CANOPY', 'FACEBOOK'],
    role: ['Back End Dev', 'Full Stack Dev'],
    year: ['2015', '2015'],
    img: [
      'images/Snapshoot-Portfolio-Card2.png',
      'images/Snapshoot-Portfolio-desktop2.png',
    ],
    description: [
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
    ],
    lang: [
      ['html', 'css', 'javascript'],
      ['html', 'Ruby on rails', 'css', 'javascript'],
    ],
    live: 'https://reemmohamedabdelfatah.github.io/Portfolio-Reem/',
    source: 'https://github.com/ReemMohamedAbdelfatah/Portfolio-Reem.git',
  },
  {
    title: ['Tonic', 'Facebook 360'],
    subtitle: ['CANOPY', 'FACEBOOK'],
    role: ['Back End Dev', 'Full Stack Dev'],
    year: ['2015', '2015'],
    img: [
      'images/Snapshoot-Portfolio-Card3.png',
      'images/Snapshoot-Portfolio.png',
    ],
    description: [
      ' Experimental content creation feature that allows users to<br />add to an existing story over the course of a day without<br />spamming their friends.',
      ' Experimental content creation feature that allows users to<br />add to an existing story over the course of a day without<br />spamming their friends.',
    ],
    lang: [
      ['html', 'css', 'javascript'],
      ['html', 'Ruby on rails', 'css', 'javascript'],
    ],
    live: 'https://reemmohamedabdelfatah.github.io/Portfolio-Reem/',
    source: 'https://github.com/ReemMohamedAbdelfatah/Portfolio-Reem.git',
  },
  {
    title: ['Tonic', 'Uber Navigation'],
    subtitle: ['CANOPY', 'Uber'],
    role: ['Back End Dev', 'Lead Developer'],
    year: ['2015', '2018'],
    img: [
      'images/Snapshoot-Portfolio-Card4.png',
      'images/Snapshoot-Portfolio-desktop.png',
    ],
    description: [
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
      'A daily selection of privetly<br />personalized reads; no accounts or<br />sign-ups needed.',
    ],
    lang: [
      ['html', 'css', 'javascript'],
      ['html', 'Ruby on rails', 'css', 'javascript'],
    ],
    live: 'https://reemmohamedabdelfatah.github.io/Portfolio-Reem/',
    source: 'https://github.com/ReemMohamedAbdelfatah/Portfolio-Reem.git',
  },
];

Projects.forEach((project, index) => {
  let langsM = '';
  let langsD = '';
  project.lang[0].forEach((lan) => {
    if (lan === 'javascript' || lan === 'Ruby on rails') {
      langsM += `
        <li class='list-item'>
            <div class='skills-rect js'>
              <a href=' ' class='skills'>${lan}</a>
            </div>
        </li>
        `;
    } else {
      langsM += `
        <li class='list-item'>
            <div class='skills-rect'>
              <a href=' ' class='skills'>${lan}</a>
            </div>
        </li>
        `;
    }
  });

  project.lang[1].forEach((lan) => {
    if (lan === 'javascript' || lan === 'Ruby on rails') {
      langsD += `
      <li class='list-item'>
          <div class='skills-rect js'>
            <a href=' ' class='skills'>${lan}</a>
          </div>
      </li>
      `;
    } else {
      langsD += `
      <li class='list-item'>
          <div class='skills-rect'>
            <a href=' ' class='skills'>${lan}</a>
          </div>
      </li>
      `;
    }
  });

  const workCard = `
  <section class='card-work${index + 1}' id='Portfolio'>
<div class='flex-container' id='${index}'>
<div class='mobile-version'>
<img
  class='card-image'
  src='${project.img[0]}'
  alt='Snapshoot mobile version'
/>

<h1 class='project-name'>${project.title[0]}</h1>

<ul class='horizontal-list small-list'>
  <li>
    <h3 class='small-title'>${project.subtitle[0]}</h3>
  </li>
  <li>
    <div class='circle'></div>
  </li>
  <li>
    <h5 class='small-detail'>${project.role[0]}</h5>
  </li>
  <li>
    <div class='circle'></div>
  </li>
  <li>
    <h5 class='small-detail'>${project.year[0]}</h5>
  </li>
</ul>

<p class='project-desc'>
  ${project.description[0]}
</p>
<ul class='horizontal-list skills-list'>
  ${langsM}
</ul>
<div class='btn-area'>
  <button type='button' class='project-btn popup-project-btn'>
    See Project
  </button>
</div>
</div>

<div class='desktop-version desktop-card'>
<div>
  <img
    class='card-image'
    src='${project.img[1]}'
    alt='Snapshoot desktop version'
  />
</div>
<div>
  <h1 class='project-name'>${project.title[1]}</h1>

  <ul class='horizontal-list small-list'>
    <li>
      <h3 class='small-title'>${project.subtitle[1]}</h3>
    </li>
    <li>
      <div class='circle'></div>
    </li>
    <li>
      <h5 class='small-detail'>${project.role[1]}</h5>
    </li>
    <li>
      <div class='circle'></div>
    </li>
    <li>
      <h5 class='small-detail'>${project.year[1]}</h5>
    </li>
  </ul>

  <p class='project-desc'>
    ${project.description[1]}
  </p>
  <ul class='horizontal-list skills-list'>
    ${langsD}
  </ul>
  <div class='btn-area'>
    <button type='button' class='project-btn'>See Project</button>
  </div>
</div>
</div>
  </section>
  `;
  dynamicCardsArea.innerHTML += workCard;
});

const seeProjectBtns = document.querySelectorAll('.project-btn');

const addModalContent = (projItem) => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    let langsM = '';
    projItem.lang[0].forEach((lan) => {
      if (lan === 'javascript' || lan === 'Ruby on rails') {
        langsM += `
        <li class='list-item'>
            <div class='skills-rect js'>
              <a href=' ' class='skills'>${lan}</a>
            </div>
        </li>
        `;
      } else {
        langsM += `
        <li class='list-item'>
            <div class='skills-rect'>
              <a href=' ' class='skills'>${lan}</a>
            </div>
        </li>
        `;
      }
    });

    const modDetailM = `
  <div id='popup-modal'>
    <div id='popup-header'>
    <div>
    <h1 class='project-name'>${projItem.title[0]}</h1>
    </div>
      <div>
      <img src='icons/close-icon-popup.png' alt='Close' id='popup-close-icon' />
      </div>
    </div>
    <div id='popup-content'>
    <div>
                    <ul class='horizontal-list small-list'>
                      <li>
                        <h3 class='small-title'>${projItem.subtitle[0]}</h3>
                      </li>
                      <li>
                        <div class='circle'></div>
                      </li>
                      <li>
                        <h5 class='small-detail'>${projItem.role[0]}</h5>
                      </li>
                      <li>
                        <div class='circle'></div>
                      </li>
                      <li>
                        <h5 class='small-detail'>${projItem.year[0]}</h5>
                      </li>
                    </ul>
                    <img
                      class='card-image'
                      src='${projItem.img[0]}'
                      alt='Snapshoot'
                    />
                    <p class='project-desc'>
                     ${projItem.description[0]}
                    </p>
                    <ul class='horizontal-list skills-list'>
                    ${langsM}
                  </ul>
     <div>
     <img src='icons/bottom-popup-separator.png' alt='vector separator'/>
     </div>
        <div class='popup-btn-area'>
          <button type='button' class='popup-btn' onclick='window.location.href='${projItem.live}';' value='liveLink'>
            See Live
            <img
              src='icons/seelive-icon.png'
              alt='See Live Icon'
              class='popup-btn-icon'
            />
          </button>
          <button type='button' class='popup-btn' onclick='window.location.href='${projItem.source}';' value='sourceLink'>
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
`;
    popupOverlay.innerHTML = modDetailM;
    popupOverlay.style.display = 'block';
    blurContainer.style.filter = 'blur(4px)';
    popupOverlay.scrollTop = 0;
  } else {
    let langsD = '';
    projItem.lang[1].forEach((lan) => {
      if (lan === 'javascript' || lan === 'Ruby on rails') {
        langsD += `
        <li class='list-item'>
            <div class='skills-rect js'>
              <a href=' ' class='skills'>${lan}</a>
            </div>
        </li>
        `;
      } else {
        langsD += `
        <li class='list-item'>
            <div class='skills-rect'>
              <a href=' ' class='skills'>${lan}</a>
            </div>
        </li>
        `;
      }
    });
    const modDetailD = `
  <div id='popup-modal'>
    <div id='popup-header'>
    <div>
    <h1 class='project-name'>${projItem.title[1]}</h1>
    </div>
      <div>
      <img src='icons/close-icon-popup.png' alt='Close' id='popup-close-icon' />
      </div>
    </div>
    <div id='popup-content'>
    <div>
                    <ul class='horizontal-list small-list'>
                      <li>
                        <h3 class='small-title'>${projItem.subtitle[1]}</h3>
                      </li>
                      <li>
                        <div class='circle'></div>
                      </li>
                      <li>
                        <h5 class='small-detail'>${projItem.role[1]}</h5>
                      </li>
                      <li>
                        <div class='circle'></div>
                      </li>
                      <li>
                        <h5 class='small-detail'>${projItem.year[1]}</h5>
                      </li>
                    </ul>
                    <div class='image-card-popup-d'>
                    <img
                      class='image-popup-d'
                      src='${projItem.img[1]}'
                      alt='Snapshoot'
                    />
                    </div>

                    <div class='popup-desc-info'>
                    <p class='project-desc'>
                     ${projItem.description[1]}
                    </p>
                    
                     <div>
                    <ul class='horizontal-list skills-list'>
                    ${langsD}
                  </ul>
        <div class='popup-btn-area'>
          <button type='button' class='popup-btn' onclick='window.location.href='${projItem.live}';' value='liveLink'>
            See Live
            <img
              src='icons/seelive-icon.png'
              alt='See Live Icon'
              class='popup-btn-icon'
            />
          </button>
          <button type='button' class='popup-btn' onclick='window.location.href='${projItem.source}';' value='sourceLink'>
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
      </div>
    </div>
    <div class='popup-footer'></div>
  </div>
`;
    popupOverlay.innerHTML = modDetailD;
    popupOverlay.style.display = 'block';
    blurContainer.style.filter = 'blur(4px)';
    popupOverlay.scrollTop = 0;
  }
  const popupmodalClose = document.querySelector('#popup-close-icon');
  popupmodalClose.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    blurContainer.style.filter = 'blur(0)';
  });
};

seeProjectBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      const singleProj = e.target.parentElement.parentElement.parentElement.getAttribute('id');
      const project = Projects[singleProj];
      addModalContent(project);
    } else {
      const singleProj = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id');
      const project = Projects[singleProj];
      addModalContent(project);
    }
  });
});
