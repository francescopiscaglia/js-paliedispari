// 1. Data preparation 
// creo la variabile per salvare la parola scritta dall'utente
let user_word;

// creo la variabile message per gestire l'output
let message;


// 2. Data collection
// dichiaro la variabile con un prompt
user_word = prompt("Ciao, inserisci una parola");

// stampo la parola in console
console.log(user_word);


// 3. Code elaboration
// creo la funzione per controllare se è palindroma
/**
 * 
 * @param {word} word the word to check 
 */
function is_palindrom(word) {

    // se la funzione return true
    if (join_method === user_word) {
        return true

        // se la funzione return false
    } else {
        return false
    }
}

// ciclo nella parola e splitto la parola in un array di caratteri
/**
 * 
 * @param {word} word The word to split
 * @returns {array}
 */
function split_word(word) {

    // creo la variabile vuota per contenere il nuovo array 
    let splitted_word = [];

    // for loop per pushare i caratteri di user_word dentro l'array
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        splitted_word.push(char);
    }
    
    return splitted_word;
}

// salvo la parola splittata
let split_method = split_word(user_word);

// reverso la parola splittata
/**
 * 
 * @param {array} array The splitted array 
 * @returns {array}
 */
function reverse_word(array) {

    // creo la variabile vuota per contenere il nuovo array 
    let reversed_word = [];

    // for loop per fare il reverse dell'array splittato
    for (let i = array.length - 1; i >= 0; i--) {
        reversed_word.push(array[i]);
    }

    return reversed_word;
}

// salvo la parola reverse
let reverse_method = reverse_word(split_method);

// joino la parola reverse in un array
/**
 * 
 * @param {array} array The reversed array 
 * @returns {word}
 */
function join_word(array) {

    // creo la variabile vuota per contenere la nuova stringa 
    let joined_word = "";

    // for loop per trasformare il reversed array in una nuova stringa
    for (let i = 0; i < array.length; i++) {
        joined_word += array[i];
    }

    return joined_word;
}

let join_method = join_word(reverse_method);
console.log(join_method);

// se la funzione return true
if (is_palindrom(user_word)) {
    message = "La parola è palindroma"

    // se la funzione return false
} else {
    message = "La parola non è palindroma"
}


// 4. Output
alert(message);


