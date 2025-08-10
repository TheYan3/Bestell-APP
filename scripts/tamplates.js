function getMainmenuTemplates(mainmenu) {
    return `  <article >
    <h3>${mainmenu.name}</h3>
    <p>${mainmenu.ingredients}</p>
    <span class="price">${mainmenu.price}</span>
    <p>${mainmenu.currency}</p>
    <button class="add-btn">+</button>
    </article>
    `  
}

function getSaladTemplates(salad) {
    return `  <article >
    <h3>${salad.name}</h3>
    <p>${salad.ingredients}</p>
    <span class="price">${salad.price}</span>
    <p>${salad.currency}</p>
    <button class="add-btn">+</button>
    </article>
    `  
} 