DragonsSlayer.js

var slaying = true;
var youHit = Math.floor(Math,random() *1);
var damageThisRound = Math.floor(Math.random() *5);
var totalDamage = 0;

while (slaying) {
	if (youHit) {
		console.log ("You Hit!");
		if (totalDamage >= 4) {
			console.log("You Win!");
			slaying = false;
		} else {
			youHit = Math.floor(Math.random() *2);
		}
	} else {
		console.log("You Lose!");
		slaying = false;
	}
}
totalDamage = totalDamage += damageThisRound;
