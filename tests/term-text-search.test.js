/**
 * 0. Definitions
 *
 * - Caret : Cursor position in text (numeric)
 * - Term  : User input, any string value, can be empty
 * - Token : Matched part of term (part left, part right)
 * - Text  : Result (combined tokens, if any)
 *
 * ###
 *
 * 1. Decide tiny aspects and limitations: Business and data requirements,
 * responsibilities and scope, domain specific feature needs.
 *
 * Required
 * - Input data expectations + assumptions:
 *   - Text can be anything (including special characters, numbers, ...)
 *   - All values are strings
 *   - Term can be empty
 *   - Multi-byte support (= No RegEx for a-z possible)
 *   - Arrow symbol constant value = '->'
 *   - Caret position must be numeric (0-N)
 * - Term = Standalone part of full text
 *   - Boundary by whitespace before and/or after
 *   - No whitespace boundary if first + only part in full text
 * - Minimum term length to find = 1
 * - Get term if caret is ...
 *   - In the middle of a term (any position within)
 *   - At the end / after a term (last character)
 *
 * Optional
 * - Get term if caret is at term start / before term
 *
 * Excluded / Boundaries
 * - No other data types except strings supported
 * - Case does not matter (no need to check here)
 *
 * ###
 *
 * 2. Define input/output of aspects (data types, structures, results)
 * 3. Define function signatures (parameters, variants)
 *
 * Pseudo-type annotations similar to TypeScript/Flow:
 * - constructor()
 * - getTextAtCaretPosition(string text, uint caretPosition): string
 *
 * ###
 *
 * 4. Define edge test cases for tiny aspects (including misuse and expected fails).
 * For sake of simplicity, no other data types have been considered here.
 *
 * - --------- : ----- : ------------------------------------
 * - Expect    : Text  : Caret position | Reason
 * - --------- : ----- : ------------------------------------
 * - No result : ''    : ?              | Empty
 * - No result : ' '   : *              | Whitespace
 * - No result : ' A ' : Before         | Whitespace
 * - Result    : '👍'   : Before         | Match (right)
 * - Result    : 'A1'  : Inner          | Match (left + right)
 * - ---------- : ---- : --------------------------------------
 */
const TermTextSearch = require('./term-text-search');

const instance = new TermTextSearch();

describe('Term text search – Expect results', () => {
  test('for single letter text (from right)', () => {
    const result = instance.getTextAtCaretPosition('#', 1);
    expect(result).toStrictEqual('#');
  });

  test('for within text', () => {
    const result = instance.getTextAtCaretPosition('A1', 1);
    expect(result).toStrictEqual('A1');
  });

  test('for multi-byte text (from left)', () => {
    const result = instance.getTextAtCaretPosition('👍', 0);
    expect(result).toStrictEqual('👍');
  });
});

describe('Term text search – Expect no results', () => {
  test('for empty text', () => {
    const result = instance.getTextAtCaretPosition('', 0);
    expect(result).toStrictEqual('');
  });

  test('for whitespace text', () => {
    const result = instance.getTextAtCaretPosition(' ', 1);
    expect(result).toStrictEqual('');
  });

  test('for word surrounded by whitespaces', () => {
    const result = instance.getTextAtCaretPosition(' A ', 3);
    expect(result).toStrictEqual('');
  });

  test('for word surrounded by whitespaces', () => {
    const result = instance.getTextAtCaretPosition(' A ', 3);
    expect(result).toStrictEqual('');
  });
});
