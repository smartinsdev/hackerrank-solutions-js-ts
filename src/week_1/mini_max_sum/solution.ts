import { generateRandomArrayInteger } from '../../utils/generateRandomArrayInteger';

const SIZE = 5;
const MIN = 1;
const MAX = 20;

const randomArrayInt = generateRandomArrayInteger(SIZE, MIN, MAX);
const countTotal = randomArrayInt.reduce((total, number) => total + number, 0);
const arrayCount = randomArrayInt.map((value) => countTotal - value);
const [minSum, maxSum] = [Math.min(...arrayCount), Math.max(...arrayCount)];

export function minMaxSum() {
  process.stdout.write(`${minSum}  ${maxSum}`);
}
