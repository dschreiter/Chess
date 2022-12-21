export const BOARD_TILE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const BOARD_TILE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];

export const CREATE_CHESSBOARD_TILE_IDS = () => {
	//build the board, assign ids to each tile
	const boardTileId = [];

	//combine letter & num tp build tile id
	BOARD_TILE_LETTERS.forEach((currentLetter) => {
		BOARD_TILE_NUMBERS.forEach((currentNumber) => {
			boardTileId.push(currentLetter + currentNumber); // 'a1', 'a2' etc.
		});
	});

	// assign tile id to {}
	const chessBoardTilesById = boardTileId.reduce(
		(a, b) => ((a[b] = ''), a),
		{}
	);

	return chessBoardTilesById;
};
