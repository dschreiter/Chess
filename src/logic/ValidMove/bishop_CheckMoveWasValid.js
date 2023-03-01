import { BOARD_TILE_LETTERS, BOARD_TILE_NUMBERS } from '../constants';

export const bishop_CheckMoveWasValid = (
	fromLetter,
	fromNumber,
	moveToTileId
) => {
	console.log(
		'inside bishop_CheckMoveWasValid',
		fromLetter,
		fromNumber,
		moveToTileId
	);

	/*** No valid move! ***/
	alert('Invalid move: please select a valid move');
	return false;
};
