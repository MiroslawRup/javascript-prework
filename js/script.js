{
function playGame(playerInput){

	clearMessages();

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
	let computerMove = getMoveName(randomNumber);
	printMessage('Ruch komputera to: ' + computerMove);

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
		}
	}

	displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});
}
