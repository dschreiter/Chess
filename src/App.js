//CHESS NOTATION : https://www.chess.com/terms/chess-notation
import { useEffect, useRef, useState } from 'react';
import { CREATE_CHESSBOARD_TILE_IDS } from './logic/constants';
import { rook_CheckMoveWasValid } from './logic/ValidMove/rook_CheckMoveWasValid';

import { bishop_CheckMoveWasValid } from './logic/ValidMove/bishop_CheckMoveWasValid';
import { knight_CheckMoveWasValid } from './logic/ValidMove/knight_CheckMoveWasValid';
import { queen_CheckMoveWasValid } from './logic/ValidMove/queen_CheckMoveWasValid';
import { king_CheckMoveWasValid } from './logic/ValidMove/king_CheckMoveWasValid';
import { pawn_CheckMoveWasValid } from './logic/ValidMove/pawn_CheckMoveWasValid';
import './style.css';

function App() {
	const [chessBoard, setChessBoard] = useState(CREATE_CHESSBOARD_TILE_IDS);
	const gameLog = []; // snapshot the state of the board for essentially every move [{move1snapshot},]
	const [currentMoveInfo, setCurrentMoveInfo] = useState(null);

	//movement info
	const [playerColor, setPlayerColor] = useState('white');
	const [pieceType, setPieceType] = useState('rook');
	//from:
	const [fromLetter, setFromLetter] = useState('a');
	const [fromNumber, setFromNumber] = useState('1');
	//to:
	const [toLetter, setToLetter] = useState('a');
	const [toNumber, setToNumber] = useState('1');

	const moveFromTileId = fromLetter + fromNumber;
	const moveToTileId = toLetter + toNumber;

	const checkForValidMove = () => {
		// order of operations, no point updating if move is not valid

		// Moving to same tile your on
		if (moveFromTileId === moveToTileId) {
			alert(
				'Invalid move: cannot move piece to the same tile your currently on'
			);
			return false;
		}

		// Do currently occupy this tile with any of your pieces?
		if (
			chessBoard[moveToTileId] !== '' &&
			chessBoard[moveToTileId].playerColor === playerColor
		) {
			alert('Invalid move: your piece currently occupies this tile');
			return false;
		}

		// Piece moved adheres to rules of game?
		if (pieceType === 'rook') {
			if (rook_CheckMoveWasValid(fromLetter, fromNumber, moveToTileId)) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		} else if (pieceType === 'bishop') {
			console.log(2, pieceType);
			if (
				bishop_CheckMoveWasValid(fromLetter, fromNumber, moveToTileId)
			) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		} else if (pieceType === 'knight') {
			console.log(3, pieceType);
			if (
				knight_CheckMoveWasValid(fromLetter, fromNumber, moveToTileId)
			) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		} else if (pieceType === 'queen') {
			console.log(4, pieceType);
			if (queen_CheckMoveWasValid(fromLetter, fromNumber, moveToTileId)) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		} else if (pieceType === 'king') {
			console.log(5, pieceType);
			if (
				king_CheckMoveWasValid(
					fromLetter,
					fromNumber,
					moveFromTileId,
					moveToTileId
				)
			) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		} else if (pieceType === 'pawn') {
			console.log(6, pieceType);
			if (pawn_CheckMoveWasValid(fromLetter, fromNumber, moveToTileId)) {
				// consider making this rook check it's on hook
				// should this be a component taking props instead of a function taking args???
				return true;
			}
		}

		return false;
	};

	const updateChessBoard = () => {
		//update the chessboard with the new move
		console.log(333, 'inside chessboard update');
		const allChessBoardTilesById = Object.keys(chessBoard);

		allChessBoardTilesById.forEach((currentTileId) => {
			//currentTileId ex. 'a3'
			if (currentTileId === moveToTileId) {
				console.log('match at', currentTileId, moveToTileId);

				// update chessboard with new move
				setChessBoard((prevChessboard) => ({
					...prevChessboard,
					[currentTileId]: {
						playerColor,
						pieceType,
						moveFromTileId,
						moveToTileId,
					}, // ex. chessBoard['a3'] = {}
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
		// 4a. movement to same tile
		// 4b. tile is occupied by another one of your pieces which obstruct movement
		// 4c. does it adhere to movement rules for that piece

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
		if (playerColor === 'white') {
			setPlayerColor('black');
		} else {
			setPlayerColor('white');
		}
	};

	useEffect(() => {
		console.log(411, 'in use effect');
	}, []);

	return (
		<>
			<form onSubmit={submitHandler}>
				<div>
					<label>
						Move {playerColor}:
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
