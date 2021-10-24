///////////////////// fonction : affichage d'une image dans un div //////////////////////////////////////////////

function ChangeImage(divId,imageNom){
    var divId; // id du div qui va contenir la grande image 
    var imageNom; // nom de la grande image 
    var imageRep = './images/'; /* repertoire contenant les images (pour ne pas avoir à l'écrire à chaque fois dans la fonction 
     on met l'image dans le div */
    var contenuhtml = '<img class="grandePhoto" src="'+imageRep+imageNom+'" alt="" onclick="ViderDiv(\'div-photo\');" />';
    document.getElementById(divId).innerHTML = contenuhtml;
}	
// fonction : vidage du contenu d'un div 
function ViderDiv(divId){
    var divId; // id du div à vider 
    // on vide le div 
    document.getElementById(divId).innerHTML = '';
}

///////////////////////////////// fonction modification des pictos au clic //////////////////////////////////////////////

// fonctions supprimer classe "selected" sur les pictos 

function removeClass() {
    document.getElementById("picto1").classList.remove("selected")  
}
function removeClass2() {
    document.getElementById("picto2").classList.remove("selected")  
}
function removeClass3() {
    document.getElementById("picto3").classList.remove("selected")  
}
function removeClass4() {
    document.getElementById("picto4").classList.remove("selected")  
}

// Ajouter la classe selected sur le picto de la photo choisie
   function addClass() {
     
       document.getElementById("picto1").classList.add("selected")
   }
   function addClass2() {
    
       document.getElementById("picto2").classList.add("selected")
   }
   function addClass3() {
    
       document.getElementById("picto3").classList.add("selected")
   }
   function addClass4() {
    
       document.getElementById("picto4").classList.add("selected")
   }
   


////////////////////////////////// selecteur click counter///////////////////////////////////////////////////////

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



//  fonction griser encadrer picto selectionné

function changeCss() {
    oDomElement.style.border="1px solid hsl(26, 100%, 55%)";
    oDomElement.Style.opacity= '0.6';
}
