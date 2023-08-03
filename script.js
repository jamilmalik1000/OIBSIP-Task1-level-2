let displayElement = document.querySelector("input[name='display']");
let buttons = document.querySelectorAll(".button, .equal");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.dataset.value;
        if (value === "=") {
            evaluateExpression();
        } else if (value === "AC") {
            clearDisplay();
        } else if (value === "DEL") {
            deleteLastChar();
        } else {
            appendSymbol(value);
        }
    });
});

function appendSymbol(symbol) {
    displayElement.value += symbol;
}

function clearDisplay() {
    displayElement.value = '';
}

function deleteLastChar() {
    displayElement.value = displayElement.value.slice(0, -1);
}

function evaluateExpression() {
    try {
        const expression = displayElement.value;
        const result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            displayElement.value = "Error";
        } else {
            displayElement.value = result;
        }
    } catch (error) {
        displayElement.value = "Error";
    }
}