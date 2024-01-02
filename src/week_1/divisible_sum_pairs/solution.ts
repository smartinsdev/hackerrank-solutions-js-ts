export function divisibleSumPairs(_n: number, k: number, ar: number[]): number {
  let numberOfPairs = 0;
  while (ar.length >= 1) {
    let popElement = ar.pop();
    numberOfPairs += ar.reduce(
      (acc, value) => ((popElement! + value) % k === 0 ? ++acc : acc),
      0
    );
  }
  return numberOfPairs;
}
