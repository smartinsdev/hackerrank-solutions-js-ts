import { generateRandomArrayInteger } from '../../utils/generateRandomArrayInteger';

const randomArray = generateRandomArrayInteger(6, -10, 10);
let positive = 0,
  negative = 0,
  zero = 0;

for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] === 0) zero += 1;
  else if (randomArray[i] > 0) positive += 1;
  else negative += 1;
}

export function plusMinus() {
  console.log(`Positive occurrence : ${positive / randomArray.length}`);
  console.log(`Negative occurrence : ${negative / randomArray.length}`);
  console.log(`Zero occurrence : ${zero / randomArray.length}`);
}
