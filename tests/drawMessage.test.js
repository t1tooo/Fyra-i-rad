import { test, expect, vi } from 'vitest';
import App from '../classes/App.js';
import Board from '../classes/Board.js';
import Player from '../classes/Player.js';

test('It should be a draw if the board is full and no one has won', () => {
  const app = new App();
  
  // Mock the board matrix to be a draw
  app.board = new Board();
  app.board.matrix = [
    ['X', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O'],
  ];
  app.board.winner = false; 
  app.board.isADraw = true;
  app.board.gameOver = true; 
  
  app.playerX = new Player('Thomas', 'X');
  app.playerO = new Player('Tito', 'O');

  const logSpy = vi.spyOn(console, 'log');

  app.whoHasWonOnGameOver();

  expect(logSpy).toHaveBeenCalledWith('Tyvärr det blev oavgjort...');

  logSpy.mockRestore();
});

// Use mock to mock the prompts
vi.mock('../helpers/prompt.js', () => ({
  default: vi.fn((message) => {
    if (message.includes('Spelare X:s namn')) return 'Player X';
    if (message.includes('Spelare O:s namn')) return 'Player O';
    if (message.includes('Vill ni spela igen')) return 'nej';  
    if (message.includes('Ange ditt drag')) return '1,1';    
  })
}));

