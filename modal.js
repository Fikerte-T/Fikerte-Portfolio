// const { url } = require("inspector");

let body2  = document.querySelector('body');
let aboutMe = document.querySelector('.about-me');
let cardContainer = document.createElement('section');
cardContainer.classList.add('card-works');
let buttonsArr = [];

const languagesList = ['html', 'css', 'javascript'];
// let cardContainer = document.querySelector('.card-works');
// let card2 = document.querySelector('.card-2');
// let card3 = document.querySelector('.card-3');
// let card4 = document.querySelector('.card-4');

let projects = [
    {
        name: 'Tonic',
        featuredImage: "url('./images/Snapshoot-Portfolio-1.png')",
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        languagesList: ['html', 'css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    },
    {
        name: 'Multi-Post Stories',
        featuredImage: "url('./images/Snapshoot-Portfolio-2.png')",
        description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        languagesList: ['html', 'Ruby on rails','css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    },
    {
        name: 'Facebook 360',
        featuredImage: "url('./images/Snapshoot-Portfolio-3.png')",
        description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        languagesList: ['html', 'Ruby on rails','css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    },
    {
        name: 'Uber Navigation',
        featuredImage: "url('./images/Snapshoot-Portfolio-4.png')",
        description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        languagesList: ['html', 'Ruby on rails','css', 'javascript'],
        liveLink: '',
        sourceLink: ''
    }
];

projects.forEach((project) => {

        body2.appendChild(cardContainer);
        document.body.insertBefore(cardContainer, aboutMe);
    
    
        let card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);
    
    
        let cardImg = document.createElement('div');
        cardImg.classList.add('card-img');
        cardImg.style.backgroundImage = project.featuredImage;
        card.appendChild(cardImg);

    
        let cardText = document.createElement('div');
        cardText.classList.add('card-text');
        card.appendChild(cardText);
    
        let projectTitle = document.createElement('h2');
        // projectTitle.classList.add('project-title-1');
        projectTitle.textContent = project.name;
        cardText.appendChild(projectTitle);
    
        let titleRoleul = document.createElement('ul');
        titleRoleul.classList.add('title-role');
        const titleRoleli1 = document.createElement('li');
        titleRoleli1.textContent = 'CANOPY';
        titleRoleul.appendChild(titleRoleli1);
        const titleRoleli2 = document.createElement('li');
        titleRoleli2.classList.add('role');
        const titleRoleImg1 = document.createElement('i');
        titleRoleImg1.classList.add('fas','fa-circle');
        titleRoleli2.appendChild(titleRoleImg1);
        titleRoleul.appendChild(titleRoleli2);
        const titleRoleli3 = document.createElement('li');
        titleRoleli3.classList.add('role');
        titleRoleli3.textContent = 'Back End Dev';
        titleRoleul.appendChild(titleRoleli3);
        const titleRoleli4 = document.createElement('li');
        titleRoleli4.classList.add('role');
        const titleRoleImg2 = document.createElement('i');
        titleRoleImg2.classList.add('fas','fa-circle');
        titleRoleli4.appendChild(titleRoleImg2);
        titleRoleul.appendChild(titleRoleli4);
        const titleRoleli5 = document.createElement('li');
        titleRoleli5.classList.add('role');
        titleRoleli5.textContent = '2015';
        titleRoleul.appendChild(titleRoleli5);
        cardText.appendChild(titleRoleul);
    
        let description = document.createElement('p');
        description.textContent = project.description;
        cardText.appendChild(description);
    
        let languagesUl = document.createElement('ul');
        languagesUl.classList.add('languages');
        for(let i=0; i<project.languagesList.length; i++){
            const languagesli = document.createElement('li');
            const languagesLink = document.createElement('a');
            languagesli.appendChild(languagesLink);
            languagesLink.innerText = languagesList[i];
            languagesUl.appendChild(languagesli);
        }
        cardText.appendChild(languagesUl);
    
        let seeProjectbtn = document.createElement('button');
        seeProjectbtn.classList.add('button');
        seeProjectbtn.setAttribute('type', 'button');
        seeProjectbtn.textContent = 'See Project';
        cardText.appendChild(seeProjectbtn);
        buttonsArr.push(seeProjectbtn);
    
});

// buttonsArr.forEach(btn=>console.log(btn));


// button1.addEventListner('click', function(){
//     console.log('hi');
// });

let modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');
cardContainer.appendChild(modalContainer);

let modal = document.createElement('div');
modal.classList.add('modal');
modalContainer.appendChild(modal);

let projectTitle1 = document.createElement('h2');
projectTitle1.textContent = projects[0].name;
modal.appendChild(projectTitle1);

let cardImg1 = document.createElement('div');
cardImg1.classList.add('card-img-modal');
cardImg1.style.backgroundImage = projects[0].featuredImage;
modal.appendChild(cardImg1);


let titleRoleul = document.createElement('ul');
titleRoleul.classList.add('title-role');
const titleRoleli1 = document.createElement('li');
titleRoleli1.textContent = 'CANOPY';
titleRoleul.appendChild(titleRoleli1);
const titleRoleli2 = document.createElement('li');
titleRoleli2.classList.add('role');
const titleRoleImg1 = document.createElement('i');
titleRoleImg1.classList.add('fas','fa-circle');
titleRoleli2.appendChild(titleRoleImg1);
titleRoleul.appendChild(titleRoleli2);
const titleRoleli3 = document.createElement('li');
titleRoleli3.classList.add('role');
titleRoleli3.textContent = 'Back End Dev';
titleRoleul.appendChild(titleRoleli3);
const titleRoleli4 = document.createElement('li');
titleRoleli4.classList.add('role');
const titleRoleImg2 = document.createElement('i');
titleRoleImg2.classList.add('fas','fa-circle');
titleRoleli4.appendChild(titleRoleImg2);
titleRoleul.appendChild(titleRoleli4);
const titleRoleli5 = document.createElement('li');
titleRoleli5.classList.add('role');
titleRoleli5.textContent = '2015';
titleRoleul.appendChild(titleRoleli5);
cardText.appendChild(titleRoleul);

let description = document.createElement('p');
description.textContent = projects[0].description;
cardText.appendChild(description);

let languagesUl = document.createElement('ul');
languagesUl.classList.add('languages');
for(let i=0; i<projects[0].languagesList.length; i++){
    const languagesli = document.createElement('li');
    const languagesLink = document.createElement('a');
    languagesli.appendChild(languagesLink);
    languagesLink.innerText = languagesList[i];
    languagesUl.appendChild(languagesli);
}
cardText.appendChild(languagesUl);
