//const ready = confirm("Are you ready to play?");
const youDie = "\n\nYOU DIED!";

// Attack function
function attack (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CHARACTER STATISTICS
const HP = 20;
const ATTmin = 5;
const ATTmax = 10;
const ATT = attack(ATTmin, ATTmax);
//console.log(ATT);

// MONSTERS STATISTICS
// Small monster
const smHP = 15;
const smATTmin = 3;
const smATTmax = 10;
const smATT = attack(smATTmin,smATTmax);
//console.log(smATT);

// Big monster
const bmHP = 22;
const bmATTmin = 4;
const bmATTmax = 11;
const bmATT = attack(bmATTmin,bmATTmax);
//console.log(bmATT);

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