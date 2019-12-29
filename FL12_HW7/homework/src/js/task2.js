try {
	const ATTEMPTS_NUMBER = 3;
	const MIN_NUMBER = 0;
	const INITIAL_MAX_NUMBER = 8;
	const MAX_NUMBER_INCREASE_VALUE = 4;
	const MAX_PRIZE = 100;
	const MAX_PRIZE_INCREASE_RATE = 2;
	const PRIZE_CALC_RATE = 2;
	let totalPrize = 0;

	let new_Game = confirm('Do you want to play a game?');
	if (new_Game === false) {
		throw 'You did not become a billionaire, but can.';
	}
	let keepPlaying = true;
	let maxNumber = INITIAL_MAX_NUMBER;
	let currentPrize = MAX_PRIZE;

	while(keepPlaying) {
		let attempts = ATTEMPTS_NUMBER;
		let isNumberGuessed = false;
		const randomNumber = Math.floor(Math.random() * (maxNumber - MIN_NUMBER + 1)) + MIN_NUMBER;
		console.log(randomNumber);
		let prizeOnCurrentAttempt;

		while (attempts > 0 && !isNumberGuessed) {
			prizeOnCurrentAttempt = currentPrize / Math.pow(PRIZE_CALC_RATE, ATTEMPTS_NUMBER - attempts);

			let enterNumber = prompt(`Choose a roulette pocket number from ${MIN_NUMBER} to ${maxNumber}
			Attempts left: ${attempts}
			Total prize: ${totalPrize}
			Possible prize on current attempt: ${prizeOnCurrentAttempt}`);
			
			enterNumber = Number(enterNumber);
			if (enterNumber === randomNumber) {
				isNumberGuessed = true;
			} else {
				attempts--;
			}
		}

		let shouldContinueGame = false;

		if (isNumberGuessed) {
			totalPrize = totalPrize + prizeOnCurrentAttempt;
			shouldContinueGame = 
			confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
		}

		if (shouldContinueGame) {
			maxNumber += MAX_NUMBER_INCREASE_VALUE;
			currentPrize *= MAX_PRIZE_INCREASE_RATE;
		} else {
			alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
			let playAgain = confirm('Do you want to play again?');
			
			if (playAgain === false) {
				throw 'Have a nice day';
			} else {
				totalPrize = 0;
				currentPrize = MAX_PRIZE;
				maxNumber = INITIAL_MAX_NUMBER;
			}
		}

	}

}	catch(e) {
		alert(e);
	}