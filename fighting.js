// Default health
const defaultHealth = {
    character: 20,
    monsterSmall: 18,
    monsterBig: 25
};

// Characters statistics
var character = {
    health: defaultHealth.character,
    powerMin: 5,
    powerMax: 10
};

var monsterSmall = {
    name: "Small Monster",
    health: defaultHealth.monsterSmall,
    powerMin: 4,
    powerMax: 11
};

var monsterBig = {
    name: "Big Monster",
    health: defaultHealth.monsterBig,
    powerMin: 4,
    powerMax: 13
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

const strikeBtn = document.getElementById("strike-button");
const restartButton = document.getElementById("restart-button");
const continueButton = document.getElementById("continue-button-upstairs");

function fighting(monster) {

// Printing health in HTML
    const printHealth = function () {
        document.getElementById("character-health").innerText = character.health + "/" + defaultHealth.character;
        if (monster === monsterSmall) {
            document.getElementById("monster-health").innerText = monster.health + "/" + defaultHealth.monsterSmall;
        }
        else if (monster === monsterBig) {
            document.getElementById("monster-health").innerText = monster.health + "/" + defaultHealth.monsterBig;
        }
    };
    printHealth();

// Variables declaration
    var message = document.getElementById("message");
    var charInitiativeVal = strikeOrInit(1, 6);
    var monsInitiativeVal = strikeOrInit(1, 6);
    //console.log("Initiative |", "character:", charInitiativeVal, "monster:", monsInitiativeVal);

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
        //console.log("Initiative |", "character:", charInitiativeVal, "monster:", monsInitiativeVal);
    }

// Function for checking if health is 0 or lower
    function isFightOver(health) {
        return health <= 0;
    }

// Continue game function
    function continueGame(msg) {
        continueButton.hidden = false;
        strikeBtn.disabled = true;
        message.innerText = msg;
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
            if (isFightOver(monster.health)) {
                continueGame("You defeated " + monster.name + "!");
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
            if (isFightOver(character.health)) {
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
        continueButton.hidden = true;
    }

// Function for monster as first striker
    function monsterStrikesFirst() {
        // First monster strike without user interaction
        strikeBtn.disabled = true;
        message.innerText = "Monster turn";
        standardMonsterStrike();
        standardStrikingOrder();
        restartButton.hidden = true;
        continueButton.hidden = true;
    }

// Checking initiative on document reload
    checkInitiative();

// Printing initiative in HTML
    var printInit = function () {
        document.getElementById("character-init").innerText = charInitiativeVal;
        document.getElementById("monster-init").innerText = monsInitiativeVal;
    };
    printInit();

// Restart functionality
    restartBtn();

// Continue functionality
    continueBtn();

}