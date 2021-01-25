class WordSearchTerms {
  constructor(wordsTerms) {
    this.wordsTerms = wordsTerms;
    this.minLength  = 2;
  }

  search(text) {
    if (this.isEmpty(text)) {
      return [];
    }

    return this.getTerms(this.normalize(text));
  }

  getTerms(text) {
    const wordsTerms = Object.entries(this.wordsTerms);
    let result       = [];

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

    return !text || text.length < this.minLength;
  }
}


module.exports = WordSearchTerms;
