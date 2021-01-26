/**
 * 0. Definitions
 *
 * - Arrow : Constant symbol of 2 characters '->'
 * - Text  : User input, any string value, can be empty
 * - Token : Matched part(s) – Arrow or term
 * - Term  : String value, without token
 *
 * 1. Use case / Scenario
 * - Given a text, test if it has an arrow character at any position
 *
 * 2. Requirements
 *
 * ###
 *
 * 3. Decide tiny aspects and limitations: Business and data requirements,
 * responsibilities and scope, domain specific feature needs.
 *
 * Required
 * - Input data expectations/Assumptions:
 *   - Text can be anything (including special characters, numbers, ...)
 *   - Upper/Lowercase can be mixed
 *   - Multi-byte support (= No RegEx for a-z possible)
 *   - Arrow symbol constant value = '->'
 * - Matching term can be followed by an arrow (but not preceeded)
 * - Minimum term length = At least 1 letters to start searching (2 already used for arrow, min. +1 extra needed)
 *   - Covers cases: A, ->A, A->, A->B
 * - Feature 1 (Data)
 *   - Return/Getter for various features
 *     - Token : if any; left/right position
 *     - Term  : Text without token
 * - Feature 2 (Single token)
 *   - Return single value WITH token (if none exists before)
 *   - Return single value WITHOUT token (if one exists before as last part of word / word end)
 *   - Boundary by whitespace before and/or after
 *   - No whitespace boundary if first + only part in full text
 *
 * ###
 *
 * 4. Define input/output of aspects (data types, structures, results)
 * 5. Define function signatures (parameters, variants)
 *
 * Pseudo-type annotations similar to TypeScript/Flow:
 * - getArrow(string text): {hasArrow: boolean, position: 'start'|'end'}
 * - hasArrow(string text): boolean
 * - hasStartArrow(string text): boolean
 * - hasEndArrow(string text): boolean
 *
 * ###
 *
 * 6. Define edge test cases for tiny aspects (including misuse and expected fails).
 * For sake of simplicity, no other data types have been considered here.
 *
 * - ---------- : ----- : --------------
 * - Expect     : Value : Reason
 * - ---------- : ----- : --------------
 * - No results : ''    : Empty
 * - No results : ' '   : No token
 * - No results : 'A'   : No token
 * - No results : '->'  : Token (only)   : 1) Special case - Could be ignored, e.g. require min. length 3
 * - Results    : '->A' : Token at start
 * - Results    : 'A->' : Token at end
 * - ---------- : ----- : --------------
 */
const ArrowTokenMatch = require('./arrow-token-match');

const instance = new ArrowTokenMatch();

describe('Arrow token match – Expect data', () => {
  test('for token at start', () => {
    const result = instance.getDetails('->A');

    expect(result).toStrictEqual({
      hasArrow: true,
      position: 'start',
      term: 'A',
    });
  });

  test('for token at end', () => {
    const result = instance.getDetails('a->');

    expect(result).toStrictEqual({
      hasArrow: true,
      position: 'end',
      term: 'a',
    });
  });

  test('for empty text', () => {
    const result = instance.getDetails('');

    expect(result).toStrictEqual({
      hasArrow: false,
      position: '',
      term: '',
    });
  });
});

describe('Arrow token match – Expect true', () => {
  test('for token at start', () => {
    const result = instance.hasArrow('->A');
    expect(result).toStrictEqual(true);
  });

  test('for token at end', () => {
    const result = instance.hasArrow('A->');
    expect(result).toStrictEqual(true);
  });

  test('for token without text', () => {
    const result = instance.hasArrow('->');
    expect(result).toStrictEqual(true);
  });
});

describe('Arrow token match – Expect false', () => {
  test('for empty text', () => {
    const result = instance.hasArrow('');
    expect(result).toStrictEqual(false);
  });

  test('for whitespace-only text', () => {
    const result = instance.hasArrow(' ');
    expect(result).toStrictEqual(false);
  });

  test('for text without token', () => {
    const result = instance.hasArrow('A');
    expect(result).toStrictEqual(false);
  });
});
