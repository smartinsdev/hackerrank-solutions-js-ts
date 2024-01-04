export function lonelyInteger(array: number[]): number {
  let occurrence = 0;
  for (let i = 0; i < array.length; i++) {
    occurrence ^= array[i];
  }
  console.log(occurrence);
  return occurrence;
}
