/************************************************************************** */
///////////////////// fonction : affichage d'une image dans un div ////////////************************************************************************** */

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




/********************************************************* */
// fonction change image div pour partie Modale ( lightBox )
/********************************************************* */

function ChangeImageM(divId,imageNom){
    var divId; // id du div qui va contenir la grande image 
    var imageNom; // nom de la grande image 
    var imageRep = './images/'; /* repertoire contenant les images (pour ne pas avoir à l'écrire à chaque fois dans la fonction 
     on met l'image dans le div */
    var contenuhtml = '<img class="grandePhotoM" src="'+imageRep+imageNom+'" alt="" onclick="ViderDiv(\'modalPhoto\');" />';
    document.getElementById(divId).innerHTML = contenuhtml;
}	




/************************************************************************** */
/*////////////////// fonction modification des pictos au clic //////////////*//************************************************************************** */

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

// pour les picto lightbox (Modale)
function removeClass5() {
    document.getElementById("picto1M").classList.remove("selected2")  
}
function removeClass6() {
    document.getElementById("picto2M").classList.remove("selected2")  
}
function removeClass7() {
    document.getElementById("picto3M").classList.remove("selected2")  
}
function removeClass8() {
    document.getElementById("picto4M").classList.remove("selected2")  
}

/******************************************************** */
// Ajouter la classe selected sur le picto de la photo choisie
/******************************************************** */
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
    // pour les picto lightbox

    function addClass5() {   
     
       document.getElementById("picto1M").classList.add("selected2")
   }
   function addClass6() {
    
       document.getElementById("picto2M").classList.add("selected2")
   }
   function addClass7() {
    
       document.getElementById("picto3M").classList.add("selected2")
   }
   function addClass8() {
    
       document.getElementById("picto4M").classList.add("selected2")
   }
   


   
   
   /******************************************************** */
   //  fonction griser encadrer picto selectionné
   /******************************************************** */
   
   function changeCss() {
       oDomElement.style.border="1px solid hsl(26, 100%, 55%)";
       oDomElement.Style.opacity= '0.6';
    }
    


   /* ******************************************************* */
   /****//////////////    light box     ////////////////**** */
   /* ******************************************************* */
   window.onload = () => {
        const modale = document.querySelector("#modale");
        const close = document.querySelector(".close")
        const links = document.querySelectorAll('.thumbNail img')
        console.log(links)

   }
    







    /******************************************************************** */
    ////////////////////////////////// selecteur click counter////////////////
    /******************************************************** ***************/
    
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





   /* ******************************************************* */
   /****//////////////   OPEN / CLOSE Light box     ////////////////**** */
   /* ******************************************************* */



function show() {
    document.getElementById("modale").classList.add("show")
}

  
   function hide() {
    document.getElementById("modale").classList.remove("show")  
}