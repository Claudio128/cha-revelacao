const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const body = document.querySelector("body");
const nome = document.querySelector("#nome");

nome.classList.add("menino")
nome.classList.add("hide")

btn.addEventListener("click", function(){
    img.classList.add("hide");
    btn.classList.add("hide");
    body.style.cssText = "background-image: url(escolha.gif);"
    setTimeout(function () {
        body.style.cssText = "background-image: url(menino.gif);"
        setTimeout(function () {
            nome.classList.remove("hide")
        }, 2750); // Menino é 2750 e Menina é 2450.
    }, 11400); // Menino é 11400 e Menina é 10200.
});