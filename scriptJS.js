// @ts-check
let numToGuess = 22
let answer
while (answer != numToGuess){
    answer = Number(prompt("Essayez de deviner mon nombre, bonne chance !", ""))
    if (answer < numToGuess){
        alert("Raté, mon nombre est plus grand")  
    }
    else if (answer > numToGuess){
        alert("Raté, mon nombre est plus petit")
    }
}
alert("Félicitations ! Vous avez trouvé le bon nombre.")