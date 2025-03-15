function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value.replace('x', '*'));
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

const colors = ["#60c3ff", "#ff758c", "#ff7eb3", "#6a11cb", "#2575fc", "#ff9a9e"];
let index = 0;

function changeBackground() {
    document.body.style.background = `linear-gradient(to bottom, ${colors[index]}, #abf0e9)`;
    index = (index + 1) % colors.length;
}

setInterval(changeBackground, 2000);
