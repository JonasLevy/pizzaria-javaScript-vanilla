import { adicionaQuant, removeQuant } from "./addTocart.js";
const divListaProduto = document.getElementById("listProd")

export function renderizaItens(itensSacola) {
    divListaProduto.innerHTML = ""
    divListaProduto.innerHTML = `
            <div class="item">
                <p>Item</p>
                <p>Quant</p>
                <p>Preço</p>
            </div>
        `

    itensSacola.forEach((itemListSacola, i) => {
        //cria o card dos itens
        const divItem = document.createElement("div")
        divItem.classList.add("item")

        //cria e adiciona o valor nos itens nome e preço
        const nomeItem = document.createElement("p")
        nomeItem.textContent = itemListSacola.nome
        const precoItem = document.createElement("p")
        precoItem.textContent = Number(itemListSacola.valorUnit).toFixed(2)

        // cria a div a quantidade e os botoes de add e remover
        const divQuant = document.createElement("div")
        divQuant.classList.add("quantItens")
        const quantItem = document.createElement("p")
        quantItem.textContent = `${itemListSacola.quant}`
        const btnRemove = document.createElement("button")
        btnRemove.textContent = "-"
        btnRemove.onclick = ()=>removeQuant(i)
        const btnAdiciona = document.createElement("button")
        btnAdiciona.textContent = "+"
        btnAdiciona.onclick = ()=>adicionaQuant(i)
        
        //adiciona os botoes e quantidade na div quantItem
        divQuant.appendChild(btnRemove)
        divQuant.appendChild(quantItem)
        divQuant.appendChild(btnAdiciona)

        //monta o card Item
        divItem.appendChild(nomeItem)
        divItem.appendChild(divQuant)
        divItem.appendChild(precoItem)
        
        //adiciona o card do Item na div lista de produtos
        divListaProduto.appendChild(divItem)
    });
}