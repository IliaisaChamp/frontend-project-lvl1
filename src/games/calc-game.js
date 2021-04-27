import readlineSync from 'readline-sync';
import { randomInteger, lostGame, makeGreeting } from '../lib/games-lib.js';
import { askQuestionCalc, setRandomOperation } from '../lib/calc-game-lib.js';

const startCalcGame = () => {
  const name = makeGreeting();

  console.log('What is the result of the expression?');

  for (let count = 0; count < 3; count += 1) {
    const operation = setRandomOperation(randomInteger(1, 3));
    const firstNum = randomInteger(1, 9);
    const secondNum = randomInteger(1, 9);

    const questionResult = askQuestionCalc(firstNum, operation, secondNum);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === questionResult) {
      console.log('Correct!');
    } else {
      return lostGame(answer, questionResult, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export { startCalcGame };
