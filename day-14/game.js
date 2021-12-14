let circle = document.getElementsByClassName('circle')[0];
let scoreBoard = document.getElementById('score');
let timeBoard = document.getElementById('time');
let score = 0;
let radius = 100;
let timeout = 1000;

// INITIALIZE CIRCLE
    // size
    circle.style.height = radius.toString() + 'px';
    circle.style.width = radius.toString() + 'px';
    circle.style.borderRadius = (radius / 2).toString() + 'px';
    // color
    circle.style.backgroundColor = 'white';
    circle.style.color = 'black';
    // delay
    circle.style.transition = timeout.toString() + "ms";

// INITIALITE SCORE AND TIME
    scoreBoard.textContent = score.toString();
    timeBoard.textContent = timeout.toString();

// ADD EVENTS TO CIRCLE
    circle.addEventListener('mouseenter', () => setTimeout(updateCircle, timeout));
    circle.addEventListener('click', circleClicked);

function circleClicked(){
    // UPDATE SCORE
        score = score + 1;
        scoreBoard.textContent = score.toString();
    // UPDATE TIME
        timeout = timeout > 500 ? timeout - 100 : timeout * 0.66;
        timeBoard.textContent = timeout.toString();
    // UPDATE TRANSITION
        circle.style.transition = "top " + timeout.toString() + "ms, left "  + timeout.toString() + "ms";
}

function updateCircle(){
    // UPDATE CIRCLE POSITION
        circle.style.top = calcY(circle.scrollHeight).toString() + 'px';
        circle.style.left = calcX(circle.scrollWidth).toString() + 'px';
    // UPDATE CIRCLE AND TEXT COLOR
        // get initial HSL position
        let h = rng(0, 360), s = 100, l = 50;
        circle.style.backgroundColor = "hsl(" + h.toString() + ", " + s.toString() + "%, " + l.toString() + "%)";
        // rotate H by 180 degrees
        circle.style.color = "hsl(" + ((h + 180) % 360).toString() + ", " + s.toString() + "%, " + l.toString() + "%)"
}

// HELPER FUNCTIONS

function rng(lo, hi){
    return lo + Math.floor(Math.random() * (hi - lo));
}

function calcX(width){
    return rng(0, window.innerWidth - 2 * width);
}

function calcY(height){
    return rng(0, window.innerHeight - 2 * height);
}