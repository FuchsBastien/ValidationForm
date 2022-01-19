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


/*A la saisie de l'input */
inpUtilisateur.addEventListener('input', (e) => {
    /*si la valeur de l'évènement dépasse 3 caractères*/ 
    if(e.target.value.length >= 3) {
        /*on affiche l'image [0] avec le css display inline*/
        allImg[0].style.display = "inline";
        /*on ajoute l'icone en vert [0] valide*/
        allImg[0].src = "ressources/check.svg";
        //on efface le message d'alerte [0] avec le css display none
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