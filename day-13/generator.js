let lower = 50000, upper = 100000, divisible = 5;
let sum = lower + Math.floor(Math.random() * (upper - lower) / divisible) * divisible;

let amount = document.getElementById('sum');
amount.textContent += sum.toString() + " Ft";

function addAmount(x){
    let div = document.createElement("DIV");
    div.style.backgroundImage = "url('./" + x + ".png')";
}