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
         <td>${produitEnregistreLocalStorage[b].prix}</td>
         <td> <button data-id="${produitEnregistreLocalStorage[b].id_produit}" class="deleteItem" OnClick="SupprimeProduit(this)" >Supprimé</button> </td>
         </tr>
       `;
       affichageProduit.innerHTML = structurePanier;
    }
    console.log(structurePanier);









    let affichageFormulaire = document.querySelector("#formulaire");


    if (produitEnregistreLocalStorage == null) {
      let cartVide = `
    `;
    affichageFormulaire.innerHTML = cartVide;

    } else {
      let cartRempli = `
     <form id="form">
              <input type="text" placeholder="Adresse E-mail">
              <input type="text" placeholder="Nom">
              <input type="text" placeholder="Prénom">
              <input type="Adresse" placeholder="adresse">
              <input type="Code postale" placeholder="code postale">
            </form>
            <div id="button">
              <button>Valider</button>
            </div>
    `;
    affichageFormulaire.innerHTML =  cartRempli;
    }

   function SupprimeProduit(button) {
     console.log(button.getAttribute("data-id"));

    produitEnregistreLocalStorage = JSON.parse(localStorage.getItem("produit"));
    
    let find = produitEnregistreLocalStorage.find(x => x.id_produit == button.getAttribute("data-id"));
    let index = produitEnregistreLocalStorage.indexOf(find);
    produitEnregistreLocalStorage.splice(index,1);


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






}



   
      
    
    