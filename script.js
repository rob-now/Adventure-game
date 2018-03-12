var storyDiv = document.getElementById("ready");
var decisionDiv = document.getElementById("ready-decision");

// Event (not playing game)
var cancel = document.getElementById("cancel");
cancel.onclick = function () {
    document.getElementById("is-ready").className = "hidden";
    document.getElementById("not-play").className = "";
    decisionDiv.innerHTML = "";
};

var confirm = document.getElementById("yes");
confirm.onclick = function () {
    storyDiv.innerHTML = "";
    decisionDiv.innerHTML = "";
    game();
};


function game() {
    var step01 = document.getElementById("step-01");
    var step01Decision = document.getElementById("step-01-decision");
    step01.className = "";
    step01Decision.className = "";
    document.getElementById("upstairs").onclick = function () {
        step01.innerHTML = "";
        step01Decision.innerHTML = "";
        var step02 = document.getElementById("step-02");
        var step02Decision = document.getElementById("step-02-decision");
        step02.className = "";
        step02Decision.className = "";
        document.getElementById("fight").onclick = function () {
            step02.className = "hidden";
            step02Decision.className = "hidden";
            document.getElementById("fighting").className = "";
            fighting();
        };
    };
}


/*
var confirmBtnHTML = "";
var cancelBtnHTML = "";

// Ready to play?
storyDiv.innerHTML = "";
decisionDiv.innerHTML = confirmBtnHTML + cancelBtnHTML;
*/
/*





*/


//document.getElementById("fighting").hidden = true;


/*
if () {
    console.log("You choose not to play.");
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
                fighting();
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