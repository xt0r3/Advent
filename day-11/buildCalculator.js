const calculator = document.getElementsByClassName('calculator')[0];

function addButton(content){
    let div = document.createElement('DIV');
    div.textContent = content;
    div.classList.add('button');
    calculator.appendChild(div);
    return div;
}

for(let i = 1; i < 10; i++){
    addButton(i.toString());
}

addButton('-');
addButton('0');
addButton('+');
addButton('÷');

let div = document.createElement('DIV');
div.textContent = 'CE';
div.id = 'ce';
div.classList.add('button');
calculator.appendChild(div);

addButton('×');