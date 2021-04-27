import readlineSync from 'readline-sync';
import { lostGame } from '../lib/games-lib.js';
import { makeProgressionArray, replaceNumInArray, askQuestion } from '../lib/progression-game-lib.js';

const makeGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const startProgressionGame = () => {
  const name = makeGreeting();

  console.log('What number is missing in the progression?');

  for (let count = 0; count < 3; count += 1) {
    const progressionArr = makeProgressionArray();
    const [newArr, replacedNum] = replaceNumInArray(progressionArr);

    askQuestion(newArr);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === replacedNum) {
      console.log('Correct!');
    } else {
      return lostGame(answer, replacedNum, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export { startProgressionGame };
