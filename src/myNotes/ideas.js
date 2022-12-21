const assignIdsToChessboardTiles = () => {
	const boardTileLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	const boardTileNumber = [1, 2, 3, 4, 5, 6, 7, 8];
	const boardTileId = [];

	//combine letter & num tp build tile id
	boardTileLetter.forEach((currentLetter) => {
		boardTileNumber.forEach((currentNumber) => {
			boardTileId.push(currentLetter + currentNumber); // 'a1', 'a2' etc.
		});
	});

	// assign tile id to {}
	const chessBoardTilesById = boardTileId.reduce(
		(a, b) => ((a[b] = ''), a),
		{}
	);
	console.log(chessBoardTilesById);
	return chessBoardTilesById;
};

console.log(assignIdsToChessboardTiles());

//consider a single tile
const tileState = {
	tileOccupied: true,
	OccupyingPiece: {
		color: 'black',
		type: 'pawn',
		// if players turn, check move is valid
		validMove: true,
		// if otherplayers turn, check if underattack
		underAttack: false,
	},
};

//every time state is updated check the following:
//  1. whichPlayersMoveIsIt

//  2. isPlayerInCheck
// a. notify player of check
// b. player must move out of check via Move or Block

//  3. isPlayerInCheckMate
// a. notify of game ending

//  4. checkForValidMove
// a. based on the type of piece, is that move valid?
// 1. Yes, Accept movement. next players turn
// 2. No, do not allow this move to occur

const checkForValidMoveRouting = (pieceType, startPosition, endPosition) => {
	// a. based on the type of piece, is that move valid?
	// 1. Yes, Accept movement. next players turn
	// 2. No, do not allow this move to occur

	if (pieceType === 'Pawn') {
		checkForValidMove_Pawn(startPosition, endPosition);
	} else if (pieceType === 'Rook') {
		checkForValidMove_Rook(startPosition, endPosition);
	} else if (pieceType === 'Bishop') {
		checkForValidMove_Bishop(startPosition, endPosition);
	} else if (pieceType === 'Knight') {
		checkForValidMove_Knight(startPosition, endPosition);
	} else if (pieceType === 'King') {
		checkForValidMove_King(startPosition, endPosition);
	} else if (pieceType === 'Queen') {
		checkForValidMove_Pawn(startPosition, endPosition);
	}
};

const checkForValidMove_Pawn = (startPosition, endPosition) => {};
const checkForValidMove_Rook = (startPosition, endPosition) => {};
const checkForValidMove_Bishop = (startPosition, endPosition) => {};
const checkForValidMove_Knight = (startPosition, endPosition) => {};
const checkForValidMove_King = (startPosition, endPosition) => {};
const checkForValidMove_Queen = (startPosition, endPosition) => {};

const isPlayerInCheck = () => {
	// a. notify player of check
	// b. player must move out of check via Move or Block
};
const isPlayerInCheckMate = () => {
	// a. notify of game ending
};

const whichPlayersTurnIsIt = (color) => {
	if (firstMoveOfGame) {
		color = 'white';
	}
	// opening move, white moves first
	// after every other time
};

const updateChessBoard = () => {
	// 2. Update Chessboard Obj Assign player move to chessboard
	// a. loop thru chessboard keys
	// b. where key matches letter/num
	// c. set the value of "move" to that key
};
