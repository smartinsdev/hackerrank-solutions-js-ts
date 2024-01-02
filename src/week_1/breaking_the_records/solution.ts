function getRecordBreaksCount(arr: number[], signal?: string) {
  let count = 0;
  let point = arr[0];
  for (const score of arr) {
    if (
      point !== score &&
      (signal === 'least' ? point > score : point < score)
    ) {
      point = score;
      count += 1;
    }
  }
  return count;
}

export function breakingRecords(scores: number[]): number[] {
  const mostPoints = getRecordBreaksCount(scores);
  const leastPoints = getRecordBreaksCount(scores, 'least');
  return [mostPoints, leastPoints];
}
