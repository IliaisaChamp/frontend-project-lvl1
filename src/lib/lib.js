const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const askQuestionEven = (num) => {
  console.log(`Question: ${num}`);
  return num;
};

const askQuestionCalc = (firstNum, operation, secondNum) => {
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
  return false;
};

const gcd = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum;
};

const askQuestionGcd = (firstNum, secondNum) => {
  console.log(`Question: ${firstNum} ${secondNum}`);
  const result = gcd(firstNum, secondNum);
  return result;
};

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
  randomInteger,
  lostGame,
  askQuestionCalc,
  askQuestionEven,
  setRandomOperation,
  askQuestionGcd,
};
