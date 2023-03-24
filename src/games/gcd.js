import {
  randomInteger, gcd,
} from '../utils.js';

export default () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 20;

  const getQuestionText = () => 'Find the greatest common divisor of given numbers.';

  const runRound = () => {
    const op1 = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const op2 = randomInteger(MIN_NUMBER, MAX_NUMBER);

    const question = `${op1} ${op2}`;
    const correctAnswer = String(gcd(op1, op2));

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
