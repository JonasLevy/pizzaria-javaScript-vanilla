import { increaseItemQuantity, removeToCart } from "./functionsCart.js";
const divListaProduto = document.getElementById("listProd")

export function renderizaItens(itensSacola) {
    divListaProduto.innerHTML = ""
    divListaProduto.innerHTML = `
            <div class="item">
                <p>Item</p>
                <p>Quant</p>
                <p>Preço</p>
                <p>Total</p>
            </div>
        `

    itensSacola.forEach((item, i) => {
        //cria o card dos itens
        const divItem = document.createElement("div")
        divItem.classList.add("item")

        //cria e adiciona o valor nos itens nome e preço
        const nomeItem = document.createElement("p")
        nomeItem.textContent = item.nome
        const vTotalItem = document.createElement("p")
        vTotalItem.textContent = Number(item.quant * item.preco).toFixed(2)
        const precoIten = document.createElement("p")
        precoIten.textContent = Number(item.preco).toFixed(2)

        // cria a div a quantidade e os botoes de add e remover
        const divQuant = document.createElement("div")
        divQuant.classList.add("quantItens")
        const quantItem = document.createElement("p")
        quantItem.textContent = `${item.quant}`
        const btnRemove = document.createElement("button")
        btnRemove.textContent = "-"
        btnRemove.onclick = () => removeToCart(i)
        btnRemove.classList.add("remove")
        const btnAdiciona = document.createElement("button")
        btnAdiciona.textContent = "+"
        btnAdiciona.onclick = () => increaseItemQuantity(i)

        //adiciona os botoes e quantidade na div quantItem
        divQuant.appendChild(btnRemove)
        divQuant.appendChild(quantItem)
        divQuant.appendChild(btnAdiciona)

        //monta o card Item
        divItem.appendChild(nomeItem)
        divItem.appendChild(divQuant)
        divItem.appendChild(precoIten)
        divItem.appendChild(vTotalItem)

        //adiciona o card do Item na div lista de produtos
        divListaProduto.appendChild(divItem)
    });
}