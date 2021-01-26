class ListCounterpartFinder {
  /**
   * @param {Object} wordLists {a:[string], b:[string]}
   */
  constructor(wordLists) {
    this.wordLists = wordLists;
  }

  XXXsearch(text) {
    if (this.isEmpty(text)) {
      return [];
    }

    return this.getTerms(this.normalize(text));
  }

  XXXgetTerms(text) {
    const wordsTerms = Object.entries(this.wordsTerms);
    let result = [];

    for (const [key, val] of wordsTerms) {
      if (key.toLowerCase().startsWith(text)) {
        result.push(...val);
      }
    }

    return [...new Set(result)].sort();
  }

  normalize(input) {
    return input.toLowerCase().trim();
  }

  isEmpty(input) {
    const text = this.normalize(input);

    return !text;
  }
}

module.exports = ListCounterpartFinder;
