const modal = document.getElementById("modal");


export function onModal() {
    if (modal) {
        modal.style.display = "flex";
    }
}

export function offModal() {
    if (modal) {
        modal.style.display = "none";
    }
}