import startGames from '../index.js';
import { randomInteger, isPrime } from '../lib/games.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGame = () => {
  const questionNum = randomInteger(1, 53);
  const question = `${questionNum}`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => startGames(createGame, rules);
export default startPrimeGame;
