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


// 3. Elaborazione del codice
// creo una funzione per verificare se è palindroma o no
function palindrome_word_verification(word) {

    // using for loop
    let user_word_lenght = user_word.length;

    // una parola per essere palindroma la prima metà delle essere uguale alla seconda metà
    for (let i = 0; i < user_word_lenght / 2; i++) {

        // se il primo carattere non è uguale all'ultimo non è palindroma
        if (word[i] !== word[user_word_lenght - 1 - i]) {
            return false
        } 
    }

    // se tutti i caratteri sono uguali è palindroma
    return true
};

// salvo il return della funzione in una variabile
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



