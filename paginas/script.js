const hamburgesota = document.querySelector("#hamburgesota");
const llavesita = document.querySelector("#llavesita");
const cerradura = document.querySelector("#cerradura");

llavesita.addEventListener("click", () => {
    hamburgesota.classList.add("visible");
});

cerradura.addEventListener("click", () => {
    hamburgesota.classList.remove("visible");
});