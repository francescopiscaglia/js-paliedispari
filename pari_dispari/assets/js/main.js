// 1. Preparazione 
// creo una variabile per salvare l'input dell'utente
let user_choose;

// creo una variabile per il numero inserito dell'utente
let user_number;

// creo una variabile per il messaggio finale
let message;

// 2. Analisi dei dati

// 3. Elaborazione codice
// controllo se la scelta è giusta
for (let i = 1; i <= 3; i++) {
    user_choose = prompt("Ciao, scegli tra pari o dispari"); 
    user_number = Number(prompt("Ora inserisci un numero da 1 a 5 compresi"));
    console.log(user_choose, user_number);

    // se la scelta dell'utente è corretta e il numero inserito è compreso tra 1 e 5
    if ((user_choose === "pari" || user_choose === "dispari") && (user_number >= 1 && user_number <= 5)) {
        // se è vero puoi proseguire
        alert("Puoi proseguire");

        // e termina il ciclo
        break

    } else if (i < 3) {
        // altrimenti riprova fino un massimo di tre tentativi
        alert("Attenzione, la scelta deve essere 'pari' o 'dispari' e il numero compreso tra 1 e 5");
    
    } else {
        // altrimenti il programma termina
        alert("Purtroppo hai esaurito i 3 tentativi disponibili");
    }
}

// creo una funzione per generare un numero random da 1 a 5 per il pc
function get_rnd_integer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// salvo il risultato della funzione in una variabile
let pc_number = get_rnd_integer(1, 5);
console.log(pc_number);

// faccio la somma tra il numero dell'utente e il random number del pc
let sum = user_number + pc_number;


// verifico se sono pari o dispari
if (sum % 2 == 0) {

    // verifico se l'utente aveva scelto pari per vedere se ha vinto
    if (user_choose === "pari") {
        message = `Hai vinto ;) La somma dei numeri è pari: ${sum}`;

    } else {
        message = `Ha vinto il pc :( La somma dei numeri è pari: ${sum}`;
    }

} else {

    // verifico se l'utente aveva scelto dispari per vedere se ha vinto
    if (user_choose === "dispari") {
        message = `Hai vinto ;) La somma dei numeri è dispari: ${sum}`;
        
    } else {
        message = `Ha vinto il pc :( La somma dei numeri è dispari: ${sum}`;
    }
}

// 4. Output
alert(message);