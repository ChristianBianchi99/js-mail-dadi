// CREAZIONE ARRAY
let emails = ["prima@email.com", "seconda@email.com", "terza@email.com", "quarta@email.com", "quinta@email.com"]; 

// CREAZIONE PROMPT
let email = prompt("Inserisci un'email").trim();

// DICHIARAZIONE VARIANTI
let flag = false;

// CREAZIONE CICLO
for( let i=0; i<emails.length; i++){

    if(emails[i].toLowerCase() === email.toLowerCase()) {
        flag = true;
    }
}

// VERIFICA RISULTATO E STAMPA MESSAGGIO
if(flag === true){
    console.log("Elemento trovato")
} else {
    console.log("Elemento non trovato")
}