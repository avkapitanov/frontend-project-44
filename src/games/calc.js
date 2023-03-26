import getRandomInteger from '../getRandomInteger.js';
import { CALC_MAX_NUMBER, CALC_MIN_NUMBER } from '../const.js';
import start from '../index.js';

const mathOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const calcExpression = (operation, operand1, operand2) => {
  const operationFunc = mathOperations[operation];

  return operationFunc(operand1, operand2);
};

const generateQuestionAndAnswer = () => {
  const firstOperand = getRandomInteger(CALC_MIN_NUMBER, CALC_MAX_NUMBER);
  const secondOperand = getRandomInteger(CALC_MIN_NUMBER, CALC_MAX_NUMBER);
  const operations = Object.keys(mathOperations);
  const operation = operations[getRandomInteger(0, operations.length - 1)];

  return {
    question: `${firstOperand} ${operation} ${secondOperand}`,
    correctAnswer: String(calcExpression(operation, firstOperand, secondOperand)),
  };
};

export default () => {
  const questionText = 'What is the result of the expression?';

  start(questionText, generateQuestionAndAnswer);
};
