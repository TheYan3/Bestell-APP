function getMainmenuTemplates(mainmenu) {
    return ` 
    <button>
    <div class="text-button">
    <h3>${mainmenu.name}</h3>
    <p>${mainmenu.ingredients}</p>
    <span class="price">${mainmenu.price}€</span> 
    </div>
    <img class="basket-button" src="./assets/icons/zum-warenkorb-hinzufugen (1).png" alt="zum Wartenkorb hinzufügen" />
    </button>
  
    `  
}

function getSaladTemplates(salad) {
    return ` 
     <button> 
     <div class="text-button">
    <h3>${salad.name}</h3>
    <p>${salad.ingredients}</p>
    <span class="price">${salad.price}€</span> 
    </div>
    <img class="basket-button" src="./assets/icons/zum-warenkorb-hinzufugen (1).png" alt="zum Wartenkorb hinzufügen" />
    </button>
    
    `  
} 