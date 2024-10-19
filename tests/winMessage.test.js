import { test, expect, vi } from 'vitest';
import App from '../classes/App.js';
import Board from '../classes/Board.js';
import Player from '../classes/Player.js';

test('X should win and it should say a winning message', () => {
  const app = new App();

  // Mock the board to be a win for X
  app.board = new Board();
  app.board.matrix = [
    ['X', 'X', 'X'], 
    ['X', 'O', 'O'],
    ['O', 'X', 'O'],
  ];
  app.board.winner = 'X'; 
  app.board.isADraw = false;
  app.board.gameOver = true;


  app.playerX = new Player('Thomas', 'X');
  app.playerO = new Player('Tito', 'O');

  // use spy to check on the console logs
  const logSpy = vi.spyOn(console, 'log');

  app.whoHasWonOnGameOver();
  expect(logSpy).toHaveBeenCalledWith('Grattis X: Thomas du vann!');

  logSpy.mockRestore();
});

// Use mock to mock the prompts
vi.mock('../helpers/prompt.js', () => ({
  default: vi.fn((message) => {
    if (message.includes('Spelare X:s namn')) return 'Thomas';
    if (message.includes('Spelare O:s namn')) return 'Tito';  
    if (message.includes('Vill ni spela igen')) return 'nej';
    if (message.includes('Ange ditt drag')) return '1,1';
  })
}));
