function loadBasketFromLocalStorage() {
    let stored = localStorage.getItem("basket");
    if (stored) {
        basket = JSON.parse(stored);
    }
}

function renderBasket() {
    const basketRef = document.getElementById('court-basket');
    basketRef.innerHTML = ""
    for (let basketindex = 0; basketindex < basket.length; basketindex++) {
        const basketlist = basket[basketindex];

        basketRef.innerHTML += getBasketTemplates(basketlist, basketindex);
    }

    updateBasketTotal();
}

function increaseItem(index) {
    basket[index].amount++;
    StorageInit();
}

function decreaseItem(index) {
    basket[index].amount--;
    if (basket[index].amount <= 0) {
        basket.splice(index, 1);
    }
    StorageInit();
}

function removeItem(index) {
    basket.splice(index, 1);
    StorageInit();
}

function updateBasketTotal() {
    const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);
    document.getElementById('basket-total').textContent = total.toFixed(2) + '€';
}

function toggleBasket() {
    const basketRef = document.getElementById("basket")
    const logoRef = document.getElementById("logoMario")
    const buttonRef = document.getElementById("closeButton")
    const openButtonRef = document.getElementById("openButton")
    basketRef.classList.toggle("mobileBasket")
    logoRef.classList.toggle("hidden")
    buttonRef.classList.toggle("hidden")
    openButtonRef.classList.toggle("hidden")
}