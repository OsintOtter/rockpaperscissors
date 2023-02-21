/* const creates a constant varible (this variable does not change)
document.querySelector("#playerText"); the document part references the document that this script is attached to. 
the querySelector("#playerText") references the playerText ID that we created on the HTML document. 
So in short we are saying that const playerText in this document is the same as the ID playertext in the HTML document
*/
const playerText = document.querySelector("#playerText"); 
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
/* with let we are creating variables. player, computer, and result. We are leaving these blank so that we can fill them later. 
Remember that let can be changed*/
let player;
let computer; 
let result;
/* so below we are creating a function. The name is choiceBtns. We put in .forEach in this function which will execute the function once for each
array element. Lets break down the actual function. The array elements in this block are the buttons we created in our HTML. The addEvent 
Listener means that when you click on the button on the webpage it will execute the code defined in the curly brackets. 
It will run through all of the code until it hits a return or an error  */
choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent; /* This assigns the value of the text content of button to the variable player*/
    computerTurn(); /*This declares a function named computerTurn*/
    playerText.textContent = `Player: ${player}`; /** this sets the text content of the playerText ID to Player: ${player} < that part is
    a template literal - meaning that whatever value we assign to player will be shown instead of ${player} */
    computerText.textContent = `Computer: ${computer}`; /**same as above */
    resultText.textContent = checkWinner(); /**this declares a function called checkWinner that we will define later on. TLDR it
    will be the logic that decides who the winner is based on our args. */

}));

function computerTurn(){  /** Here is the computerTurn function we referenced above. This function will generate computers answer. 
We do this by declaring the const randNum and importing the Math.floor module. This function will generate a random number between 1 and 3.
inside the function we have the switch function which will check for each case. (case1,2,3) and if the number that was generated matches
the case it will assign the value computer to either Rock, Paper, or Scissors*/
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){ /** checks for the statement that matches the case */
        case 1:
            computer = "Rock";
            break; /**stops the loop */
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}
function checkWinner(){ /**here is the checkWinner function we declared earlier.
in this function we are iterating over a bollean statement. It reads pretty plainly until we hit a break point IE; a return statment.
Here we are explaining the rules of rock paper scissors to the program. if the player and computer answers both are equal its a draw etc */
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return(player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Paper"){
        return(player == "Sissors") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Scissors"){
        return(player == "Rock") ? "You Win!" : "You Lose!"

    }
        
}