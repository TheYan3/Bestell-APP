const dialogRef = document.getElementById("orderdialog");

function openSuccedDialog() {
    dialogRef.showModal();
}

function closSuccedDialog() {
    dialogRef.close()
    removeAllItems()
}

function removeAllItems() {
    basket.length = 0; 
    StorageInit();     
}