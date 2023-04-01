const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const body = document.querySelector("body");

btn.addEventListener("click", function(){
    img.classList.add("hide");
    btn.classList.add("hide");
    body.style.cssText = "background-image: url(escolha.gif);"
    setTimeout(function () {
        
    }, 10000);
});