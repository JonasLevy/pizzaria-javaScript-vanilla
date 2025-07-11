const sacola = document.getElementById("sacola")

export function onCart() {
    if (sacola.style.height == "95%") {
        sacola.style.height = '0px'
    } else {
        sacola.style.height = '95%'
    }
}
