// @ts-check
let winner = 0;
let numToGuess = 22
let answer = Number(prompt("Essayez de deviner le nombre, bonne chance !", ""))
//while (winner = 0){
if (answer == numToGuess){
    alert("Félicitations ! Vous avez trouvé le le nombre.")
    winner=1
}
else if (answer < numToGuess){
    alert("Raté, mon numéro est plus grand")  
    winner=0
}
else if (answer > numToGuess){
    alert("Raté, mon numéro est plus petit")
    winner=0
  }
//}