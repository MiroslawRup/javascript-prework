{

	/* get info which button is clicked by user and give it to the function playGame */
	document.getElementById('play-rock').addEventListener('click', function() {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function() {
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function() {
		playGame(3);
	});

	const playGame = function(playerInput) {

		/* change user number to game word */
		const getMoveName = function(argMoveId) {
			if(argMoveId == 1) {
				return 'kamień';
			} else if(argMoveId == 2) {
				return 'papier';
			} else if(argMoveId == 3) {
				return 'nożyce';
			}
		}

		const playerMove = getMoveName(playerInput);

		/* draw computer operation */
		const randomNumber = Math.floor(Math.random() * 3 + 1);
		/* change computer drawn number to game word in getMoveName function*/
		const computerMove = getMoveName(randomNumber);

		/* function to clean up previous displayed game results */
		clearMessages();

		/* display computer and user selection */
		printMessage('Ruch komputera to: ' + computerMove);
		printMessage('Twój ruch to: ' + playerMove);

		/* determine game result */
		const displayResult = function(argComputerMove, argPlayerMove) {
			if (argComputerMove == argPlayerMove) {
				printMessage('Remis!');
			} else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
				printMessage('Ty wygrywasz!');
			} else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
				printMessage('Komputer wygrywa!');
			} else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
				printMessage('Komputer wygrywa!');
			} else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
				printMessage('Komputer wygrywa!');
			}
		}

		/* display game result */
		displayResult(computerMove, playerMove);
	}

}
