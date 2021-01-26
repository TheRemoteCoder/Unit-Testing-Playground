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
 * - No result : ''    : *              | Empty
 * - No result : ' '   : *              | Whitespace
 * - No result : ' A ' : Before         | Whitespace
 * - No result : ' 1 ' : After          | Whitespace – Numeric
 * - Result    : 'A'   : Before         | Match (right)
 * - Result    : '1'   : After          | Match (left) – Numeric
 * - Result    : 'AA'  : Inner          | Match (left + right)
 * - Result    : '#'   : Before         | Match (right) – Special character
 * - ---------- : ---- : --------------------------------------
 */
const TermTextSearch = require('./term-text-search');

const instance = new TermTextSearch();

describe('Term text search', () => {

  test('no result for empty text', () => {
    //const result = instance.getTextAtCaretPosition('');
    //expect(result).toStrictEqual([]);
  });

});

