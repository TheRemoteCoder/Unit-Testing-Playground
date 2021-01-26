/**
 * 0. Definitions
 *
 * - Arrow : Constant symbol of 2 characters '->'
 * - Text  : User input, any string value, can be empty
 * - Token : Matched part(s) – Arrow or term
 * - Term  : String value, without token
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
 *   - Arrow symbol constant value = '->'
 * - Matching term can be followed by an arrow (but not preceeded)
 * - Minimum term length = least 1-3 letters to start searching (2 already used for arrow, min. +1 extra needed)
 *   - Covers cases: A, ->A, A->, A->B
 * - Feature 1
 *   - Return/Getter for various features
 *     - Token : if any; left/right position
 *     - Term  : Without token
 * - Feature 2 (Single token)
 *   - Return single value WITH token (if none exists before)
 *   - Return single value WITHOUT token (if one exists before as last part of word / word end)
 *   - Boundary by whitespace before and/or after
 *   - No whitespace boundary if first + only part in full text
 *
 * ###
 *
 * 2. Define input/output of aspects (data types, structures, results)
 * 3. Define function signatures (parameters, variants)
 *
 * Pseudo-type annotations similar to TypeScript/Flow:
 * - hasArrow(string text): bool
 * - startsWithArrow(string text): bool
 * - endsWithArrow(string text): bool
 *
 * ###
 *
 * 4. Define edge test cases for tiny aspects (including misuse and expected fails).
 * For sake of simplicity, no other data types have been considered here.
 *
 * - ---------- : ----- : --------------
 * - Expect     : Value : Reason
 * - ---------- : ----- : --------------
 * - No results : ''    : Empty
 * - No results : 'AA'  : Too short
 * - No results : 'AAA' : Word not found
 * - ---------- : ----- : --------------
 */
const TokenMatch = require('./token-match');

// - Word followed by Arrow and another Word
// - Arrow = '->' (2 chars) -> Beware potential escaping issues!
// - Word  = Alphabetical chars, Roman basic (ASCII)
// - Word != Non-alphabetical chars or other alphabets
// - Word  = All have equal length (2 chars)
const wordLists = {
  A: ['AA+BB', 'Ä+B'],
  B: ['BB+AA', 'B+Ä'],
};

const instance = new TokenMatch();

describe('xxx', () => {
  test('', () => {
    //const result = instance.search('');
    //expect(result).toStrictEqual([]);
  });
});
