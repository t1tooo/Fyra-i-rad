import { test, expect, vi } from 'vitest';
import App from '../classes/App.js';
import Board from '../classes/Board.js';
import Player from '../classes/Player.js';

// Mock the prompt responses
vi.mock('../helpers/prompt.js', () => ({
  default: vi.fn((message) => {
    if (message.includes('Spelare X:s namn')) return 'Thomas'; 
    if (message.includes('Spelare O:s namn')) return 'Tito';
    if (message.includes('Ange ditt drag X Thomas')) return '1,1'; 
    if (message.includes('Ange ditt drag O Tito')) return '1,2';
    if (message.includes('Ange ditt drag X Thomas')) return '2,1';
    if (message.includes('Ange ditt drag O Tito')) return '2,2';
    if (message.includes('Ange ditt drag X Thomas')) return '3,1';
    if (message.includes('Ange ditt drag O Tito')) return '3,2';
    if (message.includes('Ange ditt drag X Thomas')) return '2,3';
    if (message.includes('Ange ditt drag O Tito')) return '3,3';
    if (message.includes('Vill ni spela igen')) return 'ja';
  }),
}));

test('It should be a draw and you should be able to restart the game', () => {
  const app = new App();

  // Mock the board matrix to be a draw
  app.board = new Board();
  app.board.matrix = [
    ['X', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O'],
  ];
  app.board.winner = null; 
  app.board.isADraw = true; 
  app.board.gameOver = true;

  // Mock players names
  app.playerX = new Player('Thomas', 'X');
  app.playerO = new Player('Tito', 'O');

  const logSpy = vi.spyOn(console, 'log');


  app.whoHasWonOnGameOver();
  expect(logSpy).toHaveBeenCalledWith('Tyvärr det blev oavgjort...');

  // Reset the board
  app.createNewBoard();
  expect(app.board.matrix).toEqual([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]); // Board should be empty now

  // Check if the player names are still there
  expect(app.playerX.name).toBe('Thomas');
  expect(app.playerO.name).toBe('Tito');

  logSpy.mockRestore(); 
});
