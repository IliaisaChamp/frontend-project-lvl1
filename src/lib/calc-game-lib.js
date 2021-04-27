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

export { setRandomOperation, askQuestionCalc };
