import { randomInteger } from './games-lib.js';

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

const replaceNumInArray = (arr) => {
  const randomIdx = randomInteger(1, arr.length - 1);
  const replacedNum = arr[randomIdx];

  const newArr = [...arr];
  newArr.splice(randomIdx, 1, '...');

  return [newArr, replacedNum];
};

const askQuestion = (arr) => {
  const questionStr = arr.join(' ');
  console.log(`Question: ${questionStr}`);
};

export { makeProgressionArray, replaceNumInArray, askQuestion };
