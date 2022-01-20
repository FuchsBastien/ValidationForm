/*on prend le 1er enfant input de formgroup*/
const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
/*on prend le 2ème enfant input de formgroup*/
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
/*on prend le 3ème enfant input de formgroup*/
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
/*on prend le 4ème enfant input de formgroup*/
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');



//Validation pseudo

//A la saisie de l'input */
inpUtilisateur.addEventListener('input', (e) => {
    /*si la valeur de l'évènement dépasse 3 caractères*/ 
    if(e.target.value.length >= 3) {
        /*on affiche l'image [0] avec le css display inline*/
        allImg[0].style.display = "inline";
        /*on ajoute l'icone en vert [0] valide*/
        allImg[0].src = "ressources/check.svg";
        //on efface le message d'alerte [0] avec le css display none après qu'il a été montré
        allSpan[0].style.display = "none";
    }   
    else {
        /*on affiche l'image [0] avec le css display inline*/
        allImg[0].style.display = "inline";
        /*on ajoute l'icone en rouge [0] non valide*/
        allImg[0].src = "ressources/error.svg";
        //on affiche le message d'alerte [0] avec le css display none
        allSpan[0].style.display = "inline";
    }
})



//Validation mail

inpMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;
    
     /*si la valeur de l'évènement correspond au regex (===0)*/ 
    if(e.target.value.search(regexEmail) === 0){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    /*si la valeur de l'évènement ne correspond pas au regex (=== -1)*/  
    } else if(e.target.value.search(regexEmail) === -1) {

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }

})



//Validation mot de passe

/*valeur de l'input*/
let valeurInp;
/* "^" = tout ce qui n'est pas caractères normaux donc caractères spéciaux */
const specialCar = /[^a-zA-Z0-9]/;
/* "i" = majuscule inclus*/
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;


let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

inpMdp.addEventListener('input', (e) => {
    
    /*on rentre la valeur de l'input pour éviter d'écrire e.target.value tout le temps*/
    valeurInp = e.target.value;

    /*si la valeur de l'input contient un caractère spécial, on ajoute 1 à objValidation.symbole*/
    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    /*si la valeur de l'input contient un caractère de l'alphabet, on ajoute 1 à objValidation.alphabet*/
    if(valeurInp.search(alphabet) !== -1){
        objValidation.lettre = 1;
    }
    /*si la valeur de l'input contient un chiffre, on ajoute 1 à objValidation.chiffres*/
    if(valeurInp.search(chiffres) !== -1){
        objValidation.chiffre = 1;
    }
    
    console.log( objValidation);

    /*si on supprime des choses de l'input = deleteContentBackward*/
    if(e.inputType = 'deleteContentBackward'){
            /*si la valeur de l'input ne contient pas un caractère spécial, on ajoute 0 à objValidation.symbole*/
            if(valeurInp.search(specialCar) === -1){
                objValidation.symbole = 0;
            }
            /*si la valeur de l'input ne contient pas un caractère de l'alphabet, on ajoute 0 à objValidation.alphabet*/
            if(valeurInp.search(alphabet) === -1){
                objValidation.lettre = 0;
            }
            /*si la valeur de l'input ne contient pas un chiffre, on ajoute 0 à objValidation.chiffres*/
            if(valeurInp.search(chiffres) === -1){
                objValidation.chiffre = 0;
            }
    } 

    console.log( objValidation);
    
    
    let testAll = 0;
    /*boucle for in qui sert à itérer à travers un objet*/
    for(const property in objValidation){
        /*On itère à travers chaque propriété et compter le nombre de 1 à rajouter dans testAll*/
        if(objValidation[property] > 0){
            testAll++;
        }
    }
    /*si la valeur de l'input ne contient les 3 validations, on ajoute à cet input l'icône en rouge*/
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
        /*sinon on rajoute l'icône en vert*/
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "ressources/check.svg";
    }

    
    // force mdp

    /*si la longueur de la valeur saisie est <=6 et >0 on affiche la ligne jaune*/
    if(valeurInp.length <= 6 && valeurInp.length > 0){
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }
    /*sinon si la longueur de la valeur saisie est >6 et <=9 on affiche la ligne rouge*/
    else if (valeurInp.length > 6 && valeurInp.length <= 9) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'none';
    }
    /*sinon si la longueur de la valeur saisie est  >9 on affiche la ligne verte*/
    else if (valeurInp.length > 9) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'block';
    }
    /*sinon si la longueur de la valeur saisie est ====0 on affiche aucune ligne*/
    else if (valeurInp.length === 0) {
        allLigne[0].style.display = 'none';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }

})