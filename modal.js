const body2 = document.querySelector('body');
const aboutMe = document.querySelector('.about-me');
const cardContainer = document.createElement('section');
cardContainer.classList.add('card-works');
// const buttonsArr = [];
const cardArr = [];
// const modalArr = [];
// const closeModalArr = [];

const projects = [
  {
    name: 'Budgetapp',
    featuredImage: { link: ['./images/proj-budgetapp.png', './images/proj-budgetapp.png'], alt: 'Budgetapp project image' },
    description: 'Allows users manage their budget. Users can have a list of transactions associated with a category, so that they can see how much money they spent and on what; signup required.',
    languagesList: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: 'https://limitless-waters-86087.herokuapp.com/',
    sourceLink: 'https://github.com/Fikerte-T/budget-app',
  },
  {
    name: 'SpaceX-Hub',
    featuredImage: { link: ['./images/proj-spacex.png', './images/proj-spacex.png'], alt: 'SpaceX-Hub project image' },
    description: 'A web app that provides commercial and scientific space travel services; uses data from SpaceX API',
    languagesList: ['html', 'css', 'javascript', 'React', 'Redux'],
    liveLink: 'https://spaces-hub-app.herokuapp.com/',
    sourceLink: 'https://github.com/Fikerte-T/SpaceX-Hub',
  },
  {
    name: 'Leaderboard',
    featuredImage: { link: ['./images/leaderboard4.png', './images/leaderboard.png'], alt: 'Leaderboard project image' },
    description: 'Users can submit their scores to the external Leaderboard API and all users\' data can be received from the API and to be displayed on the website.',
    languagesList: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Fikerte-T/Leaderboard-2',
  },
  {
    name: 'Math Magicialns',
    featuredImage: { link: ['./images/proj-mathmagicians.png', './images/proj-mathmagicians.png'], alt: 'Math magicians project image' },
    description: 'A single page application created with react. It uses components to display the UI and to implement the math logic',
    languagesList: ['html', 'css', 'javascript', 'React'],
    liveLink: 'https://reactapp-math-magicians.herokuapp.com/',
    sourceLink: 'https://github.com/Fikerte-T/math-magicians',
  },
];

projects.forEach((project) => {
  body2.appendChild(cardContainer);
  document.body.insertBefore(cardContainer, aboutMe);
  const card = document.createElement('div');
  card.classList.add('card');
  cardContainer.appendChild(card);
  const cardImgContainer = document.createElement('div');
  cardImgContainer.classList.add('card-img-container');
  const cardImg = document.createElement('img');
  cardImg.setAttribute('alt', project.featuredImage.alt);
  cardImg.setAttribute('src', project.featuredImage.link[1]);
  cardImg.setAttribute('srcset', `${project.featuredImage.link[0]} 200w, ${project.featuredImage.link[1]} 1000w`);
  cardImg.setAttribute('sizes', '(min-width: 992px) 1000px, 200px');
  cardImgContainer.appendChild(cardImg);
  card.appendChild(cardImgContainer);
  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  card.appendChild(cardText);
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = project.name;
  cardText.appendChild(projectTitle);
  const description = document.createElement('p');
  description.textContent = project.description;
  cardText.appendChild(description);
  const languagesUl = document.createElement('ul');
  languagesUl.classList.add('languages');
  for (let i = 0; i < project.languagesList.length; i += 1) {
    const languagesli = document.createElement('li');
    const languagesLink = document.createElement('a');
    languagesli.appendChild(languagesLink);
    languagesLink.innerText = project.languagesList[i];
    languagesUl.appendChild(languagesli);
  }
  cardText.appendChild(languagesUl);
  const seeProjectbtn = document.createElement('button');
  seeProjectbtn.setAttribute('type', 'button');
  seeProjectbtn.textContent = 'See Project';
  cardText.appendChild(seeProjectbtn);
  seeProjectbtn.addEventListener('click', () => {
    window.open(project.sourceLink, '_blank');
  });
  cardArr.push(card);
});

cardArr[0].setAttribute('class', 'card card-1');
cardArr[1].setAttribute('class', 'card card-2');
cardArr[2].setAttribute('class', 'card card-3');
cardArr[3].setAttribute('class', 'card card-4');
