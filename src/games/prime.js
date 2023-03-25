import { randomInteger, isPrime } from '../utils.js';
import { PRIME_MAX_NUMBER, PRIME_MIN_NUMBER } from '../const.js';

export default () => ({
  questionText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  runRound: () => {
    const question = randomInteger(PRIME_MIN_NUMBER, PRIME_MAX_NUMBER);

    return {
      question,
      correctAnswer: isPrime(question) ? 'yes' : 'no',
    };
  },
});
