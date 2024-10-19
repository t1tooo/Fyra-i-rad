import { test, expect } from 'vitest';
import Board from '../classes/Board.js';


test('A player should be able to make a valid move', () => {
  const board = new Board();

  const result = board.makeMove('X', 0, 0);
  expect(result).toEqual(true);
  expect(board.matrix[0][0]).toEqual('X'); 
  expect(board.currentPlayerColor).toEqual('O'); 
});


test('SHould not be able to make a move out of bounds', () => {
  const board = new Board();
  const result = board.makeMove('X', 4, 4); 
  expect(result).toEqual(false);
});


test('A player should not be able to make a move in an occupoed cell', () => {
  const board = new Board();
  board.makeMove('X', 1, 1);
  const result = board.makeMove('O', 1, 1); 
  expect(result).toEqual(false);
});

test('Should not be able to make a move when Player X wins', () => {
  const board = new Board();

  board.makeMove('X', 0, 0);
  board.makeMove('O', 0, 1);
  board.makeMove('X', 1, 1);
  board.makeMove('O', 0, 2);
  board.makeMove('X', 2, 2); 
  // PLayer X wins

  const result = board.makeMove('O', 1, 0); 
  expect(result).toEqual(false); 
  expect(board.matrix[1][0]).toEqual(' '); // Board should remain without change
});

