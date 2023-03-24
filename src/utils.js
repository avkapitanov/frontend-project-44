export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (numb) => numb % 2 === 0;

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
