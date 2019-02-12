import calculateResult from './result.js';

let answers = null;
const json = window.localStorage.getItem('answers');
if(json) {
    answers = JSON.parse(json);
}
else {
    window.location = '/';
}

const houseNode = document.getElementById('house');

houseNode.textContent = calculateResult(answers);