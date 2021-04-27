const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function askQuestion(firstNum, operation, secondNum) {
  if (arguments.length > 2) {
    console.log(`Question: ${firstNum} ${operation} ${secondNum}`);
    switch (operation) {
      case '+':
        return firstNum + secondNum;
      case '-':
        return firstNum - secondNum;
      case '*':
        return firstNum * secondNum;
      default:
        break;
    }
  }
  console.log(`Question: ${firstNum}`);
  return firstNum;
}

const setRandomOperation = (num) => {
  switch (num) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      break;
  }
  return true;
};

const lostGame = (answer, correctAnswer, name) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}`);
  return false;
};
export {
  randomInteger, lostGame, askQuestion, setRandomOperation,
};
