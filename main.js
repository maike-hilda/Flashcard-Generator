var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var basic = new BasicCard("When did World War II end?", "1945");
console.log(basic);
 
// Working Cloze
var cloze = new ClozeCard("Hermione Granger is the oldest of the golden trio of the famous Harry Potter book series.", "Hermione Granger");
console.log(cloze);

// Not working Cloze
var notWorkingCloze = new ClozeCard("Hermione Granger is the oldest of the golden trio of the famous Harry Potter book series.", "Ron Weasley");
console.log(notWorkingCloze);