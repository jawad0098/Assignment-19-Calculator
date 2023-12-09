function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}