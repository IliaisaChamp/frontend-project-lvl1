import readlineSync from 'readline-sync';
import { randomInteger, lostGame, makeGreeting } from '../lib/games-lib.js';
import { askQuestionGcd } from '../lib/gcd-game-lib.js';

const startGcdGame = () => {
  const name = makeGreeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let count = 0; count < 3; count += 1) {
    const firstNum = randomInteger(1, 100);
    const secondNum = randomInteger(1, 100);
    const questionResult = askQuestionGcd(firstNum, secondNum);

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === questionResult) {
      console.log('Correct!');
    } else {
      return lostGame(answer, questionResult, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export { startGcdGame };
