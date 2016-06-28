
  // window.alert("My name is George. Welcome!");
  // window.prompt("Is your name George?");


// window.alert("Welcome to **Bet Away** your bank account!!")

var playerWinMsg = "Congratulations you won that bet! ";
var playerLoseMsg = "Sorry you lost that bet! ";
var playerBank;
var totalBankMsg = "Your total bank is now $";
var wagerAmount = 0;
var playerGuess;
var computerGuess;
// document.forms[1][0].value = playerWager;
// document.forms[0][0].value = playerBank;
// document.forms[2][0].value = playerGuess;
// document.forms[3][0].value = computerGuess;
function resetBoard(){
  document.getElementById("letsGoBtn").disabled = true;
  document.forms[0].elements["startBank"].value = "";
  document.forms[1].elements["playerBank"].value = "";
  document.forms[5].elements["outcome"].value = "Outcome"
}
function begin(){
  document.getElementById("letsGoBtn").disabled = false;
  playerBank = Number(document.forms[0].elements["startBank"].value);
  document.forms[1].elements["playerBank"].value = playerBank;
  // playerBank = document.forms[1].elements["playerBank"].value;
  console.log(document.forms[1].elements["playerBank"].value);
  document.getElementById("letsGoBtn").addEventListener("click", updateBoard);

  // updateBoard();
}

function getComputerGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerWager() {
  return document.forms[2].elements["playerWager"].value;
}

function getPlayerGuess() {
  return document.forms[3].elements["playerGuess"].value;
}

//

function printResultMessage(playerMsg, playerWagerMsg, totalBankMsg, playerBank) {
  document.forms[5].elements["outcome"].value = (playerMsg + "\n" + playerWagerMsg + "\n" + totalBankMsg + playerBank);
}

function updateBoard() {
  //TODO: Add validation
  playerGuess = Number(getPlayerGuess());
  playerWager = Number(getPlayerWager());
  computerGuess = getComputerGuess(1,10);
  console.log("computerGuess " + computerGuess);
  console.log("playerGuess "+ playerGuess);
  console.log("playerWager "+playerWager);
  console.log("playerBank " + playerBank);
  document.forms[4][0].value = computerGuess;
  computerGuess = Number(computerGuess);
  switch (playerGuess) {
    case computerGuess: {
      console.log("in win case");
      playerBank += playerWager;
      var playerWagerMsg = "$" + playerWager + " has been deposited in your bank";
      printResultMessage(playerWinMsg, playerWagerMsg, totalBankMsg, playerBank);
      break;
    }
    case (computerGuess - 1): {
      console.log("in draw case");
      document.forms[5].elements["outcome"].value = "Your guess was within one of the correct number\nYour bank remains at $ " + playerBank;
      break;
    }
    case (computerGuess + 1): {
      console.log("in draw case");
      document.forms[5].elements["outcome"].value = "Your guess was within one of the correct number\nYour bank remains at $ " + playerBank;
    }
    default: {
      console.log("in lose case");
      playerBank -= playerWager;
      var playerWagerMsg = "$" + playerWager + " has been deducted from your bank";
      printResultMessage(playerLoseMsg, playerWagerMsg, totalBankMsg, playerBank);
      break;
    }
  }
  document.forms[1].elements["playerBank"].value = playerBank;
  if (playerBank <= 0) {
    console.log("Game Over");
    window.alert("You have (predictably) run out of money :)\nPlease enter a new start amount to play again");
    resetBoard();

    return;
  }
}

document.getElementById("startBtn").addEventListener("click", begin);
//document.getElementById("wagerBtn").addEventListener("click", getPlayerWager);


// document.getElementById("wagerBtn").addEventListener("click", updateBoard);
// console.log(playerWager);
