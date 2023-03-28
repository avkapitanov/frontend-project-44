import getRandomInteger from '../utils.js';
import { CALC_MAX_NUMBER } from '../const.js';
import start from '../index.js';

const mathOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const calcExpression = (operation, operand1, operand2) => {
  const operationFunc = mathOperations[operation];

  if (!operationFunc) {
    throw new Error(`Can't find "${operation}" operation`);
  }

  return operationFunc(operand1, operand2);
};

const generateQuestionAndAnswer = () => {
  const firstOperand = getRandomInteger({ max: CALC_MAX_NUMBER });
  const secondOperand = getRandomInteger({ max: CALC_MAX_NUMBER });
  const operations = Object.keys(mathOperations);
  const operation = operations[getRandomInteger({ max: operations.length - 1 })];

  return {
    question: `${firstOperand} ${operation} ${secondOperand}`,
    correctAnswer: String(calcExpression(operation, firstOperand, secondOperand)),
  };
};

export default () => {
  const questionText = 'What is the result of the expression?';

  start(questionText, generateQuestionAndAnswer);
};
