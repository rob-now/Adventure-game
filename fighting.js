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

function fighting(monster) {

// Printing health in HTML
    const printHealth = function () {
        document.getElementById("character-health").innerText = character.health;
        document.getElementById("monster-health").innerText = monster.health;
    };
    printHealth();

// Variables declaration
    var strikeBtn = document.getElementById("strike-button");
    var message = document.getElementById("message");
    var restartButton = document.getElementById("restart-button");
    var charInitiativeVal = strikeOrInit(1, 6);
    var monsInitiativeVal = strikeOrInit(1, 6);

// Function for generating random strike or initiative
    function strikeOrInit(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Function for checking the initiative (who strikes first)
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

// Function for standard striking order (after click on #strike-button)
    function standardStrikingOrder() {
        strikeBtn.onclick = function () {
            monster.health -= strikeOrInit(character.powerMin, character.powerMax);
            if (monster.health <= 0) {
                monster.health = 0;
            }
            printHealth(); // Updating health value in HTML
            if (isGameOver(monster.health)) {
                gameOver("You won the game!");
                return;
            }
            strikeBtn.disabled = true;
            message.innerText = "Monster turn";
            // Monster strikes after timeout
            standardMonsterStrike();
        };
    }

// Function for striking by monster after timeout
    function standardMonsterStrike() {
        setTimeout(function () {
            character.health -= strikeOrInit(monster.powerMin, monster.powerMax);
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
        }, 1000);
    }

// Function for character as first striker
    function characterStrikesFirst() {
        message.innerText = "Character turn";
        standardStrikingOrder();
        restartButton.hidden = true;
    }

// Function for monster as first striker
    function monsterStrikesFirst() {
        // First monster strike without user interaction
        strikeBtn.disabled = true;
        message.innerText = "Monster turn";
        standardMonsterStrike();
        standardStrikingOrder();
        restartButton.hidden = true;
    }

// Checking initiative on document reload
    checkInitiative();

// Event handler for #restart-button
    restartButton.onclick = function () {
        character.health = defaultHealth.character;
        monster.health = defaultHealth.monsterSmall;
        printHealth();
        strikeBtn.disabled = false;
        restartButton.hidden = true;
        message.innerText = "";
        charInitiativeVal = strikeOrInit(1, 6);
        monsInitiativeVal = strikeOrInit(1, 6);
        checkInitiative();
    };
}