var confirm = confirm("Are you ready to play?");

if (confirm === false) {

} else {
    var age = parseInt(prompt("What is your age?"));
    if (age < 15) {
        alert("Sorry, you cannot play. You are under 15 years old.");
    } else {
        console.log("You wake up in some kind of cave wondering what happened. After a while you hear a huge roar coming from the dark. The time for thinking of past is done as you here some movement far from your back. Now you need to run. But where is the exit...?");
        console.log("You take first steps. You see stairs. You can go upstairs or downstairs.");
        if (confirm("Go upstairs?")) {
            console.log("You go upstairs.");
        }
        else if (confirm("Go downstairs?")) {
            console.log("You go downstairs.");
        }
        else {
            console.log("You were eaten by a monster!");
        }


    }

}

