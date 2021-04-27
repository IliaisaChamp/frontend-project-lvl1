const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isPrime = (num) => {
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const makeProgressionArray = () => {
  const progressionArray = [];
  const maxLength = randomInteger(5, 10);
  const startNum = randomInteger(1, 100);
  const randomNum = randomInteger(1, 10);

  for (let num = startNum; progressionArray.length < maxLength; num += randomNum) {
    progressionArray.push(num);
  }
  return progressionArray;
};

export {
  randomInteger, isPrime, makeProgressionArray,
};
