let basket = []

function init() {
    loadBasketFromLocalStorage()
    getMainmenu()
    getSaladmenu()
    getDrinksmenu()
    renderBasket()
}

function filterTabs(i) {
    const box = document.getElementById('menu-box');
    const templates = [resetTemplates, filterMainmenuTemplate, filterSaladTemplate, filterDrinkTemplate];
    const actions   = [init,           getMainmenu,          getSaladmenu,          getDrinksmenu];
    i = templates[i] ? i : 0;
    box.innerHTML = templates[i]();  
    actions[i]();                   
  }

function getMainmenu() {
    let mainmenuRef = document.getElementById('mainmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[0].mainmenu.length; menuindex++) { 
        const item = restaurantMenu[0].mainmenu[menuindex]  
        mainmenuRef.innerHTML +=   getMenuTemplate(item, menuindex, 0);
    }
}

function getSaladmenu() {
    let saladRef = document.getElementById('saladmenu-list')
    
    for (let menuindex = 0; menuindex < restaurantMenu[1].salad.length; menuindex++) {
        const item = restaurantMenu[1].salad[menuindex];
        saladRef.innerHTML +=  getMenuTemplate(item, menuindex, 1);
    }  
}

function getDrinksmenu() {
    let drinkRef = document.getElementById('drinkmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[2].drink.length; menuindex++) {
        const item = restaurantMenu[2].drink[menuindex];
        drinkRef.innerHTML +=  getMenuTemplate(item, menuindex, 2);
    }  
}

function  saveItToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getItem(listIndex, index) {
    if (listIndex === 0) return restaurantMenu[0].mainmenu[index];
    if (listIndex === 1) return restaurantMenu[1].salad[index];
    if (listIndex === 2) return restaurantMenu[2].drink[index];
}

function StorageInit() {
    renderBasket();
    saveItToLocalStorage();
}

function getToBasket(listIndex, itemIndex) {
    const item = getItem(listIndex, itemIndex);
    let found = basket.find(x => x.name === item.name);

    if (found) {
        found.amount += 1;
    } else {
        basket.push({
            name: item.name,
            price: Number(item.price),
            amount: 1,
        });
    }
    StorageInit();
}

