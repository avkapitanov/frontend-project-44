import getRandomInteger from '../getRandomInteger.js';
import { GCD_MAX_NUMBER, GCD_MIN_NUMBER } from '../const.js';
import start from '../index.js';

const calcGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return calcGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

const generateQuestionAndAnswer = () => {
  const firstOperand = getRandomInteger(GCD_MIN_NUMBER, GCD_MAX_NUMBER);
  const secondOperand = getRandomInteger(GCD_MIN_NUMBER, GCD_MAX_NUMBER);

  return {
    question: `${firstOperand} ${secondOperand}`,
    correctAnswer: String(calcGreatestCommonDivisor(firstOperand, secondOperand)),
  };
};

export default () => {
  const questionText = 'Find the greatest common divisor of given numbers.';

  start(questionText, generateQuestionAndAnswer);
};
