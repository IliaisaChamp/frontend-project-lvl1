import readlineSync from 'readline-sync';
import {
  randomInteger, lostGame, askQuestion, makeGreeting,
} from '../lib/games-lib.js';

const startEvenGame = () => {
  const name = makeGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let count = 0; count < 3; count += 1) {
    const questionResult = askQuestion(randomInteger(1, 100));
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = questionResult % 2 === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return lostGame(answer, correctAnswer, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default startEvenGame;
