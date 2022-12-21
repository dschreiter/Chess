//MOVED TO HELPERS

// const assignIdsToChessboardTiles = () => {
// 	//build the board, assign ids to each tile
// 	const boardTileLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// 	const boardTileNumber = [1, 2, 3, 4, 5, 6, 7, 8];
// 	const boardTileId = [];

// 	//combine letter & num tp build tile id
// 	boardTileLetter.forEach((currentLetter) => {
// 		boardTileNumber.forEach((currentNumber) => {
// 			boardTileId.push(currentLetter + currentNumber); // 'a1', 'a2' etc.
// 		});
// 	});

// 	// assign tile id to {}
// 	const chessBoardTilesById = boardTileId.reduce(
// 		(a, b) => ((a[b] = ''), a),
// 		{}
// 	);

// 	return chessBoardTilesById;
// };

// export default assignIdsToChessboardTiles;
