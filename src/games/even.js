import { randomInteger, isEven } from '../utils.js';
import { EVEN_MAX_NUMBER, EVEN_MIN_NUMBER } from '../const.js';

export default () => {
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

  const runRound = () => {
    const question = randomInteger(EVEN_MIN_NUMBER, EVEN_MAX_NUMBER);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return {
      question,
      correctAnswer,
    };
  };

  return {
    questionText,
    runRound,
  };
};
