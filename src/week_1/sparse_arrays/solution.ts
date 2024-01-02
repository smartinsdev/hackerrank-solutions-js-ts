export function matchingStrings(
  strings: string[],
  queries: string[]
): number[] {
  const results: number[] = [];
  while (queries.length > 0) {
    const shifted = queries.shift();
    const count = strings.filter((value) => value === shifted).length;
    results.push(count);
  }
  return results;
}
