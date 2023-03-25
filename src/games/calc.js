import {
  randomInteger, possibleOperations, getRandomArrayIndex, calcExpression,
} from '../utils.js';
import { CALC_MAX_NUMBER, CALC_MIN_NUMBER } from '../const.js';

export default () => ({
  questionText: 'What is the result of the expression?',
  runRound: () => {
    const op1 = randomInteger(CALC_MIN_NUMBER, CALC_MAX_NUMBER);
    const op2 = randomInteger(CALC_MIN_NUMBER, CALC_MAX_NUMBER);
    const operations = Object.keys(possibleOperations);
    const operation = operations[getRandomArrayIndex(operations.length)];

    return {
      question: `${op1} ${operation} ${op2}`,
      correctAnswer: String(calcExpression(operation, op1, op2)),
    };
  },
});
