import { renderizaItens } from "./renderizaItensSacola.js"
const itensSacola = []
const sacola = document.getElementById("sacola")
const total = document.getElementById("total")
const totalUnit = document.getElementById("vTotalProds")


function somaTotal() {
    const somaTotal = itensSacola.reduce((acumulador, item) => {
        return acumulador + item.valorUnit
    }, 0)
    total.textContent = Number(somaTotal).toFixed(2)
    totalUnit.textContent = Number(somaTotal).toFixed(2)
}

export function adicionaQuant(indexItem) {
    const novoObj = itensSacola[indexItem]
    itensSacola[indexItem] = { ...novoObj, quant: novoObj.quant + 1}
    somaTotal()
    renderizaItens(itensSacola)
}

export function removeQuant(indexItem) {
    const novoObj = itensSacola[indexItem]
    if(novoObj.quant ==1){
        itensSacola.splice(indexItem, 1);
    }else{
    itensSacola[indexItem] = { ...novoObj, quant: novoObj.quant - 1}}
    somaTotal()
    renderizaItens(itensSacola)

}

export function addSacola(item) {

    const findItem = itensSacola.findIndex(itemF => itemF.id == item.id)
    if (findItem >= 0) {
        adicionaQuant(findItem)
    } else {
        const itemListSacola = {
            ...item, quant: 1, valorUnit: item.preco
        }
        itensSacola.push(itemListSacola)
    }

    somaTotal()
    renderizaItens(itensSacola)
}