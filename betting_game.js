
  function getComputerGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getPlayerWager() {
    return Number(window.prompt("Enter your wager: between 5 and 10, please"));
  }

  function getPlayerGuess() {
    return Number(window.prompt("Make a guess: between 1 and 10"));
  }

  function resultMessage(playerMsg, playerWagerMsg, totalBankMsg, playerBank) {
    return window.alert(playerMsg + "\n" + playerWagerMsg + "\n" + totalBankMsg + playerBank);
  }

  var playerWinMsg = "Congratulations you won that bet!";
  var playerLoseMsg = "Sorry you lost that bet!";
  var playerBank = 100;
  var totalBankMsg = "Your total bank is now $";
  while (playerBank > 0) {
    var wagerAmount = getPlayerWager();
    //console.log(wagerAmount);
    window.alert("You bet $" + wagerAmount);
    //TODO: Add validation
    var playerGuess = getPlayerGuess();
    var computerGuess = getComputerGuess(1,10);
    console.log(computerGuess);
    switch (playerGuess) {
      case computerGuess: {
        playerBank += wagerAmount;
        var playerWagerMsg = "$" + wagerAmount + " has been deposited in your bank";
        resultMessage(playerWinMsg, playerWagerMsg, totalBankMsg, playerBank);
        break;
      }
      case ((computerGuess - 1) || (computerGuess + 1)): {
        window.alert("Your guess was within one of the correct number\nYour bank remains at $ " + playerBank);
        break;
      }
      default: {
        playerBank -= wagerAmount;
        var playerWagerMsg = "$" + wagerAmount + " has been deducted from your bank";
        resultMessage(playerLoseMsg, playerWagerMsg, totalBankMsg, playerBank);
        break;
      }
    }
  }
