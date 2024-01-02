export function divisibleSumPairs(_n: number, k: number, ar: number[]): number {
  let numberOfPairs = 0;
  while (ar.length >= 1) {
    console.log(`tamanho da lista: ${ar.length}`);
    let popElement = ar.pop();
    console.log(`elemento tirado: ${popElement}`);
    numberOfPairs += ar.reduce(
      (acc, value) => ((popElement! + value) % k === 0 ? ++acc : acc),
      0
    );
  }
  return numberOfPairs;
}
