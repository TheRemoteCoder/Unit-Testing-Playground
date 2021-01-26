/**
 * 0. Definitions
 *
 * - Text : User input, any string value, can be empty
 * - List : List of strings (any values) – There are exact two as counterparts (A|B)
 *
 * ###
 *
 * 1. Decide tiny aspects and limitations: Business and data requirements,
 * responsibilities and scope, domain specific feature needs.
 *
 * Required
 * - Input data expectations/Assumptions:
 *   - Text can be anything (including special characters, numbers, ...)
 *   - Upper/Lowercase can be mixed
 *   - Multi-byte support (= No RegEx for a-z possible)
 * - Matching terms = Word from any list A/B
 * - Minimum text length = At least 1 letters to start searching
 * - On match (list A) get all terms of opposite list (list B), and vice versa
 * - Return empty list for no results []
 *
 * Optional
 * - Remove potential duplicates
 * - Order result A-Z
 * - Term must contain '+' or '-' to be part of any list
 *   - Not required for testing (results will just be empty)
 *
 * Excluded / Boundaries
 * - No other data types except strings supported
 * - Word lists must be unique (no overlapping/duplicates)
 *
 * ###
 *
 * 2. Define input/output of aspects (data types, structures, results)
 * 3. Define function signatures (parameters, variants)
 *
 * Pseudo-type annotations similar to TypeScript/Flow:
 * - constructor(object wordLists)
 * - getCounterpartWords(string text): array
 *
 * ###
 *
 * 4. Define edge test cases for tiny aspects (including misuse and expected fails).
 * For sake of simplicity, no other data types have been considered here.
 *
 * - ---------- : ----- : -------------------------------------------------
 * - Expect     : Value : Reason
 * - ---------- : ----- : -------------------------------------------------
 * - No results : ''    : Empty
 * - No results : ' '   : Whitespace only
 * - No results : 'X'   : Word not found
 * - No results : 'A'   : Word found (list A), Expect suggestions of list B
 * - No results : 'B'   : Word found (list B), Expect suggestions of list A
 * - ---------- : ----- : -------------------------------------------------
 */
const ListCounterpartFinder = require('./list-counterpart-finder');

const wordLists = [
  ['A', 'aa', 'A1'],
  ['b', 'BB', ''],
];

const instance = new ListCounterpartFinder(wordLists);

describe('List Counterpart Finder – Expect results', () => {
  test('word from list A for word of list B', () => {
    const result = instance.getCounterpartWords('aa');

    expect(result).toStrictEqual(['b', 'BB']);
  });

  test('word from list B for word of list A', () => {
    const result = instance.getCounterpartWords('b');

    expect(result).toStrictEqual(['A', 'aa', 'A1']);
  });
});

describe('List Counterpart Finder – Expect no results', () => {
  test('for empty value', () => {
    const result = instance.getCounterpartWords('');

    expect(result).toStrictEqual([]);
  });

  test('for whitespace only', () => {
    const result = instance.getCounterpartWords(' ');

    expect(result).toStrictEqual([]);
  });

  test('for word not in any list', () => {
    const result = instance.getCounterpartWords('X');

    expect(result).toStrictEqual([]);
  });
});
