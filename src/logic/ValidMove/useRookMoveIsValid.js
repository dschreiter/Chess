const useRookMoveIsValid = (props) => {
	return <></>;
};

export default useRookMoveIsValid;

// import { BOARD_TILE_LETTERS, BOARD_TILE_NUMBERS } from '../constants';

// export const rook_CheckMoveWasValid = (
// 	fromLetter,
// 	fromNumber,
// 	moveToTileId
// ) => {
// 	console.log(888, fromLetter, fromNumber, moveToTileId);
// 	/*** Check X Axis for valid move ***/
// 	//1. get possibilities
// 	const X_possibilities = BOARD_TILE_LETTERS.map((letter) => {
// 		return letter + fromNumber; //['a1','b1','c1', etc]
// 	});

// 	//2. check for match
// 	const is_X_moveValid = X_possibilities.some(
// 		//from current location check all X axis moves
// 		(X_possibilities) => {
// 			console.log('x', moveToTileId, X_possibilities);
// 			return moveToTileId === X_possibilities;
// 		}
// 	);

// 	if (is_X_moveValid) {
// 		//3.  move on X axis was valid, no need to continue validity check
// 		console.log('move on X axis was valid');
// 		return true;
// 	}

// 	/*** Check Y Axis for valid move ***/
// 	//1. get possibilities
// 	const Y_possibilities = BOARD_TILE_NUMBERS.map((number) => {
// 		return fromLetter + number; //['a1','a2','a3', etc]
// 	});
// 	//2. check for match
// 	const is_Y_moveValid = Y_possibilities.some(
// 		//from current location check all Y axis moves
// 		(valid_Y_possibilities) => {
// 			console.log('y', moveToTileId, valid_Y_possibilities);
// 			return moveToTileId === valid_Y_possibilities;
// 		}
// 	);

// 	if (is_Y_moveValid) {
// 		//3.  move on Y axis was valid, no need to continue validity check
// 		console.log('move on Y axis was valid');
// 		return true;
// 	}

// 	/*** No valid move! ***/
// 	alert('Invalid move: please select a valid move');
// 	return false;
// };
