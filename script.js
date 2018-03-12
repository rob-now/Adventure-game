// Default health
const defaultHealth = {
    character: 20,
    monsterSmall: 15,
    monsterBig: 22
};

// Characters statistics
var character = {
    health: defaultHealth.character,
    powerMin: 5,
    powerMax: 10
};

var monsterSmall = {
    health: defaultHealth.monsterSmall,
    powerMin: 3,
    powerMax: 10
};

var monsterBig = {
    health: defaultHealth.monsterBig,
    powerMin: 4,
    powerMax: 11
};

/*
var monster = [
    {
        name: "Small monster",
        health: defaultHealth.monsterSmall,
        powerMin: 3,
        powerMax: 10
    },
    {
        name: "Big monster",
        health: defaultHealth.monsterBig,
        powerMin: 4,
        powerMax: 11
    }
];
*/


// Printing health in HTML
const printHealth = function () {
    document.getElementById("character-health").innerText = character.health;
    document.getElementById("monster-health").innerText = monsterSmall.health;
};
printHealth();

// Variables declaration
var strikeBtn = document.getElementById("strike-button");
var message = document.getElementById("message");
var restartButton = document.getElementById("restart-button");

var charInitiativeVal = strikeOrInit(1, 6);
var monsInitiativeVal = strikeOrInit(1, 6);
console.log("Inicjacja char init:", charInitiativeVal + " mons init: " + monsInitiativeVal);


// Random strike function
function strikeOrInit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checking the initiative (who strikes first)
function checkInitiative() {
    if (charInitiativeVal === monsInitiativeVal) {
        do (charInitiativeVal = strikeOrInit(1, 6));
        while (charInitiativeVal === monsInitiativeVal);
        do (monsInitiativeVal = strikeOrInit(1, 6));
        while (charInitiativeVal === monsInitiativeVal);
    }

    if (charInitiativeVal > monsInitiativeVal) {
        characterStrikesFirst();
    } else {
        monsterStrikesFirst();
    }
}

// Function for checking if health is 0 or lower
function isGameOver(health) {
    return health <= 0;
}

// Game over function
function gameOver(msg) {
    restartButton.hidden = false;
    strikeBtn.disabled = true;
    message.innerText = msg;
}

// Function for character as first striker
function characterStrikesFirst() {
    message.innerText = "Character turn";
    strikeBtn.onclick = function () {
        monsterSmall.health -= strikeOrInit(character.powerMin, character.powerMax);
        if (monsterSmall.health <= 0) {
            monsterSmall.health = 0;
        }
        printHealth(); // Updating health value in HTML
        if (isGameOver(monsterSmall.health)) {
            gameOver("You won the game!");
            return;
        }
        strikeBtn.disabled = true;
        message.innerText = "Monster turn";

        // Timeout function for monster move
        setTimeout(function () {
            character.health -= strikeOrInit(monsterSmall.powerMin, monsterSmall.powerMax);
            if (character.health <= 0) {
                character.health = 0;
            }
            printHealth();
            if (isGameOver(character.health)) {
                gameOver("You died!");
                return;
            }
            strikeBtn.disabled = false;
            message.innerText = "Character turn";
        }, 500);
    };

    restartButton.hidden = true;
}

// Function for monster as first striker
function monsterStrikesFirst() {
    strikeBtn.disabled = true;
    message.innerText = "Monster turn";
    setTimeout(function () {
        character.health -= strikeOrInit(monsterSmall.powerMin, monsterSmall.powerMax);
        if (character.health <= 0) {
            character.health = 0;
        }
        printHealth();
        if (isGameOver(character.health)) {
            gameOver("You died!");
            return;
        }
        strikeBtn.disabled = false;
        message.innerText = "Character turn";
    }, 3000);

    strikeBtn.onclick = function () {
        monsterSmall.health -= strikeOrInit(character.powerMin, character.powerMax);
        if (monsterSmall.health <= 0) {
            monsterSmall.health = 0;
        }
        printHealth(); // Updating health value in HTML
        if (isGameOver(monsterSmall.health)) {
            gameOver("You won the game!");
            return;
        }
        strikeBtn.disabled = true;
        message.innerText = "Monster turn";

        // Timeout function for monster move
        setTimeout(function () {
            character.health -= strikeOrInit(monsterSmall.powerMin, monsterSmall.powerMax);
            if (character.health <= 0) {
                character.health = 0;
            }
            printHealth();
            if (isGameOver(character.health)) {
                gameOver("You died!");
                return;
            }
            strikeBtn.disabled = false;
            message.innerText = "Character turn";
        }, 500);
    };

    restartButton.hidden = true;

}

checkInitiative();


// Event handler for clicking strike button

// Event handler for restart button
restartButton.onclick = function () {
    character.health = defaultHealth.character;
    monsterSmall.health = defaultHealth.monsterSmall;
    printHealth();
    strikeBtn.disabled = false;
    restartButton.hidden = true;
    message.innerText = "";
    charInitiativeVal = strikeOrInit(1, 6);
    monsInitiativeVal = strikeOrInit(1, 6);
    checkInitiative();
    console.log("restart char init:", charInitiativeVal + " mons init: " + monsInitiativeVal);
};


/*
// Ready to play?
if (ready === false) {
    confirm("You choose not to play.");
}
else {
    // Asking for age
    var age = parseInt(prompt("What is your age?"));
    //
    if (!age) {
        alert("Sorry, you cannot play. You didn't enter your age.");
    }
    // Too young
    else if (age < 15) {
        alert("Sorry, you cannot play. You are under 15 years old.");
    }
    // Can play
    else {
        // Waking up
        alert("You wake up in some kind of cave wondering what happened. After a while you hear a huge roar coming from the dark. The time for thinking is done as you hear some movement far from your back. Now you need to run. But where is the exit...?\n\nYou take first steps. You see stairs. You can go upstairs or downstairs.");
        // Decision
        // GOING UPSTAIRS
        if (confirm("Go upstairs?")) {
            alert("You choose to go upstairs and open the door at the top. Unfortunately this makes some noise and you see some monster charging at front of you. It is some kind of human but heavily deformed.\n\nWhat do you do?");
            // Decision
            // Running downstairs
            if (confirm("Run downstairs?")) {
                alert("While running downstairs you fall and break your neck." + youDie);
            }
            // Decision
            // Fighting monster
            else if (confirm("Fight this sick monster with your bare hands?")) {
                alert("You choose to fight. FIGHTING!");
            }
            // Decision
            // Doing nothing
            else {
                alert("You choose to do nothing. The monster grabs you and eats you alive!" + youDie);
            }
        }
        // Decision
        // GOING DOWNSTAIRS
        else if (confirm("Go downstairs?")) {
            alert("You choose to go downstairs.");
        }
        // Decision
        // DOING NOTHING
        else {
            alert("You choose to do nothing. You were eaten by a monster from behind!" + youDie);
        }
    }
}

*/