function getMenuTemplate(item, menuindex, categoryIndex) {
    return `
     <button class="tamplatebutton" onclick="getToBasket(${categoryIndex}, ${menuindex})">
        <div class="text-button" id="court-id">
            <h3>${item.name}</h3>
            ${item.ingredients ? `<p>${item.ingredients}</p>` : ""}
            <span class="price">${item.price}€</span> 
        </div>
        <img class="basket-img" src="./assets/icons/zum-warenkorb-hinzufugen (1).png" alt="zum Warenkorb hinzufügen" />
     </button>
    `;
}

function getBasketTemplates(basketlist, basketindex) {
    return `
            <div class="basket-container">
                 <div class="fixPosition">
                    <button class="basket-nav" onclick="decreaseItem(${basketindex})">-</button>
                    <span>X ${basketlist.amount}</span>
                    <button class="basket-nav" onclick="increaseItem(${basketindex})">+</button>
                 </div class="fixPosition">
                    <h4>${basketlist.name}<br>${basketlist.price.toFixed(2)}€</h4>
                <div class="endPosition">          
                     <button class="basket-nav" onclick="removeItem(${basketindex})">x</button>    
                </div>          
            </div>
        `;
}

function filterMainmenuTemplate() {
    return  `<section class="list" id="mainmenu-list"><img class="categorie-img" src="./assets/img/pizza.jpg" alt="kategorie Pizza" /><h2>Hauptgerichte</h2></section>`
}

function filterSaladTemplate() {
    return  `<section class="list" id="saladmenu-list"> <img class="categorie-img" src="./assets/img/salat.jpg" alt="Kategorie Salate" /><h2>Salate</h2></section>`
}

function filterDrinkTemplate() {
    return  `<section class="list" id="drinkmenu-list"><img class="categorie-img" src="./assets/img/getränke.jpg" alt="Kategorie Getränke" /><h2>Getränke</h2></section>`
}

function resetTemplates() {
    return  `<section class="list" id="mainmenu-list"><img class="categorie-img" src="./assets/img/pizza.jpg" alt="kategorie Pizza" /><h2>Hauptgerichte</h2></section>
             <section class="list" id="saladmenu-list"> <img class="categorie-img" src="./assets/img/salat.jpg" alt="Kategorie Salate" /><h2>Salate</h2></section>
             <section class="list" id="drinkmenu-list"><img class="categorie-img" src="./assets/img/getränke.jpg" alt="Kategorie Getränke" /><h2>Getränke</h2></section>`
}