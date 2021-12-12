const calculator = document.getElementsByClassName('calculator')[0];
let displays = {
    ONE: document.getElementById('display-1'),
    TWO: document.getElementById('display-2'),
    ANSWER: document.getElementById('display-answer'),
    SIGN: document.getElementById('display-sign')
};
let signs = {
    PLUS: '+',
    MINUS: '-',
    TIMES: '×',
    DIVISION: '÷',
    EMPTY: ""
}
let active = displays.ONE;

function addToActive(content) {
    if (active.textContent !== "" || content !== "0") {
        active.textContent += content;
    } else if (active === displays.ONE || displays.SIGN.textContent !== signs.DIVISION && active.textContent === "") {
        active.textContent += content;
    }
}

function resetDisplays() {
    for (let display in displays) {
        displays[display].textContent = "";
    }
    active = displays.ONE;
}

function changeSign(content) {
    if (displays.ANSWER.textContent !== "ERROR" && (displays.ONE.textContent !== "" || content === signs.MINUS || displays.TWO.textContent !== "")) {
        displays.ONE.textContent = displays.ANSWER.textContent;
        displays.TWO.textContent = "";
        displays.ANSWER.textContent = "";
        displays.SIGN.textContent = content;
        active = displays.TWO;
    }
}

function parse(display) {
    if (display.textContent === "") {
        return 0;
    } else {
        let val = parseInt(display.textContent);
        display.textContent = val.toString();
        return val;
    }
}

function processKey(key) {
    if (key === '+') {
        return signs.PLUS;
    } else if (key === '-') {
        return signs.MINUS;
    } else if (key === '*') {
        return signs.TIMES;
    } else if (key === '/') {
        return signs.DIVISION;
    } else {
        return key;
    }
}


function calculateAnswer() {

    // CHECK FOR STRINGS OF DIGITS
    String.prototype.isNumber = function () {
        return this.length === 0 || /^\d+$/.test(this) || (this.charAt(0) === '-' && /^\d+$/.test(this.substring(1)));
    }
    if (!displays.ONE.textContent.isNumber() || !displays.TWO.textContent.isNumber()) {
        displays.ANSWER.textContent = "ERROR";
        return;
    }

    let sign = displays.SIGN.textContent;
    let ans = displays.ANSWER;

    let first = parse(displays.ONE);
    let second = parse(displays.TWO);

    // ADDITION
    if (sign === signs.PLUS) {
        ans.textContent = (first + second).toString();
    }
    // SUBTRACTION
    else if (sign === signs.MINUS) {
        ans.textContent = (first - second).toString();
    }
    // MULTIPLICATION
    else if (sign === signs.TIMES) {
        ans.textContent = (displays.TWO.textContent === "" ? first : (first * second)).toString();
    }
    // DIVISION
    else if (sign === signs.DIVISION) {
        if (displays.TWO.textContent === "") {
            ans.textContent = first.toString();
        } else if (second === 0) {
            ans.textContent = "ERROR";
        } else {
            ans.textContent = (first / second).toString();
        }
    }
    // EMPTY SIGN
    else if (sign === signs.EMPTY && !isNaN(first)) {
        ans.textContent = first.toString();
    }
    // ANYTHING ELSE
    else {
        ans.textContent = "ERROR";
    }
}

function addButton(content) {
    let div = document.createElement('DIV');
    div.textContent = content;
    div.classList.add('button');
    if (!isNaN(parseInt(content))) {
        div.addEventListener('click', () => addToActive(content));
    } else if (content === "CE") {
        div.id = "ce";
        div.addEventListener('click', resetDisplays);
    } else {
        div.addEventListener('click', () => changeSign(content));
    }
    calculator.appendChild(div);
    return div;
}

for (let i = 1; i < 10; i++) {
    addButton(i.toString());
}

addButton(signs.MINUS);
addButton('0');
addButton(signs.PLUS);
addButton(signs.DIVISION);
addButton("CE");
addButton(signs.TIMES);

calculator.addEventListener('click', calculateAnswer);
document.addEventListener('keydown', function (e) {
    const buttons = document.getElementsByClassName('button');
    console.log(e.key);
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let content = button.textContent;
        if (processKey(e.key) === content) {
            if (!isNaN(parseInt(content))) {
                addToActive(content);
            } else {
                changeSign(content);
            }
        }
    }
    if (e.key === 'Backspace') {
        if (active.textContent.length > 0) {
            active.textContent = active.textContent.slice(0, -1);
        }
    }
    calculateAnswer();
});
