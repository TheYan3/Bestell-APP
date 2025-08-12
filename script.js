function loadMenu() {
    getMainmenu()
    getSaladmenu()
    getDrinksmenu()
}

function getMainmenu() {
    let mainmenuRef = document.getElementById('mainmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[0].Hauptgericht.length; menuindex++) {
        const mainmenu = restaurantMenu[0].Hauptgericht[menuindex]
        mainmenuRef.innerHTML +=  getMainmenuTemplates(mainmenu);
    }
}

function getSaladmenu() {
    let saladRef = document.getElementById('saladmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[1].Salad.length; menuindex++) {
        const salad = restaurantMenu[1].Salad[menuindex]
        saladRef.innerHTML += getSaladTemplates(salad);
    }  
}

function getDrinksmenu() {
    let drinkRef = document.getElementById('drinkmenu-list')

    for (let menuindex = 0; menuindex < restaurantMenu[2].drink.length; menuindex++) {
        const drink = restaurantMenu[2].drink[menuindex]
        drinkRef.innerHTML += getDrinkTemplates(drink);
    }  
}

