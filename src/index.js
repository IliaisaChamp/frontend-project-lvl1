import readlineSync from 'readline-sync';

const startGames = (game, rules) => {
  console.log('Welcome to the Brain games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello  ${name}!`);
  console.log(rules);

  for (let count = 0; count < 3; count += 1) {
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);
    let answer = readlineSync.question('Your answer is: ');
    answer = Number.isNaN(parseInt(answer, 10)) ? String(answer) : Number(answer);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGames;
