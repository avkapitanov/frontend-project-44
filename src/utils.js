export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomArrayIndex = (len) => randomInteger(0, len - 1);

export const possibleOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const calcExpression = (operation, op1, op2) => {
  const operationFunc = possibleOperations[operation];

  return operationFunc(op1, op2);
};

export const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

export const generateProgression = (start, step, len) => {
  const progression = [];
  for (let i = 0; i < len; i += 1) {
    progression.push(start + (i * step));
  }

  return progression;
};

export const isPrime = (numb) => {
  if (numb < 2) {
    return false;
  }

  for (let i = 2, max = Math.sqrt(numb); i <= max; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};
