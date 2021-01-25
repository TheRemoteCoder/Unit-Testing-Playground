class WordSearchTerms {
  constructor(wordsTerms) {
    this.wordsTerms = wordsTerms;
    this.minLength  = 2;
  }

  search(text) {
    if (this.isEmpty(text)) {
      return [];
    }

    return this.getTerms(this.getSanitized(text));
  }
  
  /**
   * Find all terms for matching text parts.
   * - Compare lowercase to ignore typos
   * - Only return unique values
   * - Sort return A-Z
   */
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
  
  getSanitized(text) {
    return text.toLowerCase().trim();
  }
  
  isEmpty(text) {
    return !text || text.length < this.minLength;
  }
}


module.exports = WordSearchTerms;

