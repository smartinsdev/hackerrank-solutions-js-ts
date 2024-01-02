import { getRandomNumber } from './getRandomNumber';

export function generateRandomArrayInteger(
  size: number,
  min: number,
  max: number
) {
  return Array.from({ length: size }, () => getRandomNumber(min, max));
}
