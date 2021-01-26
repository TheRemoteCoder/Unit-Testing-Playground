class TermTextSearch {
  constructor() {}

  getTermAtCaretPosition(text, caretPosition) {
    if (this.isEmpty(text) || !this.isValidCaretPosition(caretPosition)) {
      return '';
    }

    return this.getTerm(text, caretPosition);
  }

  getTerm(text, caretPosition) {
    const textBefore = text.slice(0, caretPosition);
    const textAfter = text.slice(caretPosition, text.length);
    const textPartsBefore = textBefore.split(' ');
    const textPartsAfter = textAfter.split(' ');

    const termPartBefore = textPartsBefore[textPartsBefore.length - 1];
    const termPartAfter = textPartsAfter[0];

    return termPartBefore.concat(termPartAfter);
  }

  isValidCaretPosition(caretPosition) {
    return caretPosition >= 0;
  }

  isEmpty(input) {
    const text = input.trim();

    return !text || text.length < this.minLength;
  }
}

module.exports = TermTextSearch;
