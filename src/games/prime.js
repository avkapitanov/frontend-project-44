import { randomInteger, isPrime } from '../utils.js';

export default () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  const getQuestionText = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const runRound = () => {
    const question = randomInteger(MIN_NUMBER, MAX_NUMBER);
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
