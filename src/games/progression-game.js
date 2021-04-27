import startGames from '../index.js';
import { makeProgressionArray, randomInteger } from '../lib/games.js';

const rules = 'What number is missing in the progression?';

const createGame = () => {
  const progressionArr = makeProgressionArray();
  const randomId = randomInteger(1, progressionArr.length - 1);
  const replacedNum = progressionArr[randomId];

  const questionArr = [...progressionArr];
  questionArr.splice(randomId, 1, '...');

  const question = questionArr.join(' ');

  return [question, replacedNum];
};

const startProgressionGame = () => startGames(createGame, rules);
export default startProgressionGame;
