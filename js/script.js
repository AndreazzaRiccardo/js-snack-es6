
// SNACK 1

const bikes = [
    {
        nome: "Bianchi",
        peso: "23 kg"
    },
    {
        nome: "Cinelli",
        peso: "26 kg"
    },
    {
        nome: "Argon",
        peso: "20 kg"
    },
    {
        nome: "Bmc",
        peso: "18 kg"
    }
];

const [bianchi, cinelli, argon, bmc] = bikes;

for (const key in bmc) {
    document.querySelector(".container-1").innerHTML += `
        <p>${bmc[key]}</p>
        `;
}

// ***********************************************************************************