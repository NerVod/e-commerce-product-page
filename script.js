// changer l'image principale
function ChangeImage(divId,imageNom){
    let divId; /* id du div qui va contenir la grande image */
    let imageNom; /* nom de la grande image à afficher*/
    let imageRep = 'images/'; /* repertoire contenant les images (pour ne pas avoir à l'écrire à chaque fois dans la fonction */
    /* on met l'image dans le div */
    let contenuhtml = '<img class="mainPhoto" src="'+imageRep+imageNom+'" alt="" onclick="ViderDiv(\'grandePhoto\');" />';
    document.getElementById(divId).innerHTML = contenuhtml;
}	
/* fonction : vidage du contenu d'un div */
function ViderDiv(divId){
    let divId; /* id du div à vider */
    /* on vide le div */
    document.getElementById(divId).innerHTML = '';
}
































// selecteur click counter

let counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal); //fonction augmentation d'1 à chaque clic
}

function decrementClick() {
    updateDisplay(--counterVal); // diminution d'1 à chaque clic
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val; // mise à jour du compteur
}