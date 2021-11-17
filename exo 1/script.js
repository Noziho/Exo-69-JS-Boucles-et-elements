let list = document.getElementById('liste-commissions');
let input = document.getElementById('champ');
let valid = document.getElementById('valide');
let texteLi ="mon nouvelle élement"
let newElem = document.createElement("li");
newElem.innerHTML = texteLi;



list.append(newElem);


valid.addEventListener("click", function () {
    newElem.parentElement.removeChild(newElem);
})


