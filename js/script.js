// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.


// array con objects
//ciclo for per riprodurre card in modo dinamico

// creo un array di oggetti che rappresentano i membri del team.Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

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


// seleziono div nel DOM dove attaccare le cards
const containerCards = document.querySelector('.team-container');
// console.log(containerCards);

// ciclo for per attaccare cards nel DOM
for (let i = 0; i < teamMembers.length; i++) {

 // salvo in una variabile gli elementi dell'array ossia gli object
    const members = teamMembers[i];
    // console.log(members);

    // uso template presente del DOM per ricreare cards dinamicamente aggiungendo le proprietà degli objects
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

    // console.log(card);

    // inserisco nel DOM ad ogni giro
    containerCards.innerHTML += card;

}