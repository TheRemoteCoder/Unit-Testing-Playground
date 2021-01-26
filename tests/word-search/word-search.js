class WordSearch {
  constructor(words) {
    this.words = words;
    this.minLength = 2;
  }

  search(text) {
    if (!text) {
      return [];
    }

    return this.getWords(text);
  }

  getWords(text) {
    let results = this.words
      .filter((word) => text.length >= this.minLength)
      .filter((word) => word.toLowerCase().startsWith(text.toLowerCase()));

    return results;
  }
}

module.exports = WordSearch;
