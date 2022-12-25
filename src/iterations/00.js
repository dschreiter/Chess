//CHESS NOTATION : https://www.chess.com/terms/chess-notation
import { useEffect, useRef, useState } from 'react';
import { CREATE_CHESSBOARD_TILE_IDS } from './logic/constants';
import { rook_CheckMoveWasValid } from './logic/ValidMove/rook_CheckMoveWasValid';
import './style.css';

function App() {
	const [chessBoard, setChessBoard] = useState(CREATE_CHESSBOARD_TILE_IDS);
	const gameLog = []; // snapshot the state of the board for essentially every move [{move1snapshot},]
	const [currentMoveInfo, setCurrentMoveInfo] = useState(null);

	//movement info
	const [currentPlayerColor, setCurrentPlayerColor] = useState('white');
	const [pieceType, setPieceType] = useState();
	//from:
	const [fromLetter, setFromLetter] = useState('a'); // to useState , read check react form submissions
	const [fromNumber, setFromNumber] = useState('1');
	//to:
	const [toLetter, setToLetter] = useState('a');
	const [toNumber, setToNumber] = useState('1');

	const checkForValidMove = () => {
		const moveFromTileId = fromLetter + fromNumber;
		const moveToTileId = toLetter + toNumber;
		// order of operations, no point updating

		console.log(911, pieceType, moveFromTileId, moveToTileId);

		// Moving to same tile your on
		if (moveFromTileId === moveToTileId) {
			console.log(11, moveFromTileId, moveToTileId);
			alert(
				'Invalid move: cannot move piece to the same tile your currently on'
			);
			return false;
		}

		// Do currently occupy this tile with any of your pieces?
		console.log('chessboard', chessBoard[moveToTileId]);
		// if (
		// 	chessBoard[currentMoveInfo.moveToTileId] !== '' &&
		// 	chessBoard[currentMoveInfo.moveToTileId].currentPlayerColor ===
		// 		currentPlayerColor
		// ) {
		// 	alert('Invalid move: your piece currently occupies this tile');
		// 	return false;
		// }

		// Piece moved adheres to rules of game?
		if (pieceType === 'rook') {
			if (rook_CheckMoveWasValid(toLetter, toNumber, moveToTileId)) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		}

		return false;
	};

	// const checkForValidMove1111 = () => {
	// 	// order of operations, no point updating
	// 	// setCurrentMoveInfo({
	// 	// 	currentPlayerColor,
	// 	// 	pieceType: pieceRef.current.value,
	// 	// 	currentLetter: fromLetterRef.current.value,
	// 	// 	currentNumber: fromNumberRef.current.value,
	// 	// 	moveFromTileId:
	// 	// 		fromLetterRef.current.value + fromNumberRef.current.value,
	// 	// 	moveToTileId: toLetterRef.current.value + toNumberRef.current.value,
	// 	// });

	// 	console.log(911, currentMoveInfo, 'i am behind!');

	// 	// Moving to same tile you on
	// 	if (currentMoveInfo.moveFromTileId === currentMoveInfo.moveToTileId) {
	// 		alert(
	// 			'Invalid move: cannot move piece to the same tile your currently on'
	// 		);
	// 		return false;
	// 	}

	// 	// Do currently occupy this tile with any of your pieces?
	// 	if (
	// 		chessBoard[currentMoveInfo.moveToTileId] !== '' &&
	// 		chessBoard[currentMoveInfo.moveToTileId].currentPlayerColor ===
	// 			currentPlayerColor
	// 	) {
	// 		alert('Invalid move: your piece currently occupies this tile');
	// 		return false;
	// 	}

	// 	// Piece moved adheres to rules of game?
	// 	if (currentMoveInfo.pieceType === 'rook') {
	// 		if (rook_CheckMoveWasValid(currentMoveInfo)) {
	// 			// consider making this rook check it's on hook
	// 			// should this be a component taking props instead of a function taking args???
	// 			return true;
	// 		}
	// 	}

	// 	return false;
	// };

	const updateChessBoard = () => {
		//update the chessboard with the new move
		console.log(333, 'inside chessboard update');
		const allChessBoardTilesById = Object.keys(chessBoard);

		allChessBoardTilesById.forEach((currentTileId) => {
			//currentTileId ex. 'a3'
			if (currentTileId === currentMoveInfo.moveToTileId) {
				console.log('match at', currentMoveInfo.moveToTileId);

				///AVOID MUTATION OF {}
				// setChessBoard((prevChessboard) => {
				// 	// set tile info to newly moved tile
				// 	// spread ???
				// 	prevChessboard[currentTileId] = currentMoveInfo; // ex. chessBoard['a3'] = {}
				// 	return prevChessboard;
				// });

				// ONE WAY TO GET AROUND
				// setChessBoard((prevChessboard) => {
				// 	const newChessBoard = { ...prevChessboard };
				// 	// set tile info to newly moved tile
				// 	// spread ???
				// 	newChessBoard[currentTileId] = currentMoveInfo; // ex. chessBoard['a3'] = {}
				// 	return newChessBoard;
				// });

				//PREFERED WAY
				setChessBoard((prevChessboard) => ({
					...prevChessboard,
					[currentTileId]: currentMoveInfo, // ex. chessBoard['a3'] = {}
				}));
			}
		});
	};

	const submitHandler = (event) => {
		// calls out to all process
		event.preventDefault();

		//Movement LifeCycle:
		//DONE 0. whichPlayersMoveIsIt, white default move

		// check status of board/player
		// 1. *** TO DO *** isPlayerInCheck();
		// 2. *** TO DO *** isPlayerInCheckMate();

		// 3. Player makes a move via UI

		// 4. Was the move valid?
		//DONE 4a. movement to same tile
		//DONE 4b. tile is occupied by another one of your pieces which obstruct movement
		//DONE 4c. does it adhere to movement rules for that piece

		if (checkForValidMove() === false) return false; // invalid move, stop all actions
		console.log(222, 'PASSED: valid move');

		// 5. update Chessboard with valid move
		updateChessBoard();

		//6. is the Tile currently occupied By your opponent?
		//*** TO DO *** 5a. Capture piece, removing from chessboard obj.
		//*** TO DO *** 5b. list of capture pieces may be advisable

		//Workout logic for all pieces:
		//DONE - Rook
		//*** TO DO *** knight
		//*** TO DO *** bishop
		//*** TO DO *** king
		//*** TO DO *** queen
		//*** TO DO *** pawn

		// switch player, to prep next move
		if (currentPlayerColor === 'white') {
			setCurrentPlayerColor('black');
		} else {
			setCurrentPlayerColor('white');
		}
	};

	useEffect(() => {
		console.log(411, 'in use effect');
		// setCurrentMoveInfo({
		// 	currentPlayerColor,
		// 	pieceType: pieceRef.current.value,
		// 	currentLetter: fromLetterRef.current.value,
		// 	currentNumber: fromNumberRef.current.value,
		// 	moveFromTileId:
		// 		fromLetterRef.current.value + fromNumberRef.current.value,
		// 	moveToTileId: toLetterRef.current.value + toNumberRef.current.value,
		// });
	}, []);

	return (
		<>
			<form onSubmit={submitHandler}>
				<div>
					<label>
						Move {currentPlayerColor}:
						<select
							name='pieceType'
							id='pieceType'
							onChange={(e) => {
								setPieceType(e.target.value);
							}}
						>
							<option value='pawn'>Pawn</option>
							<option value='rook'>Rook</option>
							<option value='bishop'>Bishop</option>
							<option value='knight'>Knight</option>
							<option value='queen'>Queen</option>
							<option value='king'>King</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						From:
						<select
							name='letter'
							id='letter'
							onChange={(e) => {
								setFromLetter(e.target.value);
							}}
						>
							<option value='a'>a</option>
							<option value='b'>b</option>
							<option value='c'>c</option>
							<option value='d'>d</option>
							<option value='e'>e</option>
							<option value='f'>f</option>
							<option value='g'>g</option>
							<option value='h'>h</option>
						</select>
						<select
							name='number'
							id='number'
							onChange={(e) => {
								setFromNumber(e.target.value);
							}}
						>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						To:
						<select
							name='letter'
							id='letter'
							onChange={(e) => {
								setToLetter(e.target.value);
							}}
						>
							<option value='a'>a</option>
							<option value='b'>b</option>
							<option value='c'>c</option>
							<option value='d'>d</option>
							<option value='e'>e</option>
							<option value='f'>f</option>
							<option value='g'>g</option>
							<option value='h'>h</option>
						</select>
						<select
							name='number'
							id='number'
							onChange={(e) => {
								setToNumber(e.target.value);
							}}
						>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
						</select>
					</label>
				</div>
				<div>
					<input type='submit' />
				</div>
			</form>

			{/* <form onSubmit={submitHandler}>
				<div>
					<label>
						Move {currentPlayerColor}:
						<select name='pieceType' id='pieceType' ref={pieceRef}>
							<option value='pawn'>Pawn</option>
							<option value='rook'>Rook</option>
							<option value='bishop'>Bishop</option>
							<option value='knight'>Knight</option>
							<option value='queen'>Queen</option>
							<option value='king'>King</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						From:
						<select name='letter' id='letter' ref={fromLetterRef}>
							<option value='a'>a</option>
							<option value='b'>b</option>
							<option value='c'>c</option>
							<option value='d'>d</option>
							<option value='e'>e</option>
							<option value='f'>f</option>
							<option value='g'>g</option>
							<option value='h'>h</option>
						</select>
						<select name='number' id='number' ref={fromNumberRef}>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						To:
						<select name='letter' id='letter' ref={toLetterRef}>
							<option value='a'>a</option>
							<option value='b'>b</option>
							<option value='c'>c</option>
							<option value='d'>d</option>
							<option value='e'>e</option>
							<option value='f'>f</option>
							<option value='g'>g</option>
							<option value='h'>h</option>
						</select>
						<select name='number' id='number' ref={toNumberRef}>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
						</select>
					</label>
				</div>
				<div>
					<input type='submit' />
				</div>
			</form> */}
		</>
	);
}

export default App;

//  else if (moveInfo.pieceTypeMoved === 'knight') {
// 	if (knight_CheckMoveWasValid(moveInfo)) {
// 		return true;
// 	}
// } else if (moveInfo.pieceTypeMoved === 'bishop') {
// 	if (bishop_CheckMoveWasValid(moveInfo)) {
// 		return true;
// 	}
// } else if (moveInfo.pieceTypeMoved === 'king') {
// 	if (king_CheckMoveWasValid(moveInfo)) {
// 		return true;
// 	}
// } else if (moveInfo.pieceTypeMoved === 'queen') {
// 	if (queen_CheckMoveWasValid(moveInfo)) {
// 		return true;
// 	}
// } else if (moveInfo.pieceTypeMoved === 'pawn') {
// 	if (pawn_CheckMoveWasValid(moveInfo)) {
// 		return true;
// 	}
// }
