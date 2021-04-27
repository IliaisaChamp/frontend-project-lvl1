import readlineSync from 'readline-sync';
import { randomInteger } from './lib/lib.js';

const makeGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  return num;
};

const startEvenGame = () => {
  const name = makeGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let count = 0; count < 3; count + 1) {
    const questionNumber = askQuestion(randomInteger(1, 100));
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return false;
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default startEvenGame;
