const itensSacola = []
const sacola = document.getElementById("sacola")
const divListaProduto = document.getElementById("listProd")
const total = document.getElementById("total")

export function renderizaItens() {
    divListaProduto.innerHTML = ""
    divListaProduto.innerHTML = `<div class="item">
                <p>Item</p>
                <p>Quant</p>
                <p>Preço</p>
            </div>`

    itensSacola.forEach(itemListSacola => {
        const divItem = document.createElement("div")
        divItem.classList.add("item")
        const nomeItem = document.createElement("p")
        const precoItem = document.createElement("p")
        const quantItem = document.createElement("p")
        nomeItem.textContent = itemListSacola.nome
        divItem.appendChild(nomeItem)
        quantItem.textContent = `${itemListSacola.quant}x`
        divItem.appendChild(quantItem)
        precoItem.textContent = Number(itemListSacola.valorUnit).toFixed(2)
        divItem.appendChild(precoItem)
        divListaProduto.appendChild(divItem)
    });
}

function somaTotal() {
    const somaTotal = itensSacola.reduce((acumulador, item) => {
        return acumulador + item.valorUnit
    }, 0)
    total.textContent = Number(somaTotal).toFixed(2)
}
export function addSacola(item) {

    const findItem = itensSacola.findIndex(itemF => itemF.id == item.id)
    console.log(findItem)
    if (findItem>=0) {
        const novoObj = itensSacola[findItem]
       itensSacola[findItem]= {...novoObj, quant: novoObj.quant+1, valorUnit: novoObj.valorUnit+novoObj.preco }
    } else {
        const itemListSacola = {
            ...item, quant: 1, valorUnit: item.preco
        }
        itensSacola.push(itemListSacola)

    }


    somaTotal()
    renderizaItens()
}