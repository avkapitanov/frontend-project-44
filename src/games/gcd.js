import {
  randomInteger, gcd,
} from '../utils.js';
import { GCD_MAX_NUMBER, GCD_MIN_NUMBER } from '../const.js';

export default () => {
  const getQuestionText = () => 'Find the greatest common divisor of given numbers.';

  const runRound = () => {
    const op1 = randomInteger(GCD_MIN_NUMBER, GCD_MAX_NUMBER);
    const op2 = randomInteger(GCD_MIN_NUMBER, GCD_MAX_NUMBER);

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
