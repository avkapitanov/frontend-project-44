import { randomInteger, isEven } from '../utils.js';
import {
  EVEN_MAX_NUMBER, EVEN_MIN_NUMBER, NEGATIVE_ANSWER_TEXT, POSITIVE_ANSWER_TEXT,
} from '../const.js';

export default () => ({
  questionText: 'Answer "yes" if the number is even, otherwise answer "no".',
  runRound: () => {
    const question = randomInteger(EVEN_MIN_NUMBER, EVEN_MAX_NUMBER);
    const correctAnswer = isEven(question) ? POSITIVE_ANSWER_TEXT : NEGATIVE_ANSWER_TEXT;

    return {
      question,
      correctAnswer,
    };
  },
});
