// Exo IF et conditions

 // Exo 1 a 3 
 let hour = 11;
 let namee = "yacine";
 
 if (hour > 6 && hour < 12) {
   console.log(`Good morning ${namee}`);
 } else if (hour > 12 && hour < 17) {
   console.log(`Good afternoon ${namee}`);
 } else {
   console.log(`Good night ${namee}`);
 }
 
 
 // Exo 4 a 6
 
 let age = 4
 const vacances = true
 if((age < 6 || age > 65) && !vacances){
   console.log("No Discount ")
 } 
 else if ((age < 6 || age > 65) && vacances){
   console.log("Discount")
 }
 
 // Exo 7 a 10 
 
 const chiffreAleatoire = Math.random()
 let result;
 
 if(chiffreAleatoire < 0.5){
   console.log(result = "Heads")
 }
 
 else {console.log(result = "Tails")}
 
 const guess = "Heads"
 
 if(guess === result){
   console.log("Tu as gagné")
 }
 
 else(console.log("Tu as perdu"))
 
 console.log(chiffreAleatoire)
 