let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;
    if (keyPressed.match(/[0-9/*\-+=.\b]/)) {
        handleButtonClick(keyPressed);
    } else if (keyPressed === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (keyPressed === 'Enter') {
        string = eval(string);
        input.value = string;
    }
});

function handleButtonClick(value) {
    if (value === '=') {
        string = eval(string);
        input.value = string;
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}
