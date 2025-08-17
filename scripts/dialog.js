const dialogRef = document.getElementById("orderdialog");

const openSuccedDialog = () => basket.length 
    ? dialogRef.showModal() 
    : alert("Du hast nichts im Warenkorb!");

function closSuccedDialog() {
    dialogRef.close()
    removeAllItems()
}

function removeAllItems() {
    basket.length = 0; 
    StorageInit();     
}