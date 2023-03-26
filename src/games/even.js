import getRandomInteger from '../getRandomInteger.js';
import { EVEN_MAX_NUMBER, EVEN_MIN_NUMBER } from '../const.js';
import start from '../index.js';

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomInteger(EVEN_MIN_NUMBER, EVEN_MAX_NUMBER);

  return {
    question: randomNumber,
    correctAnswer: randomNumber % 2 === 0 ? 'yes' : 'no',
  };
};

export default () => {
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

  start(questionText, generateQuestionAndAnswer);
};
