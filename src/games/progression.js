import {
  generateProgression, getRandomArrayIndex,
  randomInteger,
} from '../utils.js';
import {
  PROGRESSION_MAX_LENGTH,
  PROGRESSION_MAX_STEP,
  PROGRESSION_MIN_LENGTH,
  PROGRESSION_MIN_STEP,
  PROGRESSION_REPLACER,
} from '../const.js';

export default () => ({
  questionText: 'What number is missing in the progression?',
  runRound: () => {
    const progressionLength = randomInteger(PROGRESSION_MIN_LENGTH, PROGRESSION_MAX_LENGTH);
    const progressionStep = randomInteger(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
    const progressionStart = randomInteger(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
    const progression = generateProgression(progressionStart, progressionStep, progressionLength);
    const indexHide = getRandomArrayIndex(progression.length);

    const correctAnswer = String(progression[indexHide]);
    progression[indexHide] = PROGRESSION_REPLACER;
    const question = `${progression.join(' ')}`;

    return {
      question,
      correctAnswer,
    };
  },
});
