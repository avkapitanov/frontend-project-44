import readlineSync from 'readline-sync';

const showText = (text) => console.log(text);

const showWelcome = () => showText('Welcome to the Brain Games!');

const askUserName = () => readlineSync.question('May I have your name? ');

const showUserGreeting = (userName) => showText(`Hello, ${userName}!`);

const getUserAnswer = (question) => readlineSync.question(question);

const GAME_ATTEMPTS_COUNT = 3;

export default (game) => {
  let leftAttempts = GAME_ATTEMPTS_COUNT;

  const { questionText, runRound } = game();

  showWelcome();
  const userName = askUserName();
  showUserGreeting(userName);
  showText(questionText);

  while (leftAttempts > 0) {
    const { question, correctAnswer } = runRound();

    showText(`Question: ${question}`);
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
