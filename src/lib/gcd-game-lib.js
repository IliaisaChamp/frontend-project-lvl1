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

export { askQuestionGcd };
