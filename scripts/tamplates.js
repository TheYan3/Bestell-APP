function getMainmenuTemplates(mainmenu, menuindex) {
    return ` 
     <button onclick="getToBasket(0, ${menuindex})">
     <div class="text-button" id="court-id">
     <h3>${mainmenu.name}</h3>
     <p>${mainmenu.ingredients}</p>
     <span class="price">${mainmenu.price}€</span> 
     </div>
     <img class="basket-button" src="./assets/icons/zum-warenkorb-hinzufugen (1).png" alt="zum Wartenkorb hinzufügen" />
     </button>
    `;  
}

function getSaladTemplates(salad, menuindex) {
    return ` 
     <button onclick="getToBasket(1, ${menuindex})"> 
     <div class="text-button" id="court-id">
     <h3>${salad.name}</h3>
     <p>${salad.ingredients}</p>
     <span class="price">${salad.price}€</span> 
     </div>
     <img class="basket-button" src="./assets/icons/zum-warenkorb-hinzufugen (1).png" alt="zum Wartenkorb hinzufügen" />
     </button>
    `;  
} 
function getDrinkTemplates(drink, menuindex) {
    return ` 
     <button onclick="getToBasket(2, ${menuindex})"> 
     <div class="text-button" id="court-id">
     <h3>${drink.name}</h3>
     <span class="price">${drink.price}€</span> 
     </div>
     <img class="basket-button" src="./assets/icons/zum-warenkorb-hinzufugen (1).png" alt="zum Wartenkorb hinzufügen" />
     </button>
    `;  
} 

function getBasketTemplates(basketlist, basketindex) {
    return `
        <div class="basket-row">
           <div class="basket-container">
                <button class="basket-nav" onclick="decreaseItem(${basketindex})">-</button>
                <button class="basket-nav" onclick="increaseItem(${basketindex})">+</button>
                <span>${basketlist.amount}</span>
                <h4>${basketlist.name}</h4>
           </div>
           <div class="basket-end">
                <span>${basketlist.price.toFixed(2)}€ / Stk</span>
                <button class="basket-nav" onclick="removeItem(${basketindex})">x</button>
            </div>
        </div>
        `;
}