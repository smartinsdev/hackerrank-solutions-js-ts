export function timeConversion(time: string) {
  const timeParts = time.match(/(\d+):(\d+):(\d+)(\w+)/)?.slice(1, 5);
  const [hours, minutes, seconds, period] = timeParts!;
  let parsedHours = parseInt(hours, 10);

  if (period.toLocaleLowerCase() === 'pm' && parsedHours !== 12)
    parsedHours += 12;
  else if (period.toLocaleLowerCase() === 'am' && parsedHours === 12)
    parsedHours = 0;

  const formatedHours = parsedHours.toString().padStart(2, '0');
  console.log(`${formatedHours}:${minutes}:${seconds}`);

  return `${formatedHours}:${minutes}:${seconds}`;
}
