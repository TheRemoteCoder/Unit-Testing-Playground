class ListCounterpartFinder {
  /**
   * @param {Object} wordLists [[string], [string]]
   */
  constructor(wordLists) {
    this.wordLists = wordLists;

    this.validateWordLists();
  }

  getCounterpartWords(text) {
    if (this.isEmpty(text)) {
      return [];
    }

    return this.getWordsFromCounterpartList(this.normalize(text));
  }

  /**
   * Match text with both word lists.
   * If a match is found, return words of opposite list.
   */
  getWordsFromCounterpartList(text) {
    let result = [];

    this.wordLists.forEach((words, index, all) => {
      const isMatch = words.some((word) => word === text);

      if (isMatch) {
        result = all[index ? 0 : 1];
      }
    });

    return result;
  }

  normalize(input) {
    return input.toLowerCase().trim();
  }

  isEmpty(input) {
    const text = this.normalize(input);

    return !text;
  }

  validateWordLists() {
    if (this.wordLists.length !== 2) {
      throw Error('Word list requires exact two indexes');
    }
  }
}

module.exports = ListCounterpartFinder;
