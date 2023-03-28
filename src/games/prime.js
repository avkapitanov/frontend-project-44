import getRandomInteger from '../utils.js';
import { PRIME_MAX_NUMBER } from '../const.js';
import start from '../index.js';

const isPrime = (numb) => {
  if (numb < 2) {
    return false;
  }

  for (let i = 2, max = Math.sqrt(numb); i <= max; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomInteger({ max: PRIME_MAX_NUMBER });

  return {
    question: randomNumber,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  start(questionText, generateQuestionAndAnswer);
};
