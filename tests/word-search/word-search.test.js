/**
 * 1.
 * - Have: Word list [A, B, ...]
 *   - Expect: All words are strings, Can have empty values,
 *     Potentially unsorted, Upper/Lowercase mixed, Can be multibyte
 * - Need at least 2 letters to start searching
 * - Get 1-N word(s) that start with letters
 * - Return empty list for no results []
 *
 * 2. + 3.
 * - constructor(array[string] words)
 * - getTerms(string text): array[string]
 *
 * 4.
 * - No results : ''
 * - No results : 'A'
 * - 2 results  : 'Ap'
 * - 1 result   : 'App'
 */
const WordSearch = require('./word-search');
const words = ['apple', 'Apricot', 'Avocado', '草莓', ''];

const instance = new WordSearch(words);

describe('Word search', () => {
  test('no results for empty value', () => {
    const result = instance.search('');

    expect(result).toStrictEqual([]);
  });

  test('no results for single letter', () => {
    const result = instance.search('A');

    expect(result).toStrictEqual([]);
  });

  test('2 results for letter combination available > 1 times', () => {
    const result = instance.search('Ap');

    expect(result).toStrictEqual(['apple', 'Apricot']);
  });

  test('1 result for letter combination available = 1 time', () => {
    const result = instance.search('App');

    expect(result).toStrictEqual(['apple']);
  });
});
