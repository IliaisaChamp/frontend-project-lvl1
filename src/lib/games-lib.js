import readlineSync from 'readline-sync';

const makeGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  return num;
};

const lostGame = (answer, correctAnswer, name) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}`);
  return false;
};
export {
  randomInteger, lostGame, askQuestion, makeGreeting,
};