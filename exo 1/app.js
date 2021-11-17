let liste = document.getElementById("liste-commissions");
let newListe = document.createElement("li");
newListe.innerHTML = "Test 123";
liste.appendChild(newListe);

let button = document.getElementById("valide");

button.addEventListener("click", function (){
    liste.lastChild.remove();

})




