class WordSearch {
  constructor(words) {
    this.words = words;
  }

  search(text) {
    if (!text) {
      return [];
    }
    
    return this.getWords(text);
  }
  
  getWords(text) {
    let results = this.words
      .filter(word => text.length >= 2)
      .filter(word => word.startsWith(text));

    return results;
  }
}


module.exports = WordSearch;

