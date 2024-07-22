console.log('js collegato');
//===== Appunti ======
// ` backtick

//===== Code ======
//prendo il mio container dall'html
const gridContainer = document.getElementById('grid-container');
// console.log(gridContainer, typeof gridContainer);
// genero l'elemento
for (let i = 0; i < 100; i++) {
    let newCell = document.createElement('div');
    newCell.innerHTML = (i + 1);
    gridContainer.append(newCell);
    console.log(newCell, typeof newCell);
}
//===== Functions =====