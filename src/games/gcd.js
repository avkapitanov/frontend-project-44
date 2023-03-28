import getRandomInteger from '../utils.js';
import { GCD_MAX_NUMBER } from '../const.js';
import start from '../index.js';

const getGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGCD(secondNumber, firstNumber % secondNumber);
};

const generateQuestionAndAnswer = () => {
  const firstOperand = getRandomInteger({ max: GCD_MAX_NUMBER });
  const secondOperand = getRandomInteger({ max: GCD_MAX_NUMBER });

  return {
    question: `${firstOperand} ${secondOperand}`,
    correctAnswer: String(getGCD(firstOperand, secondOperand)),
  };
};

export default () => {
  const questionText = 'Find the greatest common divisor of given numbers.';

  start(questionText, generateQuestionAndAnswer);
};
