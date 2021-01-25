/*
1. Decide tiny aspects + Limitations (data requirements, responsibilities)
2. Define input/output of feature (data types, structures, results)
   Define function signature (parameters, variants)
3. Define test case for each tiny feature (including misuse + expected fails)
4. Write code

---

1.
- Have: Word list [A, B, ...]
  - Expect: All words to be strings, No empty values, 
    No foreign/multibyte chars, Sorted A-Z, Upper/Lowercase
- Have at least 2 letters to start searching
- Get 1-N word(s) that start with letters
- Return empty list for no results []

2. + 3.
- constructor(array words)
- getWordsForText(string text): array[string]

4.
- No results : ''
- No results : 'A'
- 2 results  : 'Ap'
- 1 result   : 'App'

*/

const WordSearch = require('./word-search');


describe('Word search', () => {
  const words = [
    'Apple',
    'Apricot',
    'Avocado',
    'Banana',
    'Broccoli',
    'Cucumber',
    '',
  ];

  const wordSearch = new WordSearch(words);

  test('no results for empty value', () => {
    const result = wordSearch.search('');
    expect(result).toStrictEqual([]);
  });

  test('no results for single letter', () => {
    const result = wordSearch.search('A');
    expect(result).toStrictEqual([]);
  });

  test('2 results for letter combination available > 1 times', () => {
    const result = wordSearch.search('Ap');
    expect(result).toStrictEqual(['Apple', 'Apricot']);
  });

  test('1 result for letter combination available = 1 time', () => {
    const result = wordSearch.search('App');
    expect(result).toStrictEqual(['Apple']);
  });

});


/*

toStrictEqual // Type + Structure
toBe          // Primitives, References
toEqual       // Deep/Recursive object equality
toBeTruthy    //
toBeFalsy     //
toBeCloseTo   // Float

*/

