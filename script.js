var storyDiv = document.getElementById("ready");
var decisionDiv = document.getElementById("ready-decision");

// Event (not playing game)
var cancel = document.getElementById("cancel-btn");
cancel.onclick = function () {
    document.getElementById("is-ready").className = "hidden";
    document.getElementById("not-play").className = "";
    decisionDiv.innerHTML = "";
};

var confirm = document.getElementById("yes-btn");
confirm.onclick = function () {
    storyDiv.innerHTML = "";
    decisionDiv.innerHTML = "";
    game();
};

function game() {
    // Variables and constants declaration
    const step01 = document.getElementById("step-01");
    const step01Decision = document.getElementById("step-01-decision");
    const step02 = document.getElementById("step-02");
    const step02Decision = document.getElementById("step-02-decision");
    const step03 = document.getElementById("step-03");
    const step03Decision = document.getElementById("step-03-decision");

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

    function step03Show (){
        step03.className = "";
        step03Decision.className = "";
    }

    function step03Hide (){
        step03.className = "hidden";
        step03Decision.className = "hidden";
    }
    
    // Function for story and options possible upstairs
    function upstairs() {
        step01Hide();
        step03Hide();
        step02Show();

        // FIGHT
        document.getElementById("fight-btn").onclick = function () {
            step02Hide();
            document.getElementById("fighting").className = "";
            fighting(monsterSmall);
        };
        // RUN DOWNSTAIRS
        document.getElementById("run-downstairs-btn").onclick = function () {
            step02Hide();
            document.getElementById("run-downstairs-div").className = "";
        };
        // DO NOTHING
        document.getElementById("do-nothing-btn").onclick = function () {
            step02Hide();
            document.getElementById("do-nothing-div").className = "";
        };
    }

    function exit () {

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

    // STEP 04 - UPSTAIRS AFTER WINNING FIGHT
    document.getElementById("upstairs-btn3").onclick = function () {
        exit();
    };
}