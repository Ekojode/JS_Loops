const userNumInputElement = document.getElementById("user-number");
const userNumButtonElement = document.querySelector("#calculator button");
const resetButton = document.getElementById("reset");

let numberAnswer = document.getElementById("calculated-sum");

function sumOfNum() {
    let y = parseInt(userNumInputElement.value);

    let x = y * (((y + 1) / 2));
    numberAnswer.style.display = "block";
    numberAnswer.textContent = x;
}

userNumButtonElement.addEventListener('click', sumOfNum);

function resetNum() {
    numberAnswer.style.display = "none";
    numberAnswer.textContent = 0;
    userNumInputElement.value = null;
}

resetButton.addEventListener("click", resetNum);

const highlightedSection = document.querySelectorAll("#highlight-links p a");
const highlightBtn = document.querySelector("#highlight-links button");

function highlightLinks() {
    console.log(highlightedSection);
    for (let highlighted of highlightedSection) {
        console.log(highlighted.textContent);
        highlighted.classList.add("highlight");
    }
}

highlightBtn.addEventListener("click", highlightLinks);

const userDummy = {
    firstName: "Ekojode",
    lastName: "Oma-Victor",
    age: 22
}

const displayUserDataButton = document.querySelector("#user-data button");

function displayUserInfo() {
    const outputUserDataElement = document.getElementById("output-user-data");

    outputUserDataElement.innerHTML = null;
    for (const property in userDummy) {
        const newUserListElement = document.createElement("li");
        newUserListElement.textContent = userDummy[property];
        outputUserDataElement.append(newUserListElement);

    }
}

displayUserDataButton.addEventListener("click", displayUserInfo);

const diceButton = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 7);
}

function deriveNumberOfDiceRolls() {
    let diceNumber = document.getElementById("user-target-number");
    let diceRollsList = document.getElementById("dice-rolls");

    const enteredNum = diceNumber.value;

    let numberOfRolls = 0;

    diceRollsList.innerHTML = null;
    let hasRoledTargetNumer = false;
    while (!hasRoledTargetNumer) {
        const rolledNum = rollDice();
        numberOfRolls++;
        const newListElement = document.createElement("li");
        const outputContent = "Roll " + numberOfRolls + ": " + rolledNum;
        newListElement.textContent = outputContent;
        diceRollsList.append(newListElement);
        hasRoledTargetNumer = rolledNum == enteredNum;
    }

    const outPutTotalRolls = document.getElementById("output-total-rolls");
    const targetNum = document.getElementById("output-target-number");

    outPutTotalRolls.textContent = numberOfRolls;
    targetNum.textContent = enteredNum;
}

diceButton.addEventListener("click", deriveNumberOfDiceRolls);