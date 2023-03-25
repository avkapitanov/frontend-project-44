import { randomInteger } from '../utils.js';
import { EVEN_MAX_NUMBER, EVEN_MIN_NUMBER } from '../const.js';

export default () => ({
  questionText: 'Answer "yes" if the number is even, otherwise answer "no".',
  runRound: () => {
    const question = randomInteger(EVEN_MIN_NUMBER, EVEN_MAX_NUMBER);

    return {
      question,
      correctAnswer: question % 2 === 0 ? 'yes' : 'no',
    };
  },
});
