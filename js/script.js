
// SNACK 1

const bikes = [
    {
        nome: "Bianchi",
        peso: 23
    },
    {
        nome: "Cinelli",
        peso: 27
    },
    {
        nome: "Argon",
        peso: 20
    },
    {
        nome: "Bmc",
        peso: 18
    }
];

let lightWeight = bikes[0].peso;
let lightBike = "";
for (let i = 0; i < bikes.length; i++) {
    if(bikes[i].peso < lightWeight){
        lightWeight = bikes[i].peso;
        lightBike = bikes[i].nome;
    }
}

document.querySelector(".container-1").innerHTML +=`
    <p>Nome: ${lightBike}</p>
    <p>Peso: ${lightWeight}</p>
`;


// ***********************************************************************************

// SNACK 2

const teams = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

let newArrayTeams = [];
teams.forEach(team => {
     team.puntiFatti = generateRndNumber();
     team.falliSubiti = generateRndNumber();
     let {nome, puntiFatti, falliSubiti} = team;
     newArrayTeams.push({
         nome,
         falliSubiti
     })
     console.log(team);
 });

 console.log(newArrayTeams);

 function generateRndNumber(){
    return Math.floor(Math.random() * 50) + 1;
}

 




















