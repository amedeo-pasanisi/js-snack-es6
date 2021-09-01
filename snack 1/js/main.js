// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

// creo un'array di oggetti bici
const bici = [
    {nome: "ella", peso: 11},
    {nome: "rossella", peso: 20},
    {nome: "mariella", peso: 11},
    {nome: "graziella", peso: 15}
];

// ipotizzo che la prima bici sia la più leggera
let biciLeggera = bici[0];
// ciclo ogni elemento dell'array per vedere se ha il peso minore della bici più leggera
for (i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso)
        biciLeggera = bici[i];
}

// destrutturo per ottenere le variabili peso e nome della bici leggera
let {nome, peso} = biciLeggera;

// uso il template literal per stampare a schermo la bici più leggera
document.getElementById("container").innerHTML = `<h1>La bici più leggera si chiama ${nome} e pesa ${peso}Kg</h1>`