const sacola = document.getElementById("sacola")

export function onCart() {
    if (sacola.style.display == "flex") {
        sacola.style.display = 'none'
    } else {
        sacola.style.display = 'flex'
    }
}
