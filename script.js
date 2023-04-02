const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const body = document.querySelector("body");
const nome = document.querySelector("#nome");

nome.classList.add("menina")
nome.classList.add("hide")

btn.addEventListener("click", function(){
    img.classList.add("hide");
    btn.classList.add("hide");
    body.style.cssText = "background-image: url(escolha.gif);"
    setTimeout(function () {
        body.style.cssText = "background-image: url(menina.gif);"
        setTimeout(function () {
            nome.classList.remove("hide")
        }, 2450); // Menino é 2750 e Menina é 2450.
    }, 10200); // Menino é 11400 e Menina é 10200.
});