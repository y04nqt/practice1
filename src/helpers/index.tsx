export function add(a:number, b:number):number {
  if (typeof a !== 'number' || typeof b !== 'number') throw(new Error('add function requires two numbers'));
  return a + b;
}

export function subtract(a:number, b:number):number {
  if (typeof a !== 'number' || typeof b !== 'number') throw(new Error('Arguments must be numbers'));
  if (b === 0) return a;
  if (a === 0) return b;
  return a - b;
}

export function appendString(string:string, string2:string):string {
  if (typeof string !== 'string' || typeof string2 !== 'string') throw(new Error('appendString requires two strings'));
  if (string.length === 0 || string2.length === 0) throw(new Error('appendString requires strings to be non-empty'));
  return `${string.trim()} ${string2.trim()}`;
}

export function sortNumericArray(array:number[]):number[] {
  if (!array.every(Number.isInteger)) throw(new Error('Array must contain only integers'));
  if (array.length === 0) throw(new Error('Array must not be empty'));
  if (array.length === 1) return array;
  return array.sort((a,b) => a - b);
}