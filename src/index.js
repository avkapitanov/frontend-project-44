import readlineSync from 'readline-sync';
import { ATTEMPTS_COUNT } from './const.js';

export default (questionText, generateQuestionAndAnswer) => {
  let leftAttempts = ATTEMPTS_COUNT;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(questionText);

  while (leftAttempts > 0) {
    const { question, correctAnswer } = generateQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      leftAttempts -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log(`Congratulations, ${userName}!`);
  }
};
