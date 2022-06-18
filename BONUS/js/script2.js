const teamMembers = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez ',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada ',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },

];

const containerCards = document.querySelector('.team-container');

const inputName = document.querySelector('#name');
const inputRole = document.querySelector('#role');
const inputPhoto = document.querySelector('#image');

const addBtn = document.querySelector('#addMemberButton');

addBtn.addEventListener('click', function () {

    const name = inputName.value;
    const role = inputRole.value;
    const photo = inputPhoto.value;

    inputName.value = '';
    inputRole.value = '';
    inputPhoto.value = '';

    const newMember = {
        name: name,
        role: role,
        photo: photo,
    }


    teamMembers.push(newMember);

    const card = drawCard(newMember);

    containerCards.innerHTML += card;
});

drawAllCards(teamMembers);


//--------------------------
// Function
//--------------------------



function drawCard({ photo, name, role }) {

    const card = `
     <div class="team-card">
         <div class="card-image">
             <img src="img/${photo}"alt=""/>
         </div>
         <div class="card-text">
             <h3>${name}</h3>
             <p>${role}</p>
         </div>
     </div>`;

    return card
}

function drawAllCards() {

    for (let i = 0; i < teamMembers.length; i++) {

        const member = teamMembers[i];

        const card = drawCard(member);

        containerCards.innerHTML += card;
    }
}