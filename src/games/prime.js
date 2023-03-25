import { randomInteger, isPrime } from '../utils.js';
import { PRIME_MAX_NUMBER, PRIME_MIN_NUMBER } from '../const.js';

export default () => {
  const getQuestionText = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const runRound = () => {
    const question = randomInteger(PRIME_MIN_NUMBER, PRIME_MAX_NUMBER);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

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
