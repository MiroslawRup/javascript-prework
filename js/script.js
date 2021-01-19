
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
		return 'papier';
	} else if(argMoveId == 3){
		return 'nożyce';
	}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
	if (argComputerMove == argPlayerMove) {
	  printMessage('Remis!');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
	  printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
	  printMessage('Ty wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'papier'){
	  printMessage('Komputer wygrywa!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
	  printMessage('Komputer wygrywa!');
	} else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
	  printMessage('Komputer wygrywa!');
	} else if (argPlayerMove = 'nieznany') {
	  printMessage('Podałeś nieprawidłową cyfrę! Tylko 1, 2 lub 3.');
	}
}

displayResult(computerMove, playerMove);
