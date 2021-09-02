// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// creo un'array di numeri
const numeri = [1,2,3,4,5,6,7,8,9,10];
// creo due variabili
let a;
let b;
// assegno due valori casuali facendo in modo che a sia sempre più piccolo di b
do {
    a = getRndInteger (1, 10)
    b = getRndInteger (1, 10)
} while (a >= b);
console.log(a, b);

// let nuovoArray = [];
// METODO 1: FOR
// for (i=0; i<numeri.length; i++) {
//     if (a < numeri[i] && numeri[i] < b) {
//         nuovoArray.push(numeri[i]);
//     }
// }

// METODO 2: FOR EACH
// numeri.forEach((numero) => {
//     if (a < numero && numero < b) {
//         nuovoArray.push(numero);
//     }
// });

// METODO 3: FILTER
let nuovoArray = numeri.filter ((numero) => {
    if (a < numero && numero < b) {
        return true;
    }
    return false;
});
console.log(nuovoArray);





// Funzioni
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }