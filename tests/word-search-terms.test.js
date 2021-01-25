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
 * - constructor(array[[string] => string] wordsTerms)
 * - getTerms(string text): array[string]
 *
 * 4.
 * - No results : ''
 * - No results : 'A'
 * - 2 results  : 'Ap'
 * - 1 result   : 'App'
 */
const WordSearchTerms = require('./word-search-terms');

const wordsTerms = [
  'apple'   => ['Red', 'Yellow'],
  'Apricot' => ['Orange', 'Pink'],
  'Avocado' => ['Brown', 'Green', 'Lime'],
  '草莓',    => ['红'],
  ''        => [''],
];

const instance = new WordSearchTerms(wordsTerms);

describe('Word search - Terms', () => {

  test('no results for empty value', () => {
    const result = instance.search('');

    expect(result).toStrictEqual([]);
  });

  test('no results for single letter', () => {
    const result = instance.search('A');

    expect(result).toStrictEqual([]);
  });

  test('4 terms of 2 results with combined terms', () => {
    const result = instance.search('Ap');

    expect(result).toStrictEqual(['Red', 'Yellow', 'Orange', 'Pink']);
  });

  test('1 term of 1 result with multibyte', () => {
    const result = instance.search('草莓');

    expect(result).toStrictEqual(['红']);
  });

});

