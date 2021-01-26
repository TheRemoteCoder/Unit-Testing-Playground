class ArrowTokenMatch {
  constructor() {
    this.arrowToken = '->';

    this.positionIdentifier = {
      start: 'start',
      end: 'end',
    };

    this.arrowData = {
      hasArrow: false,
      position: '',
      term: '',
    };
  }

  getDetails(text) {
    if (this.isEmpty(text)) {
      return this.arrowData;
    }

    return {
      hasArrow: this.hasArrow(text),
      position: this.getArrowPosition(text),
      term: this.getTerm(text),
    };
  }

  getTerm(text) {
    return text.replace(this.arrowToken, '');
  }

  hasArrow(text) {
    if (this.isEmpty(text)) {
      return false;
    }

    return this.hasStartArrow(text) || this.hasEndArrow(text);
  }

  getArrowPosition(text) {
    let position = '';

    if (this.hasStartArrow(text)) {
      position = this.positionIdentifier.start;
    } else if (this.hasEndArrow(text)) {
      position = this.positionIdentifier.end;
    }

    return position;
  }

  hasStartArrow(text) {
    return text.startsWith(this.arrowToken);
  }

  hasEndArrow(text) {
    return text.endsWith(this.arrowToken);
  }

  isEmpty(input) {
    return !input.trim();
  }
}

module.exports = ArrowTokenMatch;
