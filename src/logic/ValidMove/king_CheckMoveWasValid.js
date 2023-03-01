import { BOARD_TILE_LETTERS, BOARD_TILE_NUMBERS } from '../constants';

export const king_CheckMoveWasValid = (
	fromLetter,
	fromNumber,
	moveFromTileId,
	moveToTileId
) => {
	console.log(
		'inside king_CheckMoveWasValid',
		fromLetter,
		fromNumber,
		moveFromTileId,
		moveToTileId
	);

	//1. all x possibilities
	const X_possibilities = BOARD_TILE_LETTERS.map((letter) => {
		return letter; //['a','b','c', etc]
	});

	//2. possibilities based on current placement of king
	const king_X_possibilities = X_possibilities.map((letter, i) => {
		if (fromLetter === letter) {
			const myArray = [];

			//
			//HERE;
			//left Movements
			const moveTileLeft = i - 1;
			const moveTileRight = i + 1;
			const Y_moveTileBack = parseInt(fromNumber) - 1;
			const Y_moveTileForward = parseInt(fromNumber) + 1;

			//All Left oriented Moves
			//Left Back
			myArray.push(X_possibilities[moveTileLeft] + Y_moveTileBack);
			//Left
			myArray.push(X_possibilities[moveTileLeft] + fromNumber);
			//Left Forward
			myArray.push(X_possibilities[moveTileLeft] + Y_moveTileForward);

			// //Center
			// myArray.push(letter + fromNumber);
			// //Right
			// myArray.push(X_possibilities[moveTileRight] + fromNumber);

			console.log(999, myArray);
			return myArray;
		}
	});

	console.log('king', king_X_possibilities);

	// const X_possibilities = BOARD_TILE_LETTERS.map((letter, i) => {
	// 	console.log(letter);

	// 	// loop thru a-g
	// 	// look for match
	// 	// when you find a match
	// 	//create an array with the match and -1 + 1 on the indexes

	// 	if (fromLetter === letter) {
	// 		const myArray = [];
	// 		const moveTileLeft = letter[i - 1];
	// 		const moveTileRight = i + 1;

	// 		myArray.push(letter[moveTileLeft]);
	// 		myArray.push(letter);
	// 		myArray.push(letter[moveTileRight]);

	// 		console.log(999, myArray);
	// 		//[fromLetter[3], fromLetter, fromLetter[5]];
	// 		// get the fromLetter
	// 		// -1 index from letter
	// 		// +1 index from letter
	// 	}
	// 	// return letter + fromNumber; //['a1','b1','c1', etc]
	// });

	//console.log(777, moveFromTileId);

	//fromNumber can be increased by 1 OR decreased BY 1

	// forward: fromLetter & fromNumber + 1   //d5
	// backward: fromLetter & fromNumber - 1  //d3
	// moveLeft: & fromNumber

	// fromLetter;

	//lateral

	/*** No valid move! ***/
	//alert('Invalid move: please select a valid move');
	return false;
};
