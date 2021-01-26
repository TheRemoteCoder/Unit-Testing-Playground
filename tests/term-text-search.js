class TermTextSearch {
  constructor() {}

  getTextAtCaretPosition(text, caretPosition) {
    if (this.isEmpty(text)) {
      return '';
    }
  }

  normalize(input) {
    return input.toLowerCase().trim();
  }

  isEmpty(input) {
    const text = this.normalize(input);

    return !text || text.length < this.minLength;
  }
}

module.exports = TermTextSearch;
