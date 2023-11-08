
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
let lightBike   = bikes[0].nome;

for (let i = 0; i < bikes.length; i++) {

    if(bikes[i].peso <= lightWeight){
        lightBike   = bikes[i].nome;
        lightWeight = bikes[i].peso;
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
    team.puntiFatti  = generateRndNumber();
    team.falliSubiti = generateRndNumber();

    let {nome, puntiFatti, falliSubiti} = team;
    newArrayTeams.push({
        nome,
        falliSubiti
    });

    console.log(team);
});

console.log(newArrayTeams);

function generateRndNumber(){
    return Math.floor(Math.random() * 50) + 1;
}


// ***********************************************************************************

// SNACK 3

const myArray = ["Cane", "Gatto", "Coniglio", "Criceto", "Serpente"];

/**
 * Dato in input un'array e due numeri, restituisci un nuovo array contenente solo i valori presenti nell'indice tra il primo numero inserito e il secondo
 * @param {array} array
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {array} newArray
 */ function getSubArray (array, startNumber, endNumber) {
    let newArray = [];
    array.forEach((currElem, index) => {
        if(index >= startNumber && index <= endNumber){
            newArray.push(currElem);
        } 
    });
    return newArray;
 }

 console.log(getSubArray(myArray, 4, 1));



















