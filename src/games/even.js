import { randomInteger, isEven } from '../utils.js';

export default () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  const getQuestionText = () => 'Answer yes if the number is even, otherwise answer no.';

  const runRound = () => {
    const question = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

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
