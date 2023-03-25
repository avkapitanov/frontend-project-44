import { randomInteger, isPrime } from '../utils.js';
import {
  NEGATIVE_ANSWER_TEXT, POSITIVE_ANSWER_TEXT, PRIME_MAX_NUMBER, PRIME_MIN_NUMBER,
} from '../const.js';

export default () => ({
  questionText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  runRound: () => {
    const question = randomInteger(PRIME_MIN_NUMBER, PRIME_MAX_NUMBER);
    const correctAnswer = isPrime(question) ? POSITIVE_ANSWER_TEXT : NEGATIVE_ANSWER_TEXT;

    return {
      question,
      correctAnswer,
    };
  },
});
