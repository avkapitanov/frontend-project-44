import readlineSync from 'readline-sync';

const showText = (text) => console.log(text);

const showWelcome = () => showText('Welcome to the Brain Games!');

const askUserName = () => readlineSync.question('May I have your name? ');

const showUserGreeting = (userName) => showText(`Hello, ${userName}!`);

const getUserAnswer = (question) => readlineSync.question(question);

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isEven = (numb) => numb % 2 === 0;

const minNumber = 1;
const maxNumber = 100;
const evenAnswer = 'yes';
const oddAnswer = 'no';

let leftAttempts = 3;
const questionText = `Answer "${evenAnswer}" if the number is even, otherwise answer "${oddAnswer}".`;

export default () => {
  showWelcome();
  const userName = askUserName();
  showUserGreeting(userName);
  showText(questionText);

  while (leftAttempts > 0) {
    const numb = randomInteger(minNumber, maxNumber);
    const correctAnswer = isEven(numb) ? evenAnswer : oddAnswer;
    showText(`Question: ${numb}`);
    const userAnswer = getUserAnswer('Your answer: ');

    if (userAnswer === correctAnswer) {
      leftAttempts -= 1;
      showText('Correct!');
      if (leftAttempts === 0) {
        showText(`Congratulations, ${userName}!`);
      }
    } else {
      showText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      showText(`Let's try again, ${userName}!`);
      break;
    }
  }
};
