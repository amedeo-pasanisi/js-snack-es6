// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {nome: "roma", punti: 0, falli: 0},
    {nome: "inter", punti: 0, falli: 0},
    {nome: "milan", punti: 0, falli: 0},
    {nome: "lecce", punti: 0, falli: 0}
]

const nuovoArray = [];

// per ogni elemento dell'array
for (i=0; i < squadre.length; i++) {
    // sostituisco i valori delle proprietà punti, falli con numeri random
    squadre[i].punti = getRndInteger(0,20);
    squadre[i].falli = getRndInteger(0,20);
    // destrutturo i nomi e i falli e li pusho in un nuovo array
    let {nome, falli} = squadre[i];
    nuovoArray.push({nome, falli});
}

console.log(nuovoArray);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}