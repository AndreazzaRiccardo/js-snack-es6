
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

let lightBike = bikes[0];
bikes.forEach((curBike) => {
    if(curBike.peso < lightBike.peso){
        lightBike = curBike;
    }
})

const {nome, peso} = lightBike;
document.querySelector(".container-1").innerHTML = `
    La bici piu leggera è ${nome} con peso di ${peso}
`;


// let lightWeight = bikes[0].peso;
// let lightBike   = bikes[0].nome;

// for (let i = 0; i < bikes.length; i++) {

//     if(bikes[i].peso <= lightWeight){
//         lightBike   = bikes[i].nome;
//         lightWeight = bikes[i].peso;
//     }
// }

// document.querySelector(".container-1").innerHTML +=`
//     <p>Nome: ${lightBike}</p>
//     <p>Peso: ${lightWeight}</p>
// `;


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

function generateRndNumber(){
    return Math.floor(Math.random() * 50) + 1;
}

teams.forEach((team) => {
    team.falliSubiti = generateRndNumber();
    team.puntiFatti = generateRndNumber();
})

console.log(teams);

const newTeams = teams.map((team) => {
    const {nome, falliSubiti} = team;
    return {
            nome,
            falliSubiti
           };
})

console.log(newTeams);

// let newArrayTeams = [];

// teams.forEach(team => {
//     team.puntiFatti  = generateRndNumber();
//     team.falliSubiti = generateRndNumber();

//     const {nome, puntiFatti, falliSubiti} = team;
//     newArrayTeams.push({
//         nome,
//         falliSubiti
//     });

//     console.log(team);
// });

// console.log(newArrayTeams);


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
        const newArray = [];
        array.forEach((currElem, index) => {
            if(index >= startNumber && index <= endNumber){
                newArray.push(currElem);
            } 
        });
        return newArray;
    }

 console.log(getSubArray(myArray, 1, 3));



 function getSubArray2 (array, startNumber, endNumber) {
    // const newArray = array.filter((currElem, index) => {
    //     return (index >= startNumber && index <= endNumber)
    // });
    // return newArray
    if(endNumber > array.length || startNumber > array.length || startNumber > endNumber) {
        return ["Error"];
    }
    return array.filter((currElem, index) => index >= startNumber && index <= endNumber);
 }

 console.log(getSubArray2(myArray, 2, 4));



















