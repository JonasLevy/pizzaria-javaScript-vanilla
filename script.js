import {add} from "./addTocart.js"

let divProduto = document.getElementById("produtos")
const ElementCategoria = document.getElementById("categorias")
const categorias = ["Pizzas", "Sanduiches", "Sobremesa", "Bebidas" ]
const itens = [
    {id:1, nome:"Calabresa", preco:25, categoria: "Pizzas", img:"pizza-calabresa"},
    {id:1, nome:"4 Queijos", preco:25, categoria: "Pizzas", img:"4queijos"},
    {id:1, nome:"Bacon", preco:25, categoria: "Pizzas", img:"bacon"},
    {id:2, nome:"Mista", preco:25,categoria: "Pizzas", img:"pizza-mista"}, 
    {id:3, nome:"Baurú", preco:25, categoria: "Sanduiches", img:"bauru"}, 
    {id:4, nome:"Mistão", preco:25,categoria: "Sanduiches", img:"mistao"}, 
    {id:5, nome:"Pudim", preco:25, categoria: "Sobremesa", img:"pudim"}, 
    {id:6, nome:"Coca-Cola", preco:25,categoria: "Bebidas", img:"coca"}
]

function renderizaItens (){
     
    categorias.forEach(element=>{
        let textInnerHTML =  `<h2>${element}</h2> <div class="itensProdutos">`
        itens.forEach(item=>{
        if(item.categoria == element)(
            textInnerHTML += `
                <div class="produto">
                    <div class="descriImagem">
                        <div class="tituloDescri">
                            <h3 class="titulo"> ${item.nome}</h3>
                            <p class="decricao"> Nossas pizzas são preparadas com ingredientes frescos, massa artesanal e muito recheio.</p>
                        </div>
                        <div class="imagem">
                            <img src="imagens/${item.img}.jpg" alt="${item.categoria, item.preco}">
                        </div>
                    </div>
                    <button>adicionar</button>
                </div>
            `)
        })
        textInnerHTML +="</div> "
        console.log(textInnerHTML)
        divProduto.innerHTML += textInnerHTML
    })
}
renderizaCategorias()
renderizaItens()
function renderizaCategorias(){
    categorias.forEach(element => {
        const btn = document.createElement("button")
        btn.textContent= element
        ElementCategoria.appendChild(btn)
        
    });
}