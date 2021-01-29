class TermTextReplace {
  constructor() {}

  getReplacedText(text, newText, caretPosition) {
    if (this.isEmpty(text) || !this.isValidCaretPosition(caretPosition)) {
      return '';
    }

    return this.getText(text, newText, caretPosition);
  }

  getText(text, newText, caretPosition) {
    const allBefore = this.getTermsFromTextBefore(text, caretPosition);
    const allAfter = this.getTermsFromTextAfter(text, caretPosition);
    const restBefore = this.getTermsExceptFirst(allBefore);
    const restAfter = this.getTermsExceptLast(allAfter);
    const result = restBefore.join(' ') + ` ${newText} ` + restAfter.join(' ');

    return result.trim();
  }

  getTermsFromTextBefore(text, caretPosition) {
    return text.slice(0, caretPosition).split(' ');
  }

  getTermsFromTextAfter(text, caretPosition) {
    return text.slice(caretPosition, text.length).split(' ');
  }

  getTermsExceptFirst(terms) {
    return terms.slice(1, terms.length);
  }

  getTermsExceptLast(terms) {
    return terms.slice(0, terms.length - 1);
  }

  isValidCaretPosition(caretPosition) {
    return caretPosition >= 0;
  }

  isEmpty(input) {
    return !input.trim();
  }
}

module.exports = TermTextReplace;
