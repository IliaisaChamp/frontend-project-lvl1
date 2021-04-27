import startGames from '../index.js';
import { randomInteger } from '../lib/games.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const createGame = () => {
  const question = randomInteger(0, 100);

  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => startGames(createGame, rules);
export default startEvenGame;
