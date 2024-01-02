function splitCamelCase(input: string): string {
  const [, type, name] = input.split(';');
  const words = name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return type === 'M' ? words.join(' ').slice(0, -2) : words.join(' ');
}

function combineCamelCase(input: string): string {
  const [, type, names] = input.split(';');
  const words = names.split(' ');

  const finalString = words.map((word, index) => {
    if (index === 0) {
      if (type === 'C') {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return type === 'M' ? finalString.join('') + '()' : finalString.join('');
}

export function camelCase(input: string): void {
  let output: string = '';
  const clearInput = input.replace(/\r/, '');
  if (clearInput.startsWith('S')) output = splitCamelCase(clearInput);
  else if (clearInput.startsWith('C')) output = combineCamelCase(clearInput);
  console.log(output);
}
