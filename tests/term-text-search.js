class TermTextSearch {
  constructor() {}

  getTextAtCaretPosition(text, caretPosition) {
    if (this.isEmpty(text) || !this.isValidCaretPosition(caretPosition)) {
      return '';
    }

    this.getText(this.normalize(text), caretPosition);
  }

  getText(text, caretPosition) {
    return '';
  }

  normalize(input) {
    return input.toLowerCase().trim();
  }

  isValidCaretPosition(caretPosition) {
    return caretPosition >= 0;
  }

  isEmpty(input) {
    const text = this.normalize(input);

    return !text || text.length < this.minLength;
  }
}

module.exports = TermTextSearch;
