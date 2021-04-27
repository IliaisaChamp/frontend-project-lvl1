import startGames from '../index.js';
import { randomInteger } from '../lib/games.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum;
};

const createGame = () => {
  const firstNum = randomInteger(1, 100);
  const secondNum = randomInteger(1, 100);
  const question = `${firstNum} ${secondNum}`;

  const correctAnswer = gcd(firstNum, secondNum);

  return [question, correctAnswer];
};

const startGcdGame = () => startGames(createGame, rules);
export default startGcdGame;
