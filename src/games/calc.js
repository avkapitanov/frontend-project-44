import {
  randomInteger, possibleOperations, getRandomArrayIndex, calcExpression,
} from '../utils.js';

export default () => {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 20;

  const getQuestionText = () => 'What is the result of the expression?';

  const runRound = () => {
    const op1 = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const op2 = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const operations = Object.keys(possibleOperations);
    const operation = operations[getRandomArrayIndex(operations.length)];

    const question = `${op1} ${operation} ${op2}`;
    const correctAnswer = String(calcExpression(operation, op1, op2));

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
