import { add, subtract, appendString, sortNumericArray } from '../../helpers';

test('add function', () => {
  expect(add(2,2)).toBe(4);
})

test('add function fail', () => {
  expect(() => add(2, 'a')).toThrow(Error);
})

test('subtract function', () => {
  expect(subtract(2,2)).toBe(0);
  expect(subtract(2,3)).toBe(-1);
})

test('subtract function fail', () => {
  expect(() => subtract(2,'a')).toThrow(Error);
})

test('subtract 0s', () => {
  expect(subtract(0,0)).toBe(0);
  expect(subtract(0,6)).toBe(6);
  expect(subtract(2,0)).toBe(2);
})

test('appendString function', () => {
  expect(appendString('Hello', 'Universe')).toBe('Hello Universe');
})

test('appendString function fail', () => {
  expect(() => appendString('Hello', 1234213213)).toThrow(Error);
})

test('sortArray', () => {
  const array = [3,41,23,1,56,32,2,34,44];
  expect(sortNumericArray(array)).toEqual([1,  2,  3, 23, 32, 34, 41, 44, 56]);
})

test('sortArray failure', () => {
  const array = [3,41,'as78fysa78fy8asf',1,56,32,2,34,44];
  expect(() => sortNumericArray(array)).toThrow(Error);
})