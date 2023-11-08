
let catElement = document.querySelector(".cat-image");
let bulbElement = document.querySelector(".bulb-image");
let switchElement = document.querySelector("h1");
let offButton = document.getElementById("offButton");
let onButton = document.getElementById("onButton");

function switchOff(){
    catElement.src = "./cat-eyes-img.png";
    bulbElement.src = "./bulb-go-off-img.png";
    switchElement.textContent = "Switched Off";
    onButton.style.backgroundColor = "#22c55e";
    offButton.style.backgroundColor = "#cbd2d9";
}

function switchOn(){
    catElement.src = "./cat-img.png";
    bulbElement.src = "./bulb-go-on-img.png";
    switchElement.textContent = "Switched On";
    offButton.style.backgroundColor = "#e12d39";
    onButton.style.backgroundColor = "#cbd2d9";
}