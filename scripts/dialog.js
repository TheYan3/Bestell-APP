const dialogRef = document.getElementById("orderdialog");

function openSuccedDialog() {
    if (basket.length == 0) {  
        alert("Du hast nichts im Warenkorb!")   
    }else {
        dialogRef.showModal();
    }   
}

function closSuccedDialog() {
    dialogRef.close()
    removeAllItems()
    closeBasket()
}

function removeAllItems() {
    basket.length = 0; 
    StorageInit();     
}