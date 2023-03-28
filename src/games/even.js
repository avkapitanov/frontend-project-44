import getRandomInteger from '../utils.js';
import { EVEN_MAX_NUMBER } from '../const.js';
import start from '../index.js';

const isEven = (numb) => numb % 2 === 0;

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomInteger({ max: EVEN_MAX_NUMBER });

  return {
    question: randomNumber,
    correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
};

export default () => {
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

  start(questionText, generateQuestionAndAnswer);
};
