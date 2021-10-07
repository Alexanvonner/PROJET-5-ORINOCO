// LIGNE 28 RELOAD  VOIR AVEC MENTOR SI BONNE SOLUTION OU PAS ?




var produitEnregistreLocalStorage = JSON.parse(localStorage.getItem("produit"));
// Json.parse  pour convertir les donnée au format Json dans le local storage en objet Javascript


// affichage des produits du panier 

let affichageProduit = document.querySelector(".tableauInject");
console.log(affichageProduit);

if (produitEnregistreLocalStorage == null || produitEnregistreLocalStorage == 0) {
    let panierVide = `
    <div class="container-panier-vide">
    <p> VOTRE PANIER EST VIDE
    </div>
    `;
    affichageProduit.innerHTML = panierVide;
} else {
    let structurePanier = [];
    for (let b = 0; b < produitEnregistreLocalStorage.length; b++) {
       structurePanier =
         structurePanier +
         `
         <tr id="${produitEnregistreLocalStorage[b].id_produit}">
         <td>${produitEnregistreLocalStorage[b].nom_produit}</td>
         <td>${produitEnregistreLocalStorage[b].quantite}</td>
         <td>${produitEnregistreLocalStorage[b].option}</td>
         <td>${produitEnregistreLocalStorage[b].prix * produitEnregistreLocalStorage[b].quantite}</td>
         <td> <a href "javascript:window.location.reload()"> <button data-id="${produitEnregistreLocalStorage[b].id_produit}" class="deleteItem" OnClick="SupprimeProduit(this)">Supprimé</button> </td> </a>
         </tr>
       `;
       affichageProduit.innerHTML = structurePanier;
    }
    console.log(structurePanier);

    // je crée un tableau vide qui va me servir a stocker les prix de mon local storage 
    let totalCart = [];

    // je parcour mon localStorage pour recuperer tout les prix présent dans celui-ci
    for (let index = 0; index < produitEnregistreLocalStorage.length; index++) {
      // je récuperer les PRIX que je multiplie fois la QUANTITE présente de chaques articles 
    let resultatTotal = produitEnregistreLocalStorage[index].prix * produitEnregistreLocalStorage[index].quantite;

    // j'utilise la methode PUSH pour ajouter les prix  dans mon tableau TOTALCART pour pouvoir utiliser la methode REDUCER 
    totalCart.push(resultatTotal);

    // j'utilise la methode REDURER qui me sert a calculer le total des mon panier 
    const reducer = (acc,cur) => acc + cur



    
    let montantTotal = document.getElementById("montantTotal");
    montantTotal.innerHTML = `${totalCart.reduce(reducer)}€`;

  }














    let affichageFormulaire = document.querySelector("#formulaire");


    if (produitEnregistreLocalStorage == null) {
      let cartVide = `
    `;
    affichageFormulaire.innerHTML = cartVide;

    } else {
      let cartRempli = `
     <form id="form">
              <input type="text" id="mail" placeholder="Adresse E-mail">
              <input type="text" id="nom" placeholder="Nom">
              <input type="text" id="prenom" placeholder="Prénom">
              <input type="text" id="adresse" placeholder="adresse">
              <input type="text" id="ville" placeholder="code postale">
            </form>
            <div id="button">
              <button id="send">Valider</button>
            </div>
    `;
    affichageFormulaire.innerHTML =  cartRempli;
    }

   function SupprimeProduit(button) {
     console.log(button.getAttribute("data-id"));

    produitEnregistreLocalStorage = JSON.parse(localStorage.getItem("produit"));


    // j'utilise la methode FIND pour trouver un element qui verifie une condition 
    let find = produitEnregistreLocalStorage.find(x => x.id_produit == button.getAttribute("data-id"));
    // j'utilise la methode INDEXof pour trouver l'indice de la position dans un array
    let indice = produitEnregistreLocalStorage.indexOf(find);
    // j'utilise la methode SPLICE pour suprimer l
    produitEnregistreLocalStorage.splice(indice,1);


      // je modifie le localstorage
     localStorage.setItem("produit", JSON.stringify(produitEnregistreLocalStorage));
     // Je supprime l'article sur le front end
     docuement = document.getElementById(button.getAttribute("data-id")).remove();
     
   }


// VIDER TOTALEMENT LE PANIER AU CLICK SUR LE BTN DELETE PANIER   --------------------------------------------

let deletePanier = document.querySelector('#deletePanier');
deletePanier.addEventListener('click', (event) => {
  localStorage.clear();
  alert("Votre panier a été vider");
  window.location.href = "cart.html"
})


// je cible mon button validation formulaire pour pouvoir l'écouter au click
let send = document.getElementById("send");


// je cible les input à mettre de mon formulaire pour ensuite les enregistrer dans le localstorage 
let email = document.getElementById("mail");
let nom = document.getElementById("nom");
let prenom  = document.getElementById("prenom");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");






// j'écoute 
send.addEventListener('click',(event)=>{

  let valeurFormulaire = 
  {
    lastName : nom.value,
    firstName : prenom.value,
    adresse:adresse.value,
    city:ville.value,
    email:email.value,
  }

 // mettre les valeur du formulaire dans le localStorage
 localStorage.setItem("formulaire", JSON.stringify(valeurFormulaire));

})












}



   
      
    
    