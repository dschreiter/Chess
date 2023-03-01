export const knight_CheckMoveWasValid = (
	fromLetter,
	fromNumber,
	moveToTileId
) => {
	console.log(
		'inside knight_CheckMoveWasValid',
		fromLetter,
		fromNumber,
		moveToTileId
	);

	/*** No valid move! ***/
	alert('Invalid move: please select a valid move');
	return false;
};
