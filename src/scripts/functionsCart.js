import { renderizaItens } from "./renderizaItensSacola.js"
import {currencyFormatter} from "./currencyFormatter.js"
export const cartItems = []
const totalAmount = document.getElementById("totalAmount")
const  cartSubTotal = document.getElementById("cartSubTotal")



export function totalSum() {
    const cartSubtotal = cartItems.reduce((accumulator, {preco, quant}) => {
        return accumulator + (preco*quant)
    }, 0)
    totalAmount.textContent = currencyFormatter(cartSubtotal)
    cartSubTotal.textContent = currencyFormatter(cartSubtotal)

}

export function increaseItemQuantity(indexItem) {
    const itemCart = cartItems[indexItem]
    cartItems[indexItem] = { ...itemCart, quant: itemCart.quant + 1}
    totalSum()
    renderizaItens(cartItems)
}

export function removeToCart(indexItem) {
    const itemCart = cartItems[indexItem]
    if(itemCart.quant==1){
        cartItems.splice(indexItem,1)
    }else{
        cartItems[indexItem] = { ...itemCart, quant: itemCart.quant - 1}
    }
    totalSum()
    renderizaItens(cartItems)
}

export function addToCart(item) {

    const findItem = cartItems.findIndex(itemF => itemF.id == item.id)
    if (findItem >= 0) {
        increaseItemQuantity(findItem)
    } else {
        const itemListSacola = {
            ...item, quant: 1, valorUnit: item.preco
        }
        cartItems.push(itemListSacola)
    }

    totalSum()
    renderizaItens(cartItems)
}