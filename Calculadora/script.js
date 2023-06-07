function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = document.getElementById('result').value;
    const calculatedResult = eval(result);

    document.getElementById('result').value = calculatedResult;
}