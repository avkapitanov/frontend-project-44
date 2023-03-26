import getRandomInteger from '../utils.js';
import {
  PROGRESSION_MAX_LENGTH,
  PROGRESSION_MAX_STEP,
  PROGRESSION_MIN_LENGTH,
  PROGRESSION_MIN_STEP,
  PROGRESSION_REPLACER,
} from '../const.js';
import start from '../index.js';

const generateProgression = (startNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + (i * step));
  }

  return progression;
};

const generateQuestionAndAnswer = () => {
  const progressionLength = getRandomInteger(PROGRESSION_MIN_LENGTH, PROGRESSION_MAX_LENGTH);
  const progressionStep = getRandomInteger(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  const progressionStart = getRandomInteger(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const indexHide = getRandomInteger(0, progression.length - 1);

  const correctAnswer = String(progression[indexHide]);
  progression[indexHide] = PROGRESSION_REPLACER;

  return {
    question: `${progression.join(' ')}`,
    correctAnswer,
  };
};

export default () => {
  const questionText = 'What number is missing in the progression?';

  start(questionText, generateQuestionAndAnswer);
};
