import startGames from '../index.js';
import { randomInteger } from '../lib/games.js';

const rules = 'What is the result of the expression?';

const calcOperations = (firstNum, operation, secondNum) => {
  switch (operation) {
    case '+': return firstNum + secondNum;
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    default:
      return false;
  }
};

const createGame = () => {
  const num1 = randomInteger(0, 10);
  const num2 = randomInteger(0, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[randomInteger(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calcOperations(num1, operator, num2);

  return [question, correctAnswer];
};

const startCalcGame = () => startGames(createGame, rules);
export default startCalcGame;
