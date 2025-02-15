function adicionarDigito(digit) {
    document.getElementById("display").value += digit;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function apagarUltimo() {

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}

function calcular() {
    let display = document.getElementById("display");
    display.value = new Function('return ' + display.value)();
}