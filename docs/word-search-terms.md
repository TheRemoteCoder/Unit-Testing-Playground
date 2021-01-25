# Unit Testing - Intro

TDD-focused mini tutorial for an imaginary, minimal feature described below.
Based on the '5 Step Method' described on [CodeUtopia](https://codeutopia.net/blog/2016/10/10/5-step-method-to-make-test-driven-development-and-unit-testing-easy).

**Scope**

Deeply think about features, expectations and limitations first. Code last.

## Example

Imaginary feature:

Create a search engine, that returns a set of keywords for matching words. Multiple words can match and sets of keywords might be returned. Consider some 'oddities' in the data (e.g. unexpected whitespace, case mismatch).

<br>

---

<br>

## 5 Step Method

### Step 1

Decide tiny aspects and limitations: Business and data requirements, 
responsibilities and scope, domain specific feature needs.

- Input data: Word list with terms
  - Data expectations/assumptions:
    - All values are strings *(no other data types)*
    - List can have empty values
    - List and terms can be unsorted
    - Upper/Lowercase can be mixed
    - Can be multi-byte *(just to consider it, not really thought of here)*
- Need at least 2 letters to start searching
- Get 1-N word(s) that start with letters
- Return empty list for no results `[]`
- Remove potential duplicates
- Order result A-Z

### Steps 2 + 3

- Define input/output of aspects (data types, structures, results)
- Define function signatures (parameters, variants)

Pseudo-type annotations similar to TypeScript/Flow:

- `constructor(array[[string] => string] wordsTerms)`
- `search(string text): array[string]`
  - `getTerms(string text): array[string]`

### Step 4

Define test cases for tiny aspects (including edge cases, expectable fails, potential misuse).
*For sake of simplicity, no other data types have been considered here.*

Expect     | Value | Reason
---------- | ----- | ---------
No results | ''    | Empty
No results | 'A'   | Too short
2 results  | 'Ap'  | N matches
1 result   | 'App' | 1 match

### Step 5

Code – See below and attached source files.

<br>

---

<br>

## Personal take

### My approach

1. Follow the 5-Step method (up to step 4 for now)
   - Use above texts as guidelines to deepen feature thoughts
2. Write all test cases first
   - Create mockup data structures as needed
     *(Hardcoding data here can be a good thing, as these won't unexpectedly mutate over time or across environments)*
   - Start with just the text (expectations)
3. Fill in pseudo-code (yet) in test cases (steps 2+3)
4. Start the CLI and instruct it to watch the tests 
   - Not needed, but somehow rewarding to see things turning green over time :)
5. Start implementing the real code (step 5)
   - Start with the simplest features
     - Try to get intentionally broken tests out of the way first
       (e.g. quit early if inputs are invalid or empty, don't pass on raw data)
   - Add 'ornamental code' last (e.g. anything that improves the code, 
     without potentially changing the test results – like refactoring optimizations)
     - Relates to: 'Red, Green, Refactor' cycle
   - Check in with the CLI regularly
6. Once finished, do any other optimizations (e.g. run code analysis tools)
   - Run a final test

### Side notes

You might want to combine this with BDD concepts (use cases and stories, acceptance criteria, ...) or 'API first' approaches. These are not covered here, but can be helpful before even starting with TDD, when still deciding *what* to do or why (BDD) and how to do it, sustainably (API first).
Besides that, there are some alternative opinions on favouring advanced Static Code Analysis over manual testing labour. I think, all of them are worth a try and especially in combination. TDD/BDD is also a way of thinking that can very much influence how products are even created, not just realized.

<br>

---

<br>

## Sources

### Articles

Some conceptionally focused articles about the mentioned topics:

#### API first

- [Development approach](https://hackernoon.com/is-api-first-development-approach-right-for-your-business-0lr2b58) – hackernoon

#### BDD

- [Process](https://johnfergusonsmart.com/329-2) – John Ferguson Smart
- [Feature Mapping](https://johnfergusonsmart.com/feature-mapping-a-simpler-path-from-stories-to-executable-acceptance-criteria) – John Ferguson Smart

#### Static Code Analysis

- [JavaScript](https://medium.com/codecademy-engineering/static-analysis-in-javascript-a-technical-introduction-859de5d444a6) – Josh Goldberg


#### TDD

- [5 Step Method](https://codeutopia.net/blog/2016/10/10/5-step-method-to-make-test-driven-development-and-unit-testing-easy) – CodeUtopia


### Tools

There are tons of tools and services out there. Named are just a few to show what is available (focusing on JS + PHP).

#### API first

- [Postman](https://www.getpostman.com)
- [Swagger](https://swagger.io)

#### BDD

- [Behat](https://docs.behat.org)
- [Cucumber](https://cucumber.io)

#### Static Code Analysis

- [GitHub – Marketplace](https://github.com/marketplace/category/code-quality)

#### TDD

- [Jest](https://jestjs.io)
- [PhpUnit](https://phpunit.de)

