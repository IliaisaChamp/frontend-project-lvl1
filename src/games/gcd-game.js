import readlineSync from 'readline-sync';
import { randomInteger, lostGame, askQuestionGcd } from '../lib/lib.js';

const makeGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const startGcdGame = () => {
  const name = makeGreeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let count = 0; count < 3; count + 1) {
    const firstNum = randomInteger(1, 100);
    const secondNum = randomInteger(1, 100);
    const questionResult = askQuestionGcd(firstNum, secondNum);

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === questionResult) {
      count += 1;
      console.log('Correct!');
    } else {
      return lostGame(answer, questionResult, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export { startGcdGame };
