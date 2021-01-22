{

	/* get info which button is clicked by user and give it to the function playGame */
	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function(){
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3);
	});

function playGame(playerInput){

	/* function to clean up previous displayed game results */
	clearMessages();

	/* change user number to game word in getMoveName function */
	let playerMove = getMoveName(playerInput);

	/* draw computer operation */
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	/* change computer drawn number to game word in getMoveName function*/
	let computerMove = getMoveName(randomNumber);

	function getMoveName(argMoveId){
		if(argMoveId == 1){
			return 'kamień';
		} else if(argMoveId == 2){
			return 'papier';
		} else if(argMoveId == 3){
			return 'nożyce';
		}
	}

	/* display computer and user selection */
	printMessage('Ruch komputera to: ' + computerMove);
	printMessage('Twój ruch to: ' + playerMove);

	/* determine game result */
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
		/* display game result */
		displayResult(computerMove, playerMove);

	}

}
