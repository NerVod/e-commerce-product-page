// selecteur click counter

let counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function decrementClick() {
    updateDisplay(--counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}