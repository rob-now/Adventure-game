// Function for hiding fighting screen
function fightingHide() {
    document.getElementById("fighting").className = "hidden";
}

// Event handler for #restart-button
function restartBtn() {
    restartButton.onclick = function () {
        character.health = defaultHealth.character;
        monsterSmall.health = defaultHealth.monsterSmall;
        monsterBig.health = defaultHealth.monsterBig;
        //printHealth();
        strikeBtn.disabled = false;
        //restartButton.hidden = true;
        //message.innerText = "";
        //charInitiativeVal = strikeOrInit(1, 6);
        //monsInitiativeVal = strikeOrInit(1, 6);
        //checkInitiative();
        fightingHide();
        game();
    };
}



// Event handler for #continue-button-upstairs
function continueBtn() {
    continueButton.onclick = function () {
        strikeBtn.disabled = false;
        fightingHide();
        document.getElementById("step-04").className = "";
        document.getElementById("current-health").innerText = character.health + "/" + defaultHealth.character;
        restart();
    };
}

// Variables and constants declaration
const step01 = document.getElementById("step-01");
const step01Decision = document.getElementById("step-01-decision");
const step02 = document.getElementById("step-02");
const step02Decision = document.getElementById("step-02-decision");
const step03 = document.getElementById("step-03");
const step03Decision = document.getElementById("step-03-decision");
const runDownstairsDiv = document.getElementById("run-downstairs-div");

// Function for hiding all elements
function hideAll (){
    step01.className = "hidden";
    step01Decision.className = "hidden";
    step02.className = "hidden";
    step02Decision.className = "hidden";
    step03.className = "hidden";
    step03Decision.className = "hidden";
    runDownstairsDiv.className = "hidden";
    document.getElementById("restart").className = "hidden";
    document.getElementById("fighting").className = "hidden";
    doNothingHide();
    document.getElementById("step-04").className = "hidden";
}

// Functions for showing and hiding content
function step01Show() {
    step01.className = "";
    step01Decision.className = "";
}

function step01Hide() {
    step01.className = "hidden";
    step01Decision.className = "hidden";
}

function step02Show() {
    step02.className = "";
    step02Decision.className = "";
}

function step02Hide() {
    step02.className = "hidden";
    step02Decision.className = "hidden";
}

function step03Show() {
    step03.className = "";
    step03Decision.className = "";
}

function step03Hide() {
    step03.className = "hidden";
    step03Decision.className = "hidden";
}

function fightingShow (){
    document.getElementById("fighting").className = "";
}

function doNothingShow (){
    document.getElementById("do-nothing-div").className = "";
}

function doNothingHide (){
    document.getElementById("do-nothing-div").className = "hidden";
}

function runDownstairsShow() {
    runDownstairsDiv.className = "";
}

function runDownstairsHide() {
    runDownstairsDiv.className = "hidden";
    document.getElementById("restart").className = "hidden";
}

function restart() {
    const rest = document.getElementById("restart");
    rest.className = "";
    rest.onclick = function () {
        character.health = defaultHealth.character;
        monsterSmall.health = defaultHealth.monsterSmall;
        monsterBig.health = defaultHealth.monsterBig;
        strikeBtn.disabled = false;
        /*
        step01Hide();
        step02Hide();
        step03Hide();
        runDownstairsHide();
        fightingHide();
        */
        hideAll();
        game();
    };
}