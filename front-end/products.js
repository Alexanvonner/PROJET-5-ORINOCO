

// récuperation de la chaîne de requete dans l'url

const queryString_url_id = window.location.search;
console.log(queryString_url_id);



//méthode pour extraire l'id sans le 1er caractere FACILEMENT
const leId = queryString_url_id.slice(4);
console.log(leId);





// contact Api pour recuperer les information ID
fetch(`http://localhost:3000/api/teddies/${leId}`)
    .then(response => response.json())
    .then((item) => {
        teddies(item);
      })


// selectionner l'id dans lequel je vais injecter du code via innerHtml
function teddies(item){
const elementProducts = document.querySelector(".container_Page_Products");
elementProducts.innerHTML += `
<div class="cardProducts">
                <img class="teddiesImg" src="${item.imageUrl}" alt=""/>
                <ul>
                  <li>nom produits : ${item.name} </li>
                  <li>description :${item.description} </li>
                  <li> prix: ${item.price / 100} € </li>
                </ul>
                <form>
                  <label for="optionProducts"></label>
                  <select name="optionsProducts" id="optionQuantity"> 
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
                  </select>
                  <label for="optionProducts"></label>
                  <select name="optionsProducts" id="optionProducts">
                  </select>
                </form>
                <button id="btn-envoyer" type="submit" name="btn-envoyer">Commander l'article</button>
            </div>`;


  for (let i = 0; i < item.colors.length; i++) {
     document.getElementById("optionProducts").innerHTML += `<option value="${item.colors[i]}">${item.colors[i]}</option>`;
  
  }

     // ---------------------------------GESTION DU PANIER ----------------------------------------------------



// selection des options page article
  let idForm = document.getElementById("optionProducts");
  let optionQuantity = document.getElementById("optionQuantity");

 
  

// selection bouton ajouter au panier
  let addCart = document.querySelector("#btn-envoyer");
  
// écouter le boutton ajouter au panier---------------------------------------------------
addCart.addEventListener("click",(event)=>{
  event.preventDefault();

  //mettre le choix de l'utilisateur dans une variable grace a .value
  let choixOption = idForm.value;
  let quantity = optionQuantity.value;

  //récuperer des valeurs pour le formulaire

  let valeurFormulaire = {
    nom_produit: item.name,
    id_produit: item._id,
    option: choixOption,
    quantite: quantity,
    prix: item.price / 100,
  };

  console.log(valeurFormulaire);





//-_-_-_-_-_-_-_-_-_-_--_-_-_-_-_-_--_-_-_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-



  let produitEnregistreLocalStorage = JSON.parse(
    localStorage.getItem("produit")
  );
  // Json.parse  pour convertir les donnée au format Json dans le local storage en objet Javascript

  // Si il y a déja des produits produit Enregistre dans le Local storage
  if (produitEnregistreLocalStorage) {
    ajoutProduitLocalStorage();
    console.log(produitEnregistreLocalStorage);
  }
  // Si il y a pas de produits produit Enregistre dans le Local storage
  else {
    produitEnregistreLocalStorage = [];
    ajoutProduitLocalStorage();
  }

  //fonction ajouter au produits selectionner dans le localStorage
  function ajoutProduitLocalStorage() {
    // ajout de l'objet + value selectionner par l'utilisateur
    produitEnregistreLocalStorage.push(valeurFormulaire);

    // la transformation au format JSON et l'envoyer dans le key "" produit" du localstorage
    localStorage.setItem(
      "produit",
      JSON.stringify(produitEnregistreLocalStorage)
    );
  }
})
}
