/**
 *1. Decide tiny aspects and limitations: Business and data requirements,
 * responsibilities and scope, domain specific feature needs.
 *
 * - Input data expectations/Assumptions:
 *   - All values are strings (no other data types)
 *   - List can have empty values
 *   - List and terms can be unsorted
 *   - Upper/Lowercase mixed
 *   - Can be multi-byte (just to consider it, not really thought of here)
 * - Need at least 2 letters to start searching
 * - Get 1-N word(s) that start with letters
 * - Return empty list for no results []
 * - Remove potential duplicates
 * - Order result A-Z
 *
 * 2. Define input/output of aspects (data types, structures, results)
 * 3. Define function signatures (parameters, variants)
 *
 * Pseudo-type annotations similar to TypeScript/Flow:
 * - constructor(array[[string] => string] wordsTerms)
 * - search(string text): array[string]
 *   - getTerms(string text): array[string]
 *
 * 4. Define edge test cases for tiny aspects (including misuse and expected fails).
 * For sake of simplicity, no other data types have been considered here.
 *
 * - ---------- : ----- : ---------
 * - Expect     : Value : Reason
 * - ---------- : ----- : ---------
 * - No results : ''    : Empty
 * - No results : 'A'   : Too short
 * - 2 results  : 'Ap'  : N matches
 * - 1 result   : 'App' : 1 match
 * - ---------- : ----- : ---------
 */
const WordSearchTerms = require('./word-search-terms');

const wordsTerms = {
  Avocado: ['Brown', 'Lime', 'Green'],
  apple: ['Red', 'Yellow'],
  Apricot: ['Orange', 'Pink', 'Red'],
  草莓: ['红', '👌'],
  '': [''],
};

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

  test('4 terms of 2 results with combined terms, lowercase', () => {
    const result = instance.search('ap');

    expect(result).toStrictEqual(['Orange', 'Pink', 'Red', 'Yellow']);
  });

  test('3 terms of 1 result with sanitized input', () => {
    const result = instance.search(' Av ');

    expect(result).toStrictEqual(['Brown', 'Green', 'Lime']);
  });

  test('1 term of 1 result with multibyte', () => {
    const result = instance.search('草莓');

    expect(result).toStrictEqual(['红']);
  });
});
