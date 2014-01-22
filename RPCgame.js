R/P/C.js

var userChoice = prompt ("Choose rock, paper or scissors");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function (choice1, choice2) {
	if (choice1 === choice2) {
		return "The result is a tie!";
	}

	if (choice1 === "rock") {
		if (choice2 === "paper") {
			return "You got rock, and computer got paper. Computer WIN!";
		} else {
			return "You got rock, and computer got scissors. You WIN!";
		}
	}

	if (choice1 === "paper") {
		if(choice2 === "rock") {
			return "You got paper, and computer got rock. You WIN!";
		} else {
			return "You got paper, and computer got scissors. Computer WIN!";
		}
	}

	if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "You got scissors, and computer got rock! Computer WIN!";
		} else {
			return "You got scissors, and computer got paper! You WIN!";
		}
	}
};

var result = compare (userChoice, computerChoice);