const storyDiv = document.getElementById("ready");
const decisionDiv = document.getElementById("ready-decision");

// Event (not playing game)
const cancel = document.getElementById("cancel-btn");
cancel.onclick = function () {
    document.getElementById("is-ready").className = "hidden";
    document.getElementById("not-play").className = "";
    decisionDiv.className = "hidden";

};

const confirm = document.getElementById("yes-btn");
confirm.onclick = function () {
    storyDiv.className = "hidden";
    decisionDiv.className = "hidden";
    game();
};

function game() {

    // Function for story and options possible upstairs
    function upstairs() {
        step01Hide();
        step03Hide();
        step02Show();

        // FIGHT
        document.getElementById("fight-btn").onclick = function () {
            step02Hide();
            fightingShow();
            fighting(monsterSmall);
        };
        // RUN DOWNSTAIRS
        document.getElementById("run-downstairs-btn").onclick = function () {
            step02Hide();
            runDownstairsShow();
            restart();
        };
        // DO NOTHING
        document.getElementById("do-nothing-btn").onclick = function () {
            step02Hide();
            doNothingShow();
            restart();
        };
    }

    // STEP 01 - WAKE UP
    step01Show();

    // STEP 02 - UPSTAIRS
    document.getElementById("upstairs-btn").onclick = function () {
        upstairs();
    };

    // STEP 03 - DOWNSTAIRS
    document.getElementById("downstairs-btn").onclick = function () {
        step01Hide();
        step03Show();
    };

    // STEP 02 - UPSTAIRS AFTER VISITING DOWNSTAIRS
    document.getElementById("upstairs-btn2").onclick = function () {
        upstairs();
    };
}