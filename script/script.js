function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
