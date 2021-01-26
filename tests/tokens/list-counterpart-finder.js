class ListCounterpartFinder {
  /**
   * @param {Object} wordLists [[string]]
   */
  constructor(wordLists) {
    this.wordLists = wordLists;
  }

  getCounterpartWords(text) {
    if (this.isEmpty(text)) {
      return [];
    }

    return this.getWordsFromCounterpartList(this.normalize(text));
  }

  getWordsFromCounterpartList(text) {
    result = [];

    this.wordLists.forEach((words, index, all) => {
      const isMatch = words.some((word) => word === text);

      if (isMatch) {
        result = all;
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
}

module.exports = ListCounterpartFinder;
