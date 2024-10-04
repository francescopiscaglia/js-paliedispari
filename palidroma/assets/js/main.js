// 1. Preparazione 
// creo la variabile per salvare la parola scritta dall'utente
let user_word;

// creo la variabile message per gestire l'output
let message;


// 2. Analisi dei dati
// dichiaro la variabile con un prompt
user_word = prompt("Ciao, inserisci una parola");

// stampo la parola in console
console.log(user_word);

// to split esample
// let esample = "radar";
// let esample_split = esample.split("");
// console.log(esample_split); 


// to join es
// let esample = ["radar", "ciao", "a", "tutti"];
// let esample_join = esample.join();
// console.log(esample_join);

// 3. Elaborazione del codice
// creo una funzione per verificare se è palindroma o no
function palindrome_word_verification(word) {

    // .split serve per dividere una stringa in un array di caratteri
    // .reverse serve per invertire l'ordine degli elementi in un array
    // .join return an array as a string
    const palindrome = word.split("").reverse().join("");
    
    if (palindrome == word) {
        return true // è palindroma
    }

    return false; // non è palindroma
};

let palindrome_word = palindrome_word_verification(user_word);

// se la funzione return true
if (palindrome_word) {
    message = "La parola è palindroma"

    // se la funzione return false
} else { 
    message = "La parola non è palindroma"
}


// 4. Output
alert(message);