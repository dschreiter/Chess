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

///

// import { useEffect, useRef, useState } from 'react';
// import assignIdsToChessboardTiles from './logic/assignIdsToChessboardTiles';
// import './style.css';
// function App() {
// 	//board
// 	const [chessBoard, setChessBoard] = useState(assignIdsToChessboardTiles());
// 	//player & moves
// 	const [togglePlayer, setTogglePlayer] = useState(true);
// 	const pieceRef = useRef();
// 	const letterRef = useRef();
// 	const numberRef = useRef();

// 	const updatePlayerMoveOnBoard = () => {
// 		// do validation check
// 		//if not valid ...

// 		//if valid ...

// 		//update chessboard Obj
// 		// const allChessBoardTileIds = Object.keys(chessBoard);
// 		// const moveToTileId = letterRef.current.value + numberRef.current.value; // the current player moved to this tile

// 		// allChessBoardTileIds.forEach((currentTileId) => {
// 		// 	//currentTileId ex. 'a3'
// 		// 	if (currentTileId === moveToTileId) {
// 		// 		const tileInfo = {
// 		// 			color: togglePlayer ? 'white' : 'black',
// 		// 			type: pieceRef.current.value,
// 		// 			moveFrom: 'the depths of hell', // set starting positions
// 		// 			moveTo: letterRef.current.value + numberRef.current.value,
// 		// 		};

// 		// 		setChessBoard((prevChessboard) => {
// 		// 			// set tile info to newly moved tile
// 		// 			// spread ???
// 		// 			prevChessboard[currentTileId] = tileInfo; // ex. chessBoard['a3']
// 		// 			return prevChessboard;
// 		// 		});
// 		// 	}
// 		// });
// 		updateChessBoard();

// 		console.log('switch to new player');
// 		// switch player, to prep next move
// 		setTogglePlayer((current) => !current); //opening move: white, then toggle
// 	};

// 	const updateChessBoard = () => {
// 		console.log('in board update');
// 		//update chessboard Obj
// 		const allChessBoardTileIds = Object.keys(chessBoard);
// 		const moveToTileId = letterRef.current.value + numberRef.current.value; // the current player moved to this tile

// 		allChessBoardTileIds.forEach((currentTileId) => {
// 			//currentTileId ex. 'a3'
// 			if (currentTileId === moveToTileId) {
// 				const tileInfo = {
// 					color: togglePlayer ? 'white' : 'black',
// 					type: pieceRef.current.value,
// 					moveFrom: 'the depths of hell', // set starting positions
// 					moveTo: letterRef.current.value + numberRef.current.value,
// 				};

// 				setChessBoard((prevChessboard) => {
// 					// set tile info to newly moved tile
// 					// spread ???
// 					prevChessboard[currentTileId] = tileInfo; // ex. chessBoard['a3']
// 					return prevChessboard;
// 				});
// 			}
// 		});
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		updatePlayerMoveOnBoard();
// 	};

// 	useEffect(() => {
// 		console.log('in use Effect');
// 	}, [togglePlayer, chessBoard]);

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					<label>
// 						Move my:
// 						<select name='pieceType' id='pieceType' ref={pieceRef}>
// 							<option value='Pawn'>Pawn</option>
// 							<option value='Rook'>Rook</option>
// 							<option value='Bishop'>Bishop</option>
// 							<option value='Knight'>Knight</option>
// 							<option value='Queen'>Queen</option>
// 							<option value='King'>King</option>
// 						</select>
// 					</label>
// 				</div>
// 				<div>
// 					<label>
// 						From:
// 						<select name='letter' id='letter' ref={letterRef}>
// 							<option value='a'>a</option>
// 							<option value='b'>b</option>
// 							<option value='c'>c</option>
// 							<option value='d'>d</option>
// 							<option value='e'>e</option>
// 							<option value='f'>f</option>
// 							<option value='g'>g</option>
// 							<option value='h'>h</option>
// 						</select>
// 						<select name='number' id='number' ref={numberRef}>
// 							<option value='1'>1</option>
// 							<option value='2'>2</option>
// 							<option value='3'>3</option>
// 							<option value='4'>4</option>
// 							<option value='5'>5</option>
// 							<option value='6'>6</option>
// 							<option value='7'>7</option>
// 							<option value='8'>8</option>
// 						</select>
// 					</label>
// 				</div>
// 				<div>
// 					<label>
// 						To:
// 						<select name='letter' id='letter' ref={letterRef}>
// 							<option value='a'>a</option>
// 							<option value='b'>b</option>
// 							<option value='c'>c</option>
// 							<option value='d'>d</option>
// 							<option value='e'>e</option>
// 							<option value='f'>f</option>
// 							<option value='g'>g</option>
// 							<option value='h'>h</option>
// 						</select>
// 						<select name='number' id='number' ref={numberRef}>
// 							<option value='1'>1</option>
// 							<option value='2'>2</option>
// 							<option value='3'>3</option>
// 							<option value='4'>4</option>
// 							<option value='5'>5</option>
// 							<option value='6'>6</option>
// 							<option value='7'>7</option>
// 							<option value='8'>8</option>
// 						</select>
// 					</label>
// 				</div>
// 				<div>
// 					<input type='submit' />
// 				</div>
// 			</form>
// 		</>
// 	);
// }

// export default App;
