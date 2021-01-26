/**
 * 0. Definitions
 *
 * - Arrow : Constant symbol to enter '->'
 * - Term  : User input, any string value, can be empty
 * - Token : Matched part of term (part left, part right, arrow?)
 * - Word  : String value, immutable, given from list (read + match only)
 *
 * ###
 *
 * 1. Decide tiny aspects and limitations: Business and data requirements,
 * responsibilities and scope, domain specific feature needs.
 *
 * Required
 * - Input data expectations/Assumptions:
 *   - All values are strings
 *   - List can have empty values
 *   - List and terms can be unsorted
 *   - Upper/Lowercase can be mixed
 *   - Multi-byte support (umlauts)
 *   - Arrow symbol constant value = '->'
 * - Matching terms = Word from any list A/B
 * - Term = Standalone part of full text (boundary by whitespace or none, if first text in field)
 * - Matching term can be followed by an arrow (but not preceeded)
 * - Ignore search for terms that have an arrow symbol
 * - Minimum term length = least 3 letters to start searching
 *   - Covers case: A+B, should be usually: AA+BB
 * - On match (list A) get all terms of opposite list (list B), and vice versa
 * - Return empty list for no results []
 * - Feature 2 (Single token)
 *   - Return single value WITH token (if none exists before)
 *   - Return single value WITHOUT token (if one exists before as last part of word / word end)
 *
 * Optional
 * - Assume (real scenarion) all tokens have same length
 * - Remove potential duplicates
 * - Order result A-Z
 * - Term must contain '+' or '-' to be part of any list
 *   - Not required for testing (results will just be empty)
 *
 * Excluded / Boundaries
 * - No other data types except strings supported
 * - Word lists must be unique (no overlapping/duplicates)
 * - No whitespace must exist within word (else, it is considered as multiple tokens and does not make sense)
 *
 * ###
 *
 * 2. Define input/output of aspects (data types, structures, results)
 * 3. Define function signatures (parameters, variants)
 *
 * Pseudo-type annotations similar to TypeScript/Flow:
 * -
 * -
 *
 * ###
 *
 * 4. Define edge test cases for tiny aspects (including misuse and expected fails).
 * For sake of simplicity, no other data types have been considered here.
 *
 * - ---------- : ----- : ------------------
 * - Expect     : Value : Reason
 * - ---------- : ----- : ------------------
 * - No results : ''    : Empty
 * - No results : 'AA'  : Too short
 * - No results : 'AAA' : Word not found
 * - ---------- : ----- : ------------------
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

