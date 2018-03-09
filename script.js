var ready = confirm("Are you ready to play?");
var youDie = "\n\nYOU DIED!";

if (ready === false) {
    console.log("You choose not to play.");
}
else {
    var age = parseInt(prompt("What is your age?"));

    if (age < 15) {
        alert("Sorry, you cannot play. You are under 15 years old.");
    }
    else {
        console.log("You wake up in some kind of cave wondering what happened. After a while you hear a huge roar coming from the dark. The time for thinking of past is done as you here some movement far from your back. Now you need to run. But where is the exit...?");
        console.log("\nYou take first steps. You see stairs. You can go upstairs or downstairs.");

        if (confirm("Go upstairs?")) {
            console.log("\nYou choose to go upstairs and open the door at the top. Unfortunately this makes some noise and you see some monster charging at front of you. It is some kind of human but heavily deformed.");
            console.log("\nWhat do you do?");
            if (confirm("Run downstairs?")) {
                console.log("\nWhile running downstairs you fall and break your neck.");
                youDie = console.log("\nYOU DIED!");
            }
            else if (confirm("Fight this sick monster with your bare hands?")) {
                console.log("\nYou choose to fight. FIGHTING!");
            }
            else {
                console.log("\nYou choose to do nothing. The monster grabs you and eats you alive!" + youDie);
            }

        }
        else if (confirm("Go downstairs?")) {
            console.log("\nYou choose to go downstairs.");
        }
        else {
            console.log("\nYou choose to do nothing. You were eaten by a monster from behind!" + youDie);
        }


    }
}

