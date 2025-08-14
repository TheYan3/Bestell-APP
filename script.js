let basket = []

function init() {
    loadBasketFromLocalStorage()
    getMainmenu()
    getSaladmenu()
    getDrinksmenu()
    renderBasket()
}

function filterTabs(i) {
 let menuBoxRef = document.getElementById('menu-box')
 menuBoxRef.innerHTML = ""
     switch (i) {
        case 1: 
        menuBoxRef.innerHTML = filterMainmenuTemplate();
        getMainmenu();
            break;
        case 2: 
        menuBoxRef.innerHTML = filterSaladTemplate();
        getSaladmenu();
            break;
        case 3: 
        menuBoxRef.innerHTML = filterDrinkTemplate();
        getDrinksmenu();
            break;
        default:
            menuBoxRef.innerHTML += resetTemplates();
            init();
            break;
    }
}

function getMainmenu() {
    let mainmenuRef = document.getElementById('mainmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[0].mainmenu.length; menuindex++) { 
        const mainmenu = restaurantMenu[0].mainmenu[menuindex]  
        mainmenuRef.innerHTML +=  getMainmenuTemplates(mainmenu, menuindex);
    }
}

function getSaladmenu() {
    let saladRef = document.getElementById('saladmenu-list')
    
    for (let menuindex = 0; menuindex < restaurantMenu[1].salad.length; menuindex++) {
        const salad = restaurantMenu[1].salad[menuindex]
        saladRef.innerHTML += getSaladTemplates(salad, menuindex);
    }  
}

function getDrinksmenu() {
    let drinkRef = document.getElementById('drinkmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[2].drink.length; menuindex++) {
        const drink = restaurantMenu[2].drink[menuindex]
        drinkRef.innerHTML += getDrinkTemplates(drink, menuindex);
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

