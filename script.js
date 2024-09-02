const app = document.getElementById('app');
let firstWord = "____"
let secondWord = "____"
let thirdWord = "____"
let fourthWord = "____"

function selectFirstWord(clicked) {
    firstWord = clicked.innerHTML;
    updateView();
}
function selectSecondWord(clicked) {
    secondWord = clicked.innerHTML;
    updateView();
}
function selectThirdWord(clicked) {
    thirdWord = clicked.innerHTML;
    updateView();
}
function selectFourthWord(clicked) {
    fourthWord = clicked.innerHTML;
    updateView();
}
function showAnswer() {
    firstWord = getRandomColors();
    secondWord = getRandomPeople();
    thirdWord = getRandomDid();
    fourthWord = getRandomObject();
    updateView();
}
function getRandomColors() {
    let randomNbr = Math.floor(Math.random() * 4);
    if (randomNbr == 0) {
        return 'green';
    }
    else if (randomNbr == 1) {
        return 'red';
    }
    else if (randomNbr == 2) {
        return 'blue';
    }
    else {
        return 'orange'
    }
}
function getRandomPeople() {
    let randomNbr = Math.floor(Math.random() * 4);
    if (randomNbr == 0) {
        return 'cat';
    }
    else if (randomNbr == 1) {
        return 'man';
    }
    else if (randomNbr == 2) {
        return 'dinosaur';
    }
    else {
        return 'clown'
    }
}
function getRandomDid() {
    let randomNbr = Math.floor(Math.random() * 4);
    if (randomNbr == 0) {
        return 'stared';
    }
    else if (randomNbr == 1) {
        return 'jumped';
    }
    else if (randomNbr == 2) {
        return 'limped';
    }
    else {
        return 'laughed'
    }
}
function getRandomObject() {
    let randomNbr = Math.floor(Math.random() * 4);
    if (randomNbr == 0) {
        return 'pool';
    }
    else if (randomNbr == 1) {
        return 'wall';
    }
    else if (randomNbr == 2) {
        return 'basement';
    }
    else {
        return 'car'
    }
}

updateView();
function updateView() {
    html = `
    Once, there was a ${firstWord} ${secondWord} that ${thirdWord} in the ${fourthWord} - and great things happened. The End.  
    <div class="column">
        <button onclick="selectFirstWord(this)">green</button>
        <button onclick="selectFirstWord(this)">red</button>
        <button onclick="selectFirstWord(this)">blue</button>
        <button onclick="selectFirstWord(this)">orange</button>
        <button onclick="selectSecondWord(this)">cat</button>
        <button onclick="selectSecondWord(this)">man</button>
        <button onclick="selectSecondWord(this)">dinosaur</button>
        <button onclick="selectSecondWord(this)">clown</button>
        <button onclick="selectThirdWord(this)">stared</button>
        <button onclick="selectThirdWord(this)">jumped</button>
        <button onclick="selectThirdWord(this)">limped</button>
        <button onclick="selectThirdWord(this)">laughed</button>
        <button onclick="selectFourthWord(this)">pool</button>
        <button onclick="selectFourthWord(this)">wall</button>
        <button onclick="selectFourthWord(this)">basement</button>
        <button onclick="selectFourthWord(this)">car</button>
    </div>
        <button id="show" onclick="showAnswer()">Show random story</button>
    `;
    app.innerHTML = html;
}