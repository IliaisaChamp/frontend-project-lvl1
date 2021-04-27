import readlineSync from 'readline-sync';
import {
  randomInteger, lostGame, askQuestion, makeGreeting,
} from '../lib/games-lib.js';
import isPrime from '../lib/prime-game.lib.js';

const startPrimeGame = () => {
  const name = makeGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let count = 0; count < 3; count += 1) {
    const questionResult = askQuestion(randomInteger(1, 53));
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(questionResult) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return lostGame(answer, correctAnswer, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export { startPrimeGame };
