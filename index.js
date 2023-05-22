const age = prompt("How old are you?"); // this game as a age limit

// this checks if the entered value is a number
if (isNaN(age)) {
    alert("Please enter a number");
    console.log("Please enter a number"); 
} else if (age < 18) {
    alert("You're too young. This game is +18 only.");
    console.log("You're too young. This game is +18 only.")
} else if (age >= 18) {
    alert("Cool. Let's play a game.");

    let name = prompt("Enter character name:"); // prompt will generate a dialog box asking user to write something

    let gender = prompt("Enter character gender: male, female, undefined?");
    // This code uses a a while loop to check if the entered value is one of the valid gender options
    while (!["male", "female", "undefined"].includes(gender)) {
        race = prompt("Invalid gender. Please choose male, female or undefined.")
    }

    let race = prompt("Enter character race: human, elf or vampire?");
    while (!["human", "elf", "vampire"].includes(race)) {
        race = prompt("Invalid race. Please choose human, elf or vampire.")
    }

    let classType = prompt("Enter character class: wizard, warrior or spy?");
    while (!["wizard", "warrior", "spy"].includes(classType)) {
       classType = prompt("Invalid class. Please choose wizard, warrior or spy.")
    }

    let team = prompt("Please choose a team: Dark or Light?");
    while (!["Dark", "Light"].includes(team)) {
        team = prompt("Invalid team. Please choose Dark or Light.")
    }

    createCharacter(name, gender, race, classType, team); // this function will display the character's details based on these parameters
}




function createCharacter(name, gender, race, classType, team) {
    console.log("Character created:");
    console.log("Name: " + name);
    console.log("Gender: " + gender);
    console.log("Race: " + race);
    console.log("Class: " + classType);
    console.log("Team: " + team);


// this will display a quote with a summary of the player's choices

let character = "You are " + name + ", a " + gender + " "  + race + " "  + classType + " on the " + team + " team.";
alert(character);
console.log(character); 

}
