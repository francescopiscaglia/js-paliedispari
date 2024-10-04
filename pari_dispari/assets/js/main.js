// 1. Preparazione 
// creo una variabile per salvare l'input dell'utente
let user_choose;

// creo una variabile per il numero inserito dell'utente
let user_number;

// stampo le variabili in console
console.log(user_choose, user_number);

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
    } else {
        // se no riprova fino un massimo di tre tentativi
        alert("Attenzione, la scelta deve essere 'pari' o 'dispari' e il numero compreso tra 1 e 5");
    }
}
// creo una funzione per generare un numero random da 1 a 5 per il pc

// creo una funzione per sommare i due numeri

// verifico se sono pari o dispari

// 4. Output