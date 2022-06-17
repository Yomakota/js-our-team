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

// console.log(teamMembers);



const containerCards = document.querySelector('.team-container');


for (let i = 0; i < teamMembers.length; i++) {

    
    const members = teamMembers[i];
    const card = `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${members.photo}"alt=""/>
        </div>
        <div class="card-text">
            <h3>${members.name}</h3>
            <p>${members.role}</p>
        </div>
    </div>`;

    containerCards.innerHTML += card;

}

//--------------------------------
// BONUS
//--------------------------------


const addBtn = document.querySelector('#addMemberButton');

addBtn.addEventListener('click', function () {

    const inputName = document.querySelector('#name');
    const inputRole = document.querySelector('#role');
    const inputPhoto = document.querySelector('#image');

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

    const card = `
     <div class="team-card">
         <div class="card-image">
             <img src="img/${newMember.photo}"alt=""/>
         </div>
         <div class="card-text">
             <h3>${newMember.name}</h3>
             <p>${newMember.role}</p>
         </div>
     </div>`;

    containerCards.innerHTML += card;
    console.log(newMember);
});