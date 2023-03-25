import {
  generateProgression,
  randomInteger,
} from '../utils.js';

export default () => {
  const MIN_PROGRESSION_LENGHT = 5;
  const MAX_PROGRESSION_LENGHT = 10;
  const MIN_STEP = 1;
  const MAX_STEP = 10;
  const PROGRESSION_REPLACER = '..';

  const getQuestionText = () => 'What number is missing in the progression?';

  const runRound = () => {
    const progressionLength = randomInteger(MIN_PROGRESSION_LENGHT, MAX_PROGRESSION_LENGHT);
    const progressionStep = randomInteger(MIN_STEP, MAX_STEP);
    const progressionStart = randomInteger(MIN_STEP, MAX_STEP);
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
