import {
  generateProgression,
  randomInteger,
} from '../utils.js';
import {
  PROGRESSION_MAX_LENGTH,
  PROGRESSION_MAX_STEP,
  PROGRESSION_MIN_LENGTH,
  PROGRESSION_MIN_STEP,
  PROGRESSION_REPLACER,
} from '../const.js';

export default () => {
  const getQuestionText = () => 'What number is missing in the progression?';

  const runRound = () => {
    const progressionLength = randomInteger(PROGRESSION_MIN_LENGTH, PROGRESSION_MAX_LENGTH);
    const progressionStep = randomInteger(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
    const progressionStart = randomInteger(PROGRESSION_MIN_STEP, PROGRESSION_MAX_STEP);
    const progression = generateProgression(progressionStart, progressionStep, progressionLength);
    const indexHide = randomInteger(0, progression.length);

    const correctAnswer = String(progression[indexHide]);
    progression[indexHide] = PROGRESSION_REPLACER;
    const question = `${progression.join(' ')}`;

    return {
      question,
      correctAnswer,
    };
  };

  return {
    getQuestionText,
    runRound,
  };
};