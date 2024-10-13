import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../classes/App'; // Path to your App class
import Player from '../classes/Player'; // Path to your Player class

// Mock the Player class
vi.mock('../classes/Player');

describe('App class', () => {
  let app;

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    // Create a new instance of the App class before each test
    app = new App();
  });

  it('should ask for player names and set them correctly', async () => {
    // Simulate the dialog asking for player names by overriding the askForNames method
    app.askForNames = async () => {
      app.playerX = new Player('Anna'); // Simulate user entering name for player X
      app.playerO = new Player('Bertil'); // Simulate user entering name for player O
      app.namesEntered = true; // Set namesEntered to true
    };

    await app.askForNames(); // Call the method to ask for names

    // Verify that the player names are set correctly
    expect(app.playerX.name).toBe('Anna');
    expect(app.playerO.name).toBe('Bertil');
  });

  it('should render the correct message for the player\'s turn', async () => {
    // Simulate asking for names
    app.playerX = new Player('Anna');
    app.playerO = new Player('Bertil');
    app.namesEntered = true;

    // Call render method
    app.render();

    // Create a main element to check rendered content
    const main = document.createElement('main');
    document.body.appendChild(main); // Append to the body for testing
    app.render(); // Call render to update innerHTML

    // Check if the correct turn message is rendered
    expect(main.innerHTML).toContain("X: Anna's turn...");
  });

  it('should render game over message correctly when player wins', async () => {
    // Simulate asking for names
    app.playerX = new Player('Anna');
    app.playerO = new Player('Bertil');
    app.namesEntered = true;

    // Mocking game state to simulate a win for player X
    app.board = { gameOver: true, winner: app.playerX }; // Set up mock game state
    app.render(); // Render to show the result

    // Create a main element to check rendered content
    const main = document.createElement('main');
    document.body.appendChild(main); // Append to the body for testing
    app.render(); // Call render to update innerHTML

    // Check if the correct win message is displayed
    expect(main.innerHTML).toContain("X: Anna won!");
  });
});
