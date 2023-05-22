// DICHIARAZIONE VARIABILI
const button = document.getElementById("start");
const result = document.getElementById("result");

// IMPOSTAZIONE BOTTONE
button.addEventListener("click", function() {

    let userResult = Math.floor( Math.random() * 6 + 1)
    console.log(userResult)
    let computerResult = Math.floor( Math.random() * 6 + 1)
    console.log(computerResult)

    // CONFRONTO RISULTATI
    if(userResult > computerResult){
        console.log("Hai vinto")
        result.innerHTML = "Hai vinto"
    } else if(userResult <= computerResult){
        console.log("Hai perso")
        result.innerHTML = "Hai perso"
    }
})