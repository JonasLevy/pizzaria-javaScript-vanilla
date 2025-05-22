import { addSacola } from "./addTocart.js"

let divProduto = document.getElementById("produtos")
const ElementCategoria = document.getElementById("categorias")
const categorias = ["Pizzas", "Sanduiches", "Sobremesa", "Bebidas"]
const itens = [
    { id: 1, nome: "Calabresa", preco: 25, categoria: "Pizzas", img: "pizza-calabresa" },
    { id: 2, nome: "4 Queijos", preco: 25, categoria: "Pizzas", img: "4queijos" },
    { id: 3, nome: "Bacon", preco: 25, categoria: "Pizzas", img: "bacon" },
    { id: 4, nome: "Mista", preco: 25, categoria: "Pizzas", img: "pizza-mista" },
    { id: 5, nome: "Baurú", preco: 25, categoria: "Sanduiches", img: "bauru" },
    { id: 6, nome: "Mistão", preco: 25, categoria: "Sanduiches", img: "mistao" },
    { id: 7, nome: "Pudim", preco: 25, categoria: "Sobremesa", img: "pudim" },
    { id: 8, nome: "Coca-Cola", preco: 25, categoria: "Bebidas", img: "coca" }
]

function renderizaItens() {

    categorias.forEach(element => {
        // Cria o título da categoria
        const titulo = document.createElement("h2")
        titulo.textContent = element

        // Cria a div que vai conter os produtos dessa categoria
        const divItensProdutos = document.createElement("div")
        divItensProdutos.classList.add("itensProdutos")

        // Loop nos itens
        itens.forEach(item => {
            if (item.categoria == element) {
                // Cria o container do produto
                const produtoDiv = document.createElement("div")
                produtoDiv.classList.add("produto")

                // Cria a parte de descrição e imagem
                const descriImagem = document.createElement("div")
                descriImagem.classList.add("descriImagem")

                // Título e descrição
                const tituloDescri = document.createElement("div")
                tituloDescri.classList.add("tituloDescri")

                const h3 = document.createElement("h3")
                h3.classList.add("titulo")
                h3.textContent = item.nome

                const p = document.createElement("p")
                p.classList.add("decricao")
                p.textContent = "Nossas pizzas são preparadas com ingredientes frescos, massa artesanal e muito recheio."

                tituloDescri.appendChild(h3)
                tituloDescri.appendChild(p)

                // Imagem
                const imagemDiv = document.createElement("div")
                imagemDiv.classList.add("imagem")

                const img = document.createElement("img")
                img.src = `imagens/${item.img}.jpg`
                img.alt = `${item.nome} - ${item.preco}`

                imagemDiv.appendChild(img)

                // Monta descriImagem
                descriImagem.appendChild(tituloDescri)
                descriImagem.appendChild(imagemDiv)

                // Botão
                const botao = document.createElement("button")
                botao.textContent = "adicionar"
                botao.onclick = () => addSacola(item)

                // Monta produtoDiv
                produtoDiv.appendChild(descriImagem)
                produtoDiv.appendChild(botao)

                // Adiciona produtoDiv dentro da divItensProdutos
                divItensProdutos.appendChild(produtoDiv)
            }
        })

        // Adiciona o título e os produtos no container principal
        divProduto.appendChild(titulo)
        divProduto.appendChild(divItensProdutos)
    })

}
renderizaCategorias()
renderizaItens()
function renderizaCategorias() {
    categorias.forEach(element => {
        const btn = document.createElement("button")
        btn.textContent = element
        ElementCategoria.appendChild(btn)

    });
}